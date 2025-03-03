import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),  // '@' points to the 'src' directory
    },
    extensions: ['.js', '.vue', '.json'],  // Automatically resolve these extensions
  },
  css: {
    preprocessorOptions: {
      css: {
        additionalData: `@import "@/styles/tailwind.css";`,  // Ensure Tailwind is included
      },
    },
  },
});
