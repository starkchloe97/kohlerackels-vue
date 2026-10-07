<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

const props = defineProps({
  title: { type: String, default: 'AFFILIATIONS | IN THE COMMUNITY' },
  items: {
    type: Array,
    default: () => [                
      { src: '/images/Pro-Bono-Images/image-1.jpg', alt: 'Legal Aid of West Virginia' },
      { src: '/images/Pro-Bono-Images/image-2.jpg', alt: 'Riverbanks Zoo & Garden' },
      { src: '/images/Pro-Bono-Images/image-3.jpg', alt: 'South Carolina Philharmonic' },
      { src: '/images/Pro-Bono-Images/image-4.jpg', alt: 'City Year' },
      { src: '/images/Pro-Bono-Images/image-5.jpg', alt: 'City Year' },
      { src: '/images/Pro-Bono-Images/image-6.jpg', alt: 'City Year' }, 
      { src: '/images/Pro-Bono-Images/image-7.jpg', alt: 'City Year' },
      { src: '/images/Pro-Bono-Images/image-1.jpg', alt: 'Legal Aid of West Virginia' },
      { src: '/images/Pro-Bono-Images/image-2.jpg', alt: 'Riverbanks Zoo & Garden' },
      { src: '/images/Pro-Bono-Images/image-3.jpg', alt: 'South Carolina Philharmonic' },
      { src: '/images/Pro-Bono-Images/image-4.jpg', alt: 'City Year' },
    ],
  },
  visible: { type: Number, default: 4 },
  interval: { type: Number, default: 3000 },
  autoplay: { type: Boolean, default: true },
})

const index = ref(0)
const isPlaying = ref(props.autoplay)
let timer = null

const lastIndex = computed(() => Math.max(props.items.length - props.visible, 0))

const trackStyle = computed(() => ({
  transform: `translateX(calc(${index.value} * -1 * (var(--item-size) + var(--gap))))`,
}))

const goTo = (next) => {
  if (lastIndex.value === 0) return
  index.value = next > lastIndex.value ? 0 : next < 0 ? lastIndex.value : next
}

const next = () => goTo(index.value + 1)
const prev = () => goTo(index.value - 1)

const stop = () => {
  clearInterval(timer)
  timer = null
}

const start = () => {
  stop()
  timer = setInterval(next, props.interval)
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
    <h2 class="carousel__title">{{ title }}</h2>

    <div class="carousel__viewport">
      <ul class="carousel__track" :style="trackStyle" aria-live="off">
        <li v-for="item in items" :key="item.src" class="carousel__item">
          <img :src="item.src" :alt="item.alt" class="carousel__img" draggable="false" />
        </li>
      </ul>
    </div>

    <div class="carousel__controls">
      <button class="carousel__btn" type="button" aria-label="Previous" @click="prev">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20 2 4 12l16 10z" />
        </svg>
      </button>

      <button class="carousel__btn" type="button" :aria-label="isPlaying ? 'Pause' : 'Play'" @click="toggle">
        <svg v-if="isPlaying" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M3 2h7v20H3zM14 2h7v20h-7z" />
        </svg>
        <svg v-else viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4 2l17 10L4 22z" />
        </svg>
      </button>

      <button class="carousel__btn" type="button" aria-label="Next" @click="next">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4 2l16 10L4 22z" />
        </svg>
      </button>
    </div>
  </section>
</template>

<style scoped>
.carousel {
    --item-size: 100px;
    --gap: 8px;
    --control-color: #8d99a6;
    box-sizing: border-box;
    width: 600px;
    max-width: 100%;
    padding: 14px 0px 24px;
    /* background: #e7ecf0; */
}



.carousel__title {
  margin: 0 0 14px;
  font-family: 'Lato', 'Helvetica Neue', Arial, sans-serif;
  font-size: 30px;
  font-weight: 300;
  line-height: 1.2;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: #000;
}

.carousel__viewport {
  overflow: hidden;
  width: calc(var(--item-size) * v-bind('props.visible') + var(--gap) * (v-bind('props.visible') - 1));
  max-width: 100%;
}

.carousel__track {
  display: flex;
  gap: var(--gap);
  margin: 0;
  padding: 0;
  list-style: none;
  transition: transform 0.5s ease;
}

.carousel__item {
  display: flex;
  flex: 0 0 var(--item-size);
  align-items: center;
  justify-content: center;
  width: var(--item-size);
  height: var(--item-size);
  background: #fff;
}

.carousel__img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.carousel__controls {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 15px;
  margin: 14px 12px 0 0;
}

.carousel__btn {
  display: grid;
  place-items: center;
  width: 18px;
  height: 26px;
  padding: 0;
  border: 0;
  background: none;
  color: var(--control-color);
  cursor: pointer;
  transition: color 0.2s;
}

.carousel__btn:hover,
.carousel__btn:focus-visible {
  color: #5f6b78;
}

.carousel__btn svg {
  width: 100%;
  height: 100%;
  fill: currentColor;
}

@media (prefers-reduced-motion: reduce) {
  .carousel__track {
    transition: none;
  }
}
</style>