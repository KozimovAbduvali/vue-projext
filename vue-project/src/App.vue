<!-- App.vue -->
<template>
  <div>
    <Navigation />
    <HeroSection />
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue';
import HeroSection from './components/HeroSection.vue';

export default {
  components: {
    Navigation,
    HeroSection,
  },
};
</script>

<style></style>
