<template>
  <div class="kr-home">
    <section
      class="hero"
      aria-roledescription="carousel"
      aria-label="Kohlerackels Service Information"
      @mouseenter="pauseHero"
      @mouseleave="resumeHero"
    >
      <div class="hero-slides">
        <article
          v-for="(slide, index) in heroSlides"
          :key="slide.image"
          class="hero-slide"
          :class="{ active: index === heroIndex }"
          role="group"
          :aria-roledescription="'slide'"
          :aria-label="'Slide ' + (index + 1) + ' of ' + heroSlides.length"
        >
          <img :src="slide.image" :alt="slide.alt" class="hero-image">
          <div class="hero-image-fade"></div>

          <div class="hero-container">
            <div class="hero-copy">
              <p class="hero-kicker">Kohlerackels</p>
              <h1 v-html="slide.title"></h1>
              <p class="hero-lead">{{ slide.text }}</p>
            </div>
          </div>
        </article>
      </div>

      <div class="hero-container hero-controls-container">
        <div class="hero-controls" aria-label="Hero carousel controls">
          <button type="button" aria-label="Previous slide" @click="previousHero">‹</button>
          <button type="button" :aria-label="heroPlaying ? 'Pause slideshow' : 'Play slideshow'" @click="toggleHero">
            <span aria-hidden="true">{{ heroPlaying ? 'Ⅱ' : '▶' }}</span>
          </button>
          <button type="button" aria-label="Next slide" @click="nextHero">›</button>

          <div class="hero-dots">
            <button
              v-for="(slide, index) in heroSlides"
              :key="slide.image"
              type="button"
              :class="{ active: index === heroIndex }"
              :aria-label="'Go to slide ' + (index + 1)"
              :aria-current="index === heroIndex"
              @click="goHero(index)"
            ></button>
          </div>
        </div>
      </div>
    </section>
    <section
      class="news-section"
      aria-label="Featured insights"
      @mouseenter="pauseNews"
      @mouseleave="resumeNews"
    >
      <div class="news-slider">
        <transition name="news-fade" mode="out-in">
          <article :key="newsActive.image" class="news-slide">
            <img :src="newsActive.image" :alt="newsActive.alt" class="news-image">
            <div class="news-overlay"></div>
            <div class="news-content">
              <p class="news-category">{{ newsActive.category }}</p>
              <h2>{{ newsActive.title }}</h2>
              <p class="news-date">{{ newsActive.date }}</p>
            </div>
          </article>
        </transition>

        <button class="news-arrow news-prev" type="button" aria-label="Previous news slide" @click="previousNews">‹</button>
        <button class="news-arrow news-next" type="button" aria-label="Next news slide" @click="nextNews">›</button>

        <div class="news-dots">
          <button
            v-for="(slide, index) in newsSlides"
            :key="slide.image"
            type="button"
            :class="{ active: index === newsIndex }"
            :aria-label="'Go to news slide ' + (index + 1)"
            :aria-current="index === newsIndex"
            @click="goNews(index)"
          ></button>
        </div>
      </div>
    </section>

    <section class="practice-section">
      <div class="practice-grid">
        <article v-for="card in practiceCards" :key="card.title" class="practice-card">
          <h2>{{ card.title }}</h2>
          <span class="practice-rule" aria-hidden="true"></span>
          <p>{{ card.description }}</p>
        </article>
      </div>
    </section>

    <section class="focus-section">
      <div class="focus-inner">
        <div class="focus-list">
          <span class="focus-rule" aria-hidden="true"></span>
          <h2>Areas of focus</h2>

          <div class="focus-buttons">
            <button
              v-for="item in focusItems"
              :key="item.key"
              type="button"
              class="focus-button"
              :class="{ active: focusKey === item.key }"
              :aria-pressed="focusKey === item.key"
              @click="focusKey = item.key"
            >
              {{ item.title }}
            </button>
          </div>
        </div>

        <article class="focus-content" aria-live="polite">
          <transition name="focus-fade" mode="out-in">
            <div :key="focusActive.key">
              <h3>{{ focusActive.title }}</h3>
              <p>{{ focusActive.body }}</p>
            </div>
          </transition>
        </article>
      </div>
    </section>

    <section class="stats-section">
      <div class="stats-panel">
        <div class="stats-intro">
          <img src="/images/kohlerackels-logo.png" alt="Kohlerackels" class="stats-logo">
          <div>
            <p class="stats-est">ESTABLISHED IN 1897</p>
            <h2>A FULL-SERVICE AM LAW 50 FIRM</h2>
            <p>
              A full-service law firm focused on practical advice, trusted relationships,
              and tireless advocacy for our clients.
            </p>
          </div>
        </div>

        <div class="stats-grid">
          <article v-for="stat in stats" :key="stat.label" class="stat-card">
            <span class="stat-icon" aria-hidden="true" v-html="stat.icon"></span>
            <strong>{{ stat.value }}</strong>
            <span>{{ stat.label }}</span>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.kr-home {
  width: 100%;
  overflow: hidden;
  color: #1a1a1a;
  background: #fff;
  font-family: "Open Sans", Arial, sans-serif;
}

.hero {
  position: relative;
  width: 100%;
  min-height: 580px;
  margin: 0 0 10px;
  overflow: hidden;
  background: #eee;
}

.hero-slides {
  position: relative;
  width: 100%;
  min-height: 580px;
}

.hero-slide {
  position: absolute;
  inset: 0;
  display: none;
  min-height: 580px;
  overflow: hidden;
}

.hero-slide.active {
  display: block;
}

.hero-image {
  position: absolute;
  top: 0;
  right: 0;
  width: auto;
  max-width: 100%;
  height: 580px;
  display: block;
  object-fit: contain;
  object-position: right center;
}

.hero-image-fade {
  position: absolute;
  inset: 0;
  z-index: 1;
  pointer-events: none;
  background: linear-gradient(
    to right,
    #fff 5%,
    #fff 40%,
    rgba(255, 255, 255, .88) 52%,
    rgba(255, 255, 255, 0) 76%,
    rgba(255, 255, 255, 0) 100%
  );
}

.hero-container {
  position: relative;
  width: min(100% - 40px, 1140px);
  margin: 0 auto;
  height: 100%;
  z-index: 3;
}

.hero-copy {
  position: relative;
  width: 50%;
  max-width: 575px;
  padding-top: 205px;
}

.hero-kicker {
  margin: 0 0 8px;
  color: #c28b14;
  font: 400 26px/1.1 "Quattrocento Sans", sans-serif;
}

.hero-copy h1 {
  margin: 0 0 30px;
  color: #111;
  font: 400 60px/0.93 "Quattrocento Sans", sans-serif;
  letter-spacing: -0.04em;
}

.hero-lead {
  width: 90%;
  max-width: 540px;
  margin: 0;
  color: #447aa7;
  font: 300 16px/1.375 "Open Sans", sans-serif;
}

.hero-controls-container {
  position: absolute;
  left: 0;
  right: 0;
  top: 30%;
  height: auto;
  pointer-events: none;
}

.hero-controls {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
  width: 50%;
  pointer-events: auto;
}

.hero-controls > button {
  width: 28px;
  height: 28px;
  border: 0;
  padding: 0;
  background: transparent;
  color: #355989;
  font: 400 25px/1 "Quattrocento Sans", sans-serif;
}

.hero-controls > button:hover {
  color: #c28b14;
}

.hero-dots {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-left: 3px;
}

.hero-dots button {
  position: relative;
  width: 18px;
  height: 18px;
  border: 0;
  padding: 0;
  background: transparent;
}

.hero-dots button::before {
  content: "";
  position: absolute;
  width: 9px;
  height: 9px;
  top: 4.5px;
  left: 4.5px;
  border: 1px solid #355989;
  border-radius: 50%;
  background: transparent;
}

.hero-dots button.active::before {
  background: #355989;
}

.news-section {
  padding: 0 0 75px;
}

.news-slider {
  position: relative;
  width: min(100% - 40px, 1140px);
  height: 460px;
  margin: 0 auto;
  overflow: hidden;
  background: #163b66;
}

.news-slide,
.news-image,
.news-overlay {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.news-image {
  object-fit: cover;
}

.news-overlay {
  background: linear-gradient(90deg, rgba(11,35,60,.72) 0%, rgba(11,35,60,.28) 48%, rgba(11,35,60,0) 78%);
}

.news-content {
  position: absolute;
  left: 0;
  bottom: 0;
  width: min(70%, 650px);
  padding: 52px 60px;
  color: #fff;
}

.news-category {
  margin-bottom: 9px;
  color: #d4b56a;
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: .08em;
}

.news-content h2 {
  margin: 0 0 10px;
  font: 400 34px/1.08 "Quattrocento Sans", sans-serif;
}

.news-date {
  margin: 0;
  font-size: 13px;
}

.news-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 5;
  width: 48px;
  height: 48px;
  border: 1px solid rgba(255,255,255,.45);
  border-radius: 50%;
  background: rgba(0,0,0,.12);
  color: #fff;
  font: 400 32px/1 "Quattrocento Sans", sans-serif;
}

.news-arrow:hover {
  background: rgba(0,0,0,.3);
}

.news-prev { left: 18px; }
.news-next { right: 18px; }

.news-dots {
  position: absolute;
  z-index: 5;
  left: 50%;
  bottom: 18px;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
}

.news-dots button {
  width: 10px;
  height: 10px;
  border: 1px solid #fff;
  border-radius: 50%;
  padding: 0;
  background: rgba(255,255,255,.35);
}

.news-dots button.active { background: #fff; }

.practice-section {
  padding: 30px 0 92px;
}

.practice-grid {
  width: min(100% - 40px, 1140px);
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 36px;
}

.practice-card {
  min-height: 292px;
  padding: 42px 34px 36px;
  background: #fff;
  text-align: center;
  box-shadow:
    0 6px 8px rgba(0,0,0,.08),
    0 15px 30px rgba(0,0,0,.10),
    0 25px 50px rgba(0,0,0,.06);
}

.practice-card h2 {
  margin: 0;
  color: #0d2f5e;
  font: 600 22px/1.2 "Montserrat", sans-serif;
  text-transform: uppercase;
  letter-spacing: .02em;
}

.practice-rule {
  display: block;
  width: 55px;
  height: 3px;
  margin: 15px auto 24px;
  background: #2e75b6;
}

.practice-card p {
  margin: 0;
  color: #4a4a4a;
  font-size: 15px;
  line-height: 1.65;
}

.focus-section {
  padding: 0 0 90px;
}

.focus-inner {
  width: min(100% - 40px, 1084px);
  margin: 0 auto;
  display: grid;
  grid-template-columns: 360px minmax(0, 1fr);
  gap: 48px;
  align-items: start;
}

.focus-rule {
  display: block;
  width: 165px;
  height: 2px;
  margin-bottom: 16px;
  background: #c28b14;
}

.focus-list h2 {
  margin: 0 0 38px;
  color: #111;
  font: 700 31px/1.15 "Quattrocento Sans", sans-serif;
}

.focus-buttons {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
}

.focus-button {
  max-width: 100%;
  border: 0;
  border-radius: 24px;
  padding: 8px 24px;
  background: #fff;
  color: #000;
  box-shadow: 0 3px 12px rgba(0,0,0,.14);
  text-align: left;
  font: 700 15.5px/1.4 "Open Sans", sans-serif;
}

.focus-button.active {
  padding: 12px 26px;
  border-radius: 28px;
  background: #023e82;
  color: #fff;
}

.focus-content {
  min-width: 0;
  background: #fff;
  padding: 0 48px 12px 42px;
}

.focus-content h3 {
  margin: 0 0 13px;
  color: #1a1a1a;
  font: 700 31px/1.3 "Quattrocento Sans", sans-serif;
}

.focus-content p {
  margin: 0;
  color: #333;
  font: 400 15px/1.5 "Open Sans", sans-serif;
  overflow-wrap: anywhere;
}

.stats-section {
  padding: 0 0 85px;
}

.stats-panel {
  width: min(100% - 40px, 1140px);
  margin: 0 auto;
  padding: 46px 50px 42px;
  border-radius: 8px;
  background: #e8f0f6;
}

.stats-intro {
  display: grid;
  grid-template-columns: 205px minmax(0,1fr);
  align-items: center;
  gap: 30px;
  padding-bottom: 36px;
  border-bottom: 1px solid rgba(53,89,137,.2);
}

.stats-logo {
  width: 190px;
  height: auto;
  max-height: 70px;
  object-fit: contain;
}

.stats-est {
  margin: 0 0 8px;
  color: #c28b14;
  font: 700 13px/1.2 "Open Sans", sans-serif;
  letter-spacing: .08em;
}

.stats-intro h2 {
  margin: 0 0 10px;
  color: #0d2f5e;
  font: 700 28px/1.15 "Quattrocento Sans", sans-serif;
}

.stats-intro > div > p:last-child {
  max-width: 760px;
  margin: 0;
  color: #4a4a4a;
  font-size: 15px;
  line-height: 1.6;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  padding-top: 30px;
}

.stat-card {
  min-height: 165px;
  padding: 25px 18px;
  border-radius: 5px;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.stat-icon {
  width: 34px;
  height: 34px;
  display: block;
  margin-bottom: 10px;
  color: #355989;
}

.stat-icon :deep(svg) {
  width: 100%;
  height: 100%;
}

.stat-card strong {
  display: block;
  color: #0d2f5e;
  font: 700 42px/1 "Montserrat", sans-serif;
}

.stat-card > span:last-child {
  margin-top: 8px;
  color: #444;
  font: 700 12px/1.3 "Open Sans", sans-serif;
  text-transform: uppercase;
  letter-spacing: .04em;
}

@media (max-width: 1024px) {
  .hero-container {
    width: min(100% - 32px, 1140px);
  }

  .hero-copy {
    width: 48%;
    padding-top: 185px;
  }

  .hero-copy h1 {
    font-size: 50px;
  }

  .hero-lead {
    width: 100%;
  }

  .hero-controls {
    width: 48%;
  }

  .news-slider,
  .practice-grid,
  .stats-panel {
    width: min(100% - 32px, 1140px);
  }

  .focus-inner {
    width: min(100% - 32px, 1084px);
  }
}

@media (max-width: 768px) {
  .hero {
    min-height: auto;
    margin-bottom: 0;
  }

  .hero-slides {
    min-height: 0;
  }

  .hero-slide {
    position: relative;
    min-height: 0;
    display: none;
  }

  .hero-slide.active {
    display: flex;
    flex-direction: column;
  }

  .hero-image {
    position: relative;
    order: 1;
    width: 100%;
    height: auto;
    max-width: none;
    object-fit: cover;
  }

  .hero-image-fade {
    inset: 0 0 auto 0;
    height: 22%;
    background: linear-gradient(to bottom, #fff, rgba(255,255,255,0));
  }

  .hero-container {
    width: 100%;
    height: auto;
  }

  .hero-copy {
    order: 2;
    width: 100%;
    max-width: none;
    padding: 26px 20px 34px;
  }

  .hero-kicker {
    font-size: 22px;
  }

  .hero-copy h1 {
    margin-bottom: 20px;
    font-size: 42px;
    line-height: .98;
  }

  .hero-lead {
    font-size: 15px;
  }

  .hero-controls-container {
    position: relative;
    top: auto;
    margin-top: -2px;
    padding: 0 20px;
  }

  .hero-controls {
    width: 100%;
    padding-bottom: 22px;
  }

  .news-section {
    padding-bottom: 55px;
  }

  .news-slider {
    width: 100%;
    height: 390px;
  }

  .news-content {
    width: 100%;
    padding: 32px 48px 42px;
  }

  .news-content h2 {
    font-size: 28px;
  }

  .practice-section {
    padding-bottom: 65px;
  }

  .practice-grid {
    grid-template-columns: 1fr;
    gap: 26px;
  }

  .practice-card {
    min-height: auto;
  }

  .focus-section {
    padding-bottom: 65px;
  }

  .focus-inner {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  .focus-content {
    padding: 0;
  }

  .focus-content h3 {
    font-size: 27px;
  }

  .stats-section {
    padding-bottom: 65px;
  }

  .stats-panel {
    padding: 32px 24px;
  }

  .stats-intro {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .stats-logo {
    margin: 0 auto;
  }

  .stats-intro > div > p:last-child {
    margin-inline: auto;
  }

  .stats-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }
}

@media (max-width: 480px) {
  .hero-copy {
    padding-inline: 16px;
  }

  .hero-copy h1 {
    font-size: 38px;
  }

  .hero-controls-container {
    padding-inline: 16px;
  }

  .news-content {
    padding: 28px 42px 38px;
  }

  .news-content h2 {
    font-size: 24px;
  }

  .news-arrow {
    width: 40px;
    height: 40px;
  }

  .news-prev { left: 10px; }
  .news-next { right: 10px; }

  .news-dots {
    bottom: 12px;
  }

  .stats-panel {
    width: min(100% - 24px, 1140px);
    padding-inline: 18px;
  }

  .stat-card strong {
    font-size: 38px;
  }
}
</style>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

const heroSlides = [
  {
    image: '/images/slide-1.jpeg',
    title: 'Innovative Thinkers. Solution Providers.',
    text: 'Challenges are opportunities to be leveraged. We provide creative solutions to complex problems.',
    alt: 'Kohlerackels service information'
  },
  {
    image: '/images/slide-21.jpg',
    title: 'Business Acumen. Legal Know-How.',
    text: 'Legal issues are only part of the story. We apply the law with practical business solutions.',
    alt: 'Kohlerackels service information'
  },
  {
    image: '/images/slide-3.jpeg',
    title: 'National Reach. <br>Local Touch.',
    text: 'Relationships matter. We are where you need us with depth and breadth of resources.',
    alt: 'Two professionals speaking together'
  },
  {
    image: '/images/slide-4.jpg',
    title: 'Clients First. <br>We Deliver.',
    text: 'Your business is our business. We work tirelessly for your success.',
    alt: 'Kohlerackels client service information'
  }
]

const newsSlides = [
  {
    image: '/images/Slide1.jpg',
    category: 'Featured Insight',
    title: 'Latest insights from Kohlerackels',
    date: 'August 2026',
    alt: 'Featured insight from Kohlerackels'
  },
  {
    image: '/images/Slide2.jpg',
    category: 'In The News',
    title: 'Christina Lehm Offers Insight for European Companies Facing U.S. Litigation',
    date: 'Aug. 11, 2026',
    alt: 'Christina Lehm Offers Insight for European Companies Facing U.S. Litigation'
  },
  {
    image: '/images/Slide3.jpg',
    category: 'Blogs',
    title: 'When the Committee Takes the Wheel — Lessons US Magnesium',
    date: 'Aug. 6, 2026',
    alt: 'When the Committee Takes the Wheel — Lessons US Magnesium'
  },
  {
    image: '/images/Slide4.jpg',
    category: 'Press Release',
    title: 'Kohlerackels Deploys Harvey Across All Practices',
    date: 'Aug. 24, 2026',
    alt: 'Kohlerackels Deploys Harvey Across All Practices'
  }
]

const practiceCards = [
  {
    title: 'Trade Secrets - Noncompete',
    description: 'Nationally recognized for our trade secrets, noncompete, and employee mobility practice, our lawyers combine the skills, experience, and judgment to advise and represent companies and individuals on even the most complex trade secret litigation and noncompete issues.'
  },
  {
    title: 'Business Litigation',
    description: 'Representing Fortune 500 companies, small and mid-market companies, and individuals in all areas of dispute resolution, we have an active business litigation practice across Massachusetts in state and federal courts.'
  },
  {
    title: 'Employment Law',
    description: 'Representing employers of all sizes in a wide array of employment-law matters, including counseling on day-to-day employment issues to litigating in state and federal courts and administrative agencies.'
  }
]

const focusItems = [
  {
    key: 'litigation',
    title: 'Trademark Litigation',
    body: 'Kohlerackels trademark litigation team protects and enforces the world’s most valuable brands in federal and state courts, before the USPTO’s Trademark Trial and Appeal Board, and in dispute forums around the globe. We handle claims of infringement, dilution, and counterfeiting; opposition and cancellation proceedings; domain name and social media disputes; and unfair competition matters. From pre-suit strategy and emergency relief through trial and appeal, we pair deep procedural experience with commercially focused judgment to resolve disputes efficiently and position our clients for long-term brand success.'
  },
  {
    key: 'clearance',
    title: 'Trademark Clearance, Counseling & Prosecution',
    body: 'Kohlerackels trademark team, including former U.S. Patent and Trademark Office (USPTO) examining attorneys and former in-house counsel, delivers full lifecycle brand protection – from clearance, filing strategies, and prosecution to maintenance and complex USPTO office action practice. We routinely advise on complex trademark matters, portfolio alignment to business launches and broadcast schedules, and risk calibrated enforcement programs. We manage U.S. and global trademark portfolios, and counsel on portfolio management, trademark licensing, sales and acquisitions, and enforcement strategy. Combining our experience in trademark, copyright, and advertising law and a clear understanding of our clients’ business goals, we provide efficient solutions, practical advice, and outstanding results. Additionally, we help clients with online takeovers and unauthorized reseller enforcement; domain name and social media enforcement and litigation; and acquisition, sale, and licensing.'
  }
]

const stats = [
  {
    value: '500+',
    label: 'Legal Professionals',
    icon: '<svg viewBox="0 0 24 24" fill="none"><circle cx="9" cy="8" r="3" stroke="currentColor" stroke-width="1.7"/><circle cx="17" cy="10" r="2.2" stroke="currentColor" stroke-width="1.7"/><path d="M3.5 20c.4-3.2 2.2-5 5.5-5s5.1 1.8 5.5 5M14 15.5c3-.2 5 1.3 6 4.5" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>'
  },
  {
    value: '60+',
    label: 'Practice Areas',
    icon: '<svg viewBox="0 0 24 24" fill="none"><path d="M4 9.5h16v9H4zM7 9.5V6.8C7 5.8 7.8 5 8.8 5h6.4c1 0 1.8.8 1.8 1.8v2.7" stroke="currentColor" stroke-width="1.7"/><path d="M4 13h16" stroke="currentColor" stroke-width="1.7"/></svg>'
  },
  {
    value: '37',
    label: 'Am Law Ranking',
    icon: '<svg viewBox="0 0 24 24" fill="none"><path d="M5 20V8.5M12 20V4M19 20v-7.5" stroke="currentColor" stroke-width="1.7"/><path d="M3 20h18" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>'
  }
]

const heroIndex = ref(2)
const newsIndex = ref(0)
const focusKey = ref('clearance')
const heroPlaying = ref(true)
let heroTimer
let newsTimer

const heroActive = computed(() => heroSlides[heroIndex.value])
const newsActive = computed(() => newsSlides[newsIndex.value])
const focusActive = computed(() => focusItems.find(item => item.key === focusKey.value) || focusItems[1])

const nextHero = () => {
  heroIndex.value = (heroIndex.value + 1) % heroSlides.length
}

const previousHero = () => {
  heroIndex.value = (heroIndex.value - 1 + heroSlides.length) % heroSlides.length
}

const goHero = (index) => {
  heroIndex.value = index
  restartHero()
}

const startHero = () => {
  clearInterval(heroTimer)
  heroTimer = setInterval(() => {
    if (heroPlaying.value) nextHero()
  }, 10000)
}

const restartHero = () => {
  startHero()
}

const pauseHero = () => {
  heroPlaying.value = false
}

const resumeHero = () => {
  heroPlaying.value = true
}

const toggleHero = () => {
  heroPlaying.value = !heroPlaying.value
}

const nextNews = () => {
  newsIndex.value = (newsIndex.value + 1) % newsSlides.length
}

const previousNews = () => {
  newsIndex.value = (newsIndex.value - 1 + newsSlides.length) % newsSlides.length
}

const goNews = (index) => {
  newsIndex.value = index
  restartNews()
}

const startNews = () => {
  clearInterval(newsTimer)
  newsTimer = setInterval(nextNews, 6000)
}

const restartNews = () => {
  startNews()
}

const pauseNews = () => {
  clearInterval(newsTimer)
}

const resumeNews = () => {
  startNews()
}

onMounted(() => {
  startHero()
  startNews()
})

onBeforeUnmount(() => {
  clearInterval(heroTimer)
  clearInterval(newsTimer)
})
</script>
