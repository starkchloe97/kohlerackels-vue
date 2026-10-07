<template>
  <ServiceDetailLayout
    title="Intellectual Property"
    eyebrow="Services"
    intro-title="Protecting & enforcing your intellectual property rights"
    intro="Kohlerackels combines experience, a command of the U.S. Patent & Trademark Office and other regulatory agency processes, PTAB and trial skills, and an appreciation for the importance of innovation to your business to help achieve results. Our firm’s attorneys have deep experience in patent preparation, prosecution, opinions, client counseling, post-grant practice, and litigation. Our IP attorneys have represented clients in IP litigation and transactions in the United States, Europe, Asia, and South America."
    :tabs="tabs"
    :sections="sections"
    :why="why"
    :contacts="contacts"
  />
</template>

<script setup>
import ServiceDetailLayout from '@/components/ServiceDetailLayout.vue'

const tabs = ["Overview","Professionals","Related Practice Areas","Related Industries","Insights"]
const sections = [{"heading":"Litigating and resolving a wide range of disputes","text":"From the beginning of an issue, we seek to find business solutions to clients’ problems. Sometimes that requires us to demonstrate our trial skills in the courtroom. Many times it allows us to resolve IP issues without litigation. Our experience includes patent infringement, trademark and trade dress infringement and dilution, misappropriation of trade secrets and unfair competition, and copyright infringement."},{"heading":"Understanding the science, relaying complex matters to judges and juries","text":"Kohlerackels’ IP group includes attorneys registered to practice before the U.S. Patent and Trademark Office, attorneys with technical degrees, former judicial clerks with the U.S. Court of Appeals for the Federal Circuit, former Patent Examiners, and thought leaders in intellectual property law."},{"heading":"Clients span industry sectors and range from entrepreneurs to research institutions to established household names","text":"Clients from many high-profile industries select us to work side-by-side with them, including medical and research institutions, global specialty chemical companies, financial institutions, electronic commerce, telecommunications, computer software, pharmaceuticals, biotechnology, manufacturing, and outdoor industry sectors."},{"heading":"Broad experience includes creating and protecting large patent and trademark portfolios, and managing risks through due diligence","text":"We bring clients a team experienced in helping to ensure that intellectual property is protected by patents, trademarks, copyrights, or trade secrets.","items":["Patent preparation, prosecution and portfolio management","Trademark clearance, registration and enforcement","Copyright and trade secret protection","IP due diligence and risk management"]},{"heading":"Efficiencies through project management and technology","text":"We use disciplined project management, docketing and technology to help clients manage complex portfolios, deadlines, transactions and litigation efficiently."}]
const why = {"text":"Our IP team combines legal, technical and business perspectives to help clients protect innovation while advancing commercial objectives."}
const contacts = [{"name":"Patrick L. Kartes","role":"Practice Contact"},{"name":"Jane E. Remillard","role":"Practice Contact"}]
</script>
