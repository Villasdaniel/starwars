import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'principal',
      component: () => import('../views/principal.vue')
    },
    {
      path: '/personas',
      name: 'personas',
      component: () => import('../views/personas.vue')
    },
    {
      path: '/planetas',
      name: 'planetas',
      component: () => import('../views/planetas.vue')
    },
    {
      path: '/naves',
      name: 'naves',
      component: () => import('../views/naves.vue')
    },
    {
      path: '/vehiculos',
      name: 'vehiculos',
      component: () => import('../views/vehiculos.vue')
    }
  ]
})
