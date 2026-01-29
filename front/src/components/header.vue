<script setup lang="ts">
const props = defineProps<{
  burgerOpen: boolean
}>();

const emit = defineEmits(['toggleBurger']);

const getBurgerIcon = () => {
  return props.burgerOpen ? '/icons/close.svg' : '/icons/burger.svg';
};
</script>

<template>
  <header
    class="fixed h-auto w-full flex justify-between items-center py-14 px-5 z-30"
  >
    <img src="/det_logo.svg" alt="logo" class="w-32" />
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