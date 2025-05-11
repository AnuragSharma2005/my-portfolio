import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/my-portfolio/', // Make sure this matches the name of your GitHub repository
  plugins: [react()],
  optimizeDeps: {
    include: ['react-slick', 'lucide-react']
  }
})
