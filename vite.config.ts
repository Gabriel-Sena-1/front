import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Importante! Permite acesso externo ao container
    port: 3000,
    watch: {
      usePolling: true,
    },
  },
})