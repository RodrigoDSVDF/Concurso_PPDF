import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  // VVVV Mude esta linha VVVV
  base: '/Concurso_PPDF/', 
  // ^^^^ Esta é a correção ^^^^
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
