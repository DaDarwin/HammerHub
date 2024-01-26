import { createRouter, createWebHashHistory } from 'vue-router'
import { authGuard } from '@bcwdev/auth0provider-client'

function loadPage(page) {
  return () => import(`./pages/${page}.vue`)
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: loadPage('HomePage')
  },
  {
    path: '/about',
    name: 'About',
    component: loadPage('AboutPage')
  },
  {
    path: '/account',
    name: 'Account',
    component: loadPage('AccountPage'),
    beforeEnter: authGuard
  },
  {
    path: '/profilePage',
    name: 'Profile Page',
    component: loadPage('ProfilePage'),
    beforeEnter: authGuard
  },
  {
    path: '/purposePage',
    name: 'Purpose Page',
    component: loadPage('PurposePage'),
    beforeEnter: authGuard
  },
  {
    path: '/businessPage',
    name: 'Business Page',
    component: loadPage('BusinessPage'),
    beforeEnter: authGuard
  },
  {
    path: '/searchPage',
    name: 'Search Page',
    component: loadPage('SearchPage')
  }
]

export const router = createRouter({
  linkActiveClass: 'router-link-active',
  linkExactActiveClass: 'router-link-exact-active',
  history: createWebHashHistory(),
  routes
})
