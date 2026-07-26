import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  appType: "mpa",
  plugins: [dts()],
  build: {
    outDir: "./dist",
    copyPublicDir: false,
    rollupOptions: {
      external: ["vite", "happy-dom", "express", "node", /node:/],
    },
    lib: {
      entry: {
        index: "./index.ts",
      },
      formats: ["es", "cjs"],
    },
  },
});
