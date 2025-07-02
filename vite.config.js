import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    host: true,
    port: 5173,
    allowedHosts: [
      'localhost',
      '127.0.0.1',
      '192.168.0.8',
      'cecf-189-28-67-179.ngrok-free.app',
      '54c8-189-28-67-179.ngrok-free.app',
    ]
  }
})
