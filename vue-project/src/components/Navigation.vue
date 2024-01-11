Navbar.vue
<template>
  <header class="bg-white w-full fixed top-0 left-0 z-40 shadow-lg">
    <nav class="max-w-base flex justify-between items-center mx-auto p-4 md:p-6 pt-8 md:pt-6">
      <!-- logo -->
      <div>
        <router-link to="/" class="cursor-pointer">
          <img src="../assets/images/logo.svg" class="h-10 lg:h-14">
        </router-link>
      </div>
      <div class="hidden lg:flex items-center space-x-8">
        <!-- link -->
        <div class="flex space-x-4 uppercase">
          <router-link v-for="item in items" :key="item.id" class="text-primary cursor-pointer transition-colors duration-300 hover:text-primary/60 p-2 border-b">{{ item.title }}</router-link>
        </div>
        <div>
          <router-link to="/" class="cursor-pointer">
            <img src="../assets/images/logo_2.svg" class="h-9">
          </router-link>
        </div>
      </div>
      <div class="lg:hidden">
        <button @click="toggleMenu" class="text-brand-dark/60">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>
    </nav>
    <!-- mobile menu -->
    <div v-if="isMenuOpen" class="block lg:hidden mt-2">
      <router-link v-for="item in items" :key="item.id" class="text-primary cursor-pointer transition-colors duration-300 hover:text-primary/60">{{ item.title }}</router-link>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: true,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
  data() {
    return {
      items: [
        { id: 1, title: 'home',},
        { id: 2, title: 'le materie',},
        { id: 3, title: 'aggiornamenti',},
        { id: 4, title: 'chi sono',},
        { id: 5, title: 'contatti',},
      ],
    };
  },
};
</script>


<style scoped>
/* Add any custom styles here */
</style>
