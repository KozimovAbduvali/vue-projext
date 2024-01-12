<template>
  <Swiper 
  :slidesPerView="3"
  :spaceBetween="30"
  :modules="modules"
  class="mySwiper">
    <SwiperSlide v-for="card in cards" :key="card.id" class="swiper-slide">
      <div class="card">
        <img :src="card.image" alt="Card Image" class="w-full h-64 object-cover">
        <div class="card-content p-4">
          <h3 class="text-lg font-bold">{{ card.title }}</h3>
          <p class="text-gray-700">{{ card.description }}</p>
        </div>
      </div>
    </SwiperSlide>
  </Swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';

export default {
    components: {
      Swiper,
      SwiperSlide,
    },
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
