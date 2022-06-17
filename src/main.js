import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import specific icons */
import { faUserSecret, faBarChart, faNewspaper, faUsers, faHouseUser, faFileExcel, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
/** FORM ELEMENTS */
import ElementPlus from 'element-plus'


/* add icons to the library */
library.add(faUserSecret, faBarChart, faNewspaper, faUsers, faHouseUser, faFileExcel, faMagnifyingGlass)

const app = createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)
app.use(ElementPlus)

app.mount('#app')

