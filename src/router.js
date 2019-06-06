import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

// import store from './store/'

const lazyLoading = (name) => () => import(`./views/${name}.vue`)

Vue.use(Router)

const router = new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home,
      redirect: '/home/index',
      children: [
        {
          name: '主页',
          path: '/home/index',
          component: lazyLoading('About')
        },
        {
          name: '关于',
          path: '/home/about',
          component: lazyLoading('About')
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "login" */ './views/Login.vue')
    }
  ]
})

// 全局路由守卫
// router.beforeEach((to, from, next) => {
//   // if (
//   //   to.path !== '/login' &&
//   //   !store.state.common.token
//   // ) {
//   //   // 登录后，跳到到当前页面
//   //   next({
//   //     name: 'login',
//   //     query: { redirect: to.fullPath }
//   //   })
//   // } else {
//   //   next()
//   // }
// })

export default router
