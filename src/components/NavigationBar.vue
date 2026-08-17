<script setup lang="ts">
import ContactLink from "./buttons/ContactLink.vue";
import SectionShortcut from "./buttons/SectionShortcut.vue";
import {CONTACTS} from "../config/contacts.config.ts";
import ContactsDropdown from "./menus/ContactsDropdown.vue";
</script>

<template>
  <nav class="navigation-bar__container fixed -bottom-10 left-0 sm:px-15 px-5">
    <div class="navigation-bar py-4 sm:py-7 flex">
      <div class="sm:flex space-x-10 hidden">
        <ContactLink
            v-for="contact in CONTACTS"
            :text="contact.name"
            :link="contact.link"
            :key="contact.name"
        />
      </div>
      <span class="max-sm:hidden" style="flex-grow: 1"></span>
      <div class="flex justify-between sm:space-x-12 w-100 sm:w-auto">
        <ContactsDropdown class="flex sm:hidden"/>
        <SectionShortcut text="Experience"/>
        <SectionShortcut text="Projects"/>
      </div>
    </div>
  </nav>
</template>

<style scoped>
  .navigation-bar__container {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100vw;
  }

  .navigation-bar {
    border-top: 1px var(--secondary-color) solid;
  }
</style>