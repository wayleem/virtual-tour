import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import postcss from './postcss.config.cjs';

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [react()],
  css: {
    postcss
  }
})
