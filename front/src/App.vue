<script setup lang="ts">
import { ref } from "vue";
import Header from "./components/header.vue";
import Footer from "./components/footer.vue";
import Burger from "./components/burger_menu.vue"

const burgerOpen = ref(false);

const toggleBurger = () => {
  burgerOpen.value = !burgerOpen.value;
}

const closeBurger = () => {
  burgerOpen.value = false;
}
</script>

<template>
  <div class="m-auto relative">
    <Burger 
      :is-open="burgerOpen" 
      @close="closeBurger"
    />
    <Header 
      :burger-open="burgerOpen"
      @toggle-burger="toggleBurger"
    />
    <div :class="burgerOpen ? 'overflow-hidden h-screen' : ''">
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<style scoped>
.overflow-hidden {
  overflow: hidden;
}
</style>