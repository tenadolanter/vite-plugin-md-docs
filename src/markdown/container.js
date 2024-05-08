const mdContainer = require("markdown-it-container");
module.exports = (options) => {
  const { startTag, endTag, componentName } = options || {};
  const md = (markdown) => {
    markdown.use(mdContainer, "demo", {
      validate(params) {
        return params.trim().match(/^demo\s*(.*)$/);
      },
      render(tokens, idx) {
        const m = tokens[idx].info.trim().match(/^demo\s*(.*)$/);
        if (tokens[idx].nesting === 1) {
          const description = m && m.length > 1 ? m[1] : "";
          const content =
            tokens[idx + 1].type === "fence" ? tokens[idx + 1].content : "";
          return `<${componentName}>
          ${description ? `<div>${markdown.render(description)}</div>` : ""}
          ${startTag} ${content}${endTag}
          `;
        }
        return `</${componentName}>`;
      },
    });
    markdown.use(mdContainer, "tip");
    markdown.use(mdContainer, "warning");
  };
  return md;
};
