<script setup lang="ts">
import { onMounted } from 'vue'

import useStore from '@/store'

defineOptions({
  name: 'App',
})

const { app } = useStore()
const initApp = () => {
  app.getLanguageBasedOnBrowser()
}

onMounted(() => {
  // avoid hydrate error between server and client
  initApp()
})
</script>

<template>
  <NuxtLayout>
    <main>
      <NuxtPage />
    </main>
  </NuxtLayout>
</template>
