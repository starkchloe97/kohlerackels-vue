<template>
  <div class="service-detail-page">
    <section class="row featured-top cropped-feature practice-area">
      <div class="featured-background">
        <img :src="heroImage" :alt="heroAlt">
      </div>
      <div class="photo-gradient"></div>

      <div class="container featured-container">
        <div class="row">
          <div class="col-md-7 featured-content">
            <h1 class="featured-section">{{ eyebrow || title }}</h1>
            <h2 class="featured-title">{{ title }}</h2>

            <div class="capabilities-icon-row" aria-label="Page tools">
              <button type="button" class="bg-transparent border-0 p-0 print-btn" aria-label="Print this page" @click="printPage">
                <span class="service-tool-icon">⌕</span>
              </button>
              <span class="service-tool-icon service-pdf" aria-hidden="true">PDF</span>
            </div>

            <h4 v-if="introTitle" class="featured-subhead">{{ introTitle }}</h4>
            <p class="generic featured-intro">{{ intro }}</p>
          </div>
        </div>
      </div>

      <div class="container featured-tabs">
        <ul class="nav nav-tabs" role="tablist">
          <li v-for="tab in tabs" :key="tab" class="nav-item" role="presentation">
            <button
              type="button"
              class="nav-link"
              :class="{ active: tab === activeTab }"
              @click="activeTab = tab"
            >
              {{ tab }}
            </button>
          </li>
        </ul>
      </div>
    </section>

    <section class="row section-subnav service-detail-body">
      <div class="container">
        <div class="tab-content white-back-sub">
          <div class="tab-pane active sidebar-wrapper">
            <div class="row attorney-tab-info">
              <div class="col-md-8 content-inner">
                <template v-for="(section, index) in sections" :key="section.heading || index">
                  <hr v-if="index > 0 && section.divider !== false">

                  <h3 v-if="section.heading" :class="index === 0 ? 'top-body-subhead' : 'body-subhead'">
                    {{ section.heading }}
                  </h3>

                  <p v-if="section.text" class="generic" v-html="section.text"></p>

                  <ul v-if="section.items" class="list-triangle">
                    <li v-for="item in section.items" :key="item" v-html="item"></li>
                  </ul>

                  <div v-if="section.note" class="service-note" v-html="section.note"></div>
                </template>

                <template v-if="why">
                  <hr>
                  <h3 class="body-subhead">{{ why.title || 'Why Kohlerackels?' }}</h3>
                  <p v-if="why.text" class="generic" v-html="why.text"></p>
                  <ul v-if="why.items" class="list-triangle">
                    <li v-for="item in why.items" :key="item" v-html="item"></li>
                  </ul>
                </template>
              </div>

              <aside class="col-md-4 sidebar-inner">
                <div v-if="contacts?.length" class="sidebar-aside-container">
                  <h3 class="sidebar-title sidebar-title-with-first">Practice Contacts</h3>

                  <div v-for="person in contacts" :key="person.name" class="service-contact">
                    <div v-if="person.image" class="sidebar-contact-photo">
                      <img :src="person.image" :alt="person.name">
                    </div>
                    <div class="sidebar-contact-details full-width">
                      <h4>{{ person.name }}</h4>
                      <p v-if="person.role">{{ person.role }}</p>
                      <a v-if="person.email" :href="'mailto:' + person.email">{{ person.email }}</a>
                    </div>
                  </div>
                </div>

                <div class="sidebar-aside-container service-cta">
                  <h3 class="sidebar-title sidebar-title-with-first">Get in touch</h3>
                  <p>Contact our team to discuss how we can help with your legal needs.</p>
                  <RouterLink to="/contact" class="nm-button-yellow service-contact-button">GET IN TOUCH</RouterLink>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  title: { type: String, required: true },
  eyebrow: { type: String, default: 'Services' },
  introTitle: { type: String, default: '' },
  intro: { type: String, required: true },
  heroImage: { type: String, default: '/images/service-1.jpg.jpeg' },
  heroAlt: { type: String, default: '' },
  tabs: { type: Array, default: () => ['Overview', 'Professionals', 'Related Practice Areas', 'Related Industries', 'Insights'] },
  sections: { type: Array, default: () => [] },
  why: { type: Object, default: null },
  contacts: { type: Array, default: () => [] }
})

const activeTab = ref(props.tabs[0])

function printPage() {
  window.print()
}
</script>

<style scoped>
.service-detail-page {
  width: 100%;
  overflow: hidden;
}

.featured-intro {
  max-width: 760px;
}

.capabilities-icon-row {
  display: flex;
  align-items: center;
  gap: 12px;
  margin: -12px 0 24px;
}

.service-tool-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 34px;
  height: 28px;
  color: #427aa9;
  font-family: "Open Sans", Arial, sans-serif;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: .04em;
}

.service-pdf {
  border-left: 1px solid #d2d2d2;
  padding-left: 12px;
}

.service-note {
  margin: 0 0 1.25em;
  color: #555;
}

.service-contact {
  margin-bottom: 26px;
}

.service-contact h4 {
  margin: 0 0 3px;
  font-family: "Quattrocento Sans", sans-serif;
  font-size: 1.1rem;
  font-weight: 600;
}

.service-contact p {
  margin: 0 0 4px;
}

.service-contact a {
  color: #427aa9;
  word-break: break-word;
}

.service-cta {
  margin-top: 28px;
}

.service-contact-button {
  display: block;
  margin-top: 18px;
  text-align: center;
  text-decoration: none !important;
}

@media (max-width: 767px) {
  .capabilities-icon-row {
    margin-top: 0;
  }

  .service-detail-body {
    padding-top: 0;
  }
}
</style>
