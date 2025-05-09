import { createRouter, createWebHistory } from 'vue-router'

import Dashboard from '../views/Dashboard.vue'
import Sessions from '../views/Sessions.vue'
import Users from '../views/Users.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
  { path: '/', name: 'Dashboard', component: Dashboard },
  { path: '/sessions', name: 'Sessions', component: Sessions },
  { path: '/users', name: 'Users', component: Users },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
