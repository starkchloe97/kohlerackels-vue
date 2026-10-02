<template>
  <div class="home-page">
    <section class="hero-carousel" aria-roledescription="carousel" aria-label="Kohlerackels Service Information">
      <div class="hero-slide" v-for="(slide,index) in heroSlides" :key="slide.image" :class="{active:index===heroIndex}">
        <img :src="slide.image" :alt="slide.alt" />
        <div class="container hero-caption"><h1 v-html="slide.title"></h1><p>{{ slide.text }}</p></div>
      </div>
      <div class="hero-controls"><button type="button" aria-label="Previous slide" @click="previousHero">‹</button><button type="button" aria-label="Pause or play" @click="heroPlaying=!heroPlaying">{{heroPlaying?'Ⅱ':'▶'}}</button><button type="button" aria-label="Next slide" @click="nextHero">›</button><div class="hero-dots"><button v-for="(_,i) in heroSlides" :key="i" :class="{active:i===heroIndex}" :aria-label="'Go to slide '+(i+1)" @click="goHero(i)"></button></div></div>
    </section>

    <section class="insights-slider-section" aria-label="Featured insights">
      <div class="home-slider"><div class="home-slider-track" :style="{transform:'translateX(-'+insightIndex*100+'%)'}"><article v-for="slide in insightSlides" :key="slide.image" class="home-slider-slide"><img :src="slide.image" :alt="slide.alt"></article></div><button class="home-slider-arrow home-slider-prev" aria-label="Previous slide" @click="previousInsight">‹</button><button class="home-slider-arrow home-slider-next" aria-label="Next slide" @click="nextInsight">›</button><div class="home-slider-dots"><button v-for="(_,i) in insightSlides" :key="i" :class="{active:i===insightIndex}" :aria-label="'Go to insight '+(i+1)" @click="insightIndex=i"></button></div></div>
    </section>

    <section class="box-container">
      <article v-for="card in practiceCards" :key="card.title" class="box"><h2>{{card.title}}</h2><p>{{card.description}}</p></article>
    </section>

    <section class="focus-section"><div class="focus-container"><div class="focus-left"><span class="focus-rule"></span><h2 class="focus-title">Areas of focus</h2><div class="focus-buttons"><button v-for="item in focusItems" :key="item.key" class="focus-btn" :class="{'is-active':focusKey===item.key}" :aria-pressed="focusKey===item.key" @click="focusKey=item.key">{{item.title}}</button></div><div class="focus-mobile"><button v-for="item in focusItems" :key="item.key" @click="focusKey=focusKey===item.key?'':item.key" :aria-expanded="focusKey===item.key">{{item.title}}<span>⌄</span></button><p v-if="focusKey">{{focusActive.body}}</p></div></div><article class="focus-right"><div class="focus-card"><div class="focus-card__inner"><h3>{{focusActive.title}}</h3><p>{{focusActive.body}}</p></div></div></article></div></section>

    <section class="home-callout"><img src="/images/home-slide-3.jpeg" alt="Kohlerackels firm information infographic"></section>
  </div>
</template>

<style scoped>
.hero-carousel{position:relative;overflow:hidden;background:#eef2f5}.hero-slide{display:none;position:relative;min-height:420px}.hero-slide.active{display:block}.hero-slide img{width:100%;height:420px;object-fit:cover}.hero-caption{position:absolute;inset:0;display:flex;flex-direction:column;justify-content:center;max-width:1200px}.hero-caption h1{font:400 clamp(38px,4.7vw,68px)/1.02 "Quattrocento Sans",sans-serif;max-width:620px}.hero-caption p{margin-top:20px;max-width:540px;color:#2e75b6;font-weight:600}.hero-controls{position:absolute;left:calc(50% - 580px);bottom:22px;display:flex;align-items:center;gap:8px}.hero-controls>button{border:0;background:none;font-size:24px;color:#666}.hero-dots{display:flex;gap:7px}.hero-dots button,.home-slider-dots button{width:10px;height:10px;border:0;border-radius:50%;background:#aaa}.hero-dots button.active,.home-slider-dots button.active{background:#0d456d}.insights-slider-section{display:flex;justify-content:center;padding:26px 0}.home-slider{position:relative;width:min(70%,1200px);overflow:hidden}.home-slider-track{display:flex;transition:transform .6s ease}.home-slider-slide{flex:0 0 100%}.home-slider-slide img{width:100%;display:block}.home-slider-arrow{position:absolute;top:50%;transform:translateY(-50%);border:0;border-radius:50%;width:44px;height:44px;background:rgba(0,0,0,.28);color:#fff;font-size:26px}.home-slider-prev{left:14px}.home-slider-next{right:14px}.home-slider-dots{position:absolute;bottom:12px;left:50%;transform:translateX(-50%);display:flex;gap:8px}.box-container{padding-top:60px;padding-bottom:60px}.focus-rule{display:block;width:165px;height:2px;background:#fff;margin-bottom:16px}.focus-mobile{display:none}.home-callout{display:flex;justify-content:center;padding:30px 0 10px}.home-callout img{width:min(86%,1100px)}@media(max-width:1080px){.hero-controls{left:30px}.home-slider{width:90%}}@media(max-width:768px){.hero-slide img{height:360px}.hero-slide{min-height:360px}.hero-caption{padding:0 20px}.hero-caption h1{font-size:40px}.hero-controls{left:20px}.home-slider{width:100%}.focus-mobile{display:block}.focus-buttons,.focus-right{display:none}.focus-mobile button{width:100%;display:flex;justify-content:space-between;padding:13px 15px;margin-bottom:10px;border:0;background:#fff;color:#023e82;font-weight:700;box-shadow:0 2px 8px rgba(0,0,0,.08)}.focus-mobile p{padding:0 15px 16px}}
</style>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

const heroSlides=[
{image:'/images/slide-1.jpeg',alt:'Kohlerackels service information',title:'Innovative Thinkers. Solution Providers.',text:'Challenges are opportunities to be leveraged. We provide creative solutions to complex problems.'},
{image:'/images/slide-21.jpg',alt:'Kohlerackels service information',title:'Business Acumen. Legal Know-How.',text:'Legal issues are only part of the story. We apply the law with practical business solutions.'},
{image:'/images/slide-3.jpeg',alt:'Kohlerackels service information',title:'National Reach. Local Touch.',text:'Relationships matter. We are where you need us with depth and breadth of resources.'},
{image:'/images/slide-4.jpg',alt:'Kohlerackels service information',title:'Clients First. We Deliver.',text:'Your business is our business. We work tirelessly for your success.'}
]
const heroIndex=ref(0),heroPlaying=ref(true),insightIndex=ref(0),focusKey=ref('clearance');let timer
const goHero=i=>heroIndex.value=i;const nextHero=()=>heroIndex.value=(heroIndex.value+1)%heroSlides.length;const previousHero=()=>heroIndex.value=(heroIndex.value-1+heroSlides.length)%heroSlides.length
const start=()=>{clearInterval(timer);timer=setInterval(()=>{if(heroPlaying.value)nextHero()},10000)}
onMounted(start);onBeforeUnmount(()=>clearInterval(timer))
const insightSlides=[{image:'/images/Slide1.jpg',alt:'Featured insight'},{image:'/images/Slide2.jpg',alt:'In The News'},{image:'/images/Slide3.jpg',alt:'Featured blog'},{image:'/images/Slide4.jpg',alt:'Press release'}]
const nextInsight=()=>insightIndex.value=(insightIndex.value+1)%insightSlides.length;const previousInsight=()=>insightIndex.value=(insightIndex.value-1+insightSlides.length)%insightSlides.length
const practiceCards=[
{title:'Trade Secrets - Noncompete',description:'Nationally recognized for our trade secrets, noncompete, and employee mobility practice, our lawyers combine the skills, experience, and judgment to advise and represent companies and individuals on even the most complex trade secret litigation and noncompete issues.'},
{title:'Business Litigation',description:'Representing Fortune 500 companies, small and mid-market companies, and individuals in all areas of dispute resolution, we have an active business litigation practice across Massachusetts in state and federal courts.'},
{title:'Employment Law',description:'Representing employers of all sizes in a wide array of employment-law matters, including counseling on day-to-day employment issues to litigating in state and federal courts and administrative agencies.'}
]
const focusItems=[{key:'litigation',title:'Trademark Litigation',body:'Kohlerackels trademark litigation team protects and enforces the world’s most valuable brands in federal and state courts, before the USPTO’s Trademark Trial and Appeal Board, and in dispute forums around the globe. We handle claims of infringement, dilution, and counterfeiting; opposition and cancellation proceedings; domain name and social media disputes; and unfair competition matters.'},{key:'clearance',title:'Trademark Clearance, Counseling & Prosecution',body:'Kohlerackels trademark team, including former U.S. Patent and Trademark Office (USPTO) examining attorneys and former in-house counsel, delivers full lifecycle brand protection – from clearance, filing strategies, and prosecution to maintenance and complex USPTO office action practice. We routinely advise on complex trademark matters, portfolio alignment to business launches and broadcast schedules, and risk calibrated enforcement programs. We manage U.S. and global trademark portfolios, and counsel on portfolio management, trademark licensing, sales and acquisitions, and enforcement strategy.'}]
const focusActive=computed(()=>focusItems.find(item=>item.key===focusKey.value)||focusItems[1])
</script>