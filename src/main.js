import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
// import VueMomemt from 'vue-moment'
import moment from 'moment-timezone'
Vue.config.productionTip = false
Vue.prototype.$http = axios

new Vue({
    router,
    store,
    moment,
    render: h => h(App)
}).$mount('#app')