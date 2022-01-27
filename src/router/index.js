import Vue from 'vue'
import VueRouter from 'vue-router'

import UserList from '@/views/UserList.vue'
import UserDetail from '@/views/UserDetail.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/users' },
  { path: '/users', component: UserList },
  { path: '/users/:id', component: UserDetail, props: true }
]

const router = new VueRouter({
  routes
})

export default router
