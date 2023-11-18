import type { RouteRecordRaw } from 'vue-router'
import { Router_Name, Router_Component, Router_Path } from '@/enums/router'
import HomeView from '@/views/HomeView.vue'
import { shoppingViews } from '@/router/lazy-loading'
import type { RouteStepMeta } from '@/types/router/types'

export const unprotectedRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: Router_Name.Home,
    redirect: { name: Router_Name.Catalog },
    component: HomeView,
    children: [
      {
        path: Router_Path.Catalog,
        name: Router_Name.Catalog,
        component: () => shoppingViews(Router_Component.Catalog),
        meta: {
          title: 'Catalog',
          step: 1
        } as RouteStepMeta
      },
      {
        path: Router_Path.Cart,
        name: Router_Name.Cart,
        component: () => shoppingViews(Router_Component.Cart),
        meta: {
          title: 'Cart',
          step: 2
        } as RouteStepMeta
      },
      {
        path: Router_Path.Checkout,
        name: Router_Name.Checkout,
        component: () => shoppingViews(Router_Component.Checkout),
        meta: {
          title: 'Checkout',
          step: 3
        } as RouteStepMeta
      }
    ]
  }
]

export const notFoundRoute: RouteRecordRaw = {
  path: '/:pathMatch(.*)*',
  redirect: { name: Router_Name.Catalog }
}
