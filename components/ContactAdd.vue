<template>
  <div class="p-4 md:p-16">
    <div class="flex justify-between">
      <NuxtLink to="/contacten">
        <button
          class="border-blue border-2 px-6 py-3 mb-4 rounded-full text-blue font-bold hover:bg-gray-200"
        >
          Terug
        </button>
      </NuxtLink>
      <!-- start: Simpel / Geavanceerd switch -->
      <div class="flex items-center mr-4">
        <div
          v-for="(tab, index) in tabs"
          :key="index"
          aria-label="Formulier type"
        >
          <button
            class="cursor-pointer py-2 px-4 text-gray-600 border-b-2 border-gray-300"
            :class="activeTab === index ? 'text-blue border-blue' : ''"
            @click="setFormType(index)"
          >
            {{ tab }}
          </button>
        </div>
      </div>
      <!-- end: Simpel / Geavanceerd switch -->
    </div>
    <div class="mt-5 md:mt-0 md:col-span-2">
      <form action="#" method="POST" @submit.prevent="createContact">
        <div class="shadow overflow-hidden sm:rounded-md">
          <div class="px-4 py-5 bg-white sm:p-6">
            <div class="grid grid-cols-6 gap-6">
              <div class="col-span-6 sm:col-span-3">
                <label
                  for="name"
                  class="block text-sm font-medium text-gray-700"
                  >Naam*</label
                >
                <input
                  v-model="contact.name"
                  name="name"
                  aria-label="Naam invoerveld verplicht"
                  type="text"
                  maxlength="50"
                  class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  required
                  :disabled="loading"
                />
              </div>

              <div class="col-span-6 sm:col-span-3">
                <label
                  for="name"
                  class="block text-sm font-medium text-gray-700"
                  >Type*</label
                >
                <select
                  v-model="contact.type"
                  name="type"
                  aria-label="Contact type selecteren verplicht"
                  class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  required
                  :disabled="loading"
                >
                  <option value=""></option>
                  <option>Werk</option>
                  <option>Privé</option>
                </select>
              </div>

              <div v-if="activeTab === 1" class="col-span-6 sm:col-span-3">
                <label
                  for="phone-number"
                  class="block text-sm font-medium text-gray-700"
                  >Telefoonnummer</label
                >
                <input
                  v-model="contact.phone"
                  name="phone"
                  aria-label="Telefoonnummer invoerveld"
                  type="number"
                  class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  :disabled="loading"
                />
              </div>

              <div v-if="activeTab === 1" class="col-span-6 sm:col-span-3">
                <label
                  for="email-address"
                  class="block text-sm font-medium text-gray-700"
                  >E-mailadres</label
                >
                <input
                  v-model="contact.email"
                  name="email"
                  aria-label="E-mailadres invoerveld"
                  type="email"
                  class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  :disabled="loading"
                />
              </div>
            </div>
          </div>
          <div class="px-4 py-3 bg-gray-50 flex justify-between">
            <div class="self-center">
              <p v-if="errorMessage" class="italic text-red-600">
                {{ errorMessage.text }}
              </p>
            </div>
            <button
              type="submit"
              class="btn-add px-6 py-3 font-bold rounded-full text-white bg-blue hover:bg-blue-hover focus:outline-none"
              :disabled="loading"
            >
              Voeg toe
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import ContactsDataService from '../services/ContactsDataService';
import IContact from '../models/IContact';
import MessageType from '~/models/MessageType';
import IMessage from '~/models/IMessage';
import validation from '~/shared/validation';

export default Vue.extend({
  data() {
    return {
      contact: {} as IContact,
      activeTab: 0 as number,
      tabs: ['Simpel', 'Geavanceerd'],
      errorMessage: null as IMessage | null,
      loading: false as boolean,
    };
  },
  methods: {
    async createContact(): Promise<void> {
      // check for required fiels and email format
      const valid = validation.validateForm(this.contact);
      if (valid.result) {
        this.loading = true;
        const result: IMessage = await ContactsDataService.create(this.contact);

        if (result.type === MessageType.Error) {
          this.errorMessage = result;
          this.loading = false;
          return;
        }

        // send user back to ContactList and show success message
        this.$router.push({
          name: 'contacten',
          params: {
            message: JSON.stringify(result),
          },
        });
      } else {
        // show reason of error
        const message: IMessage = {
          type: MessageType.Error,
          text: valid.reason,
        };
        this.errorMessage = message;
      }
    },
    // set form type and clear fields when switching
    setFormType(index: number): void {
      this.activeTab = index;
      this.contact.phone = null;
      this.contact.email = null;
    },
  },
});
</script>
