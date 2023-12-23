import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import LoginView from '../views/LoginView.vue'
import DashboardView from '../views/DashboardView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      requireAuth: false,
    }
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
    meta: {
      requireAuth: false,
    }
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
    meta: {
      requireAuth: false,
    }
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: DashboardView,
    meta: {
      requireAuth: true,
      // role: 'admin'
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


// esto es la guarda para no permitir que si no esta autenticado no puede entrar a las otras vistas
router.beforeEach((to, from, next) => {
  // to and from are both route objects. must call `next`.
  //const auth = // depende donde tengamos los datos de usuario para saber si esta autenticado o no.

  const auth = false
  const needAuth = to.meta.requireAuth

  if (needAuth && !auth) {
    next('login')
  }else{
    next()
  }
})

export default router
