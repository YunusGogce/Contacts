<template>
  <div>
    <titlebar title="Contact toevoegen" />
    <contact-add />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import ContactAdd from '~/components/ContactAdd.vue';
import Titlebar from '~/components/Titlebar.vue';

export default Vue.extend({
  components: { ContactAdd, Titlebar },
  head() {
    return {
      title: 'Contact toevoegen',
    };
  },
});
</script>
