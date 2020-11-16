import Vue from 'vue';
import Vuex, { Module } from 'vuex';
import ideas from '@/store/modules/ideas';

Vue.use(Vuex);

const initStore = () => {
	const modules: { [namespace: string]: Module<any, any> } = {
		ideas: ideas(),
	};
	return new Vuex.Store({
		modules,
	});
};

export const store = initStore();


