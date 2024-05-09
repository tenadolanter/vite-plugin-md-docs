const config = require("../config.js");
const mdLoader = require("../markdown/index.js");
const vueLoader = require("./loader.js");
module.exports = (source, options) => {
  let _options = {
    ...config,
    ...options,
  }
  const content = mdLoader(source, _options);
  const render = vueLoader(content, _options);
  return render;
}