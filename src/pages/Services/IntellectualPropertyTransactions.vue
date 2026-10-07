<template>
  <ServiceDetailLayout
    title="Intellectual Property Transactions"
    eyebrow="Services"
    intro-title="Leveraging Innovation Through Strategic Agreements"
    intro="With deep experience across a wide range of technologies, Nelson Mullins delivers practical, business-focused, strategic solutions that safeguard innovation, strengthen brands and mitigate risk. Our team structures and negotiates sophisticated licensing arrangements, royalty frameworks, technology and content transfer agreements, and supports complex collaborations and corporate transactions."
    :tabs="tabs"
    :sections="sections"
    :why="why"
    :contacts="contacts"
  />
</template>

<script setup>
import ServiceDetailLayout from '@/components/ServiceDetailLayout.vue'

const tabs = ["Overview","Professionals","Related Practice Areas"]
const sections = [{"heading":"License, Monetize, and Control Use of IP Assets","items":["Patent, trademark, software, know-how, trade secret, technology and copyright licensing agreements","Brand licensing and co-branding deals","Royalty structuring and revenue-sharing arrangements","Content distribution or publishing contracts","Material and technology transfer agreements","Research and Clinical Trial Agreements","Name, Image, and Likeness (NIL) Agreements"]},{"heading":"Purchase and Sale of IP, Assignment & Portfolio Structuring","items":["Purchase and sale agreements for IP assets","Assignment and transfer agreements","Chain-of-title cleanup and confirmatory assignments","Consolidation of IP rights across entities or jurisdictions","Internal IP holding company formation and inter-company licensing"]},{"heading":"Joint Development, Collaborations & Strategic Alliances","text":"Helping companies collaborate without losing control of their IP.","items":["Joint development and co-commercialization agreements","Research and development collaborations","Cross-license and field-of-use allocations","IP ownership and governance frameworks","Joint branding or product co-development deals"]},{"heading":"IP in Mergers, Acquisitions & Investments","text":"IP drives value in corporate deals.","items":["IP due diligence","Structuring IP ownership and assignment in acquisitions or spin-offs","Transition licenses and separation of shared IP","Representations, warranties and indemnities for IP assets","IP aspects of venture, growth equity or private equity investments","IP collateralization and security interests in financing","Post-closing integration of IP, audits and assignments"]},{"heading":"Brand, Content & Creative Rights Transactions","items":["Trademark licensing and brand collaborations","Endorsement and sponsorship agreements","Publishing, music and media rights transactions","Rights of publicity and personality rights","Advertising and content-use clearances"]},{"heading":"IP Settlement, Coexistence & Resolution Agreements","text":"Resolve IP disputes through business solutions.","items":["Trademark coexistence and consent agreements","Patent cross-licenses or covenant-not-to-sue arrangements","Settlement of IP infringement or ownership disputes","IP arbitration and mediation settlements","Dispute-driven portfolio realignments"]}]
const why = {"title":"Why Nelson Mullins?","text":"We bring transaction counsel together with deep intellectual property knowledge to structure agreements that protect assets while supporting commercial goals."}
const contacts = [{"name":"Nichole Hayden","role":"Practice Contact"},{"name":"Christopher D. Casavale","role":"Practice Contact"},{"name":"Neil C. Jones","role":"Practice Contact"}]
</script>
