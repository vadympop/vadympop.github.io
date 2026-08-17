<script setup lang="ts">
import { Icon } from "@iconify/vue"
import CVButton from "./buttons/CVButton.vue";
import {SKILLS} from "../config/skills.config.ts";
import {BIO} from "../config/bio.config.ts";
</script>

<template>
  <section class="page-section">
    <div class="lg:pt-40 md:pt-20 pt-10">
      <h2 class="skranji-regular text-7xl">Hi,</h2>
      <h1 class="skranji-regular text-7xl my-5">I'm Vadym</h1>
      <span class="skranji-regular text-4xl">{{BIO.position}}</span>
      <div class="skranji-regular text-text-muted flex items-center text-2xl my-3">
        <Icon width="28px" icon="mdi-location"/>
        <span>{{BIO.location}}</span>
      </div>
      <div class="main-stack text-3xl mb-6">
        <span class="mr-5" v-for="tech in SKILLS.briefList">{{ tech }}</span>
      </div>
      <CVButton/>
    </div>
  </section>
</template>