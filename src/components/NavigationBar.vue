<script setup lang="ts">
import ContactLink from "./buttons/ContactLink.vue";
import SectionShortcut from "./buttons/SectionShortcut.vue";
import {CONTACTS} from "../config/contacts.config.ts";
</script>

<template>
  <div class="navigation-bar__container">
    <div class="navigation-bar flex">
      <div class="flex space-x-10">
        <ContactLink
            v-for="(contact_link, contact_text) in CONTACTS"
            :text="contact_text"
            :link="contact_link"
            :key="contact_text"
        />
      </div>
      <span style="flex-grow: 1"></span>
      <div class="flex space-x-12">
        <SectionShortcut text="Experience"/>
        <SectionShortcut text="Projects"/>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .navigation-bar__container {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100vw;
    padding: 0 70px;
  }

  .navigation-bar {
    padding: 20px 0;
    border-top: 1px var(--secondary-color) solid;
  }
</style>