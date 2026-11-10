<template>
  <section
    ref="sectionRef"
    class="partners-section"
    :style="sectionStyle"
    aria-roledescription="carousel"
    aria-label="Firm Partners"
  >
    <div ref="holdRef" class="partners-hold">
      <div class="partners-inner">
        <!-- Top Header Row -->
        <div class="partners-header">
          <div class="partners-heading-col">
            <h2 class="partners-title">
              Seventy lawyers. Six partners<br />
              sign the letters.
            </h2>
          </div>

          <div class="partners-meta-col">
            <p class="partners-desc">
              Every client has one of these direct lines from the first call. Their teams do the drafting; they do the deciding.
            </p>
            <div class="partners-nav-buttons" aria-label="Carousel navigation">
              <button
                type="button"
                class="nav-btn prev-btn"
                :disabled="scrollProgress <= 0.02"
                aria-label="Previous partners"
                @click="scrollPrev"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="19" y1="12" x2="5" y2="12"></line>
                  <polyline points="12 19 5 12 12 5"></polyline>
                </svg>
              </button>
              <button
                type="button"
                class="nav-btn next-btn"
                :disabled="scrollProgress >= 0.98"
                aria-label="Next partners"
                @click="scrollNext"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <!-- Carousel Viewport & Cards -->
        <div
          ref="viewportRef"
          class="partners-carousel-viewport"
          :class="{ 'is-dragging': isDragging }"
          @mousedown="startDrag"
          @touchstart="onTouchStart"
          @touchmove="onTouchMove"
          @touchend="onTouchEnd"
        >
          <div
            ref="trackRef"
            class="partners-track"
            :style="trackStyle"
            @focusin="onCardFocusIn"
          >
            <article
              v-for="partner in partners"
              :key="partner.id"
              class="partner-card"
              :aria-label="`${partner.name}, ${partner.role} partner in ${partner.city}`"
            >
              <div class="partner-image-box">
                <img
                  :src="partner.image"
                  :alt="partner.name"
                  class="partner-img"
                  :style="imgParallaxStyle"
                  loading="lazy"
                  draggable="false"
                />
              </div>

              <div class="partner-details">
                <span class="partner-role-location">
                  {{ partner.role }} &middot; {{ partner.city }}
                </span>
                <h3 class="partner-name">{{ partner.name }}</h3>
                <a
                  :href="`tel:${cleanPhone(partner.phone)}`"
                  class="partner-phone"
                >
                  {{ partner.phone }}
                </a>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

const partners = [
  {
    id: 1,
    role: 'DISPUTES',
    city: 'EDINBURGH',
    name: 'Anders Holm',
    phone: '+44 131 000 0000',
    image: '/images/partners/anders-holm.jpg',
  },
  {
    id: 2,
    role: 'CORPORATE',
    city: 'EDINBURGH',
    name: 'Fiona Strachan',
    phone: '+44 131 000 0000',
    image: '/images/partners/fiona-strachan.jpg',
  },
  {
    id: 3,
    role: 'DISPUTES',
    city: 'LONDON',
    name: 'Samuel Adeyemi',
    phone: '+44 20 0000 0000',
    image: '/images/partners/samuel-adeyemi.jpg',
  },
  {
    id: 4,
    role: 'CORPORATE',
    city: 'EDINBURGH',
    name: 'Callum Rennie',
    phone: '+44 131 000 0000',
    image: '/images/partners/callum-rennie.jpg',
  },
  {
    id: 5,
    role: 'REAL ESTATE',
    city: 'LONDON',
    name: 'Inês Carvalho',
    phone: '+44 20 0000 0000',
    image: '/images/partners/ines-carvalho.jpg',
  },
  {
    id: 6,
    role: 'PRIVATE CLIENT',
    city: 'LONDON',
    name: 'Marcus Vance',
    phone: '+44 20 0000 0000',
    image: '/images/partners/marcus-vance.jpg',
  },
]

const cleanPhone = (phone) => phone.replace(/\s+/g, '')

const sectionRef = ref(null)
const holdRef = ref(null)
const viewportRef = ref(null)
const trackRef = ref(null)

const travelDistance = ref(0)
const scrollProgress = ref(0)
const supportsScrollTimeline = ref(false)

// Mouse / touch drag state
const isDragging = ref(false)
const dragStartX = ref(0)
let rafId = null

const sectionStyle = computed(() => ({
  '--people-travel': `${travelDistance.value}px`,
  '--scroll-progress': scrollProgress.value,
}))

// Measure the horizontal travel needed so all cards can slide into view
const updateTravelDistance = () => {
  if (!trackRef.value || !holdRef.value) return
  const innerEl = holdRef.value.querySelector('.partners-inner')
  const style = innerEl ? window.getComputedStyle(innerEl) : null
  const paddingLeft = style ? parseFloat(style.paddingLeft) || 0 : 40
  const paddingRight = style ? parseFloat(style.paddingRight) || 0 : 40

  const visibleWidth = holdRef.value.clientWidth - paddingLeft - paddingRight
  const totalTrackWidth = trackRef.value.scrollWidth
  const travel = Math.max(0, totalTrackWidth - visibleWidth)
  travelDistance.value = travel
}

// Compute scroll progress relative to the pinned range
const handleScroll = () => {
  if (rafId) return
  rafId = requestAnimationFrame(() => {
    rafId = null
    if (!sectionRef.value || travelDistance.value <= 0) {
      scrollProgress.value = 0
      return
    }

    const rect = sectionRef.value.getBoundingClientRect()
    // Pinning occurs when rect.top <= 0 until rect.top <= -travelDistance
    const totalTravel = travelDistance.value
    const progress = Math.min(1, Math.max(0, -rect.top / totalTravel))
    scrollProgress.value = progress
  })
}

// Fallback transform for browsers without native animation-timeline or during manual drag
const trackStyle = computed(() => {
  if (supportsScrollTimeline.value && !isDragging.value) {
    return {}
  }
  const currentOffset = travelDistance.value * scrollProgress.value
  return {
    transform: `translate3d(-${currentOffset}px, 0, 0)`,
    willChange: 'transform',
  }
})

// Subtle parallax on card images
const imgParallaxStyle = computed(() => {
  if (supportsScrollTimeline.value && !isDragging.value) {
    return {}
  }
  const shift = (scrollProgress.value - 0.5) * -12 // -6% to +6%
  return {
    transform: `scale(1.08) translate3d(${shift}%, 0, 0)`,
  }
})

// Arrow navigation: smoothly advances vertical scroll by 1 card distance
const getCardStep = () => {
  if (!trackRef.value) return 230
  const firstCard = trackRef.value.querySelector('.partner-card')
  if (firstCard) {
    const style = window.getComputedStyle(trackRef.value)
    const gap = parseFloat(style.columnGap || style.gap || '16') || 16
    return firstCard.offsetWidth + gap
  }
  return 230
}

const scrollNext = () => {
  if (!sectionRef.value || travelDistance.value <= 0) return
  const sectionTop = sectionRef.value.getBoundingClientRect().top + window.scrollY
  const currentY = window.scrollY
  const step = getCardStep()
  const targetY = Math.min(sectionTop + travelDistance.value, currentY + step)
  window.scrollTo({ top: targetY, behavior: 'smooth' })
}

const scrollPrev = () => {
  if (!sectionRef.value || travelDistance.value <= 0) return
  const sectionTop = sectionRef.value.getBoundingClientRect().top + window.scrollY
  const currentY = window.scrollY
  const step = getCardStep()
  const targetY = Math.max(sectionTop, currentY - step)
  window.scrollTo({ top: targetY, behavior: 'smooth' })
}

// Keyboard Accessibility: when tabbing onto a card, scroll into focus
const onCardFocusIn = (e) => {
  const card = e.target.closest('.partner-card')
  if (!card || !holdRef.value || !sectionRef.value || travelDistance.value <= 0) return
  const length = travelDistance.value
  const holdWidth = holdRef.value.clientWidth
  const cardOffset = card.offsetLeft
  const cardWidth = card.offsetWidth
  const share = Math.min(1, Math.max(0, (cardOffset + cardWidth - holdWidth / 2) / length))
  const sectionTop = sectionRef.value.getBoundingClientRect().top + window.scrollY
  window.scrollTo({ top: sectionTop + length * share, behavior: 'smooth' })
}

// Mouse Drag / Touch Swipe: horizontal drag drives page vertical scroll
const startDrag = (e) => {
  if (e.button !== 0) return // Left mouse click only
  isDragging.value = true
  dragStartX.value = e.clientX
  window.addEventListener('mousemove', onDragMove)
  window.addEventListener('mouseup', endDrag)
}

const onDragMove = (e) => {
  if (!isDragging.value) return
  const currentX = e.clientX
  const deltaX = currentX - dragStartX.value
  dragStartX.value = currentX
  // Moving mouse left (deltaX < 0) advances page scroll down
  window.scrollBy({ top: -deltaX * 1.5, behavior: 'auto' })
}

const endDrag = () => {
  if (!isDragging.value) return
  isDragging.value = false
  window.removeEventListener('mousemove', onDragMove)
  window.removeEventListener('mouseup', endDrag)
}

const onTouchStart = (e) => {
  if (e.touches.length !== 1) return
  isDragging.value = true
  dragStartX.value = e.touches[0].clientX
}

const onTouchMove = (e) => {
  if (!isDragging.value || e.touches.length !== 1) return
  const currentX = e.touches[0].clientX
  const deltaX = currentX - dragStartX.value
  dragStartX.value = currentX
  window.scrollBy({ top: -deltaX * 1.5, behavior: 'auto' })
}

const onTouchEnd = () => {
  isDragging.value = false
}

onMounted(() => {
  // Check browser support for CSS View-Timeline
  if (typeof CSS !== 'undefined' && CSS.supports) {
    supportsScrollTimeline.value = CSS.supports('animation-timeline: view()')
  }

  updateTravelDistance()
  handleScroll()

  window.addEventListener('scroll', handleScroll, { passive: true })
  window.addEventListener('resize', () => {
    updateTravelDistance()
    handleScroll()
  })

  // Recalculate once images are fully loaded
  window.addEventListener('load', updateTravelDistance)
})

onBeforeUnmount(() => {
  if (rafId) cancelAnimationFrame(rafId)
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('mousemove', onDragMove)
  window.removeEventListener('mouseup', endDrag)
  window.removeEventListener('load', updateTravelDistance)
})
</script>

<style scoped>
.partners-section {
  position: relative;
  width: 100%;
  background-color: #f1f1f1;
  /* Extended height creates the scroll track so the section pins */
  height: calc(100vh + var(--people-travel, 0px));
  height: calc(100svh + var(--people-travel, 0px));
  box-sizing: border-box;
}

/* Sticky viewport frame: remains pinned in viewport while cards slide */
.partners-hold {
  position: sticky;
  top: 0;
  width: 100%;
  height: 100vh;
  height: 100svh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: clip;
  box-sizing: border-box;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  color: #1a1a1a;
}

.partners-inner {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 40px;
  box-sizing: border-box;
}

/* Header layout */
.partners-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 32px;
  margin-bottom: 40px;
}

.partners-heading-col {
  flex: 1 1 55%;
}

.partners-title {
  font-size: clamp(30px, 3.8vw, 48px);
  font-weight: 700;
  line-height: 1.12;
  letter-spacing: -0.035em;
  color: #111111;
  margin: 0;
}

.partners-meta-col {
  flex: 0 1 420px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
}

.partners-desc {
  font-size: 14px;
  font-weight: 400;
  line-height: 1.45;
  color: #555555;
  margin: 0;
  max-width: 380px;
}

.partners-nav-buttons {
  display: flex;
  align-items: center;
  gap: 10px;
}

.nav-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  border: 1px solid #d1d1d1;
  background: #ffffff;
  color: #222222;
  cursor: pointer;
  transition: all 0.2s ease;
  padding: 0;
}

.nav-btn:hover:not(:disabled) {
  background: #111111;
  color: #ffffff;
  border-color: #111111;
}

.nav-btn:disabled {
  opacity: 0.35;
  cursor: not-allowed;
  border-color: #e0e0e0;
}

/* Carousel Viewport & Track */
.partners-carousel-viewport {
  width: 100%;
  overflow: visible;
  cursor: grab;
  user-select: none;
  -webkit-user-select: none;
}

.partners-carousel-viewport.is-dragging {
  cursor: grabbing;
}

.partners-track {
  display: flex;
  gap: 16px;
  width: max-content;
  will-change: transform;
}

/* Partner Card */
.partner-card {
  flex: 0 0 clamp(210px, 20vw, 280px);
  width: clamp(210px, 20vw, 280px);
  display: flex;
  flex-direction: column;
}

.partner-image-box {
  position: relative;
  width: 100%;
  height: min(42svh, 380px);
  background-color: #e2e2e2;
  overflow: hidden;
}

.partner-img {
  position: absolute;
  top: 0;
  left: -7%;
  width: 114%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  filter: grayscale(100%);
  display: block;
  transition: filter 0.3s ease;
  will-change: transform;
}

.partner-card:hover .partner-img {
  filter: grayscale(75%);
}

.partner-details {
  padding-top: 14px;
  display: flex;
  flex-direction: column;
}

.partner-role-location {
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #666666;
  margin-bottom: 6px;
  line-height: 1.2;
}

.partner-name {
  font-size: clamp(19px, 1.8vw, 23px);
  font-weight: 700;
  letter-spacing: -0.02em;
  color: #111111;
  margin: 0 0 8px 0;
  line-height: 1.2;
}

.partner-phone {
  font-size: 13px;
  font-weight: 500;
  color: #111111;
  text-decoration: underline;
  text-underline-offset: 3px;
  line-height: 1.2;
  transition: color 0.15s ease;
  width: fit-content;
}

.partner-phone:hover {
  color: #000000;
  text-decoration-thickness: 1.5px;
}

/* ----------------------------------------------------
   CSS Scroll-Driven Animation (Native GPU support)
   ---------------------------------------------------- */
@supports (animation-timeline: view()) {
  @media (prefers-reduced-motion: no-preference) {
    .partners-section {
      view-timeline: --people-t1 block;
      view-timeline-inset: 0;
    }

    .partners-track {
      animation-name: people-track-kf;
      animation-timeline: --people-t1;
      animation-range: cover 100vh cover calc(100vh + var(--people-travel, 0px));
      animation-timing-function: linear;
      animation-fill-mode: both;
    }

    .partner-img {
      animation-name: people-img-kf;
      animation-timeline: --people-t1;
      animation-range: cover 100vh cover calc(100vh + var(--people-travel, 0px));
      animation-timing-function: linear;
      animation-fill-mode: both;
    }
  }
}

@keyframes people-track-kf {
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(calc(var(--people-travel, 0px) * -1), 0, 0);
  }
}

@keyframes people-img-kf {
  0% {
    transform: scale(1.08) translate3d(6%, 0, 0);
  }
  100% {
    transform: scale(1.08) translate3d(-6%, 0, 0);
  }
}

/* ----------------------------------------------------
   Reduced Motion: graceful static fallback
   ---------------------------------------------------- */
@media (prefers-reduced-motion: reduce) {
  .partners-section {
    height: auto !important;
  }

  .partners-hold {
    position: static !important;
    height: auto !important;
    padding: 60px 0;
    overflow: visible !important;
  }

  .partners-carousel-viewport {
    overflow-x: auto !important;
  }

  .partners-track {
    transform: none !important;
    animation: none !important;
  }

  .partner-img {
    transform: none !important;
    animation: none !important;
  }
}

/* ----------------------------------------------------
   Responsive Breakpoints
   ---------------------------------------------------- */
@media (max-width: 1024px) {
  .partners-inner {
    padding: 0 32px;
  }

  .partners-header {
    gap: 24px;
    margin-bottom: 28px;
  }

  .partners-title {
    font-size: 34px;
  }

  .partner-card {
    flex: 0 0 220px;
    width: 220px;
  }

  .partner-image-box {
    height: min(38svh, 300px);
  }
}

@media (max-width: 768px) {
  .partners-inner {
    padding: 0 20px;
  }

  .partners-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    margin-bottom: 24px;
  }

  .partners-heading-col {
    width: 100%;
  }

  .partners-meta-col {
    width: 100%;
    flex: none;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
  }

  .partners-desc {
    max-width: 70%;
    font-size: 13px;
  }

  .partners-title {
    font-size: 26px;
  }

  .partner-card {
    flex: 0 0 195px;
    width: 195px;
  }

  .partner-image-box {
    height: min(34svh, 240px);
  }
}
</style>
