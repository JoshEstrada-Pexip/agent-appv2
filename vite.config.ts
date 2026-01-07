import { defineConfig } from 'vite'
import basicSsl from '@vitejs/plugin-basic-ssl'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/telecom/agent-appv2/',
  plugins: [basicSsl(), react()],
  server: {
    port: 3000,
    open: true
  },
  build: {
    target: 'ES2022'
  }
})
