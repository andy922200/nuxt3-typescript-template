<template>
  <div class="default-layout">
    <slot />
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'DefaultLayout',
})
</script>

<style scoped src="@/styles/default_layout.css" />
