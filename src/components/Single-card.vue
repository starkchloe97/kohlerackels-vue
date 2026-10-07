<script setup>
import { computed } from 'vue'

const props = defineProps({
  title: { type: String, default: 'Chief Engagement and Opportunity Partner' },
  name: { type: String, default: 'Michael A. Brown' },
  role: { type: String, default: 'Partner' },
  phone: { type: String, default: '443.392.9401' },
  email: { type: String, default: '' },
  photo: { type: String, default: '/images/Opportunitity/simmons-.jpg' },
})

const telHref = computed(() => `tel:${props.phone.replace(/\D/g, '')}`)
</script>

<template>
  <section class="contact-card">
    <div class="contact-card__body">
      <h2 class="contact-card__title">{{ title }}</h2>

      <div class="contact-card__panel">
        <div class="contact-card__info">
          <p class="contact-card__name">{{ name }}</p>
          <p class="contact-card__role">{{ role }}</p>

          <p class="contact-card__phone">
            <component
              :is="email ? 'a' : 'span'"
              class="contact-card__icon"
              :href="email ? `mailto:${email}` : undefined"
              :aria-label="email ? `Email ${name}` : undefined"
            >
              <svg viewBox="0 0 50 32" aria-hidden="true">
                <path d="M0 0h50L25 18z" />
                <path d="M0 3.5 18.5 20 0 32zM50 3.5 31.5 20 50 32zM21.5 22 25 25l3.5-3 21.5 10H0z" />
              </svg>
            </component>
            <a :href="telHref">T {{ phone }}</a>
          </p>
        </div>

        <img class="contact-card__photo" :src="photo" :alt="name" draggable="false" loading="lazy" />
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Everything scales from the design width (578px). */
.contact-card {
  container-type: inline-size;
  width: 100%;
}

.contact-card__body {
  --u: calc(100cqw / 578);
  box-sizing: border-box;
  margin: 10px;
  /* padding:20px; */
  /* padding: calc(var(--u) * 18) calc(var(--u) * 20) calc(var(--u) * 26); */
  /* background: #e9eaec; */
  font-family: 'Open Sans', 'Helvetica Neue', Arial, sans-serif;
}

.contact-card__title {
  margin: 0 0 calc(var(--u) * 16);
  font-size: calc(var(--u) * 31);
  font-weight: 400;
  line-height: 1.25;
  color: #1a1a1a;
  padding-left: 35px;
}

.contact-card__panel {
  position: relative;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  height: calc(var(--u) * 226);
  padding-left: calc(var(--u) * 48);
  padding-right: calc(var(--u) * 280);
  background: #fff;
}

.contact-card__info {
  position: relative;
  z-index: 1;
  max-width: calc(var(--u) * 280);
}

.contact-card__info p {
  margin: 0;
}

.contact-card__name {
  font-family: 'Cabin', 'Trebuchet MS', 'Segoe UI', sans-serif;
  font-size: calc(var(--u) * 34);
  font-weight: 700;
  line-height: 1.15;
  color: #000;
}

.contact-card__role {
  margin-top: calc(var(--u) * 4);
  font-size: calc(var(--u) * 26);
  font-weight: 300;
  line-height: 1.3;
  color: #54595f;
}

.contact-card__phone {
  display: flex;
  align-items: center;
  gap: calc(var(--u) * 14);
  margin-top: calc(var(--u) * 12);
  font-size: calc(var(--u) * 23);
  color: #3f4448;
}

.contact-card__phone a {
  color: inherit;
  text-decoration: none;
}

.contact-card__icon {
  display: block;
  flex-shrink: 0;
  width: calc(var(--u) * 44);
  height: calc(var(--u) * 28);
  fill: #e8ac1f;
}

.contact-card__icon svg {
  display: block;
  width: 100%;
  height: 100%;
}

.contact-card__photo {
  position: absolute;
  right: 0;
  bottom: 0;
  height: 100%;
  width: auto;
  max-width: 50%;
  object-fit: contain;
  object-position: right bottom;
}
</style>