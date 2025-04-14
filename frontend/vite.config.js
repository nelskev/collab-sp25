import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/appointments': 'http://localhost:8000',
      '/contacts': 'http://localhost:8000'
    }
  }
})
