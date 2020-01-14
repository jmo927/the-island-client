import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Blog from '../views/Blog.vue'
import NewBlogPost from '../views/NewBlogPost'
import EditBlogPost from '../views/EditBlogPost'
import AdminBlog from '../views/Admin'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/blog',
    name: 'blogspace',
    component: Blog
  },
  {
    path: '/blog/new',
    name: 'newblog',
    component: NewBlogPost
  },
  {
    path: '/blog/edit/:id',
    name: 'editblog',
    component: EditBlogPost
  },
  {
    path: '/blog/admin',
    name: 'blogadmin',
    component: AdminBlog
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
