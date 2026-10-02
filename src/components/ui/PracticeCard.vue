<template>
  <article class="practice-card">
    <h2>{{ title }}</h2>
    <span class="rule" aria-hidden="true"></span>
    <p>{{ description }}</p>
    <a class="learn-more" href="#">Learn more <span aria-hidden="true">→</span></a>
  </article>
</template>

<script setup>
defineProps({
  title: { type: String, required: true },
  description: { type: String, required: true },
})
</script>

<style scoped lang="scss">
.practice-card {
  padding: 42px 34px;
  background: #fff;
  text-align: center;
  box-shadow: 0 8px 28px rgba(0,0,0,.10);
}

h2 {
  color: $color-navy;
  text-transform: uppercase;
  font: 700 22px/1.15 $font-heading;
  letter-spacing: .04em;
}

.rule {
  display: block;
  width: 54px;
  height: 3px;
  margin: 16px auto 26px;
  background: $color-blue;
}

p {
  color: $color-gray;
  font-size: 15px;
}

.learn-more {
  display: inline-flex;
  gap: 8px;
  margin-top: 22px;
  color: $color-navy;
  font-weight: 700;
  text-decoration: none;
}
</style>