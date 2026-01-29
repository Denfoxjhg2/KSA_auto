<script setup lang="ts">
import Header from "./components/header.vue";
import Footer from "./components/footer.vue";
</script>

<template>
  <div class="m-auto">
    <Header></Header>
    <div>
      <router-view />
    </div>
    <Footer></Footer>
  </div>
</template>

<style scoped></style>
