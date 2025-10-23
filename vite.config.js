import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  // VVVV Mude para o caminho RELATIVO de subdiretório VVVV
  base: './', 
  // ^^^^ Mantenha essa mudança ^^^^
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
