import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _5215c2ef = () => interopDefault(import('..\\pages\\list.vue' /* webpackChunkName: "pages/list" */))
const _4d551b42 = () => interopDefault(import('..\\pages\\new.vue' /* webpackChunkName: "pages/new" */))
const _228b18b9 = () => interopDefault(import('..\\pages\\search.vue' /* webpackChunkName: "pages/search" */))
const _701de550 = () => interopDefault(import('..\\pages\\posts\\_id.vue' /* webpackChunkName: "pages/posts/_id" */))
const _0c171ad1 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/list",
    component: _5215c2ef,
    name: "list"
  }, {
    path: "/new",
    component: _4d551b42,
    name: "new"
  }, {
    path: "/search",
    component: _228b18b9,
    name: "search"
  }, {
    path: "/posts/:id?",
    component: _701de550,
    name: "posts-id"
  }, {
    path: "/",
    component: _0c171ad1,
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
