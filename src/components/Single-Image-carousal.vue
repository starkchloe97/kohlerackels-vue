<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

const props = defineProps({
  title: { type: String, default: 'Pro Bono Contacts' },
  contacts: {
    type: Array,
    default: () => [
      {
        name: 'Elisa Smith Kodish',
        role: 'Pro Bono Partner',
        phone: '404.322.6160',
        email: '',
        photo: '/images/Lh812PsEnE9sofSZGILxaH7bABv8kCJB72qdJx6P.jpg',
      },
      {
        name: 'Katherine A. Lawler',
        role: 'Partner',
        phone: 'T 443.392.9405',
        email: '',
        photo: 'public/images/Opportunitity/simmons-.jpg',
      },
      {
        name: 'Emily Guerrero',
        role: 'Pro Bono Coordinator',
        phone: 'T 843.534.4102',
        email: '',
        photo: '/images/FCSluFnd4rD1mZVKMSlYbCYrqYf2gm67X5MSs4Pe.jpg',
      },
      {
        name: 'Norah C. Rogers',
        role: 'Pro Bono Manager',
        phone: 'T 803.255.9546',
        email: '',
        photo: '/images/3159c8eb968d004fd09f64c7254b4e67.jpg',
      },
    ],
  },
  interval: { type: Number, default: 5000 },
  autoplay: { type: Boolean, default: true },
})

const index = ref(0)
const isPlaying = ref(props.autoplay)
let timer = null

const total = computed(() => props.contacts.length)
const trackStyle = computed(() => ({ transform: `translateX(${index.value * -100}%)` }))

const goTo = (i) => {
  if (total.value > 1) index.value = (i + total.value) % total.value
}
const next = () => goTo(index.value + 1)
const prev = () => goTo(index.value - 1)

const stop = () => {
  clearInterval(timer)
  timer = null
}
const start = () => {
  stop()
  if (total.value > 1) timer = setInterval(next, props.interval)
}
const toggle = () => {
  isPlaying.value = !isPlaying.value
  isPlaying.value ? start() : stop()
}

onMounted(() => isPlaying.value && start())
onBeforeUnmount(stop)
</script>

<template>
  <section class="carousel" aria-roledescription="carousel" :aria-label="title">
    <div class="carousel__inner">
      <h2 class="carousel__title">{{ title }}</h2>

      <div class="carousel__viewport">
        <ul class="carousel__track" :style="trackStyle">
          <li
            v-for="(contact, i) in contacts"
            :key="contact.name"
            class="slide"
            :inert="i !== index"
            :aria-hidden="i !== index"
          >
            <div class="slide__info">
              <p class="slide__name">{{ contact.name }}</p>
              <p class="slide__role">{{ contact.role }}</p>
              <p class="slide__phone">
                <component
                  :is="contact.email ? 'a' : 'span'"
                  class="slide__icon"
                  :href="contact.email ? `mailto:${contact.email}` : undefined"
                  :aria-label="contact.email ? `Email ${contact.name}` : undefined"
                >
                  <svg viewBox="0 0 50 32" aria-hidden="true">
                    <path d="M0 0h50L25 18z" />
                    <path d="M0 3.5 18.5 20 0 32zM50 3.5 31.5 20 50 32zM21.5 22 25 25l3.5-3 21.5 10H0z" />
                  </svg>
                </component>
                <a :href="`tel:${contact.phone.replace(/\D/g, '')}`">T {{ contact.phone }}</a>
              </p>
            </div>

            <img class="slide__photo" :src="contact.photo" :alt="contact.name" draggable="false" />
          </li>
        </ul>
      </div>

      <div class="carousel__controls">
        <button class="btn btn--arrow" type="button" aria-label="Previous" @click="prev">
          <svg viewBox="0 0 16 20" aria-hidden="true"><path d="M16 0v20L0 10z" /></svg>
        </button>

        <button
          class="btn btn--pause"
          type="button"
          :aria-label="isPlaying ? 'Pause' : 'Play'"
          @click="toggle"
        >
          <svg v-if="isPlaying" viewBox="0 0 20 32" aria-hidden="true">
            <path d="M0 0h8v32H0zM12 0h8v32h-8z" />
          </svg>
          <svg v-else viewBox="0 0 20 32" aria-hidden="true"><path d="M0 0l20 16L0 32z" /></svg>
        </button>

        <button class="btn btn--arrow" type="button" aria-label="Next" @click="next">
          <svg viewBox="0 0 16 20" aria-hidden="true"><path d="M0 0v20l16-10z" /></svg>
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Everything scales from the design width (821px), so it fits any sidebar width. */
.carousel {
  container-type: inline-size;
  width: 100%;
}

.carousel__inner {
  --u: calc(100cqw / 821);
  --control-color: #8d99a6;
  box-sizing: border-box;
  /* padding-left: 30px; */
  /* padding: calc(var(--u) * 14) calc(var(--u) * 20) calc(var(--u) * 26); */
  /* background: #e9eaec; */
  font-family: 'Open Sans', 'Helvetica Neue', Arial, sans-serif;
}

.carousel__title {
  /* margin: 0 0 calc(var(--u) * 18); */
  font-size: calc(var(--u) * 36);
  font-weight: 700;
  line-height: 1.2;
  text-transform: uppercase;
  color: #1a1a1a;
}

.carousel__viewport {
  overflow: hidden;
}

.carousel__track {
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
  transition: transform 0.5s ease;
}

.slide {
  position: relative;
  display: flex;
  flex: 0 0 100%;
  align-items: center;
  box-sizing: border-box;
  height: calc(var(--u) * 328);
  padding-left: calc(var(--u) * 56);
  padding-right: calc(var(--u) * 300);
  background: #fff;
}

.slide__info {
  position: relative;
  z-index: 1;
  max-width: calc(var(--u) * 310);
}

.slide__info p {
  margin: 0;
}

.slide__name {
  font-family: 'Cabin', 'Trebuchet MS', 'Segoe UI', sans-serif;
  font-size: calc(var(--u) * 55 );
  font-weight: 700;
  line-height: 1.12;
  color: #000;
}

.slide__role {
  margin-top: calc(var(--u) * 5);
  font-size: calc(var(--u) * 30);
  font-weight: 300;
  line-height: 1.3;
  color: #54595f;
}

.slide__phone {
  display: flex;
  align-items: center;
  gap: calc(var(--u) * 14);
  margin-top: calc(var(--u) * 12);
  font-size: calc(var(--u) * 28);
  color: #3f4448;
}

.slide__phone a:not(.slide__icon) {
  color: inherit;
  text-decoration: none;
}

.slide__icon {
  display: block;
  flex-shrink: 0;
  width: calc(var(--u) * 44);
  height: calc(var(--u) * 28);
  fill: #e8ac1f;
}

.slide__icon svg {
  display: block;
  width: 100%;
  height: 100%;
}

.slide__photo {
  position: absolute;
  right: 0;
  bottom: 0;
  height: 100%;
  width: auto;
  max-width: 45%;
  object-fit: contain;
  object-position: right bottom;
}

.carousel__controls {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: calc(var(--u) * 18);
  margin: calc(var(--u) * 12) calc(var(--u) * 2) 0 0;
}

.btn {
  display: block;
  padding: 0;
  border: 0;
  background: none;
  color: var(--control-color);
  cursor: pointer;
  transition: color 0.2s;
}

.btn:hover,
.btn:focus-visible {
  color: #5f6b78;
}

.btn svg {
  display: block;
  width: 100%;
  height: 100%;
  fill: currentColor;
}

.btn--arrow {
  width: calc(var(--u) * 17);
  height: calc(var(--u) * 21);
}

.btn--pause {
  width: calc(var(--u) * 16);
  height: calc(var(--u) * 26);
}

@media (prefers-reduced-motion: reduce) {
  .carousel__track {
    transition: none;
  }
}
</style>