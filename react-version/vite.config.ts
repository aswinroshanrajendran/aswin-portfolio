import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// GitHub Pages base path: '/' for a username.github.io user site,
// or '/repo-name/' for a project site — flip this once the repo exists.
const BASE_PATH = '/'

// https://vite.dev/config/
export default defineConfig({
  base: BASE_PATH,
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
