<template>
  <div class="row">
    <div class="col-md-12 home-full-width home_carousel_desktop">
      <section id="home-top-carousel" class="aside carousel" aria-roledescription="carousel" aria-label="Kohlerackels Service Information">
        <div class="container indicator-wrapper">
          <button type="button" class="carousel-control-prev float-left" aria-label="Previous Slide" @click="previousHero"><span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="sr-only">Previous Slide</span></button>
          <button type="button" class="carousel-control-next float-left" aria-label="Next Slide" @click="nextHero"><span class="carousel-control-next-icon" aria-hidden="true"></span><span class="sr-only">Next Slide</span></button>
          <button type="button" class="carousel-control-next float-left p-0" aria-label="Pause automatic slide show" @click="heroPlaying = !heroPlaying"><span class="carousel-play-icon" :class="heroPlaying ? 'carousel-playing' : 'carousel-paused'" aria-hidden="true"></span></button>
          <ol class="carousel-indicators circle float-left">
            <li v-for="(slide,index) in heroSlides" :key="slide.image" class="carousel-circle" :class="{active:index===heroIndex}">
              <button type="button" class="btn-carousel" :aria-label="'Slide '+(index+1)" :aria-current="index===heroIndex" @click="goHero(index)"></button>
            </li>
          </ol>
        </div>
        <div class="carousel-inner" aria-live="off">
          <div v-for="(slide,index) in heroSlides" :key="slide.image" class="home-cropped carousel-item" :class="{active:index===heroIndex}" role="group" aria-roledescription="slide" :aria-label="'Slide '+(index+1)+' of '+heroSlides.length">
            <img :src="slide.image" :alt="slide.alt" class="no-show">
            <div class="container caption-wrapper"><div class="carousel-caption animated fadeInUp"><h1 v-html="slide.title"></h1><p><span class="text-head-blue">{{slide.text}}</span></p></div></div>
          </div>
        </div>
      </section>
    </div>

    <div class="col-md-12 home-full-width home_carousel_mobile">
      <div id="home-top-carousel-responsive" class="aside carousel" aria-roledescription="carousel" aria-label="Kohlerackels Service Information">
        <div class="carousel-inner" aria-live="off">
          <div v-for="(slide,index) in mobileHeroSlides" :key="slide.image" class="home-cropped carousel-item" :class="{active:index===heroIndex}" role="group" aria-roledescription="slide" :aria-label="'Slide '+(index+1)+' of '+mobileHeroSlides.length">
            <img :src="slide.image" :alt="slide.alt" class="no-show">
            <div class="container caption-wrapper"><div class="carousel-caption animated fadeInUp"><h1 v-html="slide.title"></h1><p><span class="text-head-blue">{{slide.text}}</span></p></div></div>
          </div>
        </div>
      </div>
      <div class="container indicator-wrapper">
        <button type="button" class="carousel-control-prev float-left" aria-label="Previous" @click="previousHero"><span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="sr-only">Previous</span></button>
        <button type="button" class="carousel-control-next float-left" aria-label="Next" @click="nextHero"><span class="carousel-control-next-icon" aria-hidden="true"></span><span class="sr-only">Next</span></button>
        <button type="button" class="carousel-control-next float-left p-0" aria-label="Pause automatic slide show" @click="heroPlaying = !heroPlaying"><span class="carousel-play-icon" :class="heroPlaying ? 'carousel-playing' : 'carousel-paused'" aria-hidden="true"></span></button>
        <ol class="carousel-indicators circle">
          <li v-for="(slide,index) in heroSlides" :key="slide.image" class="carousel-circle" :class="{active:index===heroIndex}">
            <button type="button" class="btn-carousel" :aria-label="'Slide '+(index+1)" :aria-current="index===heroIndex" @click="goHero(index)"></button>
          </li>
        </ol>
      </div>
    </div>
  </div>

  <section class="insights-slider-section" id="home-insights-slider">
    <div class="home-slider" role="region" aria-roledescription="carousel" aria-label="Featured insights" @mouseenter="stopInsights" @mouseleave="startInsights">
      <div class="home-slider-track" :style="{width: insights.length*100+'%',transform:'translateX(-'+(insightIndex*(100/insights.length))+'%)'}">
        <div v-for="slide in insights" :key="slide.image" class="home-slider-slide">
          <a href="#" aria-label="Featured insight" @click.prevent><img :src="slide.image" alt="Featured insight"></a>
        </div>
      </div>
      <button class="home-slider-arrow home-slider-prev" type="button" aria-label="Previous slide" @click="previousInsight">&#10094;</button>
      <button class="home-slider-arrow home-slider-next" type="button" aria-label="Next slide" @click="nextInsight">&#10095;</button>
      <div class="home-slider-dots">
        <button v-for="(_,index) in insights" :key="index" class="home-slider-dot" :class="{active:index===insightIndex}" type="button" :aria-label="'Go to slide '+(index+1)" @click="goInsight(index)"></button>
      </div>
    </div>
  </section>

  <section>
    <div class="box-container">
      <div class="box" v-for="card in practiceCards" :key="card.title"><h2>{{card.title}}</h2><p>{{card.description}}</p></div>
    </div>
  </section>

  <section class="focus-section">
    <div class="focus-container">
      <div class="focus-left">
        <span class="focus-rule"></span>
        <h2 class="focus-title">Areas of focus</h2>
        <div class="focus-buttons">
          <button v-for="item in focusItems" :key="item.key" class="focus-btn" :class="{ 'is-active': focusKey === item.key }" :aria-pressed="focusKey === item.key" @click="switchFocus(item.key)">{{item.title}}</button>
        </div>
        <div class="focus-acc">
          <div v-for="item in focusItems" :key="item.key" class="acc-item" :class="{'is-open':focusKey===item.key}">
            <button type="button" class="acc-head" :aria-expanded="focusKey===item.key" @click="toggleFocus(item.key)"><span>{{item.title}}</span></button>
            <div class="acc-panel" :style="{height:focusKey===item.key?'auto':'0px'}"><div class="acc-panel-in"><p>{{item.body}}</p></div></div>
          </div>
        </div>
      </div>
      <div class="focus-right">
        <div class="focus-card"><div class="focus-card__inner"><h3>{{focusActive.title}}</h3><p>{{focusActive.body}}</p></div></div>
      </div>
    </div>
  </section>

  <div class="row">
    <div class="col-md-12 home-full-width">
      <div class="callout-aside-container"><img src="/images/home-slide-3.jpeg" alt=""></div>
    </div>
  </div>
</template>

<style scoped>
</style>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

const heroSlides = [
  { image:'/images/slide-1.jpeg', title:'Innovative Thinkers. Solution Providers.', text:'Challenges are opportunities to be leveraged. We provide creative solutions to complex problems.', alt:'' },
  { image:'/images/slide-21.jpg', title:'Business Acumen. Legal Know-How.', text:'Legal issues are only part of the story. We apply the law with practical business solutions.', alt:'' },
  { image:'/images/slide-3.jpeg', title:'National Reach. <br />Local Touch.', text:'Relationships matter. We are where you need us with depth and breadth of resources.', alt:'' },
  { image:'/images/slide-4.jpg', title:'Clients First. <br />We Deliver.', text:'Your business is our business. We work tirelessly for your success.', alt:'' }
]
const mobileHeroSlides = [
  { image:'/images/mobslide1.jpeg', title:'Innovative Thinkers. Solution Providers.', text:'Challenges are opportunities to be leveraged. We provide creative solutions to complex problems.', alt:'' },
  { image:'/images/mobslide2.jpeg', title:'Business Acumen. Legal Know-How.', text:'Legal issues are only part of the story. We apply the law with practical business solutions.', alt:'' },
  { image:'/images/mobslide3.jpeg', title:'National Reach. Local Touch.', text:'Relationships matter. We are where you need us with depth and breadth of resources.', alt:'' },
  { image:'/images/mobslide4.jpeg', title:'Clients First. We Deliver.', text:'Your business is our business. We work tirelessly for your success.', alt:'' }
]
const insights = [
  {image:'/images/Slide1.jpg'},{image:'/images/Slide2.jpg'},{image:'/images/Slide3.jpg'},{image:'/images/Slide4.jpg'}
]
const practiceCards = [
  {title:'Trade Secrets - Noncompete',description:'Nationally recognized for our trade secrets, noncompete, and employee mobility practice, our lawyers combine the skills, experience, and judgment to advise and represent companies and individuals on even the most complex trade secret litigation and noncompete issues.'},
  {title:'Business Litigation',description:'Representing Fortune 500 companies, small and mid-market companies, and individuals in all areas of dispute resolution, we have an active business litigation practice across Massachusetts in state and federal courts.'},
  {title:'Employment Law',description:'Representing employers of all sizes in a wide array of employment-law matters, including counseling on day-to-day employment issues to litigating in state and federal courts and administrative agencies.'}
]
const focusItems = [
  {key:'litigation',title:'Trademark Litigation',body:'Kohlerackels trademark litigation team protects and enforces the world’s most valuable brands in federal and state courts, before the USPTO’s Trademark Trial and Appeal Board, and in dispute forums around the globe. We handle claims of infringement, dilution, and counterfeiting; opposition and cancellation proceedings; domain name and social media disputes; and unfair competition matters. From pre-suit strategy and emergency relief through trial and appeal, we pair deep procedural experience with commercially focused judgment to resolve disputes efficiently and position our clients for long-term brand success.'},
  {key:'clearance',title:'Trademark Clearance, Counseling & Prosecution',body:'Kohlerackels trademark team, including former U.S. Patent and Trademark Office (USPTO) examining attorneys and former in-house counsel, delivers full lifecycle brand protection – from clearance, filing strategies, and prosecution to maintenance and complex USPTO office action practice. We routinely advise on complex trademark matters, portfolio alignment to business launches and broadcast schedules, and risk calibrated enforcement programs. We manage U.S. and global trademark portfolios, and counsel on portfolio management, trademark licensing, sales and acquisitions, and enforcement strategy. Combining our experience in trademark, copyright, and advertising law and a clear understanding of our clients’ business goals, we provide efficient solutions, practical advice, and outstanding results. Additionally, we help clients with online takeovers and unauthorized reseller enforcement; domain name and social media enforcement and litigation; and acquisition, sale, and licensing.'}
]
const heroIndex=ref(0), heroPlaying=ref(true), insightIndex=ref(0), focusKey=ref('clearance')
let heroTimer, insightTimer, touchStartX=null
const nextHero=()=>heroIndex.value=(heroIndex.value+1)%heroSlides.length
const previousHero=()=>heroIndex.value=(heroIndex.value-1+heroSlides.length)%heroSlides.length
const goHero=index=>heroIndex.value=index
const startHero=()=>{clearInterval(heroTimer);heroTimer=setInterval(()=>{if(heroPlaying.value)nextHero()},10000)}
const nextInsight=()=>insightIndex.value=(insightIndex.value+1)%insights.length
const previousInsight=()=>insightIndex.value=(insightIndex.value-1+insights.length)%insights.length
const goInsight=index=>{insightIndex.value=index;startInsights()}
const startInsights=()=>{clearInterval(insightTimer);insightTimer=setInterval(nextInsight,6000)}
const stopInsights=()=>clearInterval(insightTimer)
const onTouchStart=e=>{touchStartX=e.changedTouches[0].clientX;stopInsights()}
const onTouchEnd=e=>{if(touchStartX===null)return;const d=e.changedTouches[0].clientX-touchStartX;if(d>50)previousInsight();else if(d<-50)nextInsight();touchStartX=null;startInsights()}
const focusActive=computed(()=>focusItems.find(item=>item.key===focusKey.value)||focusItems[1])
const switchFocus=key=>focusKey.value=key
const toggleFocus=key=>focusKey.value=focusKey.value===key?'':key
onMounted(()=>{startHero();startInsights();document.querySelector('.home-slider')?.addEventListener('touchstart',onTouchStart,{passive:true});document.querySelector('.home-slider')?.addEventListener('touchend',onTouchEnd,{passive:true})})
onBeforeUnmount(()=>{clearInterval(heroTimer);clearInterval(insightTimer);const slider=document.querySelector('.home-slider');slider?.removeEventListener('touchstart',onTouchStart);slider?.removeEventListener('touchend',onTouchEnd)})
</script>