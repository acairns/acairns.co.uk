import {defineConfig} from 'vite';
import motionCanvas from '@motion-canvas/vite-plugin';
import ffmpeg from '@motion-canvas/ffmpeg';

export default defineConfig({
  plugins: [
    motionCanvas({
      project: [
        "./src/003-composition-over-inheritance/003-split.ts",
        "./src/003-composition-over-inheritance/003-mario.ts",
        "./src/003-composition-over-inheritance/003-smashboy.ts",
        "./src/003-composition-over-inheritance/003-tetris.ts",
        "./src/me.ts",
        "./src/project.ts",
      ]
    }),
    ffmpeg(),
  ],
  base: '/animations/',
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
