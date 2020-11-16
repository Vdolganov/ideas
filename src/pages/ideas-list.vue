<template lang="pug">
	.pa-10
		create-idea-window
		div(v-if="allIdeas.length")
			idea-card(
				v-for="item in allIdeas"
				:key="item.id"
				:liked="item.liked"
				:title="item.title"
				:text="item.text"
				:likes-count="item.likesCount"
				:id="item.id"
				@switch-like="switchLike"
			)
		v-card.pa-10(v-else)
			h4.text-h4 Нет идей. Будете первым?
</template>

<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator';
	import { namespace } from 'vuex-class';
	import IdeaCard from '@/components/idea-card.vue';
	import CreateIdeaWindow from '@/components/create-idea-window.vue';
	import { IIdea } from '@/store/modules/ideas';
	const IdeasNamespace = namespace('ideas');

	@Component({
		components: {
			IdeaCard,
			CreateIdeaWindow,
		},
	})
	export default class IdeasList extends Vue {
		@IdeasNamespace.Action('switchLike') switchLike!: (id: string) => void;
		@IdeasNamespace.Getter('allIdeas') allIdeas!: (idea: IIdea) => IIdea[];
	}
</script>

<style lang="stylus">
	.cards-list
		border 1px solid gray
		padding 10px
</style>
