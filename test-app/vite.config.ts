import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  preview: {
    host: '0.0.0.0',
    port: 4173,
    strictPort: false,
    allowedHosts: [
      'monorepo-react-example--main.autogen.nodeops.network',
      '.nodeops.network',
      '.autogen.nodeops.network'
    ]
  },
  server: {
    host: '0.0.0.0',
    port: 5173,
    strictPort: false,
    allowedHosts: [
      'monorepo-react-example--main.autogen.nodeops.network',
      '.nodeops.network',
      '.autogen.nodeops.network'
    ]
  }
})
