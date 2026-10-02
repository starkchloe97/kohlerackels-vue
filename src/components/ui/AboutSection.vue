<template>
  <section class="about">
    <div class="about-inner">
      <p class="eyebrow">Established in 1897</p>
      <h2>KOHLERACKELS IS A FULL-SERVICE AM LAW 50 FIRM</h2>
      <p>
        A full-service firm with legal professionals serving clients across the United States.
      </p>
    </div>
  </section>
</template>

<style scoped lang="scss">
.about {
  padding: 70px 20px;
  background: $color-cream;
}

.about-inner {
  width: min(100%, 860px);
  margin-inline: auto;
  text-align: center;
}

.eyebrow {
  color: $color-gold;
  margin-bottom: 14px;
}

h2 {
  font: 700 clamp(28px, 4vw, 52px)/1.05 $font-display;
  color: $color-navy;
}

.about-inner > p:last-child {
  margin-top: 18px;
  color: $color-gray;
}
</style>