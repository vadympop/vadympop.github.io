<script setup>
import { RouterLink } from 'vue-router'
import CCard from '../components/CCard.vue'
import CLink from '../components/CLink.vue'
import { ref } from 'vue'
import projects from '../projects'

const info = ref({
  firstName: 'Vadym',
  lastName: 'Popovych',
  github: 'https://github.com/VadyChel',
  email: 'zyzel19@gmail.com',
  shortBio:
    "I am a detail-oriented and demanding to yourself Junior Developer who enjoys learning new skills and troubleshooting complex problems. Always focused on goals and code style. Now I'm intensively learning Nuxt.js, Vue.js and Fastify."
})
const projectsList = ref(projects)
</script>

<template>
  <main>
    <CCard>
      <template #title>
        <span class="text-2xl sm:text-4xl">
          {{ info.firstName }} {{ info.lastName }}
        </span>
      </template>
      <div class="flex flex-wrap">
        <a
          :href="info.github"
          class="m-1 flex p-2 rounded bg-white dark:bg-blacked align-middle hover:bg-amber-500/75 dark:hover:bg-amber-800/75 duration-200">
          <mdicon name="github"></mdicon>
          <span class="text-lg ml-2">VadyChel</span>
        </a>
        <a
          :href="`mailto:${info.email}`"
          class="m-1 flex p-2 rounded bg-white dark:bg-blacked align-middle hover:bg-amber-500/75 dark:hover:bg-amber-800/75 duration-200">
          <mdicon name="email"></mdicon>
          <span class="text-lg ml-2">{{ info.email }}</span>
        </a>
      </div>
      <div class="mt-2 mb-4 text-base">
        <p>{{ info.shortBio }}</p>
        <CLink url="/about">More about me</CLink>
      </div>

      <span class="text-2xl">Projects</span>
      <div
        class="flex mt-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <RouterLink
          :to="`/projects/${project.id}`"
          v-for="project of projectsList"
          :key="project.name"
          class="p-4 bg-white dark:bg-blacked rounded hover:scale-105 duration-200 cursor-pointer">
          <span class="text-lg">{{ project.name }}</span>
          <p class="text-sm">{{ project.brief }}</p>
        </RouterLink>
      </div>
    </CCard>
  </main>
</template>
