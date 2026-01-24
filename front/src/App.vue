<script setup lang="ts">
import Header from './components/header.vue'
</script>

<template>
    <Header></Header>
    <div class="w-full justify-between flex">
        <router-link to="/" class="text-white">Главная</router-link>
        <router-link to="/service" class="text-white">Сервис</router-link>
    </div>
    
    <router-view />
</template>

<style scoped></style>
