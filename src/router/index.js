import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/test',
    name: 'test',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Test.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/schoolFind',
    name: 'schoolFind',
    component: () => import('../views/schoolFind.vue')
  },
  {
    path: '/schoolIntro',
    name: 'schoolIntro',
    component: () => import('../views/schoolIntro.vue')
  },
  {
    path: '/majorIntro',
    name: 'majorIntro',
    component: () => import('../views/majorIntro.vue')
  },
  {
    path: '/preferenceTest',
    name: 'preferenceTest',
    component: () => import('../views/preferenceTest.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
