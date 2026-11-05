import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { viteSingleFile } from "vite-plugin-singlefile";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  // `npm run build:share` (mode "share") bundles everything into one HTML file for the client-review link.
  plugins: [react(), mode === "share" && viteSingleFile()].filter(Boolean),
  // "/" for a custom domain; the GitHub Pages workflow sets BASE_PATH=/<repo>/ when there is none.
  base: process.env.BASE_PATH ?? "/",
  build: mode === "share" ? { outDir: "share-preview", assetsInlineLimit: 100_000_000 } : undefined,
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
