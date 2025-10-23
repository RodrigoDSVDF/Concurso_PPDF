import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  
  // VVVV ESTA LINHA É CRÍTICA VVVV
  // Deve ser o nome do seu repositório, com barras
  base: '/Concurso_PPDF/', 
  // ^^^^ GARANTA QUE ESTÁ ASSIM ^^^^
  
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
