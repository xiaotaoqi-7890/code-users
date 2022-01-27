import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
// 完整引入 element-ui
import ElementUI, { Loading } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
Vue.use(ElementUI)

Vue.filter('dataFormat', (dtStr) => {
  const dt = new Date(dtStr)
  const y = padZero(dt.getFullYear())
  const m = padZero(dt.getMonth() + 1)
  const d = padZero(dt.getDate())

  const hh = padZero(dt.getHours())
  const mm = padZero(dt.getMinutes())
  const ss = padZero(dt.getSeconds())

  return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
})

function padZero(n) {
  return n > 9 ? n : '0' + n
}

// 在全局配置 axios
// axios.defaults.baseURL = 'https://www.escook.cn'
axios.defaults.baseURL = 'http://localhost:3000'
Vue.prototype.$http = axios

// 声明请求拦截器
let loadingInstance = null
axios.interceptors.request.use((config) => {
  // 展示 Loading 效果
  loadingInstance = Loading.service({ fullscreen: true })
  return config
})

// 声明相应拦截器
axios.interceptors.response.use((response) => {
  // 隐藏 Loading 效果
  loadingInstance.close()
  return response
})

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
