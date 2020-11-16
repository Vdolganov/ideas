<template lang="pug">
	div
		authorized-layout-header
		router-view
</template>

<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator';
	import AuthorizedLayoutHeader from '@/components/authorized-layout-header.vue';

	@Component({
		components: { AuthorizedLayoutHeader },
	})
	export default class AuthorizedLayout extends Vue {}
</script>
