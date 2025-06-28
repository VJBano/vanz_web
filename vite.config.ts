import { defineConfig, splitVendorChunkPlugin } from "vite";
import { compression } from "vite-plugin-compression2";
import react from "@vitejs/plugin-react";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    compression({
      algorithm: "gzip",
      deleteOriginalAssets: false,
      threshold: 1024, // Only compress files larger than 1KB
    }),
    compression({
      algorithm: "brotliCompress",
      deleteOriginalAssets: false,
      threshold: 1024,
    }),
    splitVendorChunkPlugin(),
    ViteImageOptimizer({
      png: {
        quality: 60,
      },
      jpg: {
        quality: 60,
      },
      webp: {
        quality: 60,
      },
      jpeg: {
        quality: 60,
      },
    }),
  ],
  optimizeDeps: {
    include: ["esm-dep > cjs-dep", "react", "react-dom", "framer-motion"],
  },
  server: {
    host: true,
  },
  base: "/",
  build: {
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
          animations: [
            "framer-motion",
            "@react-three/fiber",
            "@react-three/drei",
          ],
          utils: ["@emailjs/browser", "react-router-dom"],
          components: [
            "react-vertical-timeline-component",
            "react-lazy-load-image-component",
          ],
        },
        // Optimize chunk loading
        chunkFileNames: "assets/[name]-[hash].js",
        entryFileNames: "assets/[name]-[hash].js",
        assetFileNames: "assets/[name]-[hash].[ext]",
      },
    },
    minify: "esbuild",
    target: "esnext",
    sourcemap: false, // Disable sourcemaps in production for smaller files
    cssCodeSplit: true, // Split CSS for better caching
    assetsInlineLimit: 4096, // Inline small assets
  },
});
