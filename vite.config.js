import { defineConfig } from "vite"
export default defineConfig({
  plugins: [react()],

  base: "/dist/",
  
  server: {
    host: true,
    port: 3000,
  },

 build: {
    outDir: "dist",
    minify: true,
    rollupOptions: {
      input: "assets/js/script.js",
      output: {
        entryFileNames: "[name]-[hash].js",
        chunkFileNames: "[name]-[hash].js",
        assetFileNames: '[name]-[hash][extname]?v=[hash]',
      },
    },
  },
})
