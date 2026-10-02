<template>
  <header class="site-header">
    <a class="skip-link" href="#main-content">Skip to Main Content</a>
    <div class="header-shell">
      <RouterLink class="logo" to="/" aria-label="Go to the Kohlerackels homepage">
        <span class="logo-mark" aria-hidden="true">K</span>
        <span class="logo-word">KOHLERACKELS</span>
      </RouterLink>

      <AppNav />
    </div>
  </header>
</template>

<script setup>
import AppNav from './AppNav.vue'
</script>

<style scoped lang="scss">
.site-header {
  position: sticky;
  top: 0;
  z-index: 1000;
  background: #fff;
}

.skip-link {
  position: absolute;
  left: -9999px;
  top: 8px;

  &:focus {
    left: 8px;
    z-index: 10;
    padding: 8px 12px;
    background: #fff;
  }
}

.header-shell {
  width: min(100% - 40px, $container-max);
  min-height: 90px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
}

.logo {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  color: $color-navy;
}

.logo-mark {
  display: grid;
  width: 44px;
  height: 44px;
  place-items: center;
  font: 700 30px/1 $font-heading;
  color: $color-blue;
}

.logo-word {
  font: 600 18px/1 $font-heading;
  letter-spacing: .14em;
}

@media (max-width: $bp-md) {
  .header-shell {
    min-height: 72px;
  }

  .logo-word {
    font-size: 14px;
  }
}
</style>