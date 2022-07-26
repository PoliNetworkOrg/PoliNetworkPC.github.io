import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	target: "static",
	head: {
		title: "PoliNetworkPC 💻",
		htmlAttrs: {
			lang: "en",
		},
		meta: [
			{ charset: "utf-8" },
			{ name: "viewport", content: "width=device-width, initial-scale=1" },
			{ hid: "description", name: "description", content: "" },
		],
		link: [{ rel: "icon", type: "image/x-icon", href: "/static/img/icon.png" }],
		script: [
			{
				src: "/jquery/jquery.min.js",
				type: "text/javascript",
			},
			{
				src: "/js/bootstrap.bundle.min.js",
				type: "text/javascript",
			},
			{
				src: "/js/custom.js",
				type: "text/javascript",
			},
		],
	},
	modules: [ "@nuxtjs/i18n"],
	i18n: {
		strategy: "prefix",
		langDir: "locales",
		locales: [
			{
				code: "en",
				iso: "en-US",
				file: "en.js",
				isCatchallLocale: true,
			},
			{
				code: "it",
				iso: "it-IT",
				file: "it.js",
			},
		],
		defaultLocale: "it",
		vueI18n: {
			fallbackLocale: "it",
		},
	},

	css: [
		"~/assets/bootstrap/bootstrap.css",
		"~/assets/bootstrap/style.css",
		"~/assets/css/style.css",
	],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,
});
