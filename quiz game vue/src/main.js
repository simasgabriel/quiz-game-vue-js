

import axios from 'axios'
import VueAxios from 'vue-axios'


import './assets/main.css'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import { createApp } from 'vue'
import App from './App.vue'



createApp(App)
.use(VueAxios, axios)
.mount('#app')

