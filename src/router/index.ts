import Vue from 'vue';
import VueRouter from 'vue-router';
import AuthorizedLayout from '@/pages/layouts/authorized-layout.vue';
import IdeasList from '@/pages/ideas-list.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'authorized',
		component: AuthorizedLayout,
		redirect: { name: 'ideas-list' },
		children: [
			{
				path: '/ideas',
				name: 'ideas-list',
				component: IdeasList,
			},
		],
	},
	{
		path: '/unauthorized',
		name: 'unauthorized',
		component: () => import(/* webpackChunkName: "unauthorized" */ '../pages/layouts/unauthorized-layout.vue'),
		redirect: { name: 'auth' },
		children: [
			{
				path: 'auth',
				name: 'auth',
				component: () => import(/* webpackChunkName: "authorization" */ '../pages/authorization.vue'),
			},
			{
				path: 'registration',
				name: 'registration',
				component: () => import(/* webpackChunkName: "authorization" */ '../pages/registration.vue'),
			},
		],
	},
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

export default router;
