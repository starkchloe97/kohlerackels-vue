<template>
  <div class="site-wrapper">
    <Header />
    <main id="main-content">
      <RouterView />
    </main>
    <Footer />
  </div>
</template>

<style scoped>
main {
  min-height: 0;
}
</style>

<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>
