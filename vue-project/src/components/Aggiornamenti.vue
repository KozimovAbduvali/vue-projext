<template>
  <div class="max-w-base mx-auto px-4 md:px-6 py-10 md:py-20 overflow-x-visible">
    <Swiper :slidesPerView="3" :spaceBetween="30" :modules="modules" class="mySwiper">
      <SwiperSlide v-for="card in cards" :key="card.id" class="swiper-slide !overflow-x-visible">
        <div class="card">
          <div class="card-content shadow">
            <div class="bg-white py-9 px-6">
              <p class="font-roboto font-bold text-[#B89C67] uppercase">{{ card.text }}</p>
              <h3 class="text-2xl font-medium text-primary mt-2">{{ card.title }}</h3>
              <p class="text-brand-dark line-clamp-6 mt-4">{{ card.description }}</p>
            </div>
            <div class="bg-primary text-white px-6 py-3">
              <p class="font-roboto font-semibold">{{ card.text_footer }}</p>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script>
import Footer from './Footer.vue';

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
          text: 'dicembre 2023',
          title: 'Separazione e divorzio a mezzo di negoziazione assistita: per i trasferimenti immobiliari necessario l’intervento del notaio',
          description: 'Ogni qualvolta l’accordo stabilito tra i coniugi, al fine di giungere ad una soluzione consensuale di separazione personale, ricomprenda anche il trasferimento di uno o più diritti di proprietà su beni immobili, la disciplina di cui al Decreto Legge n. 132 del 2014, articolo 6, conv. in L. n. 162 del 2014, deve necessariamente integrarsi con…',
          text_footer: 'Leggi tutto'
        },
        {
          id: 2,
          text: '27 Ottobre 2020',
          title: 'PACTA SUNT SERVANDA  Il principio mantiene la sua natura di verità assiomatica pur nel tempo della emergenza coronavirus?',
          description: 'Si registrano in questo periodo, in materia di locazioni commerciali, provvedimenti adottati in varie sedi di Tribunale con i quali, a fronte della opposizione spiegata dalla parte conduttrice alla intimazione di sfratto per morosità, sono state denegate le ordinanze di rilascio ex art. 665 c.p.c. in ragione della situazione emergenziale in atto1, ovvero sul medesimo…',
          text_footer: 'Leggi tutto'
        },
        {
          id: 3,
          text: 'dicembre 2023',
          title: 'Separazione e divorzio a mezzo di negoziazione assistita: per i trasferimenti immobiliari necessario l’intervento del notaio',
          description: 'Ogni qualvolta l’accordo stabilito tra i coniugi, al fine di giungere ad una soluzione consensuale di separazione personale, ricomprenda anche il trasferimento di uno o più diritti di proprietà su beni immobili, la disciplina di cui al Decreto Legge n. 132 del 2014, articolo 6, conv. in L. n. 162 del 2014, deve necessariamente integrarsi con…',
          text_footer: 'Leggi tutto'
        },
        {
          id: 4,
          text: 'dicembre 2023',
          title: 'Separazione e divorzio a mezzo di negoziazione assistita: per i trasferimenti immobiliari necessario l’intervento del notaio',
          description: 'Ogni qualvolta l’accordo stabilito tra i coniugi, al fine di giungere ad una soluzione consensuale di separazione personale, ricomprenda anche il trasferimento di uno o più diritti di proprietà su beni immobili, la disciplina di cui al Decreto Legge n. 132 del 2014, articolo 6, conv. in L. n. 162 del 2014, deve necessariamente integrarsi con…',
          text_footer: 'Leggi tutto'
        },
      ],
    };
  },
  mounted() {
    this.swiper = this.$refs.mySwiper.$swiper;
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
