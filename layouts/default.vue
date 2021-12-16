<template>
  <div>
    <div class="flex justify-center bg-white">
      <NuxtLink to="/">
        <img
          alt="logo"
          src="../assets/images/logo.png"
          class="h-20 m-2 cursor-pointer"
        />
      </NuxtLink>
    </div>
    <navbar />
    <main>
      <Nuxt />
    </main>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Navbar from '~/components/Navbar.vue';
export default Vue.extend({
  components: {
    Navbar,
  },
});
</script>

Navbar
