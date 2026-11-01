import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Tre sider som bygges hver for seg, så stilene ikke blandes:
    // den delte forsiden, den seriøse porteføljen og rommet.
    rollupOptions: {
      input: {
        forside: 'index.html',
        portefolje: 'portefolje/index.html',
        rommet: 'rommet/index.html',
      },
    },
  },
})
