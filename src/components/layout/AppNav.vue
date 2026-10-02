<template>
  <nav class="nav" aria-label="Main Menu">
    <button
      class="menu-toggle"
      type="button"
      :aria-expanded="mobileOpen"
      aria-controls="main-navigation"
      aria-label="Toggle navigation"
      @click="mobileOpen = !mobileOpen"
    >
      <span></span><span></span><span></span>
    </button>

    <div id="main-navigation" class="navigation" :class="{ 'is-open': mobileOpen }">
      <RouterLink to="/professionals" class="nav-link">Professionals</RouterLink>
      <RouterLink to="/services" class="nav-link">Services</RouterLink>
      <RouterLink to="/about" class="nav-link">Firm</RouterLink>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const mobileOpen = ref(false)
</script>

<style scoped lang="scss">
.nav {
  display: flex;
  align-items: center;
}

.navigation {
  display: flex;
  align-items: center;
  gap: 28px;
}

.nav-link {
  text-decoration: none;
  font: 400 19px/1.2 $font-display;
  transition: color .2s ease;

  &:hover,
  &.router-link-active {
    color: $color-gold;
  }
}

.menu-toggle {
  display: none;
  border: 0;
  background: transparent;
  padding: 8px;

  span {
    display: block;
    width: 24px;
    height: 2px;
    margin: 5px 0;
    background: $color-navy;
  }
}

@media (max-width: $bp-md) {
  .menu-toggle {
    display: block;
  }

  .navigation {
    position: absolute;
    top: 72px;
    right: 0;
    left: 0;
    display: none;
    flex-direction: column;
    align-items: stretch;
    gap: 0;
    padding: 10px 20px 20px;
    background: #fff;
    box-shadow: 0 10px 24px rgba(0,0,0,.08);

    &.is-open {
      display: flex;
    }
  }

  .nav-link {
    padding: 14px 0;
  }
}
</style>