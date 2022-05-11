<script setup>
import { RouterView } from 'vue-router'
import { ref, onMounted } from 'vue'

const currentTheme = ref('')
onMounted(() => {
  if (
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    document.documentElement.classList.add('dark')
    currentTheme.value = 'dark'
  } else {
    document.documentElement.classList.remove('dark')
    currentTheme.value = 'light'
  }
})
function changeTheme() {
  if (localStorage.theme === 'dark') {
    localStorage.theme = 'light'
    currentTheme.value = 'light'
    document.documentElement.classList.remove('dark')
  } else {
    currentTheme.value = 'dark'
    localStorage.theme = 'dark'
    document.documentElement.classList.add('dark')
  }
}
</script>

<template>
  <span class="right-light"></span>
  <span class="left-light"></span>
  <span
    @click="changeTheme"
    class="cursor-pointer rounded-full w-16 h-16 absolute top-3 right-3 bg-white-soft dark:bg-black-mute text-lg flex items-center justify-center">
    <mdicon v-if="currentTheme === 'dark'" name="white-balance-sunny"></mdicon>
    <mdicon v-else name="moon-waxing-crescent"></mdicon>
  </span>
  <RouterView class="mt-10" />
</template>

<style>
#app {
  margin: 0 auto;
  padding: 4em 2em;
  min-height: 100vh;
  font-weight: normal;
  @apply bg-white dark:bg-blacked;
}

.right-light {
  position: absolute;
  top: 0;
  left: 0;
  animation: redFlicker infinite ease-in-out 10s;
}

.left-light {
  position: absolute;
  bottom: 0;
  right: 0;
  box-shadow: 0 0 5000px 150px orange;
  animation: orangeFlicker infinite ease-in-out 10s;
  animation-delay: 5s;
}

@keyframes orangeFlicker {
  0% {
    box-shadow: 0 0 10000px 200px orange;
  }
  50% {
    box-shadow: 0 0 10000px 100px orange;
  }
  100% {
    box-shadow: 0 0 10000px 200px orange;
  }
}

@keyframes redFlicker {
  0% {
    box-shadow: 0 0 10000px 200px red;
  }
  50% {
    box-shadow: 0 0 10000px 100px red;
  }
  100% {
    box-shadow: 0 0 10000px 200px red;
  }
}
</style>
