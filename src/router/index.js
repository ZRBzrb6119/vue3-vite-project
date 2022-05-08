import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/home/index.vue'
import store from '@/store'

const routes=[
  {
    path:'/',
    redirect:'/home'
  },
  {
    path: '/home',
    name: 'Home',
    component:Home,
    meta:{show:true}
  },
  {
    path: '/login',
    name: 'Login',
    component:()=>import( '@/views/login/index.vue'),
    meta:{show:false}
  },
  {
    path: '/register',
    name: 'Register',
    component:()=>import( '@/views/register/index.vue'),
    meta:{show:false}
  },
  {
    path: '/search/:keyword?',//?表示params参数可不传
    name: 'Search',
    component:()=>import( '@/views/search/index.vue'),
    meta:{show:true}
  },
  {
    path: '/detail/:skuid',
    name: 'Detail',
    component:()=>import( '@/views/detail/index.vue'),
    meta:{show:true}
  },
  {
    path: '/addcartsuccess',
    name: 'addcartsuccess',
    component:()=>import( '@/views/addcartsuccess/index.vue'),
    meta:{show:true},
    beforeEnter: (to, from, next) => {
      const skuNum = to.query.skuNum
      const skuInfo = JSON.parse(window.sessionStorage.getItem('SKUINFO'))
      if (skuNum && skuInfo) {
        next()
      } else { // 在组件对象创建前强制跳转到首页
        next('/')
      }
    }
  },
  {
    path: '/shopcart',
    name: 'Shopcart',
    component:()=>import( '@/views/shopcart/index.vue'),
    meta:{show:true}
  },
  {
    path: '/trade',
    name: 'Trade',
    component:()=>import( '@/views/trade/index.vue'),
    meta:{show:true}
  },
  {
    path: '/pay',
    name: 'Pay',
    component:()=>import( '@/views/zhifu/index.vue'),
    props: route => ({orderId: route.query.orderId}),
    meta:{show:true},
    beforeEnter (to, from, next) {
      if (from.path==='/trade') {
        next()
      } else {
        console.log(from)
        next('/home')
      }
    }
  },
  {
    path: '/paysuccess',
    name: 'Paysuccess',
    component:()=>import( '@/views/paysuccess/index.vue'),
    meta:{show:true},
    beforeEnter (to, from, next) {
      if (from.path==='/pay') {
        next()
      } else {
        next('/home')
      }
    }
  },
  {
    path: '/center',
    name: 'Center',
    component:()=>import( '@/views/center/index.vue'),
    meta:{show:true},
    children:[
      {
        path: 'myorder',
        component: ()=>import( '@/views/center/child/myorder.vue'),
      },
      {
        path: 'groupbuy',
        component: ()=>import( '@/views/center/child/groupbuy.vue'),
      },
      {
        path: '',
        redirect: '/center/myorder'
      }
    ]
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  },
})

router.beforeEach(async (to, from, next) => {
  let token  = store.state.user.token
  let name = store.state.user.userInfo.name
  if(token){
    if(to.path=="/login"||to.path=='/register'){
       next('/')
    }else{
      if(name){
        next()
      }else{
        try {
          await store.dispatch('getUserInfo')
         next()
        } catch (error) {
          await store.dispatch('userLogout')
          next('/login')
        }
      }
    }
  }else{
    let toPath = to.path
    if(toPath.indexOf('/trade')!=-1 || toPath.indexOf('/pay')!=-1||toPath.indexOf('/center')!=-1){
      next('/login?redirect='+toPath)
    }else{
      next()
    }
  }
})

export default router