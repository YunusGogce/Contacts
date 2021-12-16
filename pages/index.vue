<template>
  <div>
    <intro />
    <div
      class="my-20 h-80 border-4 border-dashed border-gray-400 m-4 md:m-16"
    ></div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Intro from '../components/Intro.vue';

export default Vue.extend({
  components: { Intro },
  head() {
    return {
      title: 'Home',
    };
  },
});
</script>
