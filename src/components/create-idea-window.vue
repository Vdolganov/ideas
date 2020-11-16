<template lang="pug">
	v-dialog(
		ref="menu"
		v-model="ideasWindowOpened"
		:close-on-content-click="false"
		transition="scale-transition"
		@input="time = null"
		offset-y
		max-width="800px"
	)
		template(v-slot:activator="{ on, attrs }")
			v-btn.mb-5(
				v-on="on"
				color="dark"
			) Создать
		v-card
			v-card-title Создать новую идею
			v-form.pa-10
				v-text-field(
					label="Заголовок"
					v-model="title"
				)
				v-textarea(
					label="Опишите идею"
					v-model="text"
				)
				v-btn( @click="save") Создать
</template>

<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator';
	import { namespace } from 'vuex-class';
	import { IIdea } from '@/store/modules/ideas';
	const IdeasNamespace = namespace('ideas');

	@Component
	export default class CreateIdeaWindow extends Vue {
		@IdeasNamespace.Action('addIdea') addIdea!: (idea: IIdea) => void;
		ideasWindowOpened = false;
		text = '';
		title = '';
		save() {
			this.addIdea(
				{
					title: this.title,
					text: this.text,
					liked: false,
					likesCount: 0,
					id: Math.random().toString(),
				}
			);
			this.ideasWindowOpened = false;
		}
	}
</script>

