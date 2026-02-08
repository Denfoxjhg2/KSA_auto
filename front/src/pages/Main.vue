<script setup lang="ts">
import ExamplesCarousel from '@/components/ImageCarousel.vue'
interface Service {
  id: number
  title: string
  image: string
  route: string | { name: string }
}

const services: Service[] = [
  {
    id: 1,
    title: 'Детейлинг-мойка',
    image: '/photos/carwash.jpg',
    route: '/detailing'
  },
  {
    id: 2,
    title: 'Химчистка салона',
    image: '/photos/detailing.jpg',
    route: '/dryclean'
  },
  {
    id: 3,
    title: 'Полировка + защита',
    image: '/photos/polish.jpg',
    route: '/polish'
  },
  {
    id: 4,
    title: 'Защитная оклейка',
    image: '/photos/protect.jpg',
    route: '/protection'
  },
  {
    id: 5,
    title: 'Мойка двигателя',
    image: '/photos/enginewash.jpg',
    route: '/enginewash'
  },
  {
    id: 6,
    title: 'Шумоизоляция',
    image: '/photos/soundiso.jpg',
    route: '/antisound'
  },
  {
    id: 7,
    title: 'Сухой туман',
    image: '/photos/drywash.jpg',
    route: '/fogclean'
  },
  {
    id: 8,
    title: 'Автозвук',
    image: '/photos/music.jpg',
    route: '/music'
  },
  {
    id: 9,
    title: 'Антихром',
    image: '/photos/chrome.jpg',
    route: '/antichrome'
  }
]
</script>

<template>
  <section
    class="h-[875px] flex flex-col items-end relative justify-center -z-1"
  >
    <img
      src="/photos/main.jpg"
      alt="mercedes"
      class="h-full w-full object-cover absolute -z-2"
    />
    <div class="grid gap-12 mb-12">
      <h1 class="font-sans text-white px-5 text-right text-3xl font-medium">
        ВАШ КОМФОРТ В АВТОМОБИЛЕ — НАШ ПРИОРИТЕТ
      </h1>
      <p class="text-white px-5 text-right text-xl font-medium">
        Профессионалы своего дела, не просто мойка
      </p>
    </div>
    <button
      class="py-3 px-9 bg-[#FC0320] rounded-lg cursor-pointer self-center shadow-xl/20 shadow-[#FC0320]"
    >
      <h1 class="text-white font-sans font-medium text-base">Записаться</h1>
    </button>
  </section>
  <section
    class="h-[200px] bg-[url(/photos/main_next.jpg)] flex items-center justify-center bg-cover w-full -z-1"
  >
    <h1 class="px-7 text-white font-sans text-center font-medium text-lg">
      Мы <span class="text-[#FC0320]">задаем стандарты</span> детейлинга в нашем
      регионе. Наш <span class="text-[#FC0320]">многолетний опыт</span> — ваша
      лучшая гарантия результата.
    </h1>
  </section>
  <section class="flex flex-col gap-6 px-7 -z-1 text-white font-medium pt-12">
    <div
      class="flex bg-[#FC0320] rounded-xl shadow-xl/20 shadow-[#FC0320] justify-between min-h-60"
    >
      <img src="/photos/elements/card1.png" alt="decor" class="pl-3" />
      <div class="grid gap-4 p-4 w-44 text-end">
        <h1 class="font-sans text-lg">Качество и время</h1>
        <p class="text-sm">
          Берём ограниченное количество заказов, чтобы результат был безупречен
        </p>
      </div>
    </div>
    <div
      class="flex bg-[#FC0320] rounded-xl shadow-xl/20 shadow-[#FC0320] justify-between min-h-60"
    >
      <div class="grid gap-4 p-4 w-44">
        <h1 class="font-sans text-lg">Премиум материалы</h1>
        <p class="text-sm">Только профессиональная химия и точка.</p>
      </div>
      <img src="/photos/elements/card2.png" alt="decor" class="pr-3" />
    </div>
    <div
      class="flex bg-[#FC0320] rounded-xl shadow-xl/20 shadow-[#FC0320] text-center min-h-60"
    >
      <div class="flex flex-col items-center gap-4 p-4">
        <h1 class="font-sans text-base">Комфорт и забота</h1>
        <img src="/icons/wifi.svg" alt="" />
        <div class="flex">
          <img src="/icons/cup.svg" alt="" />
          <h1 class="font-sans text-sm">
            WiFi, чайная зона ожидания и напитки
          </h1>
          <img src="/icons/fan.svg" alt="" />
        </div>
        <h1 class="text-sm">Забота не только об авто, но и о вас</h1>
      </div>
    </div>
  </section>
  <section class="flex flex-col text-white gap-6 px-7 -z-1 pt-12">
    <div class="flex flex-col items-center gap-4">
      <h1 class="font-sans text-3xl">Наши услуги</h1>
      <!-- <div class="py-2 px-6 bg-[#2A2A2A] rounded-2xl flex">
        <input
          type="text"
          placeholder="Поиск..."
          class="border-0 outline-none"
        />
        <img src="/icons/search.svg" alt="" />
      </div>
      <button class="flex gap-2 text-[#7E7E7E]">
        <img src="/icons/arr_down.svg" alt="" />
        <p>Скрыть</p>
      </button> -->
    </div>
    <div class="grid grid-cols-1 gap-6 auto-rows-fr">
      <router-link 
        v-for="service in services" 
        :key="service.id"
        :to="service.route"
        class="overflow-hidden rounded-lg bg-cover w-full h-72 flex flex-col justify-end gap-1 px-7 block hover:scale-[1.02] transition-transform duration-300"
        :style="{ backgroundImage: `url(${service.image})` }"
      >
        <h1 class="ml-1 font-sans text-white">{{ service.title }}</h1>
        <div class="bg-white h-0.5 mb-10"></div>
      </router-link>
    </div>
  </section>
  <section class="px-2.5 pt-12 pb-20">
      <div class="flex flex-col items-center gap-6 mb-8">
        <h1 class="font-sans text-white text-2xl md:text-3xl text-center">Примеры наших работ</h1>
      </div>
      <ExamplesCarousel 
        :autoplay-delay="5000"
        :show-controls="true"
        :show-indicators="false"
      />
    </section>
    <section>
      <h1 class="font-sans text-white text-2xl md:text-3xl text-center">Как строится работа?</h1>
      <div class="flex flex-col px-7 pt-12 gap-8">
        <div class="rounded-lg bg-[#141414] border-[#1F1F1F] w-full h-80 gap-4 flex flex-col">
          <div class="flex items-center text-white px-7 pt-7 gap-2 font-sans">
            <h1 class="text-[#FC0320] text-shadow-2xl/30 text-4xl">1.</h1>
            <p class="text-lg">Осмотр и консультация</p>
          </div>
          <p class="px-8 text-white">Осматриваем автомобиль, подробно объясняем все этапы работ. Согласовываем стоимость, сроки и материалы, даём рекомендации.</p>
        </div>
        <div class="rounded-lg bg-[#141414] border-[#1F1F1F] w-full h-80 gap-4 flex flex-col">
          <div class="flex items-center text-white px-7 pt-7 gap-2 font-sans">
            <h1 class="text-[#FC0320] text-shadow-2xl/30 text-4xl">2.</h1>
            <p class="text-lg">Итоги встречи</p>
          </div>
          <p class="px-8 text-white">Обсудили, согласовали, утвердили — работа начата. Процесс будет прозрачным от первого до последнего дня.</p>
        </div>
        <div class="rounded-lg bg-[#141414] border-[#1F1F1F] w-full h-80 gap-4 flex flex-col">
          <div class="flex items-center text-white px-7 pt-7 gap-2 font-sans">
            <h1 class="text-[#FC0320] text-shadow-2xl/30 text-4xl">3.</h1>
            <p class="text-lg">Работа и отчетность</p>
          </div>
          <p class="px-8 text-white">Вы приезжаете к нам или мы к вам - выполняем работы качественно. Регулярно отправляем фотоотчёт в мессенджер o ходе процесса.</p>
        </div>
        <div class="rounded-lg bg-[#141414] border-[#1F1F1F] w-full h-80 gap-4 flex flex-col">
          <div class="flex items-center text-white px-7 pt-7 gap-2 font-sans">
            <h1 class="text-[#FC0320] text-shadow-2xl/30 text-4xl">4.</h1>
            <p class="text-lg">Результат и гарантии</p>
          </div>
          <p class="px-8 text-white">Передаём готовый автомобиль, отвечаем на все вопросы. Обеспечиваем постгарантийное обслуживание и поддержку.</p>
        </div>
      </div>
    </section>
</template>