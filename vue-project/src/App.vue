<!-- App.vue -->
<template>
  <header>
    <Navigation />
  </header>
  <main id="app">
    <HeroSection />
    <Personal_information />
    <Ambiti_intervento />
    <Aggiornamenti />
    <Map_location />
    
  </main>
</template>

<script>
import Navigation from './components/Navigation.vue';
import HeroSection from './components/HeroSection.vue';
import Personal_information from './components/Personal_information.vue';
import Ambiti_intervento from './components/Ambiti_intervento.vue';
import Aggiornamenti from './components/Aggiornamenti.vue';
import Map_location from './components/Map_location.vue';

export default {
  components: {
    Navigation,
    HeroSection,
    Personal_information,
    Ambiti_intervento,
    Aggiornamenti,
    Map_location,
},
};
</script>

