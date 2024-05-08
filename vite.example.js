import VitePluginMdDocs from "./src/index.js";
import { resolve } from "path";
export default () => {
  return {
    base: './',
    build: {
      outDir: "dist",
      rollupOptions: {
        input: resolve(__dirname, 'index.html'),
      },
      target: "es2015",
    },
    plugins: [
      VitePluginMdDocs(),
    ],
    resolve: {
      alias: {
        "@src": resolve("./src"),
        "@examples": resolve("./examples"),
      },
    },
  };
};
