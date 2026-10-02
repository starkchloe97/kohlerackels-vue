<template>
  <div class="site-wrapper">
    <Header />
    <main class="col-sm-12 page_container-">
      <RouterView />
    </main>
    <Footer />
  </div>
</template>

<style scoped>
</style>

<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>
