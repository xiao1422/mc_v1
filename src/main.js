/*
 * @Author: xiao
 * @Date: 2022-12-21 09:42:25
 * @LastEditTime: 2022-12-21 18:34:17
 * @LastEditors: xiao
 * @Description: xiao
 * @FilePath: \WWW\study\mc_v1\src\main.js
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/styles/index.scss'
import '@/plugins/index'
import svgIcons from '@/plugins/xi-icons'
import 'element-plus/dist/index.css'

const app = createApp(App)
svgIcons(app)
app.use(store).use(router).mount('#app')
