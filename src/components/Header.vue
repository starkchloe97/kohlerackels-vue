<template>
  <header ref="headerRef" class="simple-header" @keydown.esc="closeMenus">
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
        @click="toggleMenu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav id="site-navigation" class="simple-nav" :class="{ open: menuOpen }" aria-label="Main Menu">
        <RouterLink to="/professionals" @click="closeMenus">Professionals</RouterLink>
        <RouterLink to="/services" @click="closeMenus">Services</RouterLink>
        <div class="nav-dropdown" :class="{ expanded: firmOpen }">
          <button class="firm-toggle" type="button" :aria-expanded="firmOpen" aria-controls="firm-submenu" @click="toggleFirm">Firm</button>
          <div id="firm-submenu" class="dropdown-menu" :hidden="!firmOpen">
            <RouterLink to="/firm" @click="closeMenus">Overview</RouterLink>
            <RouterLink to="/locations" @click="closeMenus">Locations</RouterLink>
            <RouterLink to="/history" @click="closeMenus">History</RouterLink>
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
  font-size: 30px;
  font-weight: 300;
  transition: color .2s ease;
}

.simple-nav a:hover,
.simple-nav a.router-link-active {
  color: #c28b14;
}

.firm-toggle {
  padding: 0;
  border: 0;
  background: transparent;
  color: #111;
  font-size: 30px;
  font-weight: 300;
  cursor: pointer;
}

.firm-toggle:hover,
.firm-toggle[aria-expanded="true"] { color: #c28b14; }

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

.nav-dropdown.expanded .dropdown-menu {
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
    padding: 0;
    background: #f1f1f1;
    box-shadow: 0 4px 10px rgba(0, 0, 0, .12);
  }

  .simple-nav.open {
    display: flex;
  }

  .simple-nav > a,
  .firm-toggle {
    display: block;
    width: 100%;
    padding: 4px 13px;
    border: 0;
    border-bottom: 1px solid #999;
    background: #f1f1f1;
    color: #333;
    font-size: 16px;
    font-weight: 400;
    line-height: 23px;
    text-align: left;
  }

  .simple-nav > a:hover,
  .firm-toggle:hover,
  .firm-toggle[aria-expanded="true"] { color: #333; background: #e8e8e8; }

  .nav-dropdown {
    width: 100%;
  }

  .dropdown-menu {
    display: none;
    position: static;
    width: 100%;
    min-width: 0;
    padding: 0 0 0 14px;
    background: #e8e8e8;
    box-shadow: none;
  }

  .nav-dropdown.expanded .dropdown-menu { display: flex; }
  .dropdown-menu[hidden] { display: none; }

  .dropdown-menu a {
    display: block;
    padding: 4px 13px;
    border-bottom: 1px solid #bbb;
    color: #333;
    font-size: 15px;
    font-weight: 400;
    line-height: 22px;
    text-align: left;
  }

  .dropdown-menu a:hover,
  .dropdown-menu a.router-link-active {
    color: #9a6a00;
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
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { SITE_NAME } from '@/config/siteInfo'

const menuOpen = ref(false)
const firmOpen = ref(false)
const headerRef = ref(null)

const closeMenus = () => {
  menuOpen.value = false
  firmOpen.value = false
}

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
  if (!menuOpen.value) firmOpen.value = false
}

const toggleFirm = () => {
  firmOpen.value = !firmOpen.value
}

const handleOutsideClick = (event) => {
  if (!headerRef.value?.contains(event.target)) closeMenus()
}

onMounted(() => document.addEventListener('click', handleOutsideClick))
onBeforeUnmount(() => document.removeEventListener('click', handleOutsideClick))
</script>
