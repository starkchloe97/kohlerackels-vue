<template>
  <ServiceDetailLayout
    title="Patent Litigation"
    eyebrow="Services"
    intro-title="Strategic Enforcement and Defense of Patent Rights."
    intro="Our Patent Litigation Practice represents innovators, technology companies and investors in high-stakes patent disputes across industries and jurisdictions."
    :tabs="tabs"
    :sections="sections"
    :why="why"
    :contacts="contacts"
  />
</template>

<script setup>
import ServiceDetailLayout from '@/components/ServiceDetailLayout.vue'

const tabs = ["Overview","Professionals","Related Practice Areas"]
const sections = [{"heading":"Comprehensive Patent Dispute Representation","text":"We handle patent infringement actions, validity disputes, licensing disputes and related matters from investigation through trial and appeal."},{"heading":"Trial-Ready, Resolution-Focused","text":"Our litigators prepare every case for trial while pursuing efficient resolution when settlement or another business solution best serves the client."},{"heading":"Integrated Litigation Strategy","items":["Early case assessment and litigation strategy","Claim construction and technical analysis","Discovery and expert coordination","Trial and appellate advocacy","Settlement, licensing and alternative dispute resolution"]},{"heading":"Industry and Technology Focus","text":"Our experience spans software, electronics, life sciences, manufacturing, consumer products and other technology-intensive industries."}]
const why = {"title":"Why Nelson Mullins?","text":"Our patent litigators combine technical fluency, courtroom experience and commercial judgment to protect high-value innovations."}
const contacts = [{"name":"Lisa Margonis","role":"Practice Contact"},{"name":"Ashley B. Summer","role":"Practice Contact"},{"name":"Erik Janitens","role":"Practice Contact"}]
</script>
