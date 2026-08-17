<script setup lang="ts">
import { Icon } from "@iconify/vue";

defineProps<{
  text: string,
  link: string,
}>();
</script>

<template>
  <div class="relative">
    <a :href="link" class="text-2xl">{{ text }}</a>
    <Icon class="absolute -top-2 -right-4" width="24" color="var(--secondary-color)" icon="mdi:cursor-default-click-outline" />
  </div>
</template>