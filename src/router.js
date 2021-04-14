import { createWebHistory, createRouter } from "vue-router";
import Main from "./components/Main.vue";
import Export from './components/pages/Export.vue'
const history = createWebHistory();
const routes = [
  { path: "/", name: 'Main', component: Main },
  { path: "/export", name: 'Export', component: Export }
];
const router = createRouter({ history, routes })
export default router
