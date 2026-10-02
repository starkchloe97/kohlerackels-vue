<template>
  <section class="hero" aria-label="Kohlerackels service information">
    <div class="hero-copy">
      <p class="eyebrow">Kohlerackels</p>
      <h1>Innovative Thinkers. Solution Providers.</h1>
      <p class="lead">
        Challenges are opportunities to be leveraged. We provide creative solutions to complex problems.
      </p>
    </div>
  </section>
</template>

<style scoped lang="scss">
.hero {
  min-height: 420px;
  display: grid;
  place-items: center start;
  background:
    linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,.92) 40%, rgba(255,255,255,0) 72%),
    #dfe8f0;
}

.hero-copy {
  width: min(100% - 40px, 620px);
  margin-inline: auto;
  padding-block: 64px;
}

.eyebrow {
  color: $color-gold;
  margin-bottom: 10px;
}

h1 {
  font: 400 clamp(42px, 5vw, 70px)/.98 $font-display;
  max-width: 560px;
}

.lead {
  margin-top: 22px;
  max-width: 510px;
  color: $color-blue;
  font-weight: 600;
}
</style>