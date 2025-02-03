import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    watch:{
      usePolling: true,
    },
    open:true,

  },
  base: "/promo-b-module-3-pair-5-grogu-game/"
})
