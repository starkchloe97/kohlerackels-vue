<template><div class="locations-page"><section class="locations-hero"><div class="container"><h1>Locations</h1><h2>Our Locations</h2><p>Kohlerackels serves clients across the United States through full-service offices and other locations.</p></div></section><section class="container locations-content"><h2>Our Full-Service Offices</h2><div class="office-grid"><article v-for="office in offices" :key="office.city"><h3>{{office.city}}</h3><p>{{office.address}}</p><p>{{office.phone}}</p></article></div><h2>Other Locations</h2><p>Additional locations and state admissions are available through the firm's locations directory.</p></section></div></template>

<style scoped>.locations-hero{padding:75px 0;background:#eef3f7}.locations-hero h1{font-size:55px;margin-bottom:30px}.locations-hero h2{font-size:32px}.locations-hero p{max-width:700px;margin-top:15px}.locations-content{padding:55px 20px}.locations-content h2{margin:35px 0 25px}.office-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:22px}.office-grid article{padding:24px;background:#f6f7f8}.office-grid h3{font-size:24px;color:#0d2f5e}.office-grid p{margin-top:8px}@media(max-width:768px){.office-grid{grid-template-columns:1fr 1fr}}@media(max-width:480px){.office-grid{grid-template-columns:1fr}}</style>

<script setup>
const offices=[
{city:'Atlanta',address:'201 17th Street NW, Suite 1700, Atlanta, GA 30363',phone:'T 864.373.2272'},
{city:'Boston',address:'Full-Service Office',phone:'Kohlerackels client service team'},
{city:'Chicago',address:'Full-Service Office',phone:'Kohlerackels client service team'},
{city:'New York',address:'Full-Service Office',phone:'Kohlerackels client service team'},
{city:'Washington, D.C.',address:'Full-Service Office',phone:'Kohlerackels client service team'},
]
</script>