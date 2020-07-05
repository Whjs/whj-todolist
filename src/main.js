import Vue from 'vue'
import App from './App.vue'
// import './registerServiceWorker'
import router from './router'
// import './plugins/element.js'
// import 'element-ui/lib/theme-chalk/index.css'
import './common/css/common.css'

import VueParticles from 'vue-particles'

Vue.use(VueParticles)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
