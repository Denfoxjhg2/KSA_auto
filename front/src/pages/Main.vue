<script setup lang="ts"></script>

<template>
    <section class="h-[875px] flex flex-col items-end relative justify-center -z-1">
        <img src="/photos/main.jpg" alt="mercedes" class="h-full object-cover absolute -z-2">
        <div class="grid gap-12 mb-12">
            <h1 class="font-sans text-white px-5 text-right text-3xl font-medium">ВАШ КОМФОРТ В АВТОМОБИЛЕ — НАШ ПРИОРИТЕТ</h1>
            <p class="text-white px-5 text-right text-xl font-medium">Профессионалы своего дела, не просто мойка</p>
        </div>
        <button class="py-3 px-9 bg-[#FC0320] rounded-lg cursor-pointer self-center shadow-xl/20 shadow-[#FC0320]">
            <h1 class="text-white font-sans font-medium text-base">Записаться</h1>
        </button>
    </section>
    <section class="h-[200px] bg-[url(/photos/main_next.jpg)] flex items-center justify-center -z-1">
        <h1 class="px-7 text-white font-sans text-center font-medium text-lg">Мы <span class="text-[#FC0320]">задаем стандарты</span> детейлинга в нашем регионе. Наш <span class="text-[#FC0320]">многолетний опыт</span> — ваша лучшая гарантия результата.</h1>
    </section>
    <section class="flex flex-col gap-6 px-7 -z-1 text-white font-medium pt-12">
        <div class="flex bg-[#FC0320] rounded-xl shadow-xl/20 shadow-[#FC0320]">
            <img src="/photos/elements/card1.png" alt="decor" class="pl-3">
            <div class="grid gap-4 p-4 w-44 text-end">
                <h1 class="font-sans text-lg">Качество и время</h1>
                <p class="text-sm">Берём ограниченное количество заказов, чтобы результат был безупречен</p>
            </div>
        </div>
        <div class="flex bg-[#FC0320] rounded-xl shadow-xl/20 shadow-[#FC0320]">
            <div class="grid gap-4 p-4 w-44">
                <h1 class="font-sans text-lg">Премиум материалы</h1>
                <p class="text-sm ">Только профессиональная химия и точка.</p>
            </div>
            <img src="/photos/elements/card2.png" alt="decor" class="pr-3">
        </div>
        <div class="flex bg-[#FC0320] rounded-xl shadow-xl/20 shadow-[#FC0320] text-center">
            <div class="flex flex-col items-center gap-4 p-4">
                <h1 class="font-sans text-lg">Комфорт и забота</h1>
                <img src="/icons/wifi.svg" alt="">
                <div class="flex">
                    <img src="/icons/cup.svg" alt="">
                    <h1 class="font-sans text-sm">WiFi, чайная зона ожидания и напитки</h1>
                    <img src="/icons/fan.svg" alt="">
                </div>
                <h1 class="text-sm">Забота не только об авто, но и о вас</h1>
            </div>
        </div>
    </section>
</template>

<style scoped></style>