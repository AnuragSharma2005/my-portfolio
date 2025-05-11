import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/my-portfolio/',
  plugins: [react()],
  optimizeDeps: {
    include: ['react-slick', 'lucide-react']
  }
})
