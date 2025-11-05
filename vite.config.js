import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  
  // VVVV AJUSTE PARA DOMÍNIO PERSONALIZADO VVVV
  // O site será servido a partir da raiz (ex: "www.meusite.com/")
  // e não de um subdiretório.
  base: '/', 
  // ^^^^ Esta é a mudança principal ^^^^
  
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
