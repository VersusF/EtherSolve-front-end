import Vue from 'vue'
import App from './App.vue'
import store from './store.js'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTachometerAlt, 
  faPlus, faFileDownload, faAngleRight, 
  faTrash, faExclamationCircle, faBars, 
  faFileAlt, faTimes, faArrowLeft, faEdit,
  faTimesCircle, faCheckCircle, faCodeBranch, 
  faStopwatch, faHashtag, faCheckSquare, 
  faMinus, faCopy, faFileUpload, faExclamationTriangle} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faTachometerAlt, faPlus, faFileDownload, 
            faAngleRight, faTrash, faExclamationCircle, 
            faBars, faFileAlt, faTimes, faArrowLeft, 
            faEdit, faTimesCircle, faCheckCircle,
            faCodeBranch, faStopwatch, faHashtag,
            faCheckSquare, faMinus, faCopy, faFileUpload,
            faExclamationTriangle)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(VueAxios, axios)
Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
