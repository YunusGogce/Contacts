<template>
  <nav class="bg-white border-b border-gray-300">
    <div class="w-full container mx-auto">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center">
          <div class="hidden md:block">
            <div class="flex items-baseline">
              <NuxtLink to="/contacten">
                <p
                  class="px-3 py-2 font-bold hover:border-blue border-transparent border-b-2 hover:border-current"
                >
                  Contacten
                </p>
              </NuxtLink>
              <p
                class="ml-4 px-3 py-2 cursor-pointer font-bold hover:border-blue border-transparent border-b-2 hover:border-current"
              >
                Menu item 1
              </p>
              <p
                class="ml-4 px-3 py-2 cursor-pointer font-bold hover:border-blue border-transparent border-b-2 hover:border-current"
              >
                Menu item 2
              </p>
              <p
                class="ml-4 px-3 py-2 cursor-pointer font-bold hover:border-blue border-transparent border-b-2 hover:border-current"
              >
                Menu item 3
              </p>
            </div>
          </div>
        </div>
        <div class="mr-2 flex md:hidden">
          <!-- Mobile menu button -->
          <button
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 focus:outline-none"
            :aria-label="
              isOpen ? 'Sluit navigatie menu' : 'Open navigatie menu'
            "
            @click="toggle"
          >
            <svg
              :class="[isOpen ? 'hidden' : 'block', 'h-6 w-6']"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
            <svg
              :class="[isOpen ? 'block' : 'hidden', 'h-6 w-6']"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
    <div :class="[isOpen ? '' : 'hidden', 'md:hidden']">
      <div class="px-2 pt-2 pb-3 sm:px-3">
        <NuxtLink to="/contacten">
          <p class="px-3 py-2 font-bold" @click="toggle">Contacten</p>
        </NuxtLink>
        <p class="px-3 py-2 cursor-pointer font-bold">Menu item 1</p>
        <p class="px-3 py-2 cursor-pointer font-bold">Menu item 2</p>
        <p class="px-3 py-2 cursor-pointer font-bold">Menu item 3</p>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>
