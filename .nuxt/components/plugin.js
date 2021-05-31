import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  AppFooter: () => import('../..\\components\\AppFooter.vue' /* webpackChunkName: "components/app-footer" */).then(c => wrapFunctional(c.default || c)),
  AppHeader: () => import('../..\\components\\AppHeader.vue' /* webpackChunkName: "components/app-header" */).then(c => wrapFunctional(c.default || c)),
  AppMenu: () => import('../..\\components\\AppMenu.vue' /* webpackChunkName: "components/app-menu" */).then(c => wrapFunctional(c.default || c)),
  PageBlogFormCreateEdit: () => import('../..\\components\\page\\BlogFormCreateEdit.vue' /* webpackChunkName: "components/page-blog-form-create-edit" */).then(c => wrapFunctional(c.default || c)),
  PageBlogList: () => import('../..\\components\\page\\BlogList.vue' /* webpackChunkName: "components/page-blog-list" */).then(c => wrapFunctional(c.default || c)),
  PageBlogSearch: () => import('../..\\components\\page\\BlogSearch.vue' /* webpackChunkName: "components/page-blog-search" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
