import VitePluginMdDocs from "./src/index.js";
import Vue from "@vitejs/plugin-vue2";
import commonjs from "vite-plugin-commonjs";
import { resolve } from "path";
export default () => {
  return {
    base: "./",
    build: {
      outDir: "dist",
      rollupOptions: {
        input: resolve(__dirname, "index.html"),
      },
      target: "es2015",
    },
    plugins: [
      VitePluginMdDocs({ frame: "vue" }),
      Vue({ include: [/(\.vue)$/, /\.md$/] }),
      commonjs(),
    ],
    resolve: {
      alias: {
        "@src": resolve("./src"),
        "@examples": resolve("./examples"),
      },
    },
  };
};
