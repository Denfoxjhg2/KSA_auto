<script setup>
import { ImgComparisonSlider } from '@img-comparison-slider/vue';

const openVK = () => {
  window.open('https://vk.com/club228130841', '_blank')
}
const openTG = () => {
  window.open('https://t.me/KSAauto_detailing', '_blank')
}
</script>

<template>
  <section class="pt-30">
    <div class="bg-[url(/photos/carwash.jpg)] h-[550px] bg-cover text-white text-xl font-sans flex flex-col justify-between py-8">
      <div class="flex gap-4 items-center text-3x justify-around px-8">
        <img src="/icons/wash.svg" alt="wash" class="h-20">
        <h1>Детейлинг-мойка</h1>
      </div>
      <p class="px-8 flex">Глубокая очистка кузова до идеального состояния. Возвращаем автомобилю первоначальный блеск и свежесть.</p>
    </div>
  </section>
  <section class="flex items-center justify-center pt-6">
    <router-link to="/order" class="self-center">
      <button
        class="py-3 px-9 bg-[#FC0320] rounded-lg cursor-pointer self-center shadow-xl/20 shadow-[#FC0320]"
      >
        <h1 class="text-white font-sans font-medium text-base">Записаться</h1>
      </button>
    </router-link>
  </section>
  <section class="pt-12 px-8 flex flex-col items-center">
    <h1 class="font-sans text-white pb-6">Ловкость рук наших мастеров. Никакой магии!</h1>
    <ImgComparisonSlider>
      <img
        slot="first"
        class="w-full h-full object-cover"
        src="/photos/before_after/wash.png"
      />
      <img
        slot="second"
        class="w-full h-full object-cover"
        src="/photos/before_after/wash2.png"
      />
    </ImgComparisonSlider>
  </section>
  <section class="text-white px-8 pt-12 flex flex-col gap-3 items-center">
    <h1 class="font-sans">Нет времени написать?</h1>
    <p>Не вопрос, напишите нам в соцсети и мы рассчитаем стоимость</p>
    <div class="flex gap-4 font-sans pt-2">
      <button @click="openVK" class="bg-[#FC0320] rounded-lg cursor-pointer shadow-xl/20 shadow-[#FC0320] flex gap-2 p-2">
          <img src="/icons/vk.svg" alt="vk" class="w-8"/>
          <p>Мы в ВК</p>
      </button>
      <button @click="openTG" class="bg-[#FC0320] rounded-lg cursor-pointer shadow-xl/20 shadow-[#FC0320] flex gap-2 p-2">
          <img src="/icons/tg.svg" alt="tg" class="w-8"/>
          <p>Мы в ТГ</p>
      </button>
    </div>
  </section>
</template>