import { createRouter, createWebHistory } from 'vue-router'
import { notFoundRoute, protectedRoutes } from '@/router/routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...protectedRoutes, notFoundRoute]
})

router.beforeEach((to, from, next) => {
  if (!from.name && !!to.meta.guard) {
    next({ name: to.meta.guard as string })
  } else {
    next()
  }
})

export default router
