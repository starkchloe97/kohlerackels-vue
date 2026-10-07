<template>
  <ServiceDetailLayout
    title="Patent Counseling and Procurement"
    eyebrow="Services"
    intro-title="Legal & technical knowledge intersect with business strategy"
    intro="Whether you are seeking to assess patent strategy during the course of a development, obtain patent protection for a new innovation, obtain counsel on ongoing patent matters, or manage a patent portfolio comprised of intellectual property assets, our team can guide you each step of the way."
    :tabs="tabs"
    :sections="sections"
    :why="why"
    :contacts="contacts"
  />
</template>

<script setup>
import ServiceDetailLayout from '@/components/ServiceDetailLayout.vue'

const tabs = ["Overview","Professionals","Related Practice Areas","Related Industries","Insights"]
const sections = [{"heading":"We help clients manage","items":["Rapidly emerging technology","Identification of innovations","Changing government laws and regulations","Research and development plans and expenditures","A competitive patent landscape"]},{"heading":"Patent experience with breadth, technological depth","text":"Patent attorneys, paralegals and docketing staff provide a wide range of patent services to domestic and international corporations. Our attorneys are registered to practice before the U.S. Patent and Trademark Office and have technical degrees spanning chemical engineering, chemistry, biotechnology, mechanical engineering, textile technology, electrical engineering and physics."},{"heading":"In-house, academic, and government perspectives","text":"Our professionals understand patent strategy from multiple perspectives, including corporate, academic and government environments."},{"heading":"Geographic reach and global portfolio services","text":"We advise clients on U.S. and foreign patent policies, treaties and regulations and support global filing and portfolio management strategies."},{"heading":"Our strengths include","items":["Patent application preparation, filing and prosecution","Patent opinions and client counseling","Patent portfolio management","Post-grant practice","Strategic procurement and commercialization support"]}]
const why = {"text":"Our patent practitioners combine technical depth, legal experience and business strategy to create practical protection for valuable innovations."}
const contacts = [{"name":"Patrick L. Kartes","role":"Practice Contact"}]
</script>
