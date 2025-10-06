// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // IMPORTANT: Replace 'your-repo-name' with the name of your GitHub repository
  // For example, if your repo is "starlight-coming-soon", it should be '/starlight-coming-soon/'
  base: '/learnwithharsh/', 
})