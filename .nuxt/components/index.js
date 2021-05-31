import { wrapFunctional } from './utils'

export { default as AppFooter } from '../..\\components\\AppFooter.vue'
export { default as AppHeader } from '../..\\components\\AppHeader.vue'
export { default as AppMenu } from '../..\\components\\AppMenu.vue'
export { default as PageBlogFormCreateEdit } from '../..\\components\\page\\BlogFormCreateEdit.vue'
export { default as PageBlogList } from '../..\\components\\page\\BlogList.vue'
export { default as PageBlogSearch } from '../..\\components\\page\\BlogSearch.vue'

export const LazyAppFooter = import('../..\\components\\AppFooter.vue' /* webpackChunkName: "components/app-footer" */).then(c => wrapFunctional(c.default || c))
export const LazyAppHeader = import('../..\\components\\AppHeader.vue' /* webpackChunkName: "components/app-header" */).then(c => wrapFunctional(c.default || c))
export const LazyAppMenu = import('../..\\components\\AppMenu.vue' /* webpackChunkName: "components/app-menu" */).then(c => wrapFunctional(c.default || c))
export const LazyPageBlogFormCreateEdit = import('../..\\components\\page\\BlogFormCreateEdit.vue' /* webpackChunkName: "components/page-blog-form-create-edit" */).then(c => wrapFunctional(c.default || c))
export const LazyPageBlogList = import('../..\\components\\page\\BlogList.vue' /* webpackChunkName: "components/page-blog-list" */).then(c => wrapFunctional(c.default || c))
export const LazyPageBlogSearch = import('../..\\components\\page\\BlogSearch.vue' /* webpackChunkName: "components/page-blog-search" */).then(c => wrapFunctional(c.default || c))
