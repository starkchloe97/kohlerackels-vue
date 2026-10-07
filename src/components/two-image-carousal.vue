<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

const props = defineProps({
    title: { type: String, default: 'News & Noteworthy' },
    items: {
        type: Array,
        default: () => [
            {
                title: 'We Are NM – High Potentials: Abe Kannof',
                image: '/images/Opportunitity/image1.jpg', 
                href: '#',
            },
            {
                title: 'We are NM – High Potentials: Amy Cheng',
                image: '/images/Pro-Bono-Images/test.jpg',
                href: '#',
            },
            {
                title: 'Kohlerackels Awarded 2024 U.S. Anti-Racism Program of the Year',
                image: '/images/Opportunitity/image2.jpg',
                href: '#',
            },
            {
                title: 'Partner Frances Hyewon Kim-Chriscoe Named a "20 Under 40" By...',
                image: '/images/Opportunitity/image4.jpg',
                href: '#',
            },
            {
                title: 'Atlanta Partner Amy B. Cheng Receives OCA-Georgia Community Service Award',
                image: '/images/Opportunitity/image3.jpg',
                href: '#',
            },
            {
                title: 'We Are NM – High Potentials: Katie Baker',
                image: '/images/Opportunitity/image5.jpg',
                href: '#',
            },

        ],
    },
    visible: { type: Number, default: 2 },
    interval: { type: Number, default: 5000 },
    autoplay: { type: Boolean, default: true },
})

const index = ref(0)
const isPlaying = ref(props.autoplay)
let timer = null

const lastIndex = computed(() => Math.max(props.items.length - props.visible, 0))
const trackStyle = computed(() => ({
    transform: `translateX(calc(${index.value} * -1 * (100% + var(--gap)) / ${props.visible}))`,
}))

const isVisible = (i) => i >= index.value && i < index.value + props.visible

const goTo = (i) => {
    if (lastIndex.value === 0) return
    index.value = i > lastIndex.value ? 0 : i < 0 ? lastIndex.value : i
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
        <div class="carousel__inner">
            <h2 class="carousel__title">{{ title }}</h2>

            <div class="carousel__viewport">
                <ul class="carousel__track" :style="trackStyle">
                    <li v-for="(item, i) in items" :key="item.title" class="card" :style="{ '--visible': visible }"
                        :inert="!isVisible(i)" :aria-hidden="!isVisible(i)">
                        <a class="card__link" :href="item.href">
                            <img class="card__img" :src="item.image" :alt="item.title" draggable="false" />
                            <span class="card__title">{{ item.title }}</span>
                        </a>
                    </li>
                </ul>
            </div>

            <div class="carousel__controls">
                <button class="btn btn--arrow" type="button" aria-label="Previous" @click="prev">
                    <svg viewBox="0 0 15 26" aria-hidden="true">
                        <path d="M15 0v26L0 13z" />
                    </svg>
                </button>

                <button class="btn btn--pause" type="button" :aria-label="isPlaying ? 'Pause' : 'Play'" @click="toggle">
                    <svg v-if="isPlaying" viewBox="0 0 18 26" aria-hidden="true">
                        <path d="M0 0h7v26H0zM11 0h7v26h-7z" />
                    </svg>
                    <svg v-else viewBox="0 0 18 26" aria-hidden="true">
                        <path d="M0 0l18 13L0 26z" />
                    </svg>
                </button>

                <button class="btn btn--arrow" type="button" aria-label="Next" @click="next">
                    <svg viewBox="0 0 15 26" aria-hidden="true">
                        <path d="M0 0v26l15-13z" />
                    </svg>
                </button>
            </div>
        </div>
    </section>
</template>

<style scoped>
/* Everything scales from the design width (831px), so it fits any container width. */
.carousel {
    container-type: inline-size;
    width: 100%;
}

.carousel__inner {
    --u: calc(100cqw / 831);
    --gap: calc(var(--u) * 12);
    --control-color: #8d99a6;

    box-sizing: border-box;
    /* padding: calc(var(--u) * 18) calc(var(--u) * 27) calc(var(--u) * 12) calc(var(--u) * 42); */
    /* background: #e7ecf0; */
    font-family: 'Open Sans', 'Helvetica Neue', Arial, sans-serif;
}

.carousel__title {
    margin: 0 0 calc(var(--u) * 14);
    padding-bottom: calc(var(--u) * 6);
    border-bottom: 1px solid #8a9096;
    font-family: 'Cabin', 'Trebuchet MS', 'Segoe UI', sans-serif;
    font-size: calc(var(--u) * 26);
    font-weight: 700;
    line-height: 1.3;
    color: #000;
}

.carousel__viewport {
    overflow: hidden;
}

.carousel__track {
    display: flex;
    align-items: flex-start;
    gap: var(--gap);
    margin: 0;
    padding: 0;
    list-style: none;
    transition: transform 0.5s ease;
}

.card {
    flex: 0 0 calc((100% - var(--gap) * (var(--visible) - 1)) / var(--visible));
    min-width: 0;
}

.card__link {
    display: block;
    text-decoration: none;
}

.card__img {
    display: block;
    width: 100%;
    height: auto;
}

.card__title {
    display: -webkit-box;
    overflow: hidden;
    margin-top: calc(var(--u) * 6);
    padding: 0 calc(var(--u) * 10);
    font-size: calc(var(--u) * 24);
    font-weight: 700;
    line-height: 1.45;
    text-align: center;
    color: #44739f;
    /* -webkit-line-clamp: 2; */
    -webkit-box-orient: vertical;
}

.card__link:hover .card__title,
.card__link:focus-visible .card__title {
    text-decoration: underline;
}

.carousel__controls {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: calc(var(--u) * 19);
    margin: calc(var(--u) * 28) calc(var(--u) * 10) 0 0;
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
    width: calc(var(--u) * 15);
    height: calc(var(--u) * 26);
}

.btn--pause {
    width: calc(var(--u) * 18);
    height: calc(var(--u) * 26);
}

@media (prefers-reduced-motion: reduce) {
    .carousel__track {
        transition: none;
    }
}
</style>