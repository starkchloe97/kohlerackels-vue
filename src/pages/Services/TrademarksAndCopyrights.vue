<template>
  <ServiceDetailLayout
    title="Trademarks & Copyrights"
    eyebrow="Services"
    intro-title="Protecting your IP"
    intro="Whether you seek to clear new marks, develop, maintain or expand trademark portfolios, enforce or defend trademark or copyright rights, license, assign or acquire IP rights, or register your trademarks or copyrights in the U.S. or foreign jurisdictions, we bring a team of attorneys and paralegals with experience helping clients develop, enhance, safeguard and enforce intellectual property assets."
    :tabs="tabs"
    :sections="sections"
    :why="why"
    :contacts="contacts"
  />
</template>

<script setup>
import ServiceDetailLayout from '@/components/ServiceDetailLayout.vue'

const tabs = ["Overview","Professionals","Related Practice Areas","Related Industries","Insights"]
const sections = [{"heading":"Multi-National corporations have entrusted us to manage and maintain worldwide trademark portfolios","items":["Trademark filings and registrations in countries throughout the world","Docketing systems managed to reflect changes in laws and facilitate tracking deadlines","Worldwide network of trusted foreign associates","Strategic advice on where filings should be maintained or extended","Monitoring and management of trademark oppositions and enforcement actions"]},{"heading":"Team with practical business approach and marketplace insights","text":"We learn our clients’ businesses and markets so we can offer strategic and global advice that aligns trademark and copyright protection with commercial objectives."},{"heading":"Our Clients","text":"Our clients range from emerging businesses and entrepreneurs to multinational corporations with complex worldwide portfolios."},{"heading":"Flexible fee structures and service models","text":"We offer service models designed around the scope, geography and complexity of each client’s IP portfolio."},{"heading":"Our strengths include","items":["Registration, counseling and portfolio management","Trademark, copyright and trade secret litigation","Clearance and enforcement","Licensing, assignment and acquisition of IP rights","International portfolio strategy"]}]
const why = {"text":"Our trademark and copyright practice combines deep legal experience with practical marketplace insight and global reach."}
const contacts = [{"name":"John C. McElwaine","role":"Practice Contact"}]
</script>
