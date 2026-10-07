<script setup>
import { computed } from 'vue'

const props = defineProps({
  videoId: { type: String, required: true },
  title: { type: String, default: 'NLADA 2022 Beacon of Justice Award Winners' },
  description: {
    type: String,
    default:
      'Learn more about the great work the 2022 Beacon of Justice award winners are doing to "Sustain Racial Equity and Hope" in the legal sphere.',
  },
})

const embedUrl = computed(() => `https://www.youtube.com/embed/${props.videoId}`)
</script>

<template>
  <article class="video-card">
    <div class="video-card__inner">
      <div class="video-card__body">
        <h2 class="video-card__title">{{ title }}</h2>

        <iframe
          class="video-card__frame"
          :src="embedUrl"
          :title="title"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        />

        <p class="video-card__text">{{ description }}</p>
      </div>
    </div>
  </article>
</template>

<style scoped>
/* Everything scales from the design width (542px), so it fits any sidebar width. */
.video-card {
  container-type: inline-size;
  width: 100%;
}

.video-card__inner {
  --u: calc(100cqw / 542);

  box-sizing: border-box;
  padding: calc(var(--u) * 9) 0 0 calc(var(--u) * 9);
  /* background: #e7ecf0;  */
  font-family: 'Open Sans', 'Helvetica Neue', Arial, sans-serif;
}

.video-card__body {
  box-sizing: border-box;
  /* padding: calc(var(--u) * 25) calc(var(--u) * 25) calc(var(--u) * 44); */
  background: #fff;
}

.video-card__title {
  margin: 0 0 calc(var(--u) * 13);
  font-size: calc(var(--u) * 29);
  font-weight: 400;
  line-height: 1.2;
  color: #000;
}

.video-card__frame {
  display: block;
  width: 100%;
  aspect-ratio: 16 / 9;
  border: 0;
  background: #000;
}

.video-card__text {
  margin: calc(var(--u) * 19) 0 0;
  font-size: calc(var(--u) * 20);
  line-height: 1.5;
  color: #222;
}
</style>