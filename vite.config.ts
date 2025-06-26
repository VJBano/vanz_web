import { defineConfig, splitVendorChunkPlugin } from "vite";
import { compression } from "vite-plugin-compression2";
import react from "@vitejs/plugin-react";
import {ViteImageOptimizer} from 'vite-plugin-image-optimizer'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    compression({
      algorithm: 'gzip',
      deleteOriginalAssets: false
    }), 
    splitVendorChunkPlugin(),
    ViteImageOptimizer({
      png: {
        quality: 60 // Reduced from 80 for faster loading
      },
      jpg: {
        quality: 60 // Reduced from 80 for faster loading
      },
      webp: {
        quality: 60 // Reduced from 80 for faster loading
      },
      jpeg: {
        quality: 60 // Reduced from 80 for faster loading
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
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          animations: ['framer-motion'],
          utils: ['@emailjs/browser']
        }
      }
    },
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.logs in production
        drop_debugger: true
      }
    }
  },
});
