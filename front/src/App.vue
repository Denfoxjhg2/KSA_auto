<script setup lang="ts">
import Header from './components/header.vue'
</script>

<template>
    <div class="m-auto">
        <Header></Header>
        <div>
        <!-- <router-link to="/" ><h1 class="text-white">главная</h1></router-link>
        <router-link to="/service"><h1 class="text-white">сурвис</h1></router-link> -->
        <router-view />
    </div>
    </div>
</template>

<style scoped></style>
