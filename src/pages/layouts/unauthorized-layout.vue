<template lang="pug">
	div
		img(
			style="margin: 0 auto; display: block"
			alt="Vue logo"
			src="@/assets/goods.png"
			width="100"
		)
		router-view
</template>

<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator';

	@Component({
		components: {
		},
	})
	export default class Home extends Vue {}
</script>
