<!-- App.vue -->
<template>
  <header>
    <Navigation />
  </header>
  <main>
    <HeroSection />
    <Personal_information />
  </main>
</template>

<script>
import Navigation from './components/Navigation.vue';
import HeroSection from './components/HeroSection.vue';
import Personal_information from './components/Personal_information.vue';

export default {
  components: {
    Navigation,
    HeroSection,
    Personal_information,
  },
};
</script>

