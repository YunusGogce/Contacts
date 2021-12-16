<template>
  <div>
    <div
      v-for="index in count"
      :key="index"
      class="border border-gray-200 bg-white p-4 w-full mx-auto"
    >
      <div class="animate-pulse flex space-x-4">
        <div class="flex-1 space-y-2 py-2">
          <div class="h-3 bg-gray-200 rounded w-1/6"></div>
          <div class="space-y-2">
            <div class="h-3 bg-gray-200 rounded w-3/12"></div>
            <div class="h-3 bg-gray-200 rounded w-2/6"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  props: {
    count: {
      type: Number,
      default: 1,
    },
  },
});
</script>
