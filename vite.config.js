import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Home-Haven/', // 👈 GitHub Pages repo name here
})