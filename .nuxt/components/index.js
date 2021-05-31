import { wrapFunctional } from './utils'

export { default as AppFooter } from '../..\\components\\AppFooter.vue'
export { default as AppHeader } from '../..\\components\\AppHeader.vue'
export { default as AppMenu } from '../..\\components\\AppMenu.vue'
export { default as AppPage } from '../..\\components\\AppPage.vue'
export { default as BlogList } from '../..\\components\\BlogList.vue'
export { default as BlogSearch } from '../..\\components\\BlogSearch.vue'
export { default as Logo } from '../..\\components\\Logo.vue'
export { default as NewBlog } from '../..\\components\\NewBlog.vue'

export const LazyAppFooter = import('../..\\components\\AppFooter.vue' /* webpackChunkName: "components/app-footer" */).then(c => wrapFunctional(c.default || c))
export const LazyAppHeader = import('../..\\components\\AppHeader.vue' /* webpackChunkName: "components/app-header" */).then(c => wrapFunctional(c.default || c))
export const LazyAppMenu = import('../..\\components\\AppMenu.vue' /* webpackChunkName: "components/app-menu" */).then(c => wrapFunctional(c.default || c))
export const LazyAppPage = import('../..\\components\\AppPage.vue' /* webpackChunkName: "components/app-page" */).then(c => wrapFunctional(c.default || c))
export const LazyBlogList = import('../..\\components\\BlogList.vue' /* webpackChunkName: "components/blog-list" */).then(c => wrapFunctional(c.default || c))
export const LazyBlogSearch = import('../..\\components\\BlogSearch.vue' /* webpackChunkName: "components/blog-search" */).then(c => wrapFunctional(c.default || c))
export const LazyLogo = import('../..\\components\\Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c))
export const LazyNewBlog = import('../..\\components\\NewBlog.vue' /* webpackChunkName: "components/new-blog" */).then(c => wrapFunctional(c.default || c))
