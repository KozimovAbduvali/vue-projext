<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div v-for="card in cards" :key="card.id" class="swiper-slide">
        <div class="card">
          <img :src="card.image" alt="Card Image" class="w-full h-64 object-cover">
          <div class="card-content p-4">
            <h3 class="text-lg font-bold">{{ card.title }}</h3>
            <p class="text-gray-700">{{ card.description }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
import Swiper from 'swiper';
// import 'swiper/css/swiper.css';
export default {
  data() {
    return {
      cards: [
        {
          id: 1,
          title: 'Card 1',
          description: 'This is the description for card 1.',
          image: 'https://placekitten.com/800/400',
        },
        {
          id: 2,
          title: 'Card 2',
          description: 'This is the description for card 2.',
          image: 'https://placekitten.com/800/401',
        },
      ],
    };
  },
  mounted() {
    this.swiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 20,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  },
  beforeDestroy() {
    if (this.swiper) {
      this.swiper.destroy();
    }
  },
};
</script>
<style scoped>
</style>