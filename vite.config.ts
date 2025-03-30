import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
	build: {
    assetsInlineLimit: 0, // <- evita inline de archivos grandes, siempre los guarda separados
    chunkSizeWarningLimit: 3000, // aumenta límite para warnings de tamaño
  },
})
