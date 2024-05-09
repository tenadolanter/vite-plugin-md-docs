import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import './styles/common.css';
import './styles/highlight.css';
import hljs from 'highlight.js';
router.afterEach(route => {
  Vue.nextTick(() => {
    const blocks = document.querySelectorAll('pre code:not(.hljs)');
    Array.prototype.forEach.call(blocks, hljs.highlightBlock);
  });
});
Vue.use(ElementUI);
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
