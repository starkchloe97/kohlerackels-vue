<template>
  <Header />
  <main id="app">
    <RouterView />
  </main>
  <Footer />
</template>

<style scoped>
main{min-height:60vh}
</style>

<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>
