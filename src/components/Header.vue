<template>
  <header class="site-header">
    <a class="skip-main" href="#app">Skip to Main Content</a>
    <nav class="navbar navbar-toggleable-md navbar-light main-header" aria-label="Main Menu">
      <div class="container header-container">
        <RouterLink class="navbar-brand py-0" to="/" aria-label="Go to the homepage">
          <img :src="logo" alt="Kohlerackels" @error="logoFailed = true" />
          <span v-if="logoFailed" class="logo-fallback">KOHLERACKELS</span>
        </RouterLink>
        <button class="navbar-toggler" type="button" :aria-expanded="mobileOpen" aria-label="Toggle navigation" @click="mobileOpen = !mobileOpen">
          <span v-if="!mobileOpen" class="navbar-toggler-icon"></span>
          <span v-else class="close-icon" aria-hidden="true">&times;</span>
        </button>
        <div class="main-nav" :class="{ show: mobileOpen }">
          <nav class="nav navbar-nav navbar-main" aria-label="Primary">
            <RouterLink class="nav-link" to="/professionals" @click="mobileOpen=false">Professionals</RouterLink>
            <RouterLink class="nav-link" to="/services" @click="mobileOpen=false">Services</RouterLink>
            <div class="nav-item firm-menu">
              <button class="nav-link dropdown-toggle" type="button" :aria-expanded="firmOpen" @click="firmOpen=!firmOpen">Firm</button>
              <div v-show="firmOpen || mobileOpen" class="dropdown-menu">
                <RouterLink class="dropdown-item" to="/firm" @click="closeMenus">Overview</RouterLink>
                <RouterLink class="dropdown-item" to="/locations" @click="closeMenus">Locations</RouterLink>
                <RouterLink class="dropdown-item" to="/culture" @click="closeMenus">Culture</RouterLink>
              </div>
            </div>
            <a class="nav-link" href="#" @click.prevent="">Insights</a>
            <a class="nav-link" href="#" @click.prevent="">Events</a>
          </nav>
        </div>
      </div>
    </nav>
  </header>
</template>

<style scoped>
.site-header{background:#fff;position:relative;z-index:100}.header-container{display:flex;align-items:center;justify-content:space-between;min-height:90px}.navbar-brand img{max-height:56px;width:auto}.logo-fallback{font-family:Montserrat,sans-serif;font-weight:600;letter-spacing:.14em;color:#0d2f5e}.navbar-toggler{display:none;border:0;background:transparent;padding:8px}.main-nav{display:flex;align-items:center}.navbar-main{display:flex;align-items:center;gap:14px}.nav-link{font-family:"Quattrocento Sans",sans-serif;font-size:18px;text-decoration:none;background:transparent;border:0;color:#222;padding:10px 12px}.nav-link:hover{color:#c9973e}.firm-menu{position:relative}.dropdown-menu{position:absolute;top:100%;left:0;min-width:230px;background:#fff;padding:10px 0;box-shadow:0 8px 24px rgba(0,0,0,.12)}.dropdown-item{display:block;padding:9px 18px;text-decoration:none;color:#222;font-family:"Open Sans",sans-serif;font-size:14px}.dropdown-item:hover{background:#f4f6f8}.skip-main{position:absolute;left:-9999px}.skip-main:focus{left:10px;top:10px;z-index:200;padding:10px;background:#fff}@media(max-width:992px){.navbar-toggler{display:block}.main-nav{display:none;position:absolute;left:0;right:0;top:90px;background:#fff;padding:10px 20px 20px;box-shadow:0 10px 25px rgba(0,0,0,.08)}.main-nav.show{display:block}.navbar-main{display:flex;flex-direction:column;align-items:stretch;gap:0}.nav-link{display:block;text-align:left;padding:12px 4px}.dropdown-menu{position:static;box-shadow:none;padding:0 0 8px 12px}.header-container{min-height:72px}.main-nav{top:72px}}
</style>

<script setup>
import logo from '../../public/images/kohlerackels-logo.png'
import { ref } from 'vue'
const mobileOpen = ref(false)
const firmOpen = ref(false)
const logoFailed = ref(false)
const closeMenus = () => { mobileOpen.value = false; firmOpen.value = false }
</script>
