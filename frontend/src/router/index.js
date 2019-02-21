import Vue from 'vue'
import Router from 'vue-router'
import Landing from '@/components/Landing'
import PageComponent from '@/components/pages/PageView'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: Landing
    },

    {
      path: '/:name',
      name: 'ShowPage',
      component: PageComponent
    }
  ]
})
