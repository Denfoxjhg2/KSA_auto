<script setup lang="ts">
import { RouterLink } from 'vue-router'

const props = defineProps<{
  isOpen: boolean
}>()

const emit = defineEmits(['close'])

const menuItems = [
  { text: 'Главная', path: '/' },
  { text: 'Услуги', path: '/services' },
  { text: 'О нас', path: '/about' },
  { text: 'Контакты', path: '/contact' },
]
</script>

<template>
  <div 
    class="fixed top-0 left-0 h-full w-full z-40 transition-all duration-300"
    :class="isOpen ? 'visible' : 'invisible'"
  >
    <div 
      class="absolute top-0 left-0 h-full w-full bg-[#0d0d0d] transition-opacity duration-300"
      :class="isOpen ? 'opacity-70' : 'opacity-0'"
      @click="$emit('close')"
    ></div>
    <nav 
      class="relative h-full w-full flex flex-col items-center justify-center"
    >
      <button
        class="absolute top-8 right-8 w-12 h-12 rounded-full flex items-center justify-center text-white hover:text-[#FC0320] transition-colors duration-200 z-50"
        @click="$emit('close')"
      >
        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <ul class="space-y-10 text-center">
        <li 
          v-for="item in menuItems" 
          :key="item.path"
          class="transition-all duration-500 transform"
          :class="isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'"
          :style="`transition-delay: ${menuItems.indexOf(item) * 100 + 100}ms`"
        >
          <RouterLink
            :to="item.path"
            class="text-3xl font-medium text-white hover:text-[#FC0320] transition-colors duration-200 block py-2"
            active-class="text-[#FC0320] font-semibold"
            exact-active-class="text-[#FC0320] font-semibold"
            @click="$emit('close')"
          >
            {{ item.text }}
          </RouterLink>
        </li>
      </ul>
      <div 
        class="absolute bottom-10 left-0 right-0 text-center text-white opacity-80 text-sm"
        :class="isOpen ? 'opacity-80' : 'opacity-0'"
        style="transition-delay: 800ms"
      >
        <p>© 2024 Все права защищены</p>
      </div>
    </nav>
  </div>
</template>