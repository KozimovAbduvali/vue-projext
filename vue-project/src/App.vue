<!-- App.vue -->
<template>
  <header>
    <Navigation />
  </header>
  <main>
    <HeroSection />
    <Personal_information />
    <Ambiti_intervento />
    <Map_location />
    
  </main>
</template>

<script>
import Navigation from './components/Navigation.vue';
import HeroSection from './components/HeroSection.vue';
import Personal_information from './components/Personal_information.vue';
import Ambiti_intervento from './components/Ambiti_intervento.vue';
import Map_location from './components/Map_location.vue';

export default {
  components: {
    Navigation,
    HeroSection,
    Personal_information,
    Ambiti_intervento,
    Map_location,
},
};
</script>

