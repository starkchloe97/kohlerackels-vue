<script setup>
import { ref } from 'vue'

const backHref = ref('/locations')

const offices = ref([
  { city: 'Dallas, TX, Uptown', building: '',                           street: '3333 Lee Parkway',                   suite: 'Suite 750',             zip: 'Dallas, TX 75219' },
  { city: 'Los Angeles, CA',    building: '',                           street: '350 South Grand Avenue',             suite: 'Suite 2200',            zip: 'Los Angeles, CA 90071' },
  { city: 'Macon, GA',          building: '',                           street: '125 Plantation Centre Drive, South', suite: 'Building 900, Suite B', zip: 'Macon, GA 31210' },
  { city: 'Naples, FL',         building: 'The Offices at Pelican Bay', street: '5811 Pelican Bay Blvd',              suite: 'Suite 204',             zip: 'Naples, FL 34108' },
  { city: 'Palm Beach, FL',     building: '',                           street: '251 Royal Palm Way',                 suite: 'Suite 215',             zip: 'Palm Beach, FL 33480' },
  { city: 'Philadelphia, PA',   building: '',                           street: '1000 Westlakes Drive',               suite: 'Suite 275',             zip: 'Berwyn, PA 19312' },
  { city: 'Richmond, VA',       building: '',                           street: '1021 E. Cary St.',                   suite: 'Suite 2120',            zip: 'Richmond, VA 23219' },
  { city: 'Tampa, FL',          building: '',                           street: '100 North Tampa Street',             suite: 'Suite 2460',            zip: 'Tampa, FL 33602' }
])
</script>

<template>
  <section class="locations">
    <h1 class="locations__title">Our Locations</h1>

    <a class="locations__back" :href="backHref">Back to Locations</a>

    <h2 class="locations__subtitle">Kohlerackles Other Locations</h2>

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