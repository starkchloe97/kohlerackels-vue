# Kohlerackels Vue

A simple Vue 3/Vite reconstruction of the Kohlerackels website.

## Stack
- Vue 3 Composition API with `<script setup>`
- Vite
- Vue Router 4
- Plain CSS (no SCSS, no Tailwind)

## Simple structure

```text
src/
├── components/
│   ├── Header.vue
│   └── Footer.vue
├── pages/
│   ├── Home.vue
│   ├── Professionals.vue
│   ├── Services.vue
│   ├── Firm.vue
│   ├── Locations.vue
│   ├── Culture.vue
│   ├── PrivacyPolicy.vue
│   └── NoticeAtCollection.vue
├── App.vue
├── main.js
├── router.js
└── style.css
```

Each page/component keeps the Vue SFC intentionally simple:

```vue
<template>
  ...
</template>

<style scoped>
  ...
</style>

<script setup>
  ...
</script>
```

The original HTML pages were used as migration sources and removed after conversion. The original compiled global stylesheet was moved to `src/style.css` and remains plain CSS.

## Development

```bash
npm install
npm run dev
```
