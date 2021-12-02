import { createWebHistory, createRouter } from 'vue-router'
const history = createWebHistory()

const lazyLoad = (view) => {
  return () => import(`./components/pages/${view}.vue`)
}

const routes = [
  { path: '/', name: 'Home', component: lazyLoad('Edit') },
  { path: '/preview', name: 'Preview', component: lazyLoad('Preview') }
]
const router = createRouter({ history, routes })
export default router
