<template>
  <section
    ref="sectionRef"
    class="partners-section"
    :style="sectionStyle"
    aria-roledescription="carousel"
    aria-label="Firm Partners"
  >
    <div ref="holdRef" class="partners-hold">
      <div ref="innerRef" class="partners-inner">
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
                :disabled="isAtStart"
                aria-label="Previous partner"
                @click="onPrevClick"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="19" y1="12" x2="5" y2="12"></line>
                  <polyline points="12 19 5 12 12 5"></polyline>
                </svg>
              </button>
              <button
                type="button"
                class="nav-btn next-btn"
                :disabled="isAtEnd"
                aria-label="Next partner"
                @click="onNextClick"
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
              v-for="(partner, index) in partners"
              :key="partner.id"
              class="partner-card"
              :data-index="index"
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
const innerRef = ref(null)
const viewportRef = ref(null)
const trackRef = ref(null)

// Dimensions & Scroll Travel
const maxTravel = ref(0)
const pinDuration = ref(900)
const scrollProgress = ref(0)

// Interactive offset (driven by scroll, arrows, or drag)
const currentTranslateX = ref(0)
const isDragging = ref(false)
const dragStartX = ref(0)
const dragStartTranslateX = ref(0)
const isTransitioning = ref(false)

let rafId = null
let resizeObserver = null

const sectionStyle = computed(() => ({
  '--pin-duration': `${pinDuration.value}px`,
}))

// Measure the horizontal travel distance so all cards can slide into view
const measure = () => {
  if (!trackRef.value || !viewportRef.value) return

  const visibleWidth = viewportRef.value.clientWidth
  const totalTrackWidth = trackRef.value.scrollWidth

  const travel = Math.max(0, totalTrackWidth - visibleWidth)
  maxTravel.value = travel

  // Pin duration: vertical scroll distance over which the cards translate
  pinDuration.value = Math.max(travel * 1.25, 800)
}

// Update scroll progress and track position when the page scrolls
const onScroll = () => {
  if (isDragging.value) return
  isTransitioning.value = false // Scroll immediately takes over any button animation

  if (rafId) return
  rafId = requestAnimationFrame(() => {
    rafId = null
    if (!sectionRef.value || maxTravel.value <= 0) return

    const rect = sectionRef.value.getBoundingClientRect()
    const total = pinDuration.value

    // When rect.top <= 0, section is pinned; when rect.top <= -total, pinning ends
    const progress = Math.min(1, Math.max(0, -rect.top / total))
    scrollProgress.value = progress

    currentTranslateX.value = -progress * maxTravel.value
  })
}

// Track style
const trackStyle = computed(() => ({
  transform: `translate3d(${currentTranslateX.value}px, 0, 0)`,
  transition: isTransitioning.value
    ? 'transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)'
    : isDragging.value
      ? 'none'
      : 'transform 0.05s linear',
  willChange: 'transform',
}))

// Parallax shift for images inside cards
const imgParallaxStyle = computed(() => {
  const progressRatio = maxTravel.value > 0 ? -currentTranslateX.value / maxTravel.value : 0
  const clampedRatio = Math.min(1, Math.max(0, progressRatio))
  const shift = (clampedRatio - 0.5) * -12 // -6% to +6%
  return {
    transform: `scale(1.08) translate3d(${shift}%, 0, 0)`,
  }
})

// Navigation button states
const isAtStart = computed(() => currentTranslateX.value >= -5)
const isAtEnd = computed(() => currentTranslateX.value <= -(maxTravel.value - 5))

// Calculate card step distance (card width + gap)
const getCardStep = () => {
  if (!trackRef.value) return 260
  const firstCard = trackRef.value.querySelector('.partner-card')
  if (firstCard) {
    const style = window.getComputedStyle(trackRef.value)
    const gap = parseFloat(style.columnGap || style.gap || '20') || 20
    return firstCard.offsetWidth + gap
  }
  return 260
}

// Arrow Controls: Move carousel horizontally AND synchronize page scroll
const applyTargetTranslate = (newX, smooth = true) => {
  const clampedX = Math.min(0, Math.max(-maxTravel.value, newX))
  currentTranslateX.value = clampedX

  if (smooth) {
    isTransitioning.value = true
    setTimeout(() => {
      isTransitioning.value = false
    }, 400)
  }

  // Synchronize vertical scroll position so vertical scroll resumes seamlessly
  if (sectionRef.value && maxTravel.value > 0) {
    const sectionTop = sectionRef.value.getBoundingClientRect().top + window.scrollY
    const ratio = -clampedX / maxTravel.value
    const targetScrollY = sectionTop + ratio * pinDuration.value

    const rect = sectionRef.value.getBoundingClientRect()
    if (rect.top <= 100 && rect.bottom >= 0) {
      window.scrollTo({ top: targetScrollY, behavior: smooth ? 'smooth' : 'auto' })
    }
  }
}

const onPrevClick = () => {
  const step = getCardStep()
  applyTargetTranslate(currentTranslateX.value + step, true)
}

const onNextClick = () => {
  const step = getCardStep()
  applyTargetTranslate(currentTranslateX.value - step, true)
}

// Keyboard Accessibility: when a card is focused, slide it into view
const onCardFocusIn = (e) => {
  const card = e.target.closest('.partner-card')
  if (!card || !trackRef.value || maxTravel.value <= 0) return

  const cardOffset = card.offsetLeft
  applyTargetTranslate(-cardOffset, true)
}

// Mouse Drag & Touch Swipe: allow direct horizontal manipulation
const startDrag = (e) => {
  if (e.button !== 0) return
  isDragging.value = true
  isTransitioning.value = false
  dragStartX.value = e.clientX
  dragStartTranslateX.value = currentTranslateX.value
  window.addEventListener('mousemove', onDragMove)
  window.addEventListener('mouseup', endDrag)
}

const onDragMove = (e) => {
  if (!isDragging.value) return
  const deltaX = e.clientX - dragStartX.value
  const newX = Math.min(20, Math.max(-maxTravel.value - 20, dragStartTranslateX.value + deltaX))
  currentTranslateX.value = newX
}

const endDrag = () => {
  if (!isDragging.value) return
  isDragging.value = false
  window.removeEventListener('mousemove', onDragMove)
  window.removeEventListener('mouseup', endDrag)

  const step = getCardStep()
  const nearestIndex = Math.round(-currentTranslateX.value / step)
  const targetX = -nearestIndex * step
  applyTargetTranslate(targetX, true)
}

const onTouchStart = (e) => {
  if (e.touches.length !== 1) return
  isDragging.value = true
  isTransitioning.value = false
  dragStartX.value = e.touches[0].clientX
  dragStartTranslateX.value = currentTranslateX.value
}

const onTouchMove = (e) => {
  if (!isDragging.value || e.touches.length !== 1) return
  const currentX = e.touches[0].clientX
  const deltaX = currentX - dragStartX.value
  if (Math.abs(deltaX) > 8) {
    const newX = Math.min(20, Math.max(-maxTravel.value - 20, dragStartTranslateX.value + deltaX))
    currentTranslateX.value = newX
  }
}

const onTouchEnd = () => {
  if (!isDragging.value) return
  isDragging.value = false
  const step = getCardStep()
  const nearestIndex = Math.round(-currentTranslateX.value / step)
  const targetX = -nearestIndex * step
  applyTargetTranslate(targetX, true)
}

onMounted(() => {
  measure()
  onScroll()

  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('resize', () => {
    measure()
    onScroll()
  })

  // ResizeObserver automatically recalculates if cards or viewport change
  if (typeof ResizeObserver !== 'undefined' && trackRef.value && viewportRef.value) {
    resizeObserver = new ResizeObserver(() => {
      measure()
      onScroll()
    })
    resizeObserver.observe(trackRef.value)
    resizeObserver.observe(viewportRef.value)
  }
})

onBeforeUnmount(() => {
  if (rafId) cancelAnimationFrame(rafId)
  if (resizeObserver) resizeObserver.disconnect()
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('mousemove', onDragMove)
  window.removeEventListener('mouseup', endDrag)
})
</script>

<style scoped>
.partners-section {
  position: relative;
  width: 100%;
  background-color: #f1f1f1;
  /* Extended height creates the vertical scroll room for horizontal translation */
  height: calc(100vh + var(--pin-duration, 800px));
  height: calc(100svh + var(--pin-duration, 800px));
  box-sizing: border-box;
}

/* Pinned sticky viewport container: stays pinned at top: 0 while cards slide */
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
  max-width: 1360px;
  margin: 0 auto;
  padding: 0 40px;
  box-sizing: border-box;
}

/* Header row */
.partners-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 32px;
  margin-bottom: 36px;
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
  width: 36px;
  height: 36px;
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

/* Viewport and track */
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
  gap: 20px;
  width: max-content;
  will-change: transform;
}

/* Individual card */
.partner-card {
  flex: 0 0 clamp(240px, 22vw, 310px);
  width: clamp(240px, 22vw, 310px);
  display: flex;
  flex-direction: column;
}

.partner-image-box {
  position: relative;
  width: 100%;
  height: min(44svh, 400px);
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
  font-size: clamp(19px, 1.8vw, 24px);
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
   Reduced Motion: Static accessible fallback
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
  }

  .partner-img {
    transform: none !important;
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
    flex: 0 0 230px;
    width: 230px;
  }

  .partner-image-box {
    height: min(40svh, 320px);
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
    flex: 0 0 200px;
    width: 200px;
  }

  .partner-image-box {
    height: min(36svh, 260px);
  }
}

@media (max-height: 520px) {
  .partners-header {
    margin-bottom: 16px;
  }

  .partner-image-box {
    height: 180px;
  }

  .partners-title {
    font-size: 22px;
  }
}
</style>
