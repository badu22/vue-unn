import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Drivers from './views/Drivers.vue';
import Contact from './views/Contact.vue';
import ContactAlt from './views/ContactAlt.vue';

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/drivers',
      name: 'drivers',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Drivers
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/contactAlt',
      name: 'contactAlt',
      component: ContactAlt
    }
  ]
})
