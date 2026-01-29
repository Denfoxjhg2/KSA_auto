<script setup lang="ts">
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import { ref } from 'vue'

interface CarouselImage {
  src: string
  alt: string
}

interface Props {
  images?: CarouselImage[]
  autoplayDelay?: number
  showControls?: boolean
  showIndicators?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  images: () => [],
  autoplayDelay: 4000,
  showControls: true,
  showIndicators: true,
})
const defaultImages: CarouselImage[] = [
  {
    src: '/photos/examples/1.jpg',
    alt: 'Пример работы 1',
  },
  {
    src: '/photos/examples/2.jpg',
    alt: 'Пример работы 2',
  },
  {
    src: '/photos/examples/3.jpg',
    alt: 'Пример работы 3',
  },
  {
    src: '/photos/examples/4.jpg',
    alt: 'Пример работы 4',
  },
  {
    src: '/photos/examples/5.jpg',
    alt: 'Пример работы 5',
  }
]
const displayedImages = props.images.length > 0 ? props.images : defaultImages

const currentSlide = ref(0)
const plugins = [Autoplay({ delay: props.autoplayDelay, stopOnInteraction: true })]

const onSlideChange = (api: any) => {
  currentSlide.value = api.selectedScrollSnap()
}

const scrollTo = (index: number) => {
  const carousel = document.querySelector('[data-embla-carousel]') as any
  if (carousel && carousel.emblaApi) {
    carousel.emblaApi.scrollTo(index)
  }
}
</script>

<template>
  <div class="w-full max-w-6xl mx-auto px-4">
    <Carousel
      class="w-full"
      :plugins="plugins"
      :opts="{ loop: true }"
      @init="onSlideChange"
      @select="onSlideChange"
    >
      <CarouselContent>
        <CarouselItem
          v-for="(image, index) in displayedImages"
          :key="index"
        >
          <div class="relative overflow-hidden rounded-2xl shadow-2xl">
            <img
              :src="image.src"
              :alt="image.alt"
              class="w-full h-[400px] md:h-[500px] object-cover"
              loading="lazy"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end">
            </div>
          </div>
        </CarouselItem>
      </CarouselContent>
      <template v-if="props.showControls">
        <CarouselPrevious 
          class="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 size-8 md:size-10 bg-black/50 hover:bg-black/70 text-white border-0" 
        />
        <CarouselNext 
          class="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 size-8 md:size-10 bg-black/50 hover:bg-black/70 text-white border-0" 
        />
      </template>
    </Carousel>
    <div 
      v-if="props.showIndicators && displayedImages.length > 1"
      class="flex justify-center mt-4 md:mt-6 gap-2"
    >
      <button
        v-for="(_, index) in displayedImages"
        :key="index"
        class="size-2 md:size-3 rounded-full transition-all duration-300 focus:outline-none"
        :class="[
          currentSlide === index 
            ? 'bg-[#FC0320] scale-110' 
            : 'bg-gray-400 hover:bg-gray-300'
        ]"
        @click="scrollTo(index)"
        :aria-label="`Перейти к примеру работы ${index + 1}`"
      />
    </div>
  </div>
</template>

<style scoped>
button {
  transition: background-color 0.3s ease, transform 0.3s ease;
}
@media (max-width: 768px) {
  .carousel-item img {
    height: 300px !important;
  }
}
</style>