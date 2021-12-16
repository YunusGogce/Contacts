<template>
  <div>
    <titlebar title="Contact wijzigen" />
    <contact-edit />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import ContactEdit from '~/components/ContactEdit.vue';
import Titlebar from '~/components/Titlebar.vue';

export default Vue.extend({
  components: { ContactEdit, Titlebar },
  head() {
    return {
      title: 'Contact wijzigen',
    };
  },
});
</script>
