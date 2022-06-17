import { createRouter, createWebHashHistory } from 'vue-router'
import DashboardPrevitools from '@/views/dashboard/DashboardPrevitools.vue'
import DatabaseTag from '@/views/database-tag/DatabaseTag.vue'
import UserGenerator from '@/views/user-generator/UserGenerator.vue'
import CouponGenerator from '@/views/coupon-generator/CouponGenerator.vue'
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'dashboard-previtools',
      component: DashboardPrevitools
    },
    {
      path: '/recaudacion/database-tag',
      name: 'database-tag',
      component: DatabaseTag
    },
    {
      path: '/recaudacion/user-generator',
      name: 'user-generator',
      component: UserGenerator
    },
    {
      path: '/recaudacion/coupon-generator',
      name: 'coupon-generator',
      component: CouponGenerator
    },
  ]
})

export default router
