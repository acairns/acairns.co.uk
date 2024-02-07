import mdx from "@mdx-js/rollup";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import {
  unstable_vitePlugin as remix,
  unstable_cloudflarePreset as cloudflare,
} from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import {h} from 'hastscript'

// https://remix.run/docs/en/main/future/vite#configuration

export default defineConfig({
  plugins: [
    mdx({
      remarkPlugins: [
        remarkFrontmatter,
        remarkMdxFrontmatter,
      ],
      rehypePlugins: [
        rehypeSlug,
        [
            rehypeAutolinkHeadings,
          {
            behavior: 'prepend',
            properties: {
              class: 'md:-ml-11 md:mr-4 mr-2 text-orange-500 no-underline'
            },
            content: () => {
              return [
                  h(null, '#'),
              ]
            }
          }
        ],
      ]
    }),
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
