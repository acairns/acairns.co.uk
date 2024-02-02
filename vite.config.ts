import {
  unstable_vitePlugin as remix,
  unstable_cloudflarePreset as cloudflare,
} from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

// https://remix.run/docs/en/main/future/vite#configuration

export default defineConfig({
  plugins: [
    remix({
      presets: [cloudflare()],
    }),
    tsconfigPaths(),
  ],
  ssr: {
    resolve: {
      externalConditions: ["workerd", "worker"],
    },
  },
});
