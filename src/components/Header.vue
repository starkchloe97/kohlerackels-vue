<template>
  <header class="simple-header">
    <a class="skip-link" href="#main-content">Skip to Main Content</a>

    <div class="simple-header-inner">
      <RouterLink class="site-logo" to="/"  :aria-label="`${SITE_NAME} home`">
        <img src="/images/kohlerackels-logo.png"  :alt="SITE_NAME">
      </RouterLink>

      <button
        class="menu-toggle"
        type="button"
        :aria-expanded="menuOpen"
        aria-controls="site-navigation"
        aria-label="Toggle navigation"
        @click="menuOpen = !menuOpen"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav id="site-navigation" class="simple-nav" :class="{ open: menuOpen }" aria-label="Main Menu">
        <RouterLink to="/professionals" @click="menuOpen = false">Professionals</RouterLink>
        <RouterLink to="/services" @click="menuOpen = false">Services</RouterLink>
        <div class="nav-dropdown">
          <RouterLink to="/firm" @click="menuOpen = false">Firm</RouterLink>
          <div class="dropdown-menu">
            <RouterLink to="/firm" @click="menuOpen = false">Overview</RouterLink>
            <RouterLink to="/locations" @click="menuOpen = false">Locations</RouterLink>
            <RouterLink to="/history" @click="menuOpen = false">History</RouterLink>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.simple-header {
  position: relative;
  z-index: 100;
  background: #fff;
}

.simple-header-inner {
  width: min(100% - 40px, 1140px);
  min-height: 105px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.site-logo {
  display: block;
  line-height: 0;
}

.site-logo img {
  width: 300px;
  height: 56px;
  object-fit: contain;
}

.simple-nav {
  display: flex;
  align-items: center;
  gap: 38px;
}

.simple-nav a {
  color: #111;
  text-decoration: none;
  font-family: "Open Sans", Arial, sans-serif;
  font-size: 19px;
  font-weight: 300;
  transition: color .2s ease;
}

.simple-nav a:hover,
.simple-nav a.router-link-active {
  color: #c28b14;
}

.nav-dropdown {
  position: relative;
}

.dropdown-menu {
  display: none;
  position: absolute;
  top: 100%;
  left: -16px;
  min-width: 180px;
  padding: 8px 16px;
  background: #fff;
  box-shadow: 0 8px 20px rgba(0, 0, 0, .12);
  flex-direction: column;
}

.nav-dropdown:hover .dropdown-menu,
.nav-dropdown:focus-within .dropdown-menu {
  display: flex;
}

.dropdown-menu a {
  padding: 9px 0;
  font-size: 16px;
  white-space: nowrap;
}

.menu-toggle {
  display: none;
  border: 0;
  background: transparent;
  padding: 8px;
}

.menu-toggle span {
  display: block;
  width: 26px;
  height: 2px;
  margin: 5px 0;
  background: #173b63;
}

.skip-link {
  position: absolute;
  left: -9999px;
  top: 10px;
}

.skip-link:focus {
  left: 10px;
  z-index: 200;
  padding: 10px 14px;
  background: #fff;
  color: #000;
}

@media (max-width: 991px) {
  .simple-header-inner {
    min-height: 82px;
  }

  .site-logo img {
    width: 230px;
    height: auto;
  }

  .menu-toggle {
    display: block;
  }

  .simple-nav {
    display: none;
    position: absolute;
    top: 82px;
    left: 0;
    right: 0;
    flex-direction: column;
    align-items: stretch;
    gap: 0;
    padding: 12px 24px 20px;
    background: #fff;
    box-shadow: 0 12px 24px rgba(0, 0, 0, .08);
  }

  .simple-nav.open {
    display: flex;
  }

  .simple-nav a {
    padding: 13px 0;
    font-size: 18px;
  }

  .nav-dropdown {
    width: 100%;
  }

  .dropdown-menu {
    display: flex;
    position: static;
    min-width: 0;
    padding: 0 0 0 18px;
    box-shadow: none;
  }

  .dropdown-menu a {
    padding: 10px 0;
    font-size: 16px;
  }
}

@media (max-width: 480px) {
  .simple-header-inner {
    width: min(100% - 28px, 1140px);
  }

  .site-logo img {
    width: 205px;
  }
}
</style>

<script setup>
import { ref } from 'vue'
import { SITE_NAME } from '@/config/siteInfo'

const menuOpen = ref(false)
</script>
