<template>
  <div class="empty-layout">
    <slot />
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'EmptyLayout',
})
</script>

<style scoped src="@/styles/empty_layout.css" />
