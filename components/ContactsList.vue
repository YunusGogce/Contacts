<template>
  <div>
    <div class="p-4 md:p-16">
      <div class="flex justify-between">
        <div class="self-center">
          <p
            v-if="message"
            class="italic"
            :class="message.type == 0 ? 'text-green-700' : 'text-blue-dark'"
          >
            {{ message.text }}
          </p>
        </div>
        <div>
          <NuxtLink to="/contacten/toevoegen">
            <button
              class="btn-add bg-blue px-6 py-3 mb-4 rounded-full text-white font-bold hover:bg-blue-hover"
            >
              Toevoegen
            </button>
          </NuxtLink>
        </div>
      </div>

      <skeleton-loader v-if="loading" :count="5" />

      <div v-if="!loading" role="region" aria-label="Contactenlijst">
        <div
          v-for="contact in contacts"
          :key="contact.id"
          class="contacts-list"
        >
          <div class="bg-white border p-4 flex flex-col md:flex-row">
            <div class="flex-1">
              <p class="font-bold break-words">
                {{ contact.name }}
              </p>
              <div class="break-all">
                <a v-if="contact.email" :href="`mailto:${contact.email}`">
                  <fa icon="envelope" class="text-gray-400 text-sm fa-fw" />
                  <span class="text-gray-500 text-sm mr-2">{{
                    contact.email
                  }}</span>
                </a>
              </div>
              <div class="break-all">
                <a v-if="contact.phone" :href="`tel:${contact.phone}`">
                  <fa icon="phone-alt" class="text-gray-400 text-sm fa-fw" />
                  <span class="text-gray-500 text-sm">{{ contact.phone }}</span>
                </a>
              </div>
              <div>
                <fa icon="user-alt" class="text-gray-400 text-sm fa-fw" />
                <span class="text-gray-500 text-sm">{{ contact.type }}</span>
              </div>
            </div>
            <div class="hidden md:block">
              <div class="btn-group-action flex-2 text-right">
                <NuxtLink
                  :to="{
                    path: '/contacten/wijzigen',
                    query: { cid: contact.id },
                  }"
                >
                  <button
                    class="btn-edit border-2 border-gray-500 text-gray-500 py-2 px-4 hover:bg-gray-200 rounded-full"
                  >
                    Wijzig
                  </button>
                </NuxtLink>
                <button
                  class="border-2 border-red-500 text-red-500 py-2 px-4 ml-2 hover:bg-gray-200 rounded-full"
                  @click="openDeleteModal(contact)"
                >
                  Verwijder
                </button>
              </div>
            </div>
            <!-- action buttons mobile -->
            <div class="flex-1 text-right md:hidden">
              <NuxtLink
                :to="{
                  path: '/contacten/wijzigen',
                  query: { cid: contact.id },
                }"
              >
                <button
                  class="bg-gray-200 py-1 px-2 hover:bg-gray-300 rounded-full"
                  aria-label="Contact wijzigen knop"
                >
                  <fa icon="pen" class="text-gray-500 text-sm fa-fw" />
                </button>
              </NuxtLink>
              <button
                class="bg-red-200 py-1 px-2 ml-2 hover:bg-red-300 rounded-full"
                aria-label="Contact verwijderen knop"
                @click="openDeleteModal(contact)"
              >
                <fa icon="trash" class="text-red-500 text-sm fa-fw" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <p class="text-right italic mt-12 text-gray-400 text-sm">
        [TODO: pagination]
      </p>
    </div>

    <delete-modal
      v-if="showModal"
      :contact="selectedContact"
      @close-modal="closeModal"
    />
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import ContactsDataService from '../services/ContactsDataService';
import IContact from '../models/IContact';
import SkeletonLoader from './SkeletonLoader.vue';
import DeleteModal from './DeleteModal.vue';
import IMessage from '~/models/IMessage';
import MessageType from '~/models/MessageType';

export default Vue.extend({
  components: { SkeletonLoader, DeleteModal },
  data() {
    return {
      contacts: [] as IContact[],
      loading: true as boolean,
      showModal: false as boolean,
      selectedContact: {} as IContact,
      message: null as IMessage | null,
    };
  },
  mounted() {
    this.getContacts();
    this.showMessage();
  },
  methods: {
    async getContacts(): Promise<void> {
      const contactsData = await ContactsDataService.getAll();
      this.contacts = contactsData;
      this.loading = false;

      if (this.contacts == null || this.contacts.length < 1) {
        const msg: IMessage = {
          text: 'Er zijn nog geen contacten',
          type: MessageType.Info,
        };
        this.message = msg;
      }
    },
    // opens delete confirmation modal
    openDeleteModal(contact: IContact): void {
      this.selectedContact = contact;
      this.showModal = true;
    },
    // closes delete confirmation modal and show success message
    closeModal(deleted: boolean, message: IMessage): void {
      this.showModal = false;
      if (deleted) {
        this.getContacts();
        this.$route.params.message = JSON.stringify(message);
        this.showMessage();
      }
    },
    // show message for 5 seconds
    showMessage(): void {
      const params = this.$route.params;
      if (params.message) {
        this.message = JSON.parse(params.message);
        setTimeout(() => {
          this.message = null;
        }, 5000);
      }
    },
  },
});
</script>
