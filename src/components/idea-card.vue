<template lang="pug">
	v-card.pa-5.mb-5
		v-card-title {{title}}
		v-card-text {{text}}
		.d-flex.flex-row.justify-end
			idea-like(:is-checked="liked" :count="likesCount" @check="onCheck")


</template>

<script lang="ts">
	import { Component, Vue, Prop } from 'vue-property-decorator';
	import IdeaLike from '@/components/idea-like.vue';

	@Component({
		components: { IdeaLike },
	})
	export default class IdeaCard extends Vue {
		@Prop({ type: String, required: true }) private readonly title!: string;
		@Prop({ type: String, required: true }) private readonly text!: string;
		@Prop({ type: Number, required: true }) private readonly likesCount!: number;
		@Prop({ type: Boolean, required: true }) private readonly liked!: boolean;
		@Prop({ type: String, required: true }) private readonly id!: string;

		onCheck() {
			this.$emit('switch-like', this.id);
		}

	}
</script>

<style lang="stylus">
	.idea-card
		margin-bottom 5px
		border-radius 5px
		border 1px solid lightgray
		padding 10px
</style>
