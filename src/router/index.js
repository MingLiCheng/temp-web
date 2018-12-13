import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Content from '@/components/Content'
import List from '@/components/List'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'HomePage',
      component: Home
    },
    {
      path: '/content',
      name: 'ContentPage',
      component: Content
    },
    {
      path: '/list',
      name: 'ListPage',
      component: List
    }
  ]
})
