import { wrapFunctional } from './utils'

export { default as BlogList } from '../..\\components\\BlogList.vue'
export { default as BlogSearch } from '../..\\components\\BlogSearch.vue'
export { default as ListSearch } from '../..\\components\\ListSearch.vue'
export { default as Logo } from '../..\\components\\Logo.vue'
export { default as NewBlog } from '../..\\components\\NewBlog.vue'
export { default as LayoutsAppFooter } from '../..\\components\\layouts\\AppFooter.vue'
export { default as LayoutsAppHeader } from '../..\\components\\layouts\\AppHeader.vue'
export { default as LayoutsAppMenu } from '../..\\components\\layouts\\AppMenu.vue'

export const LazyBlogList = import('../..\\components\\BlogList.vue' /* webpackChunkName: "components/blog-list" */).then(c => wrapFunctional(c.default || c))
export const LazyBlogSearch = import('../..\\components\\BlogSearch.vue' /* webpackChunkName: "components/blog-search" */).then(c => wrapFunctional(c.default || c))
export const LazyListSearch = import('../..\\components\\ListSearch.vue' /* webpackChunkName: "components/list-search" */).then(c => wrapFunctional(c.default || c))
export const LazyLogo = import('../..\\components\\Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c))
export const LazyNewBlog = import('../..\\components\\NewBlog.vue' /* webpackChunkName: "components/new-blog" */).then(c => wrapFunctional(c.default || c))
export const LazyLayoutsAppFooter = import('../..\\components\\layouts\\AppFooter.vue' /* webpackChunkName: "components/layouts-app-footer" */).then(c => wrapFunctional(c.default || c))
export const LazyLayoutsAppHeader = import('../..\\components\\layouts\\AppHeader.vue' /* webpackChunkName: "components/layouts-app-header" */).then(c => wrapFunctional(c.default || c))
export const LazyLayoutsAppMenu = import('../..\\components\\layouts\\AppMenu.vue' /* webpackChunkName: "components/layouts-app-menu" */).then(c => wrapFunctional(c.default || c))
