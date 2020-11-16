import { Module } from 'vuex';

export interface IIdea {
	title: string;
	text: string;
	id: string;
	likesCount: number;
	liked: boolean;
}

interface IState {
	ideas: IIdea[];
}

export default (): Module<IState, any> => ({
	namespaced: true,
	state: {
		ideas: [],
	},
	mutations: {
		addIdea(state, idea: IIdea) {
			state.ideas.push(idea);
		},
		switchLike(state, id) {
			state.ideas = state.ideas.map(idea => idea.id === id ? { ...idea, liked: !idea.liked, likesCount: idea.liked ? idea.likesCount - 1 : idea.likesCount + 1 } : idea);
		},
	},
	actions: {
		addIdea({ commit }, idea: IIdea) {
			commit('addIdea', idea);
		},
		switchLike({ commit }, id: string) {
			commit('switchLike', id);
		},
	},
	getters: {
		allIdeas: ({ ideas }) => ideas,
	},
});
