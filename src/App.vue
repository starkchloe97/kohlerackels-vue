<template>
  <div class="site-wrapper" @error.capture="handleImageError">
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

const placeholder = '/images/placeholder.svg'

const handleImageError = (event) => {
  const image = event.target
  if (image?.tagName !== 'IMG' || image.dataset.fallbackApplied === 'true') return

  image.dataset.fallbackApplied = 'true'
  image.src = placeholder
}
</script>
