import Vue from 'vue'
import VueRouter from 'vue-router'

// 我的
const My = (resolve) => {
  import('../views/My').then((module) => {
    resolve(module)
  })
}
// 我的详情
const Mydetails = (resolve) => {
  import('../views/Mydetails').then((module) => {
    resolve(module)
  })
}
// 发现
const Find = (resolve) => {
  import('../views/Find').then((module) => {
    resolve(module)
  })
}
// 云村
const Yuncun = (resolve) => {
  import('../views/Yuncun').then((module) => {
    resolve(module)
  })
}

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/Find' },
  { path: '/My', component: My },
  { path: '/Mydetails', component: Mydetails },
  { path: '/Find', component: Find },
  { path: '/Yuncun', component: Yuncun }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
