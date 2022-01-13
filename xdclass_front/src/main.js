import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
// 配置路由导航守卫
router.beforeEach((to,from,next)=>{
  const token = localStorage.getItem("token")
  // 从跳转到地址判断requiresAuth的值，如果为真就继续判断token，如果真就是继续，假就
  // 跳转到login,如果挑战到地址没有定义requiresAuth为真，就直接继续访问即可
  if(to.matched.some(record=>record.meta.requiresAuth)){
      if(token){
        next()
      }else{
        next("/login")
      }
  }else{
    next()
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
