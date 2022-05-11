<script setup>
import CCard from '@/components/CCard.vue'
import CLink from '@/components/CLink.vue'
import { ref } from 'vue'
import projects from '@/projects.js'
import { useRoute } from 'vue-router'

const route = useRoute()
const currentProject = ref(
  projects.find((project) => project.id === +route.params.projectId)
)
</script>

<template>
  <main>
    <CCard>
      <template #title>
        <div class="flex">
          <span class="text-2xl sm:text-4xl">{{ currentProject.name }}</span>
          <span class="grow"></span>
          <RouterLink
            to="/"
            class="p-2 bg-white dark:bg-blacked rounded text-base cursor-pointer hover:bg-amber-500/75 dark:hover:bg-amber-800/75 duration-200">
            Back to Home
          </RouterLink>
        </div>
      </template>
      <template #footer>
        <CLink
          v-if="!currentProject.private"
          :url="currentProject.github"
          external>
          Project on github
        </CLink>
      </template>
      <span></span>
      <div class="flex">
        <span
          class="p-2 text-base cursor-pointer dark:bg-blacked bg-white rounded mr-2"
          v-for="technology of currentProject.stack"
          :key="technology">
          {{ technology }}
        </span>
      </div>
      <p class="text-base mt-2">{{ currentProject.description }}</p>
    </CCard>
  </main>
</template>
