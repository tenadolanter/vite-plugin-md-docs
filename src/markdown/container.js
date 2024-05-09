/**
 * markdown-it-container用于在md文档中创建自定义容器
 *
 */
const MarkdownContainer = require("markdown-it-container");
module.exports = (options) => {
  const { startTag, endTag, componentName } = options || {};
  const md = (markdown) => {
    markdown.use(MarkdownContainer, "demo", {
      validate(params) {
        return params.trim().match(/^demo\s*(.*)$/);
      },
      render(tokens, idx) {
        const m = tokens[idx].info.trim().match(/^demo\s*(.*)$/);
        if (tokens[idx].nesting === 1) {
          const description = m && m.length > 1 ? m[1] : "";
          const content =
            tokens[idx + 1].type === "fence" ? tokens[idx + 1].content : "";
          return `<div class="demo-block" style="border: solid 1px #ebebeb;border-radius: 3px;transition: .2s;margin-bottom: 24px;">
          ${description ? `<div>${markdown.render(description)}</div>` : ""}
          ${startTag} ${content}${endTag}
          <div class="meta">
            <div class="highlight">
            <pre><code class="html">${content}</code></pre>
            </div>
          </div>
          <div class="demo-block-control" style="text-aligin: center;">
            <span>显示隐藏代码</span>
          </div>
          `;
        }
        return `</div>`;
      },
    });
    markdown.use(MarkdownContainer, "tip");
    markdown.use(MarkdownContainer, "warning");
  };
  return md;
};
