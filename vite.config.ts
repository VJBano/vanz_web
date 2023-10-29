import { defineConfig } from 'vite'
import { compression } from 'vite-plugin-compression2'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    compression({ algorithm: 'brotliCompress', exclude: [/\.(br)$/, /\.(gz)$/], deleteOriginalAssets: true }),
    compression({
      algorithm: 'gzip', exclude: [/\.(br)$ /, /\.(gz)$/]
    }),
  ],
  base:"/vanz_web/"
})
