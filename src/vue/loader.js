const {
  stripScript,
  stripTemplate,
  genInlineComponentText,
} = require("./utils.js");
module.exports = (content, options) => {
  const { startTag, endTag } = options || {};
  const startTagLen = startTag.length;
  const endTagLen = endTag.length;
  let componenetsString = "";
  let id = 0; // demo 的 id
  let output = []; // 输出的内容
  let start = 0; // 字符串开始位置

  let commentStart = content.indexOf(startTag);
  let commentEnd = content.indexOf(endTag, commentStart + startTagLen);
  while (commentStart !== -1 && commentEnd !== -1) {
    output.push(content.slice(start, commentStart));

    const commentContent = content.slice(
      commentStart + startTagLen,
      commentEnd
    );
    const html = stripTemplate(commentContent);
    const script = stripScript(commentContent);
    let demoComponentContent = genInlineComponentText(html, script);
    const demoComponentName = `vue-code-demo${id}`;
    output.push(`<${demoComponentName} />`);
    componenetsString += `${JSON.stringify(
      demoComponentName
    )}: ${demoComponentContent},`;

    // 重新计算下一次的位置
    id++;
    start = commentEnd + endTagLen;
    commentStart = content.indexOf(startTag, start);
    commentEnd = content.indexOf(endTag, commentStart + startTagLen);
  }

  // 仅允许在 demo 不存在时，才可以在 Markdown 中写 script 标签
  // todo: 优化这段逻辑
  let pageScript = "";
  if (componenetsString) {
    pageScript = `<script>
      export default {
        name: 'component-doc',
        components: {
          ${componenetsString}
        }
      }
    </script>`;
  } else if (content.indexOf("<script>") === 0) {
    // 硬编码，有待改善
    start = content.indexOf("</script>") + "</script>".length;
    pageScript = content.slice(0, start);
  }

  output.push(content.slice(start));
  const result = `
    <template>
      <section class="content element-doc">
        ${output.join("")}
      </section>
    </template>
    ${pageScript}
  `;
  return result;
};
