<template>
  <div class="h-14 bg-blue-dark drop-shadow-md flex">
    <div class="container m-auto px-8 lg:px-0">
      <h2 class="text-white font-bold text-xl inline-block align-middle">
        {{ title }}
      </h2>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  props: {
    title: {
      type: String,
      default: '',
      required: true,
    },
  },
});
</script>
