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
        target: "https://test-ymsl.kxgcc.com:30195",
        changeOrigin: true,
      },
      "/public/": {
        target: "https://test-ymsl.kxgcc.com:30195",
        changeOrigin: true,
      },
      "/cms-static/": {
        target: "https://test-ymsl.kxgcc.com:30195",
        changeOrigin: true,
      },
    },
  },
  optimizeDeps: {
    include: ["lodash-es"],
  },
});
