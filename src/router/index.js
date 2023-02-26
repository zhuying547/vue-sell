import goods from 'components/goods/v-goods.vue'
import ratings from 'components/ratings/v-ratings.vue'
import seller from 'components/seller/v-seller.vue'
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/goods',
  },
  {
    path: '/goods',
    component: goods,
  },
  {
    path: '/ratings',
    component: ratings,
  },
  {
    path: '/seller',
    component: seller,
  },
]

const router = new VueRouter({
  routes,
  linkActiveClass: 'active',
})

export default router
