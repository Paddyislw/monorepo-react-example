import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  preview: {
    host: '0.0.0.0',
    allowedHosts: ['monorepo-react-example--main.autogen.nodeops.network', '.nodeops.network']
  },
  server: {
    host: '0.0.0.0',
    allowedHosts: ['monorepo-react-example--main.autogen.nodeops.network', '.nodeops.network']
  }
})
