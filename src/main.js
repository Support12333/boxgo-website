import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import vueSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import '@assets/font/iconfont.css'
import { Dialog } from "element-ui";
Vue.use(vueSwiper)
Vue.use(Dialog)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
