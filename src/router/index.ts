import { createRouter, createWebHistory } from 'vue-router'
import { notFoundRoute, unprotectedRoutes } from './unprotected-routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [ ...unprotectedRoutes, notFoundRoute ]
})

export default router
