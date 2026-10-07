<template>
  <ServiceDetailLayout
    title="Life Sciences - IP"
    eyebrow="Services"
    intro-title="Protecting & facilitating commercialization of your products"
    intro="Whether you are seeking to develop or expand your intellectual property portfolio in the biologic and life science fields, conduct IP due diligence in connection with financing or acquisition deals, or defend your intellectual property rights through litigation, enforcement, arbitration and mediation, our team works with biotechnology start-ups and leading pharmaceutical companies to enhance strategic thinking and provide creative solutions."
    :tabs="tabs"
    :sections="sections"
    :why="why"
    :contacts="contacts"
  />
</template>

<script setup>
import ServiceDetailLayout from '@/components/ServiceDetailLayout.vue'

const tabs = ["Overview","Professionals","Related Practice Areas","Related Industries","Insights"]
const sections = [{"heading":"We help clients at every stage of development","items":["Global strategic counseling","IP portfolio development","International filing strategies","Patent preparation and prosecution","Reexamination, opposition, reissue, interference and inter partes review proceedings","Validity and non-infringement opinions","Financing due diligence and opinions","FDA patent listings and extensions","Licensing and transactions","Litigation and enforcement","Trademarks and copyright"]},{"heading":"A multidisciplinary team of legal and technical professionals","text":"Our senior partners have extensive experience in the biologics field. Our group includes patent attorneys, litigators and technical specialists, including professionals with Ph.D.s and Master’s degrees."},{"heading":"Our clients range from start-ups to leading pharmaceutical companies","text":"We advise emerging biotechnology companies, medical and research institutions, specialty chemical businesses and global life sciences companies."},{"heading":"Protecting cutting edge technologies","items":["Biologics and biosimilars","Antibodies and immunology","Diagnostics and medical devices","Pharmaceutical and therapeutic technologies","Chemistry and biotechnology"]}]
const why = {"text":"Our life sciences IP team combines legal, scientific and regulatory knowledge to help clients protect innovations and bring products to market."}
const contacts = [{"name":"Jane E. Remillard","role":"Practice Contact"}]
</script>
