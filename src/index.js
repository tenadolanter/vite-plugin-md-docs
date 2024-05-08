import Filter from "./filter.js";
const mdLoader = require("./markdown/index.js");
const vueLoader = require("./vue/index.js");
const reactLoader = require("./react/index.js");
export default function VitePluginMdDocs(options) {
  let config;
  let loader;
  const filter = Filter(options?.include || /\.md$/, options?.exclude || null);
  if (options?.frame === "vue") {
    loader = vueLoader;
  } else if (options?.frame === "react") {
    loader = reactLoader;
  } else {
    loader = vueLoader;
  }
  return {
    name: "vite-plugin-md-docs",
    enforce: "pre",
    configResolved(c) {
      config = { ...c };
    },
    transform(content, file) {
      if (!filter(file)) return;
      return loader(content, options);
    },
    handleHotUpdate(ctx) {
      if (!filter(ctx.file)) return;
      const read = ctx.read;
      ctx.read = async () => {
        return loader(await read(), options);
      };
    },
  };
}
