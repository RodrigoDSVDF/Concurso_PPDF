import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  // VVVV Mude esta linha DE VOLTA para './' VVVV
  base: './', 
  // ^^^^ Esta é a configuração mais robusta para GitHub Pages ^^^^
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
