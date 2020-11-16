<template lang="pug">
	.d-flex.flex-row.align-center.justify-center
		span.mr-4(:style="textStyle") {{count}}
		.heart(:class="{checked: isChecked}" @click="check")
			v-icon(:color="isChecked ? 'white' : '#ff7171'" small style="z-index: 100") emoji_objects



</template>

<script lang="ts">
	import { Component, Vue, Prop } from 'vue-property-decorator';

	@Component
	export default class IdeaLike extends Vue {
		@Prop({ type: Boolean, required: true }) private readonly isChecked!: boolean;
		@Prop({ type: Number, required: true }) private readonly count!: number;

		check() {
			this.$emit('check');
		}

		get textStyle() {
			return `color:${this.isChecked ? '#fc0202' : '#ff7171'}`;
		}
	}
</script>

<style lang="stylus">
	.checked
		opacity 1!important
	.heart {
		opacity 0.4
		position: relative;
		width: 37px;
		height: 20px;
		margin-top: 3px;
		display flex
		flex-direction row
		justify-content center
		align-items center
	}

	.heart::before, .heart::after {
		content: "";
		position: absolute;
		top: 0;
		width: 18px;
		height: 25px;
		border-radius: 50px 50px 0 0;
		background: red;
	}

	.heart::before {
		left: 18px;
		transform: rotate(-50deg);
		transform-origin: 0 100%;
	}

	.heart::after {
		left: 0;
		transform: rotate(50deg);
		transform-origin: 100% 100%;
	}
</style>
