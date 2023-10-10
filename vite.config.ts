import legacy from '@vitejs/plugin-legacy';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [
        react(),
        legacy({
            targets: ['defaults', 'not IE 11'], // Specify your target browsers for legacy builds
        }),
    ],
    build: {
        outDir: 'dist', // Specify the output directory
    },
});
