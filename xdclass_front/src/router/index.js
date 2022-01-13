import Vue from 'vue'
import VueRouter from 'vue-router'
import CourseDetail from '../views/CourseDetail/CourseDetail.vue'
import Home from '../views/Home/Home.vue'
import Login from '../views/Login/Login.vue'
import Order from '../views/Order/Order.vue'
import Pay from '../views/Pay/Pay.vue'
import Personal from '../views/Personal/Personal.vue'
import Register from '../views/Register/Register.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/courseDetail',
    name: 'CourseDetail',
    // 也可以按需导入
    // component: () => import("../views/CourseDetail/CourseDetail.vue")
    component: CourseDetail
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/order',
    name: 'Order',
    component: Order,
    meta:{requiresAuth:true}  //配置路由导航守卫
  },
  {
    path: "/pay",
    name: "Pay",
    component: Pay,
    meta:{requiresAuth:true}  //配置路由导航守卫
  },
  {
    path: '/personal',
    name: 'Personal',
    component: Personal,
    meta:{requiresAuth:true}  //配置路由导航守卫
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },

]

const router = new VueRouter({
  routes
})

export default router
