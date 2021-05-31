import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  BlogList: () => import('../..\\components\\BlogList.vue' /* webpackChunkName: "components/blog-list" */).then(c => wrapFunctional(c.default || c)),
  BlogSearch: () => import('../..\\components\\BlogSearch.vue' /* webpackChunkName: "components/blog-search" */).then(c => wrapFunctional(c.default || c)),
  ListSearch: () => import('../..\\components\\ListSearch.vue' /* webpackChunkName: "components/list-search" */).then(c => wrapFunctional(c.default || c)),
  Logo: () => import('../..\\components\\Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c)),
  NewBlog: () => import('../..\\components\\NewBlog.vue' /* webpackChunkName: "components/new-blog" */).then(c => wrapFunctional(c.default || c)),
  LayoutsAppFooter: () => import('../..\\components\\layouts\\AppFooter.vue' /* webpackChunkName: "components/layouts-app-footer" */).then(c => wrapFunctional(c.default || c)),
  LayoutsAppHeader: () => import('../..\\components\\layouts\\AppHeader.vue' /* webpackChunkName: "components/layouts-app-header" */).then(c => wrapFunctional(c.default || c)),
  LayoutsAppMenu: () => import('../..\\components\\layouts\\AppMenu.vue' /* webpackChunkName: "components/layouts-app-menu" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
