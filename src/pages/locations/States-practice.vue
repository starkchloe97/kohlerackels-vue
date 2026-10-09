<script setup>
import { ref } from 'vue'

const backHref = ref('/locations')

const states = ref([
  'Alabama',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'District of Columbia',
  'Florida',
  'Georgia',
  'Hawaii',
  'Idaho',
  'Illinois',
  'Indiana',
  'Iowa',
  'Kentucky',
  'Louisiana',
  'Maryland',
  'Massachusetts',
  'Michigan',
  'Minnesota',
  'Mississippi',
  'Missouri',
  'Montana',
  'Nevada',
  'New Hampshire',
  'New Jersey',
  'New Mexico',
  'New York',
  'North Carolina',
  'North Dakota',
  'Ohio',
  'Oklahoma',
  'Oregon',
  'Pennsylvania',
  'Rhode Island',
  'South Carolina',
  'South Dakota',
  'Tennessee',
  'Texas',
  'Vermont',
  'Virginia',
  'Washington',
  'West Virginia',
  'Wisconsin',
  'Wyoming'
])
</script>

<template>
  <section class="locations">
    <h1 class="locations__title">Our Locations</h1>

    <a class="locations__back" :href="backHref">Back to Locations</a>

    <h2 class="locations__subtitle">States Where {{ $siteInfo.SITE_NAME }} Attorneys are Admitted to Practice</h2>

    <ul class="locations__list">
      <li v-for="(state, index) in states" :key="index" class="locations__item">
        {{ state }}
      </li>
    </ul>
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
  margin: 72px 0 24px;
  font-size: 28px;
  font-weight: 400;
  color: #333333;
}

.locations__list {
  margin: 0;
  padding: 0;
  list-style: none;
}

.locations__item {
  margin: 0 0 10px;
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
    margin-top: 48px;
  }
}
</style>