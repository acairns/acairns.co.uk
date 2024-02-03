import {defineConfig} from 'vite';
import motionCanvas from '@motion-canvas/vite-plugin';
import ffmpeg from '@motion-canvas/ffmpeg';

export default defineConfig({
  plugins: [
    motionCanvas({
      project: [
          "./src/project.ts"
      ]
    }),
    ffmpeg(),
  ],
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
      },
      output: {
        dir: "../web/public/animations",
        entryFileNames: "[name].js",
      },
    },
  },
});
