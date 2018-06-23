import Vue from 'vue'
import Router from 'vue-router'
import Ministries from '@/components/ministries/Ministries'
import Example from '@/components/Example'
import Ministry from '@/components/ministries/Ministry'
import MinistryShow from '@/components/ministries/MinistryShow'
import MinistryEdit from '@/components/ministries/MinistryEdit'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Ministries
    },
    {
      path: '/ministry',
      component: Ministry,
      props: true,
      children: [
        {
          path: ':id',
          component: MinistryShow
        },
        {
          path: ':id/edit',
          component: MinistryEdit,
          name: 'MinistryEdit'
        }
      ]
    },
    {
      path: '/ex',
      component: Example
    },
    {
      path: '/re',
      redirect: '/'
    },
    {
      path: '*', redirect: '/'
    }
  ]
})
