<script setup>
import { ref } from 'vue'
import { fullServiceOffices } from '@/config/locationOffices.js'

const backHref = ref('/locations')

const offices = ref(fullServiceOffices)
</script>

<template>
  <section class="locations">
    <h1 class="locations__title">Our Locations</h1>

    <a class="locations__back" :href="'#'">Back to Locations</a>

    <h2 class="locations__subtitle">{{ $siteInfo.SITE_NAME }} Full-Service Offices</h2>

    <div v-for="(office, index) in offices" :key="index" class="locations__office">
      <p class="locations__line">{{ office.city }}</p>
      <p v-if="office.building" class="locations__line">{{ office.building }}</p>
      <p v-if="office.street" class="locations__line">{{ office.street }}</p>
      <p class="locations__line">{{ office.suite }}</p>
      <p class="locations__line">{{ office.zip }}</p>
    </div>
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&display=swap');

.locations {
  font-family: 'Open Sans', 'Segoe UI', Tahoma, Arial, sans-serif;
  background: #ffffff;
  color: #404040;
  padding: 52px 8% 90px 8.5%;
}

.locations__title {
  margin: 0 0 8px;
  font-size: 54px;
  font-weight: 300;
  line-height: 1.15;
  color: #333333;
}

.locations__back {
  font-size: 14px;
  color: #3d7ab8;
  text-decoration: none;
}

.locations__back:hover {
  text-decoration: underline;
}

.locations__subtitle {
  margin: 44px 0 24px;
  font-size: 28px;
  font-weight: 400;
  color: #333333;
}

.locations__office {
  margin-bottom: 15px;
}

.locations__line {
  margin: 0;
  font-size: 15px;
  font-weight: 400;
  line-height: 1.6;
  color: #404040;
}

@media (max-width: 768px) {
  .locations {
    padding: 36px 6% 64px;
  }

  .locations__title {
    font-size: 38px;
  }

  .locations__subtitle {
    font-size: 23px;
  }
}
</style>