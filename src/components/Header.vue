<template>
  <header>
    <a class="skip-main hidden-print" href="#main-content">Skip to Main Content</a>

    <nav class="navbar navbar-expand-lg navbar-light" id="page-nav-top" aria-label="Related Sites">
      <div class="container">
        <div class="row">
          <div class="col-12 pr-0">
            <button type="button" class="float-right nm-fake-button-dark-blue ml-4" @click="subscribeOpen = true">Subscribe</button>
            <ul class="nav navbar-nav navbar-top flex-row mt-2">
              <li class="nav-item"><a class="nav-link" href="https://encompass.kohlerackels.com/">Encompass</a></li>
              <li class="nav-item"><a class="nav-link" href="https://educationcounsel.com/" target="_blank" rel="noopener">EducationCounsel</a></li>
              <li class="nav-item"><a class="nav-link" href="https://assureg.com/" target="_blank" rel="noopener">Assureg</a></li>
              <li class="nav-item"><a class="nav-link" href="https://nmsource.kohlerackels.com/">NMSource</a></li>
              <li class="nav-item"><a class="nav-link" href="https://alumni.kohlerackels.com/" target="_blank" rel="noopener">Alumni</a></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>

    <nav class="navbar navbar-toggleable-md navbar-light" aria-label="Main Menu">
      <div class="container">
        <button class="navbar-toggler navbar-toggler-right" type="button" :aria-expanded="mobileOpen" aria-controls="navbarNav" aria-label="Toggle navigation" @click="mobileOpen = !mobileOpen">
          <span v-if="mobileOpen" class="my-1 mx-2 close" aria-hidden="true">&times;</span>
          <span v-else class="navbar-toggler-icon" aria-hidden="true"></span>
        </button>

        <div class="mobile-search">
          <button type="button" class="mobile-search-button" :aria-expanded="mobileSearchOpen" aria-label="Search" @click="mobileSearchOpen = !mobileSearchOpen">
            <svg class="vue-search-icon" viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.8" cy="10.8" r="6.8" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M16 16l5 5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
          </button>
          <div class="header-search" :style="{ display: mobileSearchOpen ? 'block' : undefined }">
            <form action="#" role="search" aria-label="Sitewide" @submit.prevent>
              <div class="input-group">
                <input class="stt-default-search-input form-control mobile-search-keyword" name="keyword" type="text" placeholder="Search for..." aria-label="Search for">
                <span class="input-group-btn"><button class="btn btn-default" type="submit">Go</button></span>
              </div>
            </form>
          </div>
        </div>

        <RouterLink class="navbar-brand py-0" to="/" aria-label="Go to the homepage">
          <img src="/images/kohlerackels-logo.png" alt="Kohlerackels">
        </RouterLink>

        <div id="navbarNav" class="collapse navbar-collapse" :class="{ show: mobileOpen }">
          <div class="col-md-12 main-nav-wrapper">
            <ul class="nav navbar-nav navbar-top">
              <li class="nav-item"><a class="nav-link" href="/careers">Careers</a></li>
              <li class="nav-item"><a class="nav-link" href="/contact">Contact</a></li>
              <li class="nav-item">
                <div class="search-link">
                  <button type="button" class="desktop-search" :aria-expanded="desktopSearchOpen" @click="desktopSearchOpen = !desktopSearchOpen">
                    Search <svg class="vue-search-icon" viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.8" cy="10.8" r="6.8" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M16 16l5 5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
                  </button>
                  <div class="header-search" :style="{ display: desktopSearchOpen ? 'block' : undefined }">
                    <form action="#" role="search" aria-label="Sitewide" @submit.prevent>
                      <div class="input-group">
                        <input class="stt-default-search-input form-control search-keyword" type="text" placeholder="Search for..." aria-label="Search for">
                        <span class="input-group-btn"><button class="btn btn-default" type="submit">Go</button></span>
                      </div>
                    </form>
                  </div>
                </div>
              </li>
            </ul>

            <div class="clearfix"></div>

            <ul class="nav navbar-nav navbar-main">
              <li class="nav-item"><RouterLink class="nav-link" to="/professionals">Professionals</RouterLink></li>
              <li class="nav-item"><RouterLink class="nav-link" to="/services">Services</RouterLink></li>
              <li class="nav-item dropdown">
                <button type="button" class="nav-link dropdown-toggle" id="firm-dropdown" :aria-expanded="firmOpen" @click="firmOpen = !firmOpen">Firm</button>
                <div class="dropdown-menu" aria-labelledby="firm-dropdown" :style="{ display: firmOpen ? 'block' : undefined }">
                  <RouterLink class="dropdown-item" to="/firm">Overview</RouterLink>
                  <RouterLink class="dropdown-item" to="/locations">Locations</RouterLink>
                  <RouterLink class="dropdown-item" to="/culture">Culture</RouterLink>
                  <a class="dropdown-item" href="/firm/history.html">History</a>
                  <a class="dropdown-item" href="/culture/culture_pro_bono.html">Pro Bono</a>
                  <a class="dropdown-item" href="/culture/culture_engagement_opportunity.html">Engagement and Opportunity</a>
                  <a class="dropdown-item" href="/culture/culture_community_service.html">Community Service</a>
                </div>
              </li>
              <li class="nav-item"><a class="nav-link" href="/insights/alerts.html">Insights</a></li>
              <li class="nav-item"><a class="nav-link" href="/insights/events.html">Events</a></li>
            </ul>

            <ul class="nav navbar-nav navbar-top mobile-navbar">
              <li class="nav-item"><a class="nav-link" href="https://encompass.kohlerackels.com/">Encompass</a></li>
              <li class="nav-item"><a class="nav-link" href="https://educationcounsel.com/" target="_blank" rel="noopener">EducationCounsel</a></li>
              <li class="nav-item"><a class="nav-link" href="https://assureg.com/" target="_blank" rel="noopener">Assureg</a></li>
              <li class="nav-item"><a class="nav-link" href="https://nmsource.kohlerackels.com/">NMSource</a></li>
              <li class="nav-item"><a class="nav-link" href="/careers">Careers</a></li>
              <li class="nav-item"><a class="nav-link" href="https://alumni.kohlerackels.com/" target="_blank" rel="noopener">Alumni</a></li>
              <li class="nav-item"><a class="nav-link no-border" href="/contact">Contact Us</a></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>

    <div v-if="subscribeOpen" class="vue-modal" role="dialog" aria-modal="true" aria-labelledby="subscribe-title" @click.self="subscribeOpen = false">
      <div class="vue-modal-content">
        <div class="modal-header">
          <h2 id="subscribe-title">Subscribe</h2>
          <button type="button" aria-label="Close" @click="subscribeOpen = false">&times;</button>
        </div>
        <div class="modal-body"></div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.vue-search-icon{width:24px;height:24px;vertical-align:middle;margin-left:5px}
</style>

<script setup>
import { ref, watch } from 'vue'

const mobileOpen = ref(false)
const mobileSearchOpen = ref(false)
const desktopSearchOpen = ref(false)
const firmOpen = ref(false)
const subscribeOpen = ref(false)

watch(mobileOpen, (open) => {
  if (!open) firmOpen.value = false
})
</script>