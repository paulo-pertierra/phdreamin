import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: '/',
      component: () => import('../views/RegisterView.vue')
    },
    {
      path: '/successfully-registered',
      name: '/successfully-registered',
      component: () => import('../views/SuccessfullyRegistered.vue')
    }
  ]
})

export default router
