import Vue from 'vue'
import VueRouter from 'vue-router'
import Movies from '../views/Movies.vue'
import MovieAdd from '../views/MovieAdd.vue'
import MovieEdit from '../views/MovieEdit.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/movies',
    name: 'Movies',
    component: Movies
  },
  {
    path: '/movieAdd',
    name: 'MovieAdd',
    component: MovieAdd
  },
  {
    path: '/movieEdit',
    name: 'MovieEdit',
    component: MovieEdit
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
