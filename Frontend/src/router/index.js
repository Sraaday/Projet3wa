import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import APICall from '../components/APICall/APICall.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/register',
      name: 'Register',
      component: () => import('../views/Register.vue'),
      beforeEnter: (to, from, next) => {
        if (!APICall.methods.isSetToken())
          next({ name: 'MainPage' });
         next();
      }
    },
    {
      path: '/main',
      name: 'MainPage',
      component: () => import('../views/MainPage.vue'),
      beforeEnter: (to, from, next) => {
        if (!APICall.methods.isSetToken())
          next({ name: 'home' });
        next();
      }
    },
    {
      path: '/ForumPost',
      name: 'ForumPost',
      component : () => import('../views/ForumPost.vue'),
      beforeEnter: (to, from, next) => {
        if (!APICall.methods.isSetToken())
          next({ name: 'home' });
        next();
      }
    },
    {
      path: '/profil',
      name: 'Profil',
      component: () => import('../views/Profil.vue'),
      beforeEnter: (to, from, next) => {
        if (!APICall.methods.isSetToken())
          next({ name: 'home' });
        next();
      }
    },
    {
      path: '/admin',
      name: 'Admin',
      component: () => import('../views/AdminPanel.vue'),
      beforeEnter: (to, from, next) => {
        if (!APICall.methods.isSetToken())
          next({ name: 'home' });
        if (!APICall.methods.isAdmin())
          next({name: 'home'})//rechanger 
        next();
      }
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('../components/Connexion/Inscription.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../components/Connexion/Connexion.vue')
    }
  ]
})

export default router
