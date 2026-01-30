<script setup lang="ts">
const openVK = () => {
  window.open('https://vk.com/club228130841', '_blank')
}
const openTG = () => {
  window.open('https://t.me/KSAauto_detailing', '_blank')
}
const openMAP = () => {
  window.open('https://yandex.ru/maps/-/CPAMmSP5', '_blank')
}
</script>

<template>
  <footer class="px-8 pt-28">
    <div class="w-full h-0.5 bg-white"></div>
    <div class="py-10 rounded-3xl">
        <img src="/photos/footer.jpg" alt="garage photo" class="rounded-3xl">
    </div>
    <p class="text-gray-500 text-sm pb-1">
        Детейлинг сервис
    </p>
    <img src="/det_logo.svg" alt="logo">
    <div class="flex flex-col gap-2 pt-2 font-sans">
        <p class="text-gray-500 text-sm">
            c.Завьялово, Нагорная улица, 32Б
        </p>
        <p class="text-gray-500 text-sm">
            +7 (982) 827-92-78
        </p>
        <p class="text-gray-500 text-sm">
            с 9 до 21
        </p>
    </div>
    <div class="flex py-8 justify-between">
        <div class="flex gap-4">
            <button @click="openVK" class="w-11 h-11 bg-[#FC0320] rounded-lg cursor-pointer shadow-xl/20 shadow-[#FC0320]">
                <img src="/icons/vk.svg" alt="vk" class="justify-self-center"/>
            </button>
            <button @click="openTG" class="w-11 h-11 bg-[#FC0320] rounded-lg cursor-pointer shadow-xl/20 shadow-[#FC0320]">
                <img src="/icons/tg.svg" alt="tg" class="justify-self-center"/>
            </button>
        </div>
        <button @click="openMAP" class="w-11 h-11 bg-[#FC0320] rounded-lg cursor-pointer shadow-xl/20 shadow-[#FC0320]">
            <img src="/icons/location.svg" alt="map" class="justify-self-center"/>
        </button>
    </div>
    <div class="w-full h-0.5 bg-white"></div>
    <p class="text-gray-500 pt-4 text-end font-sans">Все права защищены. design by daniel</p>
  </footer>
</template>

<style scoped></style>