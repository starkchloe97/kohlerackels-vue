<template>
  <section class="stats">
    <article v-for="stat in stats" :key="stat.label" class="stat">
      <strong>{{ stat.value }}</strong>
      <span>{{ stat.label }}</span>
    </article>
  </section>
</template>

<script setup>
defineProps({
  stats: {
    type: Array,
    default: () => [
      { value: '500+', label: 'Legal Professionals' },
      { value: '60+', label: 'Practice Areas' },
      { value: '37', label: 'Am Law Ranking' },
    ],
  },
})
</script>

<style scoped lang="scss">
.stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

.stat {
  padding: 28px 20px;
  text-align: center;
  background: #eef5fb;
}

strong {
  display: block;
  color: $color-navy;
  font: 700 clamp(40px, 6vw, 68px)/1 $font-heading;
}

span {
  display: block;
  margin-top: 8px;
  text-transform: uppercase;
  letter-spacing: .04em;
}

@media (max-width: $bp-md) {
  .stats {
    grid-template-columns: 1fr;
  }
}
</style>