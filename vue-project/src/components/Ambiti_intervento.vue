<!-- Ambiti di intervento -->
<template>
  <section class="bg-primary text-white py-10 lg:py-20">
    <div class="max-w-base text-center mx-auto px-4 md:px-6">
      <p class="font-roboto font-bold text-secondary">
        chi sono
      </p>
      <h2 class="">
        Ambiti di intervento
      </h2>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-7 text-left md:text-center mt-8 md:mt-10">
        <div v-for="item in items" :key="item.id"
          class="bg-black/15 border-y border-y-sky rounded-[20px] flex flex-row md:flex-col gap-4 items-center px-8 lg:px-6 py-6 lg:py-9">
           <div>
            <svg class="w-12 md:w-16 h-12 md:h-16" width="100" height="100" viewBox="0 0 69 65" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.4">
            <path d="M9.64199 44.7551V23.0617L33.8053 1L57.9685 23.0617V43.449M39.9071 46.861V31.307H27.7034V46.861" stroke="#B89C67" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M24.0359 55.3924H38.5727C40.8069 55.3924 42.618 53.5812 42.618 51.3471V51.3471M42.618 51.3471V51.3471C42.618 48.8336 40.5805 46.7961 38.067 46.7961H27.5653C26.864 46.7961 26.1661 46.6981 25.4919 46.5048L15.8511 43.742C14.7449 43.425 13.5708 43.4328 12.4688 43.7645L0.49913 47.3673M42.618 51.3471L62.768 40.9023C64.477 40.0164 66.5725 40.875 67.1686 42.7053V42.7053C67.9416 45.0787 66.9183 47.6665 64.7311 48.8693L41.3531 61.7266C37.517 63.8363 33.0436 64.4756 28.7702 63.525L24.0357 62.4717H0.49913" stroke="#B89C67" stroke-linecap="round"/>
            </g>
            </svg>
           </div>
         <p class="font-medium text-[22px] lg:text-3xl">  {{ item.title }},</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { id: 1, title: 'Locazioni abitative e commerciali',},
        { id: 2, title: 'Locazioni turistiche',},
        { id: 3, title: 'Tutela proprietà immobiliare',},
        { id: 4, title: 'Condominio',},
        { id: 5, title: 'Diritto di famiglia e successioni',},
        { id: 6, title: 'Recupero crediti',},
        { id: 7, title: 'Contrattualistica e assistenza stragiudiziale',},
        { id: 8, title: 'Risoluzione alternativa controversie',},
        { id: 9, title: 'Cittadinanza italiana  Iure Sanguinis',},
      ],
    };
  },
};

</script>

<style lang="scss" scoped></style>