import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base:'/wyola',
  plugins: [react()],
  server:{
    proxy:{
      '/chatgpt':{
        target: 'http://localhost:3001',
        changeOrigin:true,
      }
    }
  }
})
