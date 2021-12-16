<template>
  <div class="text-center w-100 py-16">
    <h1 class="font-bold text-7xl">Oeps...</h1>
    <h3 class="font-bold text-2xl mb-4">We kunnen deze pagina niet vinden.</h3>
    <NuxtLink to="/">Home page</NuxtLink>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  layout: 'error',
  head() {
    return {
      title: 'Er is iets fout gegaan',
    };
  },
});
</script>
