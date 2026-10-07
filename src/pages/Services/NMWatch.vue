<template>
  <ServiceDetailLayout
    title="NMWatch™"
    eyebrow="Services"
    intro-title="Your Brand's Guardian in the Ever-Evolving Digital Landscape"
    intro="In today's evolving digital world, safeguarding your brand online is no longer a reactive measure, it’s a strategic imperative. NMWatch™ goes beyond traditional trademark policing, leveraging AI, extensive databases and deep expertise to develop and implement customized policing strategies that cover trademarks, domain names and emerging threats in the digital landscape."
    :tabs="tabs"
    :sections="sections"
    :why="why"
    :contacts="contacts"
  />
</template>

<script setup>
import ServiceDetailLayout from '@/components/ServiceDetailLayout.vue'

const tabs = ["Overview","Professionals","Related Practice Areas","Insights"]
const sections = [{"heading":"The NMWatch™ Difference","items":["AI-powered vigilance: proprietary technology scans online environments, including websites, social media, marketplaces and the dark web, to identify potential infringements.","In-depth expertise: intellectual property attorneys and online investigators analyze each case and develop a tailored response strategy.","Customized protection: strategies are built around industry, budget, risk profile, geographic scope and online presence.","Foresight through Internet Policy involvement: active engagement in Internet Policy helps anticipate emerging threats and opportunities."]},{"heading":"Experience","text":"Our team combines trademark-office knowledge, litigation experience and online investigation capabilities to help brands respond quickly to digital infringement."}]
const why = {"text":"NMWatch™ provides a proactive, technology-enabled approach to protecting brands in a rapidly changing digital environment."}
const contacts = [{"name":"John C. McElwaine","role":"Practice Contact"},{"name":"Christopher D. Casavale","role":"Practice Contact"}]
</script>
