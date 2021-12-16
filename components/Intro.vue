<template>
  <div class="w-100 h-100 bg-blue md:p-16">
    <div class="container mx-auto">
      <div class="bg-white p-16 md:rounded-lg lg:w-1/2 md:w-full">
        <h1 class="text-4xl md:text-5xl xl:text-7xl font-bold mb-4">
          Contacten
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit
          nulla a convallis semper. Curabitur turpis massa, dignissim sit amet
          fringilla in, venenatis sit amet dolor. Maecenas erat nunc, sagittis
          non euismod nec, tristique quis tellus.
        </p>
        <NuxtLink to="/contacten">
          <button
            class="bg-blue mt-4 px-12 py-5 rounded-full text-xl text-white font-bold"
          >
            Bekijken
          </button>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({});
</script>
