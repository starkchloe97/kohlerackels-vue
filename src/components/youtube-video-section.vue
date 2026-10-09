<template>
  <section class="pro-bono-videos" aria-labelledby="pro-bono-videos-title">
    <h2 id="pro-bono-videos-title" class="section-title">
      Pro Bono Videos
    </h2>

    <div class="section-divider"></div>

    <div class="video-card">
      <h3 class="video-title">
        {{ video.title }}
      </h3>

      <div class="video-wrapper">
        <iframe
          :src="video.url"
          :title="video.title"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>

      <p class="video-description">
        {{ video.description }}
        <a
          v-if="video.link"
          :href="video.link"
          target="_blank"
          rel="noopener noreferrer"
        >
          {{ video.linkText }}
        </a>
        {{ video.descriptionAfterLink }}
      </p>

      <div class="video-controls">
        <button
          type="button"
          class="video-arrow video-arrow--previous"
          aria-label="Previous video"
          @click="previousVideo"
        ></button>

        <button
          type="button"
          class="video-arrow video-arrow--next"
          aria-label="Next video"
          @click="nextVideo"
        ></button>
      </div> 
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { SITE_NAME } from '@/config/siteInfo.js'

const props = defineProps({
  video: {
    type: Object,
    default: () => ({
      title: 'Lawyers for Good Government',
      url: '',
      description:
        `We're honored to announce that ${SITE_NAME} has received the 2024 Outstanding Pro Bono Partner Award from `,
      link: '',
      linkText: 'Lawyers For Good Government',
      descriptionAfterLink:
        ' (L4GG) in recognition of our commitment to driving meaningful change through pro bono legal support.',
    }),
  },
})

const currentVideo = ref(0)

function previousVideo() {
  currentVideo.value = Math.max(0, currentVideo.value - 1)
}

function nextVideo() {
  currentVideo.value += 1
}
</script>

<style scoped>
.pro-bono-videos {
  width: 100%;
}

.section-title {
  margin: 0;
  color: #111;
  font-size: 30px;
  font-weight: 400;
  line-height: 1.2;
}

.section-divider {
  width: 100%;
  height: 1px;
  margin: 8px 0 14px;
  background: #777;
}

.video-card {
  width: 100%;
  padding: 28px 25px 20px;
  box-sizing: border-box;
  background: #fff;
}

.video-title {
  margin: 0 0 10px;
  color: #111;
  font-size: 28px;
  font-weight: 400;
  line-height: 1.2;
}

.video-wrapper {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  background: #000;
}

.video-wrapper iframe {
  display: block;
  width: 100%;
  height: 100%;
  border: 0;
}

.video-description {
  margin: 20px 0 0;
  color: #111;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.55;
}

.video-description a {
  color: #3978a7;
  text-decoration: none;
}

.video-description a:hover {
  text-decoration: underline;
}

.video-controls {
  display: flex;
  min-height: 44px;
  align-items: center;
  justify-content: flex-end;
  gap: 30px;
  margin-top: 18px;
}

.video-arrow {
  position: relative;
  width: 20px;
  height: 30px;
  padding: 0;
  border: 0;
  background: transparent;
  cursor: pointer;
}

.video-arrow::before {
  position: absolute;
  top: 5px;
  content: "";
  border-top: 11px solid transparent;
  border-bottom: 11px solid transparent;
}

.video-arrow--previous::before {
  right: 2px;
  border-right: 13px solid #8b929b;
}

.video-arrow--next::before {
  left: 2px;
  border-left: 13px solid #8b929b;
}

.video-arrow:hover::before {
  opacity: 0.7;
}

@media (max-width: 767px) {
  .section-title {
    font-size: 26px;
  }

  .video-card {
    padding: 22px 18px 18px;
  }

  .video-title {
    font-size: 23px;
  }

  .video-description {
    font-size: 16px;
  }
}
</style>