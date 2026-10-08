import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router.js'
import '@/style.css'
import * as siteInfo from '@/config/siteInfo.js'

const app = createApp(App)
app.config.globalProperties.$siteInfo = siteInfo

const description = `${siteInfo.SITE_NAME} contributes to our clients’ success through flexibility, business sense and tireless advocacy, working together towards the same goals.`
document.title = `${siteInfo.SITE_NAME} - Homepage`
document.querySelector('meta[name="description"]')?.setAttribute('content', description)
document.querySelector('meta[name="author"]')?.setAttribute('content', `${siteInfo.SITE_NAME} Riley & Scarborough LLP`)
document.querySelector('meta[name="keywords"]')?.setAttribute('content', `${siteInfo.SITE_NAME}, law firm, attorneys, legal services`)
document.querySelector('meta[property="og:title"]')?.setAttribute('content', document.title)
document.querySelector('meta[property="og:description"]')?.setAttribute('content', description)
document.querySelector('meta[property="og:site_name"]')?.setAttribute('content', `${siteInfo.SITE_NAME} Riley & Scarborough LLP`)

app.use(router).mount('#app')
