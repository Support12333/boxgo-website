import Vue from 'vue'
import i18n from '@i18n/index'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@assets/font/iconfont.css'
import vueSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
Vue.use(vueSwiper)

new Vue({
  i18n,
  render: h => h(App),
}).$mount('#app')
