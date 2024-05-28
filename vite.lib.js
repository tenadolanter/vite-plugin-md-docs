import { resolve } from "path";
import commonjs from "vite-plugin-commonjs";
export default () => {
  return {
    build: {
      lib: {
        entry: resolve(__dirname, "src/index.js"),
        name: "VitePluginMdDocs",
        fileName: "index",
      },
      outDir: "lib",
      // 库模式下不单独拆分css了
      cssCodeSplit: false,
    },
    plugins: [commonjs()],
    resolve: {
      alias: {
        "@src": resolve("./src"),
      },
    },
  };
};
