import { defineConfig } from 'vite'
import { resolve } from 'path'


export default defineConfig({
 
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
        gracias: resolve(__dirname, 'gracias.html'),
        thanks: resolve(__dirname, 'thanks.html'),
      },
    }
  
  }
})
