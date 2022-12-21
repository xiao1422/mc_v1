<!--
 * @Author: xiao
 * @Date: 2022-12-21 18:10:14
 * @LastEditTime: 2022-12-21 18:48:23
 * @LastEditors: xiao
 * @Description: xiao
 * @FilePath: \WWW\study\mc_v1\src\plugins\svgIcons\svgIcons.vue
-->
<template>
	<svg class="svg-icon" aria-hidden="true">
		<use :xlink:href="iconName"></use>
	</svg>
</template>

<script setup>
import { defineProps, computed } from 'vue'
const props = defineProps({
	icon: {
		type: String,
		required: true
	}
})

const iconName = computed(() => {
	return `#icon-${props.icon}`
})
</script>

<style lang="scss" scoped>
.svg-icon {
	width: 1em;
	height: 1em;
	vertical-align: -0.15em;
	fill: currentColor;
	overflow: hidden;
}
</style>
