<template>
  <div
    class="modal-overlay fixed p-4 top-0 bottom-0 left-0 right-0"
    @click="$emit('close-modal')"
  >
    <div
      class="modal bg-white w-fit h-fit m-auto text-center rounded-xl py-16 px-8"
      @click.stop
    >
      <p>
        Weet je zeker dat je <b>{{ contact.name }}</b> wilt verwijderen?
      </p>
      <div class="flex justify-between mt-10 md:px-4 btn-group-modal">
        <button
          class="bg-gray-500 text-white py-2 px-4 hover:bg-gray-600 rounded-full btn-cancel"
          @click="$emit('close-modal', false)"
        >
          Annuleer
        </button>
        <button
          class="bg-red-500 text-white py-2 px-4 hover:bg-red-600 rounded-full btn-confirm"
          @click="deleteContact"
        >
          Verwijder
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import IContact from '~/models/IContact';
import IMessage from '~/models/IMessage';
import ContactsDataService from '~/services/ContactsDataService';

export default Vue.extend({
  props: {
    contact: {
      type: Object as () => IContact,
      default: () => {},
    },
  },
  methods: {
    async deleteContact(): Promise<void> {
      const result: IMessage = await ContactsDataService.delete(
        this.$props.contact.id
      );
      // send result back to ContactList
      this.$emit('close-modal', true, result);
    },
  },
});
</script>

<style scoped>
.modal-overlay {
  display: flex;
  justify-content: center;
  background-color: #000000da;
}
</style>
