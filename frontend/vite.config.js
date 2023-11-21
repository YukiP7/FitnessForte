import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/programs': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      },
      '/workouts': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      },
    }
  } ,
  plugins: [react()],
})
