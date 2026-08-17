<script setup lang="ts">
defineProps<{
  text: string
}>()
</script>

<template>
  <a href="#" class="text-lg sm:text-2xl transition-colors text-text-muted hover:text-black dark:hover:text-white!">{{ text }}</a>
</template>
