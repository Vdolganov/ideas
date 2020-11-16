<template lang="pug">
	v-container
		v-form(
			ref="form"
			v-model="formValid"
			lazy-validation
		)
			.form-container
				.pb-5
					h1.h1 Регистрация
				div
					v-text-field(
						required
						label="email"
						v-model="email"
						:rules="[validationRules.goodsEmail, validationRules.required]"
					)
					v-text-field(
						required
						label="password"
						v-model="password"
						:rules="[validationRules.minLength8, validationRules.required]"
						type="password"
					)
					span Уже есть профиль?
						router-link(:to="{name: 'auth'}") Авторизация
				v-btn(
					:disabled="formDisabled"
					@click="save"
				) Sign in
</template>

<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator';
	import { goodsEmail, minLength, required } from '@/utils/validation-functions';

	@Component
	export default class Authorization extends Vue {
		email = '';
		password = '';
		formValid = true;
		validationRules = {
			goodsEmail,
			minLength8: minLength(8),
			required,
		}
		$refs!: {
			form: Vue & { reset: () => void, validate: () => boolean };
		}
		get formDisabled() {
			return !this.formValid;
		}
		reset() {
			this.$refs.form.reset();
		}
		validate() {
			return this.$refs.form.validate();
		}
		save() {
			const valid = this.validate();
			if(!valid) return;
			// eslint-disable-next-line no-console
			console.log(this.password, this.email);
		}
	}
</script>

<style lang="stylus">
	.form-container
		padding 20px
		box-shadow 1px 1px 4px gray
		width 800px
		margin 0 auto
		border-radius 5px
		height 350px
		display flex
		flex-direction column
		justify-content space-between
</style>
