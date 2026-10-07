<template>
  <div class="container">
    <!-- aside -->
    <section class="row bottom-carousel">
      <div class="col-md-12 bottom-carousel-wrapper">
        <section
          id="bottom-carousel"
          class="aside carousel slide multi"
          data-itemcount-l="2"
          data-itemcount-m="2"
          data-itemcount-s="1"
          aria-roledescription="carousel"
          aria-labelledby="aside253"
          tabindex="-1"
          @mouseenter="hoverPaused = true"
          @mouseleave="hoverPaused = false"
          @focusin="focusPaused = true"
          @focusout="onFocusOut"
          @keydown="onKeydown"
        >
          <h2 id="aside253" class="d-inline-block">{{ title }}</h2>

          <ol class="carousel-indicators circle">
            <li
              v-for="(slide, i) in slides"
              :key="`dot-${i}`"
              :class="['carousel-circle', `dot-${i + 1}`, { active: i === current }]"
            >
              <button
                type="button"
                class="btn-carousel"
                :aria-label="`Slide ${i + 1}`"
                :aria-current="i === current ? 'true' : 'false'"
                @click="goTo(i)"
              ></button>
            </li>
          </ol>

          <div
            class="carousel-inner"
            :aria-live="isPlaying ? 'off' : 'polite'"
            @touchstart.passive="onTouchStart"
            @touchend.passive="onTouchEnd"
          >
            <div
              class="carousel-track"
              :style="{ transform: `translateX(-${current * 100}%)` }"
            >
              <div
                v-for="(slide, i) in slides"
                :key="`slide-${i}`"
                :class="['row', 'carousel-item', { active: i === current }]"
                role="group"
                aria-roledescription="slide"
                :aria-label="`Slide ${i + 1} of ${slides.length}`"
                :aria-hidden="i === current ? undefined : 'true'"
                :inert="i === current ? undefined : ''"
              >
                <div
                  v-for="item in slide"
                  :key="item.title"
                  class="col-12 col-md-6"
                >
                  <img :src="item.image" :alt="item.alt" />
                  <div class="photo-gradient"></div>
                  <div class="carousel-caption">
                    <a :href="item.href">{{ item.title }}</a>
                    <div class="caption-date">{{ item.date }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
    <!-- /aside -->
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted, onBeforeUnmount } from 'vue'

// ---------- Config ----------
const props = defineProps({
  interval: { type: Number, default: 6000 },
  perSlide: { type: Number, default: 2 },
  title: { type: String, default: 'Highlights' },
  items: { type: Array, default: null },
})

const SWIPE_THRESHOLD = 40 // px

// ---------- Data ----------
const defaultItems = [
  {
    image: '/images/ohdpvaLVtm2FONsiglaiLxq6N0Owi4O40e34qL9b.jpg',
    alt: 'gavel on law books',
    title: 'Navigating California’s Climate Disclosure Laws: Your Complete Guide to SB...',
    href: 'insights/insights/navigating-california-s-climate-disclosure-laws-your-complete-guide-to-sb-253-and-sb-261.html',
    date: 'December 2, 2025',
  },
  {
    image: '/images/qd5IYrDqccPfoJYxEh0r6blgftNNhc1KB1PBlTWl.jpg',
    alt: 'Construction site and development',
    title: 'NMRS Attorneys Published in Florida Bar Journal on CCNA Procurements',
    href: 'insights/insights/nmrs-attorneys-published-in-florida-bar-journal-on-ccna-procurements.html',
    date: 'November/December 2025',
  },
  {
    image: '/images/carousal-img.jpg',
    alt: 'football',
    title: '“Prime Equity” and the NIL Era: Shedeur Sanders’ Contract Ushers...',
    href: 'insights/insights/prime-equity-and-the-nil-era-shedeur-sanders-contract-ushers-in-a-new-legal-framework-for-pro-athlete-compensation.html',
    date: 'September 3, 2025',
  },
  {
    image: '/images/Lht62fS0RwzCc7jmGm6kLFoJJaBwAtrjlZZl60aD.jpg',
    alt: '',
    title: 'FDOT Announces Small Business Growth Program Following DBE Program Updates',
    href: 'insights/alerts/additional_nelson_mullins_alerts/all/fdot-announces-small-business-growth-program-following-dbe-program-updates.html',
    date: 'November 24, 2025',
  },
  {
    image: '/images/Lc9cz7XPTgv1Tcl7av5lixHNL9U6efAXba6QCp3X.jpg',
    alt: '',
    title: 'HUD Continuum of Care Funding Gap: Risks and Recommendations',
    href: 'insights/alerts/nelson-mullins-affordable-housing-news/all/hud-continuum-of-care-funding-gap-risks-and-recommendations.html',
    date: 'November 24, 2025',
  },
  {
    image: '/images/Lc9cz7XPTgv1Tcl7av5lixHNL9U6efAXba6QCp3X.jpg',
    alt: '',
    title: 'HUD Extends Compliance Dates for Energy Efficiency Standards in HUD-...',
    href: 'insights/alerts/nelson-mullins-affordable-housing-news/all/hud-extends-compliance-dates-for-energy-efficiency-standards-in-hud-and-usda-financed-housing.html',
    date: 'November 14, 2025',
  },
]

const items = computed(() => props.items || defaultItems)

// Group items into slides of `perSlide`
const slides = computed(() => {
  const out = []
  for (let i = 0; i < items.value.length; i += props.perSlide) {
    out.push(items.value.slice(i, i + props.perSlide))
  }
  return out
})

// ---------- State ----------
const current = ref(0)
const userPaused = ref(false) // explicit pause button (or reduced motion)
const hoverPaused = ref(false)
const focusPaused = ref(false)
const tabHidden = ref(false)

const isPlaying = computed(
  () =>
    slides.value.length > 1 &&
    !userPaused.value &&
    !hoverPaused.value &&
    !focusPaused.value &&
    !tabHidden.value
)

// ---------- Navigation ----------
function goTo(index) {
  const total = slides.value.length
  if (!total) return
  current.value = (index + total) % total // loops both directions
}
const next = () => goTo(current.value + 1)
const prev = () => goTo(current.value - 1)

// ---------- Auto-play ----------
let timer = null

function stopTimer() {
  if (timer) {
    clearInterval(timer)
    timer = null
  }
}

function startTimer() {
  stopTimer()
  if (isPlaying.value) timer = setInterval(next, props.interval)
}

// Re-run whenever play state changes, or the slide changes
// (so a manual click restarts the full interval).
watch([isPlaying, current, () => props.interval], startTimer)

// Keep `current` valid if the slide list shrinks
watch(
  () => slides.value.length,
  (len) => {
    if (current.value >= len) current.value = Math.max(0, len - 1)
  }
)

// ---------- Events ----------
function onFocusOut(e) {
  // Only resume if focus left the carousel entirely
  if (!e.currentTarget.contains(e.relatedTarget)) focusPaused.value = false
}

function onKeydown(e) {
  if (e.target.closest('input, textarea, select')) return
  switch (e.key) {
    case 'ArrowRight':
      e.preventDefault()
      next()
      break
    case 'ArrowLeft':
      e.preventDefault()
      prev()
      break
    case 'Home':
      e.preventDefault()
      goTo(0)
      break
    case 'End':
      e.preventDefault()
      goTo(slides.value.length - 1)
      break
  }
}

// Touch swipe (horizontal only, vertical scroll untouched)
let startX = 0
let startY = 0
let tracking = false

function onTouchStart(e) {
  if (e.touches.length !== 1) return
  startX = e.touches[0].clientX
  startY = e.touches[0].clientY
  tracking = true
}

function onTouchEnd(e) {
  if (!tracking) return
  tracking = false
  const t = e.changedTouches[0]
  const dx = t.clientX - startX
  const dy = t.clientY - startY
  if (Math.abs(dx) > SWIPE_THRESHOLD && Math.abs(dx) > Math.abs(dy)) {
    dx < 0 ? next() : prev()
  }
}

function onVisibilityChange() {
  tabHidden.value = document.hidden
}

// ---------- Lifecycle ----------
onMounted(() => {
  // Respect reduced-motion: start paused
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    userPaused.value = true
  }
  document.addEventListener('visibilitychange', onVisibilityChange)
  onVisibilityChange()
  startTimer()
})

onBeforeUnmount(() => {
  stopTimer()
  document.removeEventListener('visibilitychange', onVisibilityChange)
})
</script>

<style scoped>
.row {
  gap: 0px;
}
#bottom-carousel {
  position: relative;
  padding-top: 25px;
}

/* Viewport: clips the slides that are off-screen.
   The -15px side margins cancel the row's own gutters so the content
   stays aligned with the heading, exactly as before. */
#bottom-carousel .carousel-inner {
  overflow: hidden;
  margin-left: -15px;
  margin-right: -15px;
}

/* Track: all slides sit side by side and the whole strip slides. */
#bottom-carousel .carousel-track {
  display: flex;
  width: 100%;
  transition: transform 0.6s ease;
  will-change: transform;
}

/* Every slide is always laid out (overrides any display:none / float
   rules from the base carousel CSS) and takes 100% of the viewport. */
#bottom-carousel .carousel-track > .carousel-item {
  display: flex !important;
  flex: 0 0 100%;
  float: none;
  position: relative;
  width: 100%;
  margin: 0;
  transition: none;
}

.btn-carousel:focus-visible {
  outline: 3px solid #1a73e8;
  outline-offset: 2px;
}

@media (prefers-reduced-motion: reduce) {
  #bottom-carousel .carousel-track {
    transition: none;
  }
}
</style>