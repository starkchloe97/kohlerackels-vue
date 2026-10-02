<template>
<section class="focus-section"><div class="focus-container">
<div class="focus-left"><h2>Areas of focus</h2><button v-for="item in items" :key="item.key" class="focus-btn" :class="{active:activeKey===item.key}" :aria-pressed="activeKey===item.key" @click="activeKey=item.key">{{ item.title }}</button></div>
<article class="focus-card" aria-live="polite"><h3>{{ active.title }}</h3><p>{{ active.body }}</p></article>
</div></section>
</template>
<script setup>
import {computed,ref} from 'vue'
const items=[
{key:'litigation',title:'Trademark Litigation',body:"Kohlerackels trademark litigation team protects and enforces the world’s most valuable brands in federal and state courts, before the USPTO’s Trademark Trial and Appeal Board, and in dispute forums around the globe. We handle claims of infringement, dilution, and counterfeiting; opposition and cancellation proceedings; domain name and social media disputes; and unfair competition matters."},
{key:'clearance',title:'Trademark Clearance, Counseling & Prosecution',body:"Kohlerackels trademark team, including former U.S. Patent and Trademark Office (USPTO) examining attorneys and former in-house counsel, delivers full lifecycle brand protection – from clearance, filing strategies, and prosecution to maintenance and complex USPTO office action practice. We routinely advise on complex trademark matters, portfolio alignment to business launches and broadcast schedules, and risk calibrated enforcement programs. We manage U.S. and global trademark portfolios, and counsel on portfolio management, trademark licensing, sales and acquisitions, and enforcement strategy."}]
const activeKey=ref('clearance');const active=computed(()=>items.find(x=>x.key===activeKey.value)||items[0])
</script>
<style scoped lang="scss">
.focus-section{padding:70px 20px}.focus-container{width:min(100%,1084px);margin:auto;display:grid;grid-template-columns:340px 1fr;gap:55px}.focus-left h2{font:700 31px/1.15 $font-display;margin-bottom:32px}.focus-btn{display:block;max-width:100%;margin-bottom:18px;padding:10px 22px;border:0;border-radius:24px;background:#fff;box-shadow:0 3px 12px rgba(0,0,0,.14);color:$color-navy;text-align:left}.focus-btn.active{background:$color-deep-blue;color:#fff}.focus-card h3{font:700 31px/1.25 $font-display}.focus-card p{margin-top:14px;color:#333;line-height:1.55}@media(max-width:$bp-lg){.focus-container{grid-template-columns:1fr}} 
</style>