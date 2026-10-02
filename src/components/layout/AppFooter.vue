<template>
  <footer class="footer">
    <div class="footer-inner">
      <nav class="footer-links" aria-label="Footer">
        <RouterLink to="/about">DISCLAIMER</RouterLink>
        <RouterLink to="/about">PRIVACY POLICY</RouterLink>
        <RouterLink to="/contact">NOTICE AT COLLECTION</RouterLink>
      </nav>

      <p class="copyright">
        Copyright ©2025 Kohlerackels Riley & Scarborough LLP - Attorneys and Counselors at Law.
        All rights reserved.<br />
        For informational purposes only. Past success does not indicate the likelihood of success
        in any future legal representation.
      </p>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  border-top: 1px solid #eee;
  padding: 42px 20px 24px;
  background: #fff;
}

.footer-inner {
  width: min(100%, $container-max);
  margin: 0 auto;
  text-align: center;
}

.footer-links {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 26px;
  margin-bottom: 18px;

  a {
    text-decoration: none;
    font-size: 12px;
    letter-spacing: .04em;
  }
}

.copyright {
  font-size: 11px;
  line-height: 1.55;
}
</style>