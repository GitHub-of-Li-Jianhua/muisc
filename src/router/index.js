import Vue from 'vue'
import VueRouter from 'vue-router'

const My = (resolve) => {
  import('../views/My').then((module) => {
    resolve(module)
  })
}
const Find = (resolve) => {
  import('../views/Find').then((module) => {
    resolve(module)
  })
}

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/Find' },
  { path: '/My', component: My },
  { path: '/Find', component: Find }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
