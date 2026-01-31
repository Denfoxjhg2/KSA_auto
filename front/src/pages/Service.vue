<script>
import { ImgComparisonSlider } from '@img-comparison-slider/vue';

export default {
  name: 'ExampleComponent',
  components: {
    ImgComparisonSlider,
  },
};
</script>

<template>
  <section class="pt-30">
    <div class="bg-[url(/photos/services/polish.jpg)] h-[550px] bg-cover text-white text-xl font-sans flex flex-col justify-between py-8">
      <div class="flex gap-4 items-center text-3x justify-around px-8">
        <img src="/icons/polish.svg" alt="shield" class="h-20">
        <h1>Полировка <span class="text-[#FC0320]">+</span> защита</h1>
      </div>
      <p class="px-8 flex">Восстановление глянца и нанесение керамики или воска. Гарантируем долговременную защиту и зеркальный блеск</p>
    </div>
  </section>
  <section class="flex items-center justify-center pt-6">
    <button class=" bg-[#FC0320] rounded-lg cursor-pointer shadow-xl/20 shadow-[#FC0320]">
      <h1 class="text-white py-3 px-8 font-sans">Записаться</h1>
    </button>
  </section>
  <section class="pt-12 px-8">
    <h1 class="font-sans text-white pb-6">Ловкость рук наших мастеров. Никакой магии!</h1>
    <ImgComparisonSlider>
      <img
        slot="first"
        style="width: 100%"
        src="/photos/before_after/polish.png"
      />
      <img
        slot="second"
        style="width: 100%"
        src="/photos/before_after/polish2.png"
      />
    </ImgComparisonSlider>
  </section>
</template>

<style scoped></style>
