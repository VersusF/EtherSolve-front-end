import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTachometerAlt, faPlus, faFileImport, faAngleRight, faTrash, faExclamationCircle, faBars, faFileAlt, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faTachometerAlt, faPlus, faFileImport, faAngleRight, faTrash, faExclamationCircle, faBars, faFileAlt, faTimes)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(VueAxios, axios)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
