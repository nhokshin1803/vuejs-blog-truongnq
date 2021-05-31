import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _eac14d8e = () => interopDefault(import('..\\pages\\blogs\\list.vue' /* webpackChunkName: "pages/blogs/list" */))
const _257aead5 = () => interopDefault(import('..\\pages\\blogs\\new.vue' /* webpackChunkName: "pages/blogs/new" */))
const _5f084483 = () => interopDefault(import('..\\pages\\blogs\\search.vue' /* webpackChunkName: "pages/blogs/search" */))
const _345a4d26 = () => interopDefault(import('..\\pages\\posts\\_id.vue' /* webpackChunkName: "pages/posts/_id" */))
const _4c1d54c8 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/blogs/list",
    component: _eac14d8e,
    name: "blogs-list"
  }, {
    path: "/blogs/new",
    component: _257aead5,
    name: "blogs-new"
  }, {
    path: "/blogs/search",
    component: _5f084483,
    name: "blogs-search"
  }, {
    path: "/posts/:id?",
    component: _345a4d26,
    name: "posts-id"
  }, {
    path: "/",
    component: _4c1d54c8,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
