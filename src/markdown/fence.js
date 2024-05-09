module.exports = (options) => {
  const fn = (md) => {
    const defaultRender = md.renderer.rules.fence;
    md.renderer.rules.fence = (tokens, idx, options, env, self) => {
      const token = tokens[idx];
      // 判断该 fence 是否在 :::demo 内
      const prevToken = tokens[idx - 1];
      const isInDemoContainer =
        prevToken &&
        prevToken.nesting === 1 &&
        prevToken.info.trim().match(/^demo\s*(.*)$/);
      if (token.info === "html" && isInDemoContainer) {
        return `
        <div class="meta">
          <div class="highlight">
            <pre><code class="html">${md.utils.escapeHtml(token.content)}</code></pre>
          </div>
        </div>
        <div style="text-align: center;padding:10px 0;cursor: pointer;">
          <span>显示隐藏代码</span>
        </div>
        `;
      }
      return defaultRender(tokens, idx, options, env, self);
    };
  };
  return fn;
};
