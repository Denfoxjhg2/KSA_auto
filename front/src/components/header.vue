<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps<{
  burgerOpen: boolean
}>();

const emit = defineEmits(['toggleBurger']);
const scrollY = ref(0);

const getBurgerIcon = () => {
  return props.burgerOpen ? '/icons/close.svg' : '/icons/burger.svg';
};

const handleScroll = () => {
  scrollY.value = window.scrollY;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <header
    class="fixed h-auto w-full flex justify-between items-center py-8 px-5 z-30 transition-all duration-300"
    :style="{ 
      backgroundColor: `rgba(13, 13, 13, ${Math.min(scrollY / 200, 0.95)})` 
    }"
  >
    <router-link to="/"><img src="/det_logo.svg" alt="logo" class="w-32" /></router-link>
    <button 
      class="w-11 h-11 bg-[#FC0320] rounded-lg cursor-pointer flex items-center justify-center transition-transform hover:scale-105"
      @click="() => emit('toggleBurger')"
    >
      <img 
        :src="getBurgerIcon()" 
        :alt="burgerOpen ? 'close' : 'burger'" 
        class="w-6 h-6 transition-opacity"
      />
    </button>
  </header>
</template>