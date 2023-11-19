import type { RouteRecordRaw } from 'vue-router'
import { Router_Name, Router_Component, Router_Path } from '@/enums/router'
import ShoppingView from '@/views/ShoppingView.vue'
import { shoppingViews } from '@/router/lazy-loading'
import type { RouteStepMeta } from '@/types/router/types'

export const protectedRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: Router_Name.Shopping,
    redirect: { name: Router_Name.Catalog },
    component: ShoppingView,
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
          step: 2,
          guard: Router_Name.Shopping
        } as RouteStepMeta
      },
      {
        path: Router_Path.Checkout,
        name: Router_Name.Checkout,
        component: () => shoppingViews(Router_Component.Checkout),
        meta: {
          title: 'Checkout',
          step: 3,
          guard: Router_Name.Shopping
        } as RouteStepMeta
      }
    ]
  },
  {
    path: Router_Path.CheckoutSuccess,
    name: Router_Name.CheckoutSuccess,
    component: () => shoppingViews(Router_Component.CheckoutSuccess),
    meta: {
      guard: Router_Name.Shopping
    }
  }
]

export const notFoundRoute: RouteRecordRaw = {
  path: '/:pathMatch(.*)*',
  redirect: { name: Router_Name.Catalog }
}
