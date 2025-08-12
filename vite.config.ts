import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vite configuration
export default defineConfig({
  plugins: [react()],
  base: process.env.GITHUB_PAGES ? '/biztopia/' : '/',
  build: {
    outDir: 'dist'
  }
})
