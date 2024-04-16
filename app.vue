<template>
  <NuxtLayout>
    <main>
      <NuxtPage />
    </main>
  </NuxtLayout>
</template>

<script lang="ts">
export default {
  name: 'App',
}
</script>

<script setup lang="ts">
import { onMounted } from 'vue'
import useStore from '@/store'
const { app } = useStore()
const initApp = () => {
  app.getLanguageBasedOnBrowser()
}

onMounted(() => {
  // avoid hydrate error between server and client
  initApp()
})
</script>
