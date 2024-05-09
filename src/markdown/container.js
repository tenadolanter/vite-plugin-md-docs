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
          <div class="source">
            ${startTag} ${content}${endTag}
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
