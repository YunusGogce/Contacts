<template>
  <div>
    <titlebar title="Contacten" />
    <contacts-list />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import ContactsList from '~/components/ContactsList.vue';
import Titlebar from '~/components/Titlebar.vue';
export default Vue.extend({
  components: { ContactsList, Titlebar },
  head() {
    return {
      title: 'Contacten',
    };
  },
});
</script>
