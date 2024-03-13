import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
  server: {
    proxy: {
      "/api/": {
        target: "http://dev-oss.kxgcc.com:30872",
        changeOrigin: true,
      },
      "/public/": {
        target: "http://dev-oss.kxgcc.com:30872",
        changeOrigin: true,
      },
      "/cms-static/": {
        target: "http://dev-oss.kxgcc.com:30872",
        changeOrigin: true,
      },
    },
  },
  optimizeDeps: {
    include: ["lodash-es"],
  },
});
