import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Sidene bygges hver for seg, så stilene ikke blandes:
    // den delte forsiden og den seriøse porteføljen.
    rollupOptions: {
      input: {
        forside: 'index.html',
        portefolje: 'portefolje/index.html',
      },
    },
  },
})
