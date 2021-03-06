import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import tab from './util/tab'
import moment from 'moment'
Vue.use(ElementUI);
Vue.config.productionTip = false
const bus=new Vue()
Vue.prototype.$tab = tab
Vue.prototype.$moment=moment
Vue.prototype.$bus=bus


moment.locale('zh-cn')
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')