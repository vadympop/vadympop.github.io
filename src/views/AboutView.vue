<script setup>
import CCard from '../components/CCard.vue'
</script>

<template>
  <main>
    <CCard>
      <template #title>
        <div class="flex">
          <span class="text-2xl sm:text-4xl">About me</span>
          <span class="grow"></span>
          <RouterLink
            to="/"
            class="p-2 bg-white dark:bg-blacked rounded text-base cursor-pointer hover:bg-amber-500/75 dark:hover:bg-amber-800/75 duration-200">
            Back to Home
          </RouterLink>
        </div>
      </template>
      <p class="text-base">Text about me will come in future</p>
    </CCard>
  </main>
</template>
