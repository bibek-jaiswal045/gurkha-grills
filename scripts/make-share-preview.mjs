// Turns the single-file share build (share-preview/index.html, everything inlined)
// into a page body for the private claude.ai client-review link.
//   npm run build:share
import { readFileSync, writeFileSync } from "node:fs";

const file = "share-preview/index.html";
let html = readFileSync(file, "utf8");

html = html
  .replace(/<!doctype html>/i, "")
  .replace(/<html[^>]*>|<\/html>|<head>|<\/head>|<body[^>]*>|<\/body>/gi, "")
  .replace(/<meta charset="UTF-8"\s*\/?>/i, "")
  .replace(/<meta name="viewport"[^>]*>/i, "")
  .replace(/<link rel="icon"[^>]*>/i, "")
  .replace(/<title>[^<]*<\/title>/, "<title>The Gurkha Grills</title>");

// Keep <title> within the first bytes of the file, ahead of the inlined bundle.
const title = html.match(/<title>[^<]*<\/title>/)[0];
html = title + "\n" + html.replace(title, "");

writeFileSync(file, html.trim() + "\n");
console.log(`share-preview/index.html ready (${(html.length / 1024).toFixed(0)} KB, single file)`);
