/**
 * 这里使用了多个包，其中
 * markdown-it-chain 用于构建markdown-it的链式调用
 * markdown-it-anchor 用于将md文件中的标题转换为锚点链接
 * transliteration 将一种语言转换为另外一种形式，如中文转拼音
 *
*/
const MarkdownChain = require("markdown-it-chain");
const MarkdownAnchor = require("markdown-it-anchor");
const Slugify = require("transliteration").slugify;
const MarkdownContainer = require("./container.js");
const MarkdownFence = require("./fence.js");
module.exports = (source, options) => {
  const chain = new MarkdownChain();
  chain.options
    // 告诉模板引擎按照html解析
    .html(true)
    .end()
    // 转换标题
    .plugin("anchor")
    .use(MarkdownAnchor, [
      {
        level: 2,
        slugify: Slugify,
        permalinkBefore: true,
      },
    ])
    .end()
    // 创建自定义容器
    .plugin("containers")
    .use(MarkdownContainer(options))
    .end();
  const md = chain.toMd();
  MarkdownFence(options)(md);
  const render = md.render(source);
  return render;
};
