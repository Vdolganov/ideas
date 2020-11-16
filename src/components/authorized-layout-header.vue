<template lang="pug">
	v-toolbar(dense dark)
		v-toolbar-title Goods ideas
		v-spacer
		v-menu.d-flex.flex-column(
			v-model="menuOpened"
			close-on-content-click
			offset-y)
			template(v-slot:activator="{ on }")
				v-btn(
					color="dark"
					v-on="on"
				)
					v-icon menu
			v-list
				v-list-item()
					div.d-flex.align-center
						v-icon logout
						span logout
</template>

<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator';

	@Component
	export default class AuthorizedLayoutHeader extends Vue {
		menuOpened = false
	}
</script>
