import { defineConfig, splitVendorChunkPlugin } from "vite";
import { compression } from "vite-plugin-compression2";
import react from "@vitejs/plugin-react";
import {ViteImageOptimizer} from 'vite-plugin-image-optimizer'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), compression(), splitVendorChunkPlugin(), 
      ViteImageOptimizer({
        png: {
          quality:80
        },
        jpg:{
          quality:80
        },
        webp: {
          quality:80
        },
        jpeg: {
          quality:80
        }
      })
  ],
  optimizeDeps: {
    include: ["esm-dep > cjs-dep"],
  },
  server: {
    host: true,
  },
  base: "/",
  build: {
    chunkSizeWarningLimit: 1000, // Set the limit to 1000 kB
  },
});
