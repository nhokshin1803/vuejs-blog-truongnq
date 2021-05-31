import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  AppFooter: () => import('../..\\components\\AppFooter.vue' /* webpackChunkName: "components/app-footer" */).then(c => wrapFunctional(c.default || c)),
  AppHeader: () => import('../..\\components\\AppHeader.vue' /* webpackChunkName: "components/app-header" */).then(c => wrapFunctional(c.default || c)),
  AppMenu: () => import('../..\\components\\AppMenu.vue' /* webpackChunkName: "components/app-menu" */).then(c => wrapFunctional(c.default || c)),
  AppPage: () => import('../..\\components\\AppPage.vue' /* webpackChunkName: "components/app-page" */).then(c => wrapFunctional(c.default || c)),
  BlogList: () => import('../..\\components\\BlogList.vue' /* webpackChunkName: "components/blog-list" */).then(c => wrapFunctional(c.default || c)),
  BlogSearch: () => import('../..\\components\\BlogSearch.vue' /* webpackChunkName: "components/blog-search" */).then(c => wrapFunctional(c.default || c)),
  Logo: () => import('../..\\components\\Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c)),
  NewBlog: () => import('../..\\components\\NewBlog.vue' /* webpackChunkName: "components/new-blog" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
