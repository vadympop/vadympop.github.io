<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import {Icon} from "@iconify/vue";
import {CONTACTS} from "../../config/contacts.config.ts";

const isOpen = ref<boolean>(false)
const menuRef = ref<HTMLElement | null>(null)
const triggerRef = ref<HTMLElement | null>(null)

function toggleMenu(): void {
  isOpen.value = !isOpen.value
}

function closeMenu(): void {
  isOpen.value = false
}

function handleClickOutside(event: MouseEvent): void {
  const target = event.target as Node

  if (
      menuRef.value &&
      triggerRef.value &&
      !menuRef.value.contains(target) &&
      !triggerRef.value.contains(target)
  ) {
    closeMenu()
  }
}

onMounted(() => document.addEventListener('click', handleClickOutside))
onUnmounted(() => document.removeEventListener('click', handleClickOutside))
</script>

<template>
  <div class="relative inline-block text-left">
    <button
        ref="triggerRef"
        @click="toggleMenu"
        class="text-lg flex items-center sm:text-2xl transition-colors text-text-muted hover:text-black dark:hover:text-white!"
    >
      Contacts
      <Icon class="transition-transform" :class="{ 'rotate-180': isOpen }" width="24px" icon="mdi-light:chevron-up" />
    </button>

    <!-- Menu -->
    <transition
        enter-active-class="transition ease-out duration-100"
        enter-from-class="transform opacity-0 scale-95"
        enter-to-class="transform opacity-100 scale-100"
        leave-active-class="transition ease-in duration-75"
        leave-from-class="transform opacity-100 scale-100"
        leave-to-class="transform opacity-0 scale-95"
    >
      <div
          v-if="isOpen"
          ref="menuRef"
          class="absolute rounded-xs inset-shadow-sm z-10 -top-15 p-1 origin-bottom-right bg-black dark:bg-white focus:outline-none"
      >
        <div class="py-1 px-2 flex space-x-2 text-white dark:text-black">
          <a v-for="contact in CONTACTS" :href="contact.link">
            <Icon width="34px" :icon="contact.icon"/>
          </a>
        </div>
      </div>
    </transition>
  </div>
</template>