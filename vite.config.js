import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '', // GitHub Pages ke liye agar repo name alag ho toh yaha set karo
  plugins: [react()],
  optimizeDeps: {
    include: ['react-slick', 'lucide-react']
  },
  server: {
    host: '0.0.0.0', // Network pe expose karega
    port: 5173,      // Default Vite port (agar chaho toh change kar sakte ho)
  }
})
