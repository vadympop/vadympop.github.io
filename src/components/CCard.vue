<script setup>
  import {defineProps} from 'vue'

defineProps({
    minHeight: {
        type: String,
        default: '300px'
    }
  })
</script>

<template>
  <div
    class="flex flex-col bg-white-soft dark:bg-black-soft p-4 rounded mx-auto w-100 md:w-3/4 lg:w-1/2"
    :style="{minHeight}">
    <div>
      <slot name="title"></slot>
    </div>
    <div class="mt-4">
      <slot></slot>
    </div>
    <div class="mt-auto">
      <slot name="footer"></slot>
    </div>
  </div>
</template>
