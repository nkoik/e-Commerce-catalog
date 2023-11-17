export function shoppingViews (path: string): Promise<any> {
  return import(`../views/Shopping/${path}.vue`)
}