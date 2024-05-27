var c=Object.defineProperty;var i=Object.getOwnPropertySymbols;var d=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;var r=(e,n,t)=>n in e?c(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,l=(e,n)=>{for(var t in n||(n={}))d.call(n,t)&&r(e,t,n[t]);if(i)for(var t of i(n))v.call(n,t)&&r(e,t,n[t]);return e};import{n as _}from"./index-DyD3mMnA.js";const h={name:"component-doc",components:{"vue-code-demo0":function(){var e=function(){var s=this,a=s.$createElement,o=s._self._c||a;return o("div",[[o("div",[o("div",[s._v("1212")]),s._v(" "),o("div",[s._v(s._s(s.value))])])]],2)},n=[];return l({render:e,staticRenderFns:n},{data(){return{value:"hello"}}})}()}};var m=function(){var n=this,t=n._self._c;return t("section",{staticClass:"content element-doc"},[t("h3",{attrs:{id:"yin-ru-cha-jian",tabindex:"-1"}},[n._v("引入插件")]),t("p",[n._v("在vite.config.js中引入插件")]),n._m(0),t("h3",{attrs:{id:"she-zhi-zi-ding-yi-yang-shi",tabindex:"-1"}},[n._v("设置自定义样式")]),n._m(1),n._m(2),n._m(3),n._m(4),t("h3",{attrs:{id:"shi-yong-shi-li",tabindex:"-1"}},[n._v("使用示例")]),n._m(5),t("div",{staticClass:"demo-block",staticStyle:{border:"solid 1px #ebebeb","border-radius":"3px",transition:".2s","margin-bottom":"24px"}},[t("div",{staticClass:"source"},[t("vue-code-demo0")],1),t("div",{staticClass:"meta"},[t("div",{staticClass:"highlight"},[t("pre",[t("code",{staticClass:"html"},[n._v(`<template>
  <div>
    <div>1212</div>
    <div>`+n._s(n.value)+`</div>
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
<\/script>
`)])])])]),n._m(6)])])},u=[function(){var e=this,n=e._self._c;return n("pre",[n("code",{staticClass:"language-vue"},[e._v(`import VitePluginMdDocs from "vite-plugin-md-docs";
import Vue from "@vitejs/plugin-vue2";
export default () => {
  return {
    plugins: [
      VitePluginMdDocs({ frame: "vue" }),
      Vue({ include: [/(\\.vue)$/, /\\.md$/] }),
    ],
  }
}
`)])])},function(){var e=this,n=e._self._c;return n("p",[e._v("在入口文件中引入公共样式 "),n("code",[e._v("import './styles/common.css';")])])},function(){var e=this,n=e._self._c;return n("pre",[n("code",[e._v(`.highlight pre {
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
`)])])},function(){var e=this,n=e._self._c;return n("p",[e._v("在入口文件中引入代码样式"),n("code",[e._v("import './styles/highlight.css';")])])},function(){var e=this,n=e._self._c;return n("pre",[n("code",[e._v(`.hljs {
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
`)])])},function(){var e=this,n=e._self._c;return n("p",[e._v("先将vue代码使用```html和```包一层，然后载使用"),n("code",[e._v(":::demo")]),e._v("和"),n("code",[e._v(":::")]),e._v("包一层。")])},function(){var e=this,n=e._self._c;return n("div",{staticStyle:{"text-align":"center",padding:"10px 0",cursor:"pointer"}},[n("span",[e._v("显示隐藏代码")])])}],p=_(h,m,u,!1,null,null);const j=p.exports;export{j as default};
