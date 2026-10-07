<template>
  <section class="contact-slider" :aria-label="title" aria-roledescription="carousel">
    <h2 class="contact-slider-title">{{ title }}</h2>

    <div class="contact-slider-viewport" aria-live="polite">
      <Transition name="contact-slide" mode="out-in">
        <article v-if="activeContact" :key="activeContact.id" class="contact-slide">
          <div class="contact-details">
            <h3>{{ activeContact.name }}</h3>
            <p class="contact-title">{{ activeContact.title }}</p>
            <div class="contact-meta">
              <a
                v-if="activeContact.email"
                class="contact-email"
                :href="`mailto:${activeContact.email}`"
                :aria-label="`Email ${activeContact.name}`"
              >
                <img :src="emailIcon" alt="" />
              </a>
              <img v-else class="contact-email" :src="emailIcon" alt="" aria-hidden="true" />
              <a v-if="activeContact.phoneLink" class="contact-phone" :href="activeContact.phoneLink">
                {{ activeContact.phone }}
              </a>
              <span v-else class="contact-phone">{{ activeContact.phone }}</span>
            </div>
          </div>
          <img class="contact-photo" :src="activeContact.photo" :alt="activeContact.name" />
        </article>
      </Transition>
    </div>

    <div v-if="contacts.length > 1" class="contact-slider-controls" aria-label="Contact slider controls">
      <button
        class="slider-arrow slider-previous"
        type="button"
        aria-label="Previous contact"
        @click="showPrevious"
      ></button>
      <button
        class="slider-playback"
        type="button"
        :aria-label="isPaused ? 'Play contact slider' : 'Pause contact slider'"
        :aria-pressed="isPaused"
        @click="togglePlayback"
      >
        <span :class="isPaused ? 'play-icon' : 'pause-icon'" aria-hidden="true"></span>
      </button>
      <button
        class="slider-arrow slider-next"
        type="button"
        aria-label="Next contact"
        @click="showNext"
      ></button>
    </div>
  </section>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  emailIcon: {
    type: String,
    default: '/images/detail-email.png',
  },
  contacts: {
    type: Array,
    default: () => [],
  },
  initialIndex: {
    type: Number,
    default: 0,
  },
  interval: {
    type: Number,
    default: 5000,
  },
})

const activeIndex = ref(
  props.contacts.length ? Math.min(Math.max(props.initialIndex, 0), props.contacts.length - 1) : 0,
)
const isPaused = ref(false)
const activeContact = computed(() => props.contacts[activeIndex.value])
let autoplayTimer

function showNext() {
  activeIndex.value = (activeIndex.value + 1) % props.contacts.length
}

function showPrevious() {
  activeIndex.value = (activeIndex.value - 1 + props.contacts.length) % props.contacts.length
}

function togglePlayback() {
  isPaused.value = !isPaused.value
}

onMounted(() => {
  if (props.contacts.length > 1) {
    autoplayTimer = window.setInterval(() => {
      if (!isPaused.value) showNext()
    }, props.interval)
  }
})

onBeforeUnmount(() => {
  window.clearInterval(autoplayTimer)
})
</script>

<style scoped>
.contact-slider {
  width: 100%;
  margin-bottom: 10px;
}

.contact-slider-title {
  margin: 0 0 12px;
  color: #111;
  font-size: 30px;
  font-weight: 400;
  line-height: 1.2;
  text-transform: uppercase;
}

.contact-slider-viewport {
  overflow: hidden;
  background: #fff;
}

.contact-slide {
  position: relative;
    display: flex;
    min-height: 220px;
    align-items: center;
    overflow: hidden;
    background: #fff;
}

.contact-details {
  position: relative;
  z-index: 1;
  width: 58%;
  padding: 24px 0 24px 20px;
}

.contact-details h3 {
  margin: 0;
  color: #080808;
  font-size: 30px;
  font-weight: 700;
  line-height: 1.15;
}

.contact-title {
  margin: 0 0 4px;
  color: #555;
  font-size: 15px;
  line-height: 1.2;
}

.contact-meta {
  display: flex;
  align-items: center;
  gap: 12px;
}

.contact-email {
  display: block;
  flex: 0 0 40px;
  width: 40px;
  height: 28px;
  object-fit: contain;
}

.contact-phone {
  position: static !important;
  visibility: visible !important;
  color: #454545;
  font-size: 19px;
  text-decoration: none;
  white-space: nowrap;
}

.contact-photo {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 44%;
  height: 100%;
  object-fit: cover;
  object-position: top center;
}

.contact-slider-controls {
  display: flex;
  min-height: 40px;
  align-items: center;
  justify-content: flex-end;
  gap: 12px;
}

.contact-slider-controls button {
  position: relative;
  width: 24px;
  height: 32px;
  padding: 0;
  border: 0;
  background: transparent;
  cursor: pointer;
}

.slider-arrow::before {
  position: absolute;
  top: 7px;
  content: "";
  border-top: 9px solid transparent;
  border-bottom: 9px solid transparent;
}

.slider-previous::before {
  right: 5px;
  border-right: 12px solid #8b929b;
}

.slider-next::before {
  left: 5px;
  border-left: 12px solid #8b929b;
}

.pause-icon,
.play-icon {
  display: block;
  width: 16px;
  height: 24px;
  margin: 0 auto;
}

.pause-icon {
  border-right: 5px solid #8b929b;
  border-left: 5px solid #8b929b;
}

.play-icon {
  width: 0;
  height: 0;
  border-top: 12px solid transparent;
  border-bottom: 12px solid transparent;
  border-left: 18px solid #8b929b;
}

.contact-slide-enter-active,
.contact-slide-leave-active {
  transition: opacity 0.2s ease;
}

.contact-slide-enter-from,
.contact-slide-leave-to {
  opacity: 0;
}

@media (max-width: 767px) {
  .contact-slider-title {
    font-size: 28px;
  }

  .contact-slide {
    min-height: 250px;
  }

  .contact-details {
    width: 58%;
    padding-left: 7%;
  }

  .contact-details h3 {
    font-size: clamp(24px, 6vw, 34px);
  }

  .contact-title {
    font-size: clamp(17px, 4vw, 23px);
  }

  .contact-phone {
    font-size: clamp(14px, 3.3vw, 19px);
  }

  .contact-email {
    flex-basis: 36px;
    width: 36px;
  }

  .contact-photo {
    width: 46%;
  }
}
</style>
