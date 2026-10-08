<template>
  <div class="insights-list" :class="{ 'insights-list--directory': directoryStyle }">
    <section
      v-for="(section, sectionIndex) in sections"
      :key="section.title || sectionIndex"
      class="insights-list__section"
    >
      <header class="insights-list__header">
        <h2 class="insights-list__heading">{{ section.title }}</h2>
        <div class="insights-list__controls">
          <span class="insights-list__count">{{ rangeLabel(section) }}</span>
          <span v-if="viewAllHref" class="insights-list__next" aria-hidden="true"></span>
          <a v-if="viewAllHref" class="insights-list__view-all" :href="viewAllHref">View All</a>
        </div>
      </header>

      <ul class="insights-list__items">
        <li
          v-for="(item, itemIndex) in section.items || []"
          :key="item.id || item.href || `${item.date}-${itemIndex}`"
          class="insights-list__item"
        >
          <time v-if="item.date" class="insights-list__date">{{ item.date }}</time>
          <a
            v-if="item.href"
            class="insights-list__link"
            :href="item.href"
          >{{ item.title }}</a>
          <span v-else class="insights-list__link">{{ item.title }}</span>
        </li>
      </ul>
    </section>
  </div>
</template>

<script setup>
defineProps({
  sections: {
    type: Array,
    default: () => []
  },
  directoryStyle: {
    type: Boolean,
    default: false
  },
  viewAllHref: {
    type: String,
    default: ''
  }
})

function rangeLabel(section) {
  const itemCount = section.items?.length ?? 0
  const total = section.total ?? itemCount

  if (!itemCount) return `0 of ${total}`

  const start = section.start ?? 1
  const end = start + itemCount - 1

  return `${start}-${end} of ${total}`
}
</script>

<style scoped>
.insights-list {
  width: 100%;
  color: #171717;
  font-family: "Open Sans", Arial, sans-serif;
}

.insights-list__section + .insights-list__section {
  margin-top: 28px;
}

.insights-list__header {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 4px;
}

.insights-list__heading {
  margin: 0;
  font-size: 30px;
  font-weight: 600;
  line-height: 1.25;
}

.insights-list__count {
  flex: 0 0 auto;
  color: #272727;
  font-size: 11px;
  line-height: 1.4;
}

.insights-list__items {
  margin: 0;
  padding: 0; 
  list-style: none;
}

.insights-list__item {
  padding: 4px 0 5px;
  border-bottom: 1px solid #c9c9c9;
}

.insights-list__date {
  display: block;
  margin-bottom: 1px;
  color: #363636;
  font-size: 11px;
  line-height: 1.25;
}

.insights-list__link {
  display: block;
  color: #1f5b91;
  font-size: 15px;
  font-weight: 400;
  line-height: 1.3;
  text-decoration: none;
}

a.insights-list__link:hover,
a.insights-list__link:focus-visible {
  color: #123e66;
  text-decoration: underline;
}

.insights-list--directory .insights-list__header {
  align-items: center;
  margin-bottom: 13px;
  padding-bottom: 5px;
  border-bottom: 1px solid #777;
}

.insights-list--directory {
  max-width: 828px;
}

.insights-list--directory .insights-list__heading {
  color: #111;
  font-size: 28px;
  font-weight: 400;
  line-height: 1.1;
}

.insights-list--directory .insights-list__controls {
  display: flex;
  flex: 0 0 auto;
  align-items: center;
  gap: 22px;
}

.insights-list--directory .insights-list__count {
  color: #858585;
  font-size: 16px;
  line-height: 1.3;
}

.insights-list--directory .insights-list__next {
  width: 0;
  height: 0;
  margin-left: -12px;
  border-top: 9px solid transparent;
  border-bottom: 9px solid transparent;
  border-left: 9px solid #9ba1a8;
}

.insights-list--directory .insights-list__view-all {
  color: #286394;
  font-size: 18px;
  line-height: 1.3;
  text-decoration: none;
  white-space: nowrap;
}

.insights-list--directory .insights-list__item {
  padding: 10px 0;
  border-bottom-color: #777;
}

.insights-list--directory .insights-list__items > li::before {
  display: none;
  content: none;
}

.insights-list--directory .insights-list__date {
  margin-bottom: 1px;
  color: #858585;
  font-size: 14px;
  line-height: 1.3;
}

.insights-list--directory .insights-list__link {
  color: #286394;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.3;
}

.insights-list--directory a.insights-list__view-all:hover,
.insights-list--directory a.insights-list__view-all:focus-visible {
  color: #123e66;
  text-decoration: underline;
}
</style>
