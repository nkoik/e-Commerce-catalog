import { createRouter, createWebHistory } from 'vue-router'
import { notFoundRoute, unprotectedRoutes } from './unprotected-routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...unprotectedRoutes, notFoundRoute]
})

router.beforeEach((to, from, next) => {
  if (!from.name && to.meta.guard) {
    next({ name: to.matched[0].name })
  } else {
    next()
  }
})

export default router
