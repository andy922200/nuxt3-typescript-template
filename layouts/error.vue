<template>
  <div class="error-layout">
    <h1>There are some Error!</h1>
    <slot />
  </div>
</template>

<script lang="ts">
export default {
  name: 'ErrorLayout',
}
</script>

<script setup lang="ts">
/* import components */
</script>

<style scoped src="@/styles/error_layout.css" />
