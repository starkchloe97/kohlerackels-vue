<template>
  <ServiceDetailLayout
    title="Intellectual Property Litigation"
    eyebrow="Services"
    intro-title="Practical, client-centric approach to IP litigation"
    intro="Whether you are seeking to enforce your intellectual property against infringers, defend against accusations of IP infringement, analyze your IP portfolios to monetize intellectual property rights, or clear activities to avoid IP litigation, our team works with you to address your business objectives through IP litigation."
    :tabs="tabs"
    :sections="sections"
    :why="why"
    :contacts="contacts"
  />
</template>

<script setup>
import ServiceDetailLayout from '@/components/ServiceDetailLayout.vue'

const tabs = ["Overview","Professionals","Related Practice Areas","Related Industries","Insights"]
const sections = [{"heading":"We help clients","items":["Litigate IP infringement suits, both foreign and domestic","Defend patent, trademark, copyright infringement claims, and claims of trade secret violations","Enforce patents, trademarks, copyrights, and trade secrets against competitors and infringers","Seek and defend against administrative remedies involving intellectual property rights","Handle patent opposition and trademark opposition or cancellation proceedings","Establish IP matrices or “webs” to help identify would-be infringers"]},{"heading":"Interdisciplinary team","text":"Our team brings together litigators, patent attorneys, technical professionals and attorneys experienced before the U.S. Patent and Trademark Office and federal courts."},{"heading":"Our IP litigation spans the range of public and private companies and business sectors","text":"We represent clients across technology, life sciences, manufacturing, consumer products, financial services and other industries."},{"heading":"Our IP litigation experience helps you","items":["Protect valuable intellectual property assets","Resolve disputes efficiently and strategically","Manage litigation risk while preserving commercial relationships","Pursue business-focused outcomes through trial, settlement, arbitration and mediation"]}]
const why = {"text":"We combine courtroom experience with technical knowledge and commercial judgment to develop litigation strategies aligned with each client’s objectives."}
const contacts = [{"name":"John C. McElwaine","role":"Practice Contact"}]
</script>
