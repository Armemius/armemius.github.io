import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import UnoCSS from 'unocss/vite'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [svelte(), UnoCSS()],
  base: "/",
  resolve: {
    alias: {
      $lib: path.resolve('./src/lib'),
      $assets: path.resolve('./src/assets')
    },
  },
});
