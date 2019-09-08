import Vue from 'vue'
import Router from 'vue-router'

import Events from './views/events.vue'
import Members from './views/members.vue'
import Notices from './views/notices.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/events',
      name: 'events',
      component: Events
    },
    {
      path: '/members',
      name: 'members',
      component: Members
    },
    {
      path: '/notices',
      name: 'notices',
      component: Notices
    },
    
  ]
})
