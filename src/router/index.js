import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotFound from '../views/NotFound.vue'
import JobsView from '../views/jobs/JobsView.vue'
import JobsDetailView from '../views/jobs/JobsDetailView.vue'

const routes = [
	{
		path: "/",
		name: "home",
		component: HomeView,
	},
	{
		path: "/about",
		name: "about",
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
	},
	{
		path: "/jobs",
		name: "jobs",
		component: JobsView,
	},
	{
		path: "/jobs/:id",
		name: "jobsDetail",
		component: JobsDetailView,
    props: true
	},
  // redirect
  {
    path: "/jobs-all",
    redirect: '/jobs'
  },
  // catchall
  {
    path:'/:catchAll(.*)',
    name:'notFound',
    component: NotFound
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
