import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  // ============== OPTIMISATIONS DE BUILD ==============
  build: {
    target: 'es2015',
    minify: 'esbuild', // Utiliser esbuild (plus rapide et compatible)

    // Code splitting intelligent
    rollupOptions: {
      output: {
        manualChunks: {
          // Séparer les dépendances vendor
          'react-vendor': ['react', 'react-dom'],
          'lucide': ['lucide-react']
        },

        // Noms de fichiers avec hash pour cache-busting
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]'
      }
    },

    // Taille des chunks
    chunkSizeWarningLimit: 1000,

    // Compression et optimisation
    cssCodeSplit: true,
    sourcemap: false, // Désactiver sourcemaps en prod
    assetsInlineLimit: 4096 // Inline des assets < 4KB
  },

  // ============== OPTIMISATIONS DU SERVEUR DEV ==============
  server: {
    port: 3000,
    strictPort: false,
    open: true,
    cors: true,

    // Headers de sécurité et cache
    headers: {
      'X-Content-Type-Options': 'nosniff',
      'X-Frame-Options': 'DENY',
      'X-XSS-Protection': '1; mode=block'
    }
  },

  // ============== OPTIMISATIONS GÉNÉRALES ==============
  optimizeDeps: {
    include: ['react', 'react-dom', 'lucide-react'],
    exclude: []
  },

  // Préchargement des modules
  preview: {
    port: 4173,
    strictPort: false,
    open: true
  }
})

