import type { RouteRecordRaw } from 'vue-router'
import { Router_Name, Router_Component, Router_Path } from '@/enums/router'
import HomeView from '@/views/HomeView.vue'
import { shoppingViews } from '@/router/lazy-loading'


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
        component: () => shoppingViews(Router_Component.Catalog)
      },
      {
        path: Router_Path.Cart,
        name: Router_Name.Cart,
        component: () => shoppingViews(Router_Component.Cart)
      },
      {
        path: Router_Path.Checkout,
        name: Router_Name.Checkout,
        component: () => shoppingViews(Router_Component.Checkout)
      }
    ]
  }
]

export const notFoundRoute: RouteRecordRaw = {
  path: '/:pathMatch(.*)*',
  redirect: { name: Router_Name.Catalog }
}