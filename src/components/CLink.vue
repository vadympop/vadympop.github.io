<script setup>
  defineProps({
    url: {
      type: Number,
        required: true
    },
    external: {
      type: Boolean,
      default: false
    }
  })
</script>

<template>
  <RouterLink
    v-if="!external"
    :to="url"
    class="text-blue-500 hover:text-blue-800 font-medium duration-100">
    <slot></slot>
  </RouterLink>
  <a
    v-else
    :href="url"
    class="text-blue-500 hover:text-blue-800 font-medium duration-100">
    <slot></slot>
  </a>
</template>
