<template>
  <footer class="site-footer">
    <div class="site-footer-inner">
      <nav class="footer-nav" aria-label="Footer">
        <a href="#" @click.prevent>DISCLAIMER</a>
        <RouterLink to="/privacy-policy">PRIVACY POLICY</RouterLink>
        <RouterLink to="/notice-at-collection">NOTICE AT COLLECTION</RouterLink>
      </nav>

      <p>
        Copyright &copy;2025 Kohlerackels Riley &amp; Scarborough LLP - Attorneys and Counselors at Law.
        All rights reserved.<br>
        For informational purposes only. Past success does not indicate the likelihood of success
        in any future legal representation.
      </p>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  background: #fff;
  border-top: 1px solid #ececec;
}

.site-footer-inner {
  width: min(100% - 40px, 1140px);
  margin: 0 auto;
  padding: 30px 0 26px;
  text-align: center;
  color: #747474;
  font-family: "Quattrocento Sans", sans-serif;
}

.footer-nav {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 28px;
  margin-bottom: 12px;
}

.footer-nav a {
  color: #747474;
  text-decoration: none;
  font-size: 13px;
}

.footer-nav a:hover {
  color: #355989;
  text-decoration: underline;
}

.site-footer p {
  margin: 0;
  font-size: 11px;
  line-height: 1.55;
}

@media (max-width: 480px) {
  .site-footer-inner {
    width: min(100% - 28px, 1140px);
  }

  .footer-nav {
    gap: 15px;
  }
}
</style>

<script setup>
</script>
