import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

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
        if (sessionStorage.getItem('jwt') != null) {
          next({ name: 'MainPage' });
        } else {
          next();
        }
      }
    },
    {
      path: '/main',
      name: 'MainPage',
      component: () => import('../views/MainPage.vue'),
      beforeEnter: (to, from, next) => {
        if (sessionStorage.getItem('jwt') == null) {
          next({ name: 'home' });
        } else {
          next();
        }
      }
    },
    {
      path: '/ForumPost',
      name: 'ForumPost',
      component : () => import('../views/ForumPost.vue'),
      beforeEnter: (to, from, next) => {
        if (sessionStorage.getItem('jwt') == null) {
          next({ name: 'home' });
        } else {
          next();
        }
      }
    },
    {
      path: '/profil',
      name: 'Profil',
      component: () => import('../views/Profil.vue'),
      beforeEnter: (to, from, next) => {
        if (sessionStorage.getItem('jwt') == null) {
          next({ name: 'home' });
        } else {
          next();
        }
      }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
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
