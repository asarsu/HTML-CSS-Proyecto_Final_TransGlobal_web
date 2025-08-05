import { defineConfig } from 'vite'
import { resolve } from 'path'

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
  },

  base: '/HTML-CSS-Proyecto_Final_TransGlobal_web/',

  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        nosotros: resolve(__dirname, 'nosotros.html'),
        servicios: resolve(__dirname, 'servicios.html'),
        contacto: resolve(__dirname, 'contacto.html'),
        home: resolve(__dirname, 'home.html'),
        about: resolve(__dirname, 'about.html'),
        services: resolve(__dirname, 'services.html'),
        contact: resolve(__dirname, 'contact.html'),
      },
    }
  
  }
})
