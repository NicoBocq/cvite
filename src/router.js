import { createWebHistory, createRouter } from 'vue-router'
import Home from './components/pages/Home.vue'
import Edit from './components/pages/Edit.vue'
import About from './components/pages/About.vue'
const history = createWebHistory()
const routes = [
  { path: '/', name: 'Home', component: Edit },
  { path: '/edit', name: 'Edit', component: Edit },
  { path: '/about', name: 'About', component: About }
]
const router = createRouter({ history, routes })
export default router
