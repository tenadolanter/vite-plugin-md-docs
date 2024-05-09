
### 引入插件

在vite.config.js中引入插件

```vue
import VitePluginMdDocs from "vite-plugin-md-docs";
import Vue from "@vitejs/plugin-vue2";
export default () => {
  return {
    plugins: [
      VitePluginMdDocs({ frame: "vue" }),
      Vue({ include: [/(\.vue)$/, /\.md$/] }),
    ],
  }
}
```

### 设置自定义样式

在入口文件中引入公共样式 `import './styles/common.css';`

```
.highlight pre {
  margin: 0;
}
.highlight code.hljs {
  margin: 0;
  border: none;
  max-height: none;
  border-radius: 0;
}
.demo-block .source {
  padding: 24px;
}
```

在入口文件中引入代码样式`import './styles/highlight.css';`

```
.hljs {
  line-height: 1.8;
  font-size: 12px;
  padding: 18px 24px;
  background-color: #fafafa;
  border: 1px solid #eaeefb;
  margin-bottom: 25px;
  border-radius: 4px;
  -webkit-font-smoothing: auto;
  display: block;
  overflow-x: auto;
  background: #fff;
}
.hljs,
.hljs-subst {
  color: #000;
}
.hljs-string,
.hljs-meta,
.hljs-symbol,
.hljs-template-tag,
.hljs-template-variable,
.hljs-addition {
  color: #756bb1;
}
.hljs-comment,
.hljs-quote {
  color: #636363;
}
.hljs-number,
.hljs-regexp,
.hljs-literal,
.hljs-bullet,
.hljs-link {
  color: #31a354;
}
.hljs-deletion,
.hljs-variable {
  color: #88f;
}
.hljs-keyword,
.hljs-selector-tag,
.hljs-title,
.hljs-section,
.hljs-built_in,
.hljs-doctag,
.hljs-type,
.hljs-tag,
.hljs-name,
.hljs-selector-id,
.hljs-selector-class,
.hljs-strong {
  color: #3182bd;
}
.hljs-emphasis {
  font-style: italic;
}
.hljs-attribute {
  color: #e6550d;
}
```

### 使用示例

先将vue代码使用\`\`\`html和\`\`\`包一层，然后载使用`:::demo`和`:::`包一层。


:::demo

```html
<template>
  <div>
    <div>1212</div>
    <div>{{ value }}</div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      value: "hello"
    }
  },
}
</script>
```
:::