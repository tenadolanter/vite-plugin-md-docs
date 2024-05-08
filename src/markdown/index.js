const Config = require("markdown-it-chain");
const anchorPlugin = require("markdown-it-anchor");
const slugify = require("transliteration").slugify;
const getContainer = require("./container.js");
const getFence = require("./fence.js");
module.exports = (source, options) => {
  const config = new Config();
  const container = getContainer(options);
  config.options
    .html(true)
    .end()
    .plugin("anchor")
    .use(anchorPlugin, [
      {
        level: 2,
        slugify: slugify,
        permalinkBefore: true,
      },
    ])
    .end()
    .plugin("containers")
    .use(container)
    .end();
  const md = config.toMd();
  const overWriteFence = getFence(options);
  overWriteFence(md);
  const render = md.render(source);
  return render;
};
