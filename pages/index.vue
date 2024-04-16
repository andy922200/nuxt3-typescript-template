<template>
  <div class="index__wrapper">
    <div class="test">
      <select id="locale-select" v-model="language">
        <option value="en-us">en-us</option>
        <option value="zh-tw">zh-tw</option>
      </select>

      <p class="hello">
        <span>{{ $t('route.helloWorld') }}</span>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Index',
}
</script>

<script setup lang="ts">
import { computed } from 'vue'
import { demoApis } from '~/apis/demo'
import { generateCustomHeader } from '~/utils/mixinTools'
import useStore from '@/store'
useHead(generateCustomHeader({ pageName: 'Test Index Page' }))

const { $dayjs } = useNuxtApp()
const { app } = useStore()
const language = computed({
  get: () => app.language,
  set: (lang: string) => {
    app.setLanguage(lang)
  },
})

// methods
const fetchData = async () => {
  const res1 = await demoApis.getADemo({ id: '1' })
  const res2 = await demoApis.postDemo({
    data: { userId: 1, title: 'Test Todo', completed: false },
  })
  const res3 = await demoApis.putDemo({
    id: '1',
    data: { userId: 1, title: 'Test Todo-PUT', completed: false, id: 1 },
  })
  const res4 = await demoApis.patchDemo({
    id: '1',
    data: { completed: true },
  })
  const res5 = await demoApis.deleteDemo({ id: '1' })

  console.log('res1', res1)
  console.log('res2', res2)
  console.log('res3', res3)
  console.log('res4', res4)
  console.log('res5', res5)
  console.log('dayjs check', $dayjs().format('YYYY-MM-DDTHH:mm:ss'))
}

fetchData()
</script>

<style scoped>
.hello {
  font-size: 24px;
  color: red;
}
</style>
