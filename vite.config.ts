import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vite.dev/config/
export default defineConfig({
  define: {
    'process.env.IMAGE_PATH': JSON.stringify('/assets/'),
  },
  plugins: [react(),],
  base: '/job-cases/',
})

