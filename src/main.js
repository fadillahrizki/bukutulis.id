import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// CSS
import '@/assets/css/bootstrap.min.css'
import '@/assets/css/animate.css'
import '@/assets/plugins/select2/css/select2.min.css'
import '@/assets/css/bootstrap-datetimepicker.min.css'
import '@/assets/css/dataTables.bootstrap5.min.css'
import '@/assets/plugins/fontawesome/css/fontawesome.min.css'
import '@/assets/plugins/fontawesome/css/all.min.css'
import '@/assets/css/style.css'

// JS
import '@/assets/js/jquery-3.7.1.min.js'
import '@/assets/js/feather.min.js'
import '@/assets/js/jquery.slimscroll.min.js'
import '@/assets/js/jquery.dataTables.min.js'
import '@/assets/js/dataTables.bootstrap5.min.js'
import '@/assets/js/bootstrap.bundle.min.js'
import '@/assets/plugins/select2/js/select2.min.js'
// import '@/assets/js/moment.min.js'
// import '@/assets/js/bootstrap-datetimepicker.min.js'
import '@/assets/plugins/apexchart/apexcharts.min.js'
import '@/assets/plugins/apexchart/chart-data.js'
import '@/assets/plugins/sweetalert/sweetalert2.all.min.js'
import '@/assets/plugins/sweetalert/sweetalerts.min.js'
import '@/assets/js/theme-script.js'
import '@/assets/js/script.js'

/********* Layout component**********/
import Header from '@/views/layouts/pos-header.vue'
import Sidebar from '@/views/layouts/pos-sidebar.vue'

const app = createApp(App)

/********* Layout component**********/
app.component('layout-header', Header)
app.component('layout-sidebar', Sidebar)

app.use(router).mount('#app')
