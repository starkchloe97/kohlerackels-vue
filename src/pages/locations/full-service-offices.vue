<script setup>
import { ref } from 'vue'

const backHref = ref('/locations')

const offices = ref([
  { city: 'Atlanta, GA',        building: 'Atlantic Station',          street: '201 17th Street NW',            suite: 'Suite 1700',  zip: 'Atlanta, GA 30363' },
  { city: 'Baltimore, MD',      building: '',                          street: '100 S. Charles Street',         suite: 'Suite 1600',  zip: 'Baltimore, MD 21201' },
  { city: 'Boca Raton, FL',     building: 'Lynn Financial Center',     street: '1905 NW Corporate Blvd',        suite: 'Suite 310',   zip: 'Boca Raton, FL 33431' },
  { city: 'Boston, MA',         building: 'One Financial Center',      street: '',                              suite: 'Suite 3500',  zip: 'Boston, MA 02111' },
  { city: 'Charleston, SC',     building: 'Liberty Center',            street: '151 Meeting Street',            suite: 'Suite 600',   zip: 'Charleston, SC 29401' },
  { city: 'Charlotte, NC',      building: '',                          street: '301 S. College Street',         suite: '23rd Floor',  zip: 'Charlotte, NC 28202' },
  { city: 'Chicago, IL',        building: '',                          street: '123 N. Wacker Drive',           suite: '21st Floor',  zip: 'Chicago, IL 60606' },
  { city: 'Cleveland, OH',      building: '',                          street: '1100 Superior Avenue',          suite: 'Suite 2000',  zip: 'Cleveland, OH 44114' },
  { city: 'Columbia, SC',       building: 'Meridian',                  street: '1320 Main Street',              suite: '17th Floor',  zip: 'Columbia, SC 29201' },
  { city: 'Dallas, TX, North',  building: '',                          street: '5830 Granite Parkway',          suite: 'Suite 1000',  zip: 'Plano, TX 75024' },
  { city: 'Denver, CO',         building: '',                          street: '1400 Wewatta Street',           suite: 'Suite 500',   zip: 'Denver, CO 80202' },
  { city: 'Fort Lauderdale, FL',building: '',                          street: '100 S.E. 3rd Avenue',           suite: 'Suite 2700',  zip: 'Fort Lauderdale, FL 33394' },
  { city: 'Greenville, SC',     building: 'Greenville ONE',            street: '2 W. Washington Street',        suite: 'Suite 400',   zip: 'Greenville, SC 29601' },
  { city: 'Houston, TX',        building: 'Heritage Plaza',            street: '1111 Bagby Street',             suite: 'Suite 2100',  zip: 'Houston, TX 77002' },
  { city: 'Huntington, WV',     building: '',                          street: '949 Third Ave.',                suite: 'Suite 200',   zip: 'Huntington, WV 25701' },
  { city: 'Jacksonville, FL',   building: '',                          street: '50 N. Laura Street',            suite: '41st Floor',  zip: 'Jacksonville, FL 32202' },
  { city: 'Miami, FL',          building: '',                          street: '2 South Biscayne Blvd.',        suite: '21st Floor',  zip: 'Miami, FL 33131' },
  { city: 'Minneapolis, MN',    building: '',                          street: '1600 Utica Avenue South',       suite: 'Suite 600',   zip: 'St. Louis Park, MN 55416' },
  { city: 'Myrtle Beach, SC',   building: 'Pinnacle Corporate Center', street: '3751 Robert M. Grissom Parkway',suite: 'Suite 300',   zip: 'Myrtle Beach, SC 29577' },
  { city: 'Nashville, TN',      building: '',                          street: '1222 Demonbreun Street',        suite: 'Suite 1700',  zip: 'Nashville, TN 37203' },
  { city: 'New York, NY',       building: '',                          street: '330 Madison Avenue',            suite: '27th Floor',  zip: 'New York, NY 10017' },
  { city: 'Orlando, FL',        building: '',                          street: '390 North Orange Avenue',       suite: 'Suite 1400',  zip: 'Orlando, FL 32801' },
  { city: 'Pittsburgh, PA',     building: 'One PPG Place',             street: '',                              suite: 'Suite 3200',  zip: 'Pittsburgh, PA 15222' },
  { city: 'Raleigh, NC',        building: '',                          street: '301 Hillsborough Street',       suite: 'Suite 1400',  zip: 'Raleigh, NC 27603' },
  { city: 'San Diego, CA',      building: '',                          street: '750 B Street',                  suite: 'Suite 2200',  zip: 'San Diego, CA 92101' },
  { city: 'Tallahassee, FL',    building: '',                          street: '215 South Monroe Street',       suite: 'Suite 400',   zip: 'Tallahassee, FL 32301' },
  { city: 'Torrance, CA',       building: 'Pacific Gateway',           street: '19191 South Vermont Avenue',    suite: 'Suite 900',   zip: 'Torrance, CA 90502' },
  { city: 'Washington, D.C.',   building: '',                          street: '101 Constitution Avenue, NW',   suite: 'Suite 900',   zip: 'Washington, D.C., 20001' },
  { city: 'West Palm Beach, FL',building: '',                          street: '360 S. Rosemary Avenue',        suite: 'Suite 1410',  zip: 'West Palm Beach, FL 33401' },
  { city: 'Winston-Salem, NC',  building: 'The Knollwood',             street: '380 Knollwood Street',          suite: 'Suite 530',   zip: 'Winston-Salem, NC 27103' }
])
</script>

<template>
  <section class="locations">
    <h1 class="locations__title">Our Locations</h1>

    <a class="locations__back" :href="backHref">Back to Locations</a>

    <h2 class="locations__subtitle">Kohlerackles Full-Service Offices</h2>

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