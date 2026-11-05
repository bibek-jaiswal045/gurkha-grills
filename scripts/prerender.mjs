import { createServer } from "node:http";
import { readFile, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { extname, join, normalize } from "node:path";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
import puppeteer from "puppeteer-core";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");
const distDir = join(root, "dist");
// Matches vite.config.ts: "/" for a custom domain, "/<repo>/" on a github.io project page.
const base = process.env.BASE_PATH || "/";

if (!existsSync(distDir)) {
  console.error("dist/ not found. Run `npm run build` first.");
  process.exit(1);
}

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".gif": "image/gif",
  ".ico": "image/x-icon",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".txt": "text/plain; charset=utf-8",
  ".xml": "application/xml; charset=utf-8",
};

function resolveChromePath() {
  if (process.env.CHROME_PATH && existsSync(process.env.CHROME_PATH)) {
    return process.env.CHROME_PATH;
  }
  const candidates = [
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    "/usr/bin/google-chrome",
    "/usr/bin/google-chrome-stable",
    "/snap/bin/google-chrome",
    "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
  ];
  return candidates.find((p) => existsSync(p)) || null;
}

const server = createServer(async (req, res) => {
  try {
    let urlPath = decodeURIComponent((req.url || "/").split("?")[0]);
    if (base !== "/" && urlPath.startsWith(base)) urlPath = "/" + urlPath.slice(base.length);
    let filePath = normalize(join(distDir, urlPath));
    if (!filePath.startsWith(distDir)) {
      res.writeHead(403).end("Forbidden");
      return;
    }
    if (urlPath === "/" || !existsSync(filePath)) {
      filePath = join(distDir, "index.html");
    }
    const data = await readFile(filePath);
    res.writeHead(200, { "Content-Type": MIME[extname(filePath)] || "application/octet-stream" });
    res.end(data);
  } catch (err) {
    res.writeHead(500).end(String(err));
  }
});

await new Promise((resolveServer) => server.listen(0, resolveServer));
const port = server.address().port;
const url = `http://localhost:${port}${base}`;

const chromePath = resolveChromePath();
if (!chromePath) {
  console.error(
    "Could not find Google Chrome. Set CHROME_PATH or install Chrome.\n" +
      "Prerender skipped — deploying the standard SPA shell."
  );
  server.close();
  process.exit(0);
}

const browser = await puppeteer.launch({
  executablePath: chromePath,
  headless: "new",
  args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-dev-shm-usage"],
});

try {
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 900 });
  await page.goto(url, { waitUntil: "networkidle2", timeout: 60000 });
  await page.waitForFunction(
    () => document.getElementById("root")?.children.length > 0,
    { timeout: 30000 }
  );
  await new Promise((r) => setTimeout(r, 1500));

  const html = await page.evaluate(() => document.documentElement.outerHTML);

  const h1Count = (html.match(/<h1[\s>]/gi) || []).length;
  const wordCount = (html
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .split(" ")
    .filter(Boolean).length);

  await writeFile(join(distDir, "index.html"), "<!doctype html>\n" + html, "utf-8");

  console.log(`Prerendered dist/index.html — H1 count: ${h1Count}, word count: ${wordCount}`);
} finally {
  await browser.close();
  server.close();
}
