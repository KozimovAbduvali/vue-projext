<!-- MainContent.vue -->
<template>
 <section class="bg-hero-img bg-cover bg-fixed pt-32 lg:pt-60 pb-20 lg:pb-[15rem]">
  <div class="max-w-base h-full flex flex-col justify-center text-white  mx-auto px-4 md:px-6">
    <h1 class="max-w-3xl text-center md:text-left text-[2.6rem] lg:text-5xl xl:text-7xl leading-[1] mx-auto md:mx-0">
      Avvocato specializzato nel settore 
      <span class="text-secondary">immobiliare</span>
    </h1>
    
    <router-link to="/" class="cursor-pointer flex flex-col md:flex-row items-center gap-3 gap-y-5 font-roboto text-2xl mt-4 md:mt-6">
      scopri tutti i servizi
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17 8L9 16L1 8" stroke="#B89C67" stroke-width="2"/>
      <path d="M9 16L9 0" stroke="#B89C67" stroke-width="2"/>
      </svg>
    </router-link>
  </div>
 </section>
</template>

<script>
</script>

<style scoped>
/* Add any custom styles here */
</style>
