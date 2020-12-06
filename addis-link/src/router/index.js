import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/meetups',
    name: 'Meetups',
    component: () => import('@/components/MeetUp/MeetUps.vue')
  },
  {
    path: '/meetup/new',
    name: 'CreateMeetUp',
    component: () => import('@/components/MeetUp/CreateMeetUps.vue')
  },
  // user
  {
    path: '/user/new',
    name: 'Signup',
    component: () => import('@/components/User/Signup.vue')
  },
  {
    path: '/user/login',
    name: 'Signin',
    component: () => import('@/components/User/Signin.vue')
  },
  {
    path: '/user/profile',
    name: 'Profile',
    component: () => import('@/components/User/Profile.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
