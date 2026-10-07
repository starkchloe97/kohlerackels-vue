<template>
  <div class="service-professionals-directory">
    <div class="directory-controls">
      <span>1-{{ people.length }} of {{ people.length }}</span>
      <label>
        <span class="sr-only">Sort by</span>
        <select v-model="sortBy" aria-label="Sort professionals">
          <option value="">Sort by</option>
          <option value="position">Position</option>
          <option value="name">Name</option>
          <option value="location">Location</option>
        </select>
      </label>
    </div>

    <div
      v-for="person in sortedPeople"
      :key="person.id"
      class="directory-row"
    >
      <div class="directory-person">
        <span class="directory-avatar" aria-hidden="true">{{ initials(person.name) }}</span>
        <div class="directory-person-details">
          <h3>{{ person.name }}</h3>
          <p>{{ person.role }}</p>
          <div class="directory-mobile-location">{{ person.location }}</div>
        </div>
      </div>

      <div class="directory-contact">
        <div class="directory-actions" aria-hidden="true">
          <span class="directory-action directory-vcard"></span>
          <span class="directory-action directory-email"></span>
        </div>
        <span class="directory-phone">T {{ person.phone }}</span>
      </div>

      <div class="directory-location">{{ person.location }}</div>
    </div>

    <div class="directory-controls directory-controls-bottom">
      <span>1-{{ people.length }} of {{ people.length }}</span>
      <label>
        <span class="sr-only">Sort by</span>
        <select v-model="sortBy" aria-label="Sort professionals">
          <option value="">Sort by</option>
          <option value="position">Position</option>
          <option value="name">Name</option>
          <option value="location">Location</option>
        </select>
      </label>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'

const props = defineProps({
  config: { type: Object, default: () => ({}) }
})

const profile = (id, name, role, phone, location) => ({ id, name, role, phone, location })

const profiles = {
  'patrick-kartes': profile('patrick-kartes', 'Patrick L. Kartes', 'Partner', '704.417.3036', 'Charlotte, NC'),
  'jane-remillard': profile('jane-remillard', 'Jane E. Remillard', 'Partner', '617.217.4628', 'Boston, MA'),
  'jim-dudukovich': profile('jim-dudukovich', 'Jim Dudukovich', 'Partner', '404.322.6002', 'Atlanta, GA'),
  'nichole-hayden': profile('nichole-hayden', 'Nichole Hayden', 'Partner', '704.417.3234', 'Charlotte, NC'),
  'susan-jackson': profile('susan-jackson', 'Susan Jackson', 'Partner', '704.417.3126', 'Charlotte, NC'),
  'jason-kraus': profile('jason-kraus', 'Jason Kraus', 'Partner', '612.464.7549', 'Minneapolis, MN'),
  'anthony-laurentano': profile('anthony-laurentano', 'Anthony A. Laurentano', 'Partner', '617.217.4624', 'Boston, MA'),
  'lisa-margonis': profile('lisa-margonis', 'Lisa Margonis', 'Partner', '346.646.5514', 'Houston, TX'),
  'david-ogles': profile('david-ogles', 'David Ogles', 'Partner', '312.376.1042', 'Chicago, IL'),
  'edward-sandor': profile('edward-sandor', 'Edward Sandor', 'Partner', '612.464.7554', 'Minneapolis, MN'),
  'jill-sloper': profile('jill-sloper', 'Jill Gorny Sloper', 'Partner', '617.217.4630', 'Boston, MA'),
  'darnell-cage': profile('darnell-cage', 'Darnell M. Cage', 'Counsel', '612.464.7449', 'Minneapolis, MN'),
  'grant-mcneilly': profile('grant-mcneilly', 'Grant McNeilly', 'Counsel', '612.464.7395', 'Minneapolis, MN'),
  'matthew-zehrer': profile('matthew-zehrer', 'Matthew Zehrer', 'Counsel', '612.464.7446', 'Minneapolis, MN'),
  'geordie-zug': profile('geordie-zug', 'Charles G. "Geordie" Zug', 'Counsel', '803.255.9565', 'Columbia, SC'),
  'jonathan-todd': profile('jonathan-todd', 'Jonathan Todd', 'Senior Associate', '864.373.2215', 'Greenville, SC'),
  'alexa-venters': profile('alexa-venters', 'Alexa Venters', 'Senior Associate', '704.417.3022', 'Charlotte, NC'),
  'zahra-asadi': profile('zahra-asadi', 'Zahra Asadi', 'Associate', '704.417.3242', 'Charlotte, NC'),
  'chris-frank': profile('chris-frank', 'Christopher L. Frank, Ph.D.', 'Technical Specialist', '617.217.4635', 'Boston, MA'),
  'mitchell-lowe': profile('mitchell-lowe', 'J. Mitchell Lowe', 'Associate', '346.646.3883', 'Houston, TX'),
  'carter-rummel': profile('carter-rummel', 'Carter Rummel', 'Associate', '704.417.3025', 'Charlotte, NC'),
  'chris-casavale': profile('chris-casavale', 'Christopher D. Casavale', 'Partner', '843.534.4252', 'Charleston, SC; Washington, D.C.'),
  'david-dukes': profile('david-dukes', 'David E. Dukes', 'Partner', '803.255.9451', 'Columbia, SC; Charleston, SC'),
  'debbie-durban': profile('debbie-durban', 'Debbie Whittle Durban', 'Partner', '803.255.9465', 'Columbia, SC; Charlotte, NC'),
  'erik-janitens': profile('erik-janitens', 'Erik Janitens', 'Partner', '346.646.3830', 'Houston, TX'),
  'mark-jones': profile('mark-jones', 'J. Mark Jones', 'Partner', '803.255.9424', 'Columbia, SC'),
  'neil-jones': profile('neil-jones', 'Neil C. Jones', 'Partner', '864.373.2260', 'Greenville, SC'),
  'craig-killen': profile('craig-killen', 'Craig N. Killen', 'Partner', '704.417.3127', 'Charlotte, NC; Columbia, SC'),
  'george-mahfood': profile('george-mahfood', 'George G. Mahfood', 'Partner', '305.373.9427', 'Miami, FL; New York, NY'),
  'wade-malone': profile('wade-malone', 'S. Wade Malone', 'Partner', '404.322.6257', 'Atlanta, GA'),
  'brian-oberst': profile('brian-oberst', 'Brian Oberst', 'Partner', '612.464.7545', 'Minneapolis, MN'),
  'robert-mcwilliams': profile('robert-mcwilliams', 'Robert H. McWilliams, Jr.', 'Partner', '803.255.9380', 'Columbia, SC; Charlotte, NC'),
  'ashley-summer': profile('ashley-summer', 'Ashley B. Summer', 'Partner', '212.413.9036', 'New York, NY; Greenville, SC'),
  'tammy-terry': profile('tammy-terry', 'Tammy Terry', 'Partner', '346.646.5389', 'Houston, TX'),
  'mark-vanderbroek': profile('mark-vanderbroek', 'Mark S. VanderBroek', 'Partner', '404.322.6675', 'Atlanta, GA'),
  'lucas-westby': profile('lucas-westby', 'Lucas A. Westby', 'Partner', '404.322.6237', 'Atlanta, GA'),
  'kelly-whitehart': profile('kelly-whitehart', 'Kelly L. Whitehart', 'Partner', '404.322.6107', 'Atlanta, GA'),
  'anna-adams': profile('anna-adams', 'Anna M. Adams', 'Counsel', '303.583.9903', 'Denver, CO'),
  'john-veysey': profile('john-veysey', 'P. John Veysey', 'Counsel', '617.217.4645', 'Boston, MA; Torrance, CA'),
  'cameron-panepinto': profile('cameron-panepinto', 'Cameron Panepinto', 'Senior Associate', '617.217.4718', 'Boston, MA'),
  'dylan-hartsook': profile('dylan-hartsook', 'T. Dylan Hartsook', 'Associate', '312.376.1009', 'Chicago, IL'),
  'halley-herbst': profile('halley-herbst', 'Halley Herbst', 'Associate', '303.583.9925', 'New York, NY'),
  'chance-siller': profile('chance-siller', 'Chance Siller', 'Associate', '346.646.5842', 'Houston, TX'),
  'jeanne-digiorgio': profile('jeanne-digiorgio', 'Jeanne M. DiGiorgio', 'Counsel', '617.217.4620', 'Boston, MA'),
  'jay-fee': profile('jay-fee', 'Jay W. Fee', 'Partner', '617.217.4774', 'Boston, MA'),
  'holly-collins': profile('holly-collins', 'Holly L. Collins', 'Counsel', '407.669.4251', 'Orlando, FL'),
  'david-babb': profile('david-babb', 'David C. Babb', 'Senior Associate', '469.484.6301', 'Dallas, TX'),
  'mariah-emmons': profile('mariah-emmons', 'Mariah Emmons', 'Senior Associate', '619.489.3142', 'San Diego, CA'),
  'john-mcelwaine': profile('john-mcelwaine', 'John C. McElwaine', 'Partner', '843.534.4302', 'Charleston, SC; Washington, D.C.')
}

const serviceProfiles = {
  276: [
    'patrick-kartes', 'jane-remillard', 'jim-dudukovich', 'nichole-hayden', 'susan-jackson',
    'jason-kraus', 'anthony-laurentano', 'lisa-margonis', 'david-ogles', 'edward-sandor',
    'jill-sloper', 'darnell-cage', 'grant-mcneilly', 'matthew-zehrer', 'geordie-zug',
    'jonathan-todd', 'alexa-venters', 'zahra-asadi', 'chris-frank', 'mitchell-lowe', 'carter-rummel'
  ],
  277: [
    'chris-casavale', 'david-dukes', 'debbie-durban', 'erik-janitens', 'mark-jones', 'neil-jones',
    'craig-killen', 'jason-kraus', 'george-mahfood', 'wade-malone', 'lisa-margonis',
    'john-mcelwaine', 'robert-mcwilliams', 'brian-oberst', 'ashley-summer', 'tammy-terry',
    'mark-vanderbroek', 'lucas-westby', 'kelly-whitehart', 'anna-adams', 'john-veysey',
    'cameron-panepinto', 'jonathan-todd', 'alexa-venters', 'dylan-hartsook', 'halley-herbst', 'chance-siller'
  ],
  281: [
    'jane-remillard', 'jill-sloper', 'susan-jackson', 'jason-kraus', 'anthony-laurentano',
    'jeanne-digiorgio', 'matthew-zehrer', 'zahra-asadi', 'chris-frank'
  ],
  289: [
    'nichole-hayden', 'susan-jackson', 'erik-janitens', 'neil-jones', 'patrick-kartes', 'craig-killen',
    'jason-kraus', 'anthony-laurentano', 'robert-mcwilliams', 'brian-oberst', 'jane-remillard',
    'edward-sandor', 'jill-sloper', 'ashley-summer', 'tammy-terry', 'darnell-cage', 'jeanne-digiorgio',
    'grant-mcneilly', 'matthew-zehrer', 'jonathan-todd', 'zahra-asadi', 'chris-frank',
    'mitchell-lowe', 'carter-rummel', 'chance-siller'
  ],
  321: [
    'chris-casavale', 'jim-dudukovich', 'jay-fee', 'nichole-hayden', 'susan-jackson', 'erik-janitens',
    'neil-jones', 'craig-killen', 'jason-kraus', 'anthony-laurentano', 'john-mcelwaine',
    'ashley-summer', 'tammy-terry', 'kelly-whitehart', 'holly-collins', 'jeanne-digiorgio',
    'geordie-zug', 'david-babb', 'mariah-emmons', 'cameron-panepinto', 'jonathan-todd',
    'alexa-venters', 'zahra-asadi', 'mitchell-lowe', 'carter-rummel'
  ],
  3406: ['chris-casavale', 'john-mcelwaine']
}

const sortBy = ref('')
const serviceId = Number(props.config.thisId)

const people = computed(() => (serviceProfiles[serviceId] || []).map((id) => profiles[id]))
const sortedPeople = computed(() => {
  const result = [...people.value]
  if (sortBy.value === 'name') return result.sort((a, b) => a.name.localeCompare(b.name))
  if (sortBy.value === 'location') return result.sort((a, b) => a.location.localeCompare(b.location))
  return result
})

function initials(name) {
  return name.split(/\s+/).filter((part) => /^[A-Z]/.test(part)).slice(0, 2).map((part) => part[0]).join('')
}
</script>

<style scoped>
.service-professionals-directory {
  color: #252525;
  font-family: "Open Sans", Arial, sans-serif;
}

.directory-controls {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid #777779;
  padding: 14px 0 8px;
  color: #666;
  font-size: 13px;
}

.directory-controls label {
  margin: 0;
}

.directory-controls select {
  max-width: 105px;
  border: 0;
  background: transparent;
  color: #444;
  font: inherit;
}

.directory-row {
  display: grid;
  grid-template-columns: 53% 25% 22%;
  align-items: center;
  min-height: 68px;
  border-top: 1px solid #777779;
  padding: 6px 0;
  font-size: 13px;
}

.directory-person {
  display: flex;
  min-width: 0;
  align-items: center;
  gap: 12px;
}

.directory-avatar {
  display: flex;
  flex: 0 0 50px;
  width: 50px;
  height: 50px;
  align-items: center;
  justify-content: center;
  background: #e4e8eb;
  color: #577188;
  font-family: "Quattrocento Sans", Arial, sans-serif;
  font-size: 16px;
  font-weight: 700;
}

.directory-person-details {
  min-width: 0;
}

.directory-person h3 {
  margin: 0;
  color: #101c2e;
  font-family: "Quattrocento Sans", Arial, sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.05;
}

.directory-person p {
  margin: 4px 0 0;
  color: #777;
  font-size: 11px;
}

.directory-mobile-location {
  display: none;
}

.directory-contact {
  align-self: center;
  color: #777;
  font-size: 10px;
}

.directory-actions {
  display: flex;
  gap: 5px;
  margin-bottom: 4px;
}

.directory-action {
  display: inline-flex;
  width: 16px;
  height: 13px;
  align-items: center;
  justify-content: center;
  position: relative;
  background: #e9a600;
  color: #fff;
  font-size: 8px;
  line-height: 1;
}

.directory-vcard::before {
  width: 8px;
  height: 7px;
  border: 1px solid #fff;
  content: "";
}

.directory-email::before {
  width: 9px;
  height: 6px;
  border: 1px solid #fff;
  content: "";
}

.directory-location {
  color: #6484a0;
  font-family: "Quattrocento Sans", Arial, sans-serif;
  font-size: 11px;
  text-align: right;
}

.directory-controls-bottom {
  border-top: 0;
  border-bottom: 1px solid #777779;
}

@media (max-width: 767px) {
  .directory-controls {
    padding: 8px 0 6px;
    font-size: 10px;
  }

  .directory-controls select {
    max-width: 75px;
    font-size: 10px;
  }

  .directory-row {
    grid-template-columns: minmax(0, 58%) 22% 20%;
    min-height: 60px;
    padding: 5px 0;
    font-size: 9px;
  }

  .directory-person {
    gap: 6px;
  }

  .directory-avatar {
    flex-basis: 40px;
    width: 40px;
    height: 40px;
    font-size: 13px;
  }

  .directory-person h3 {
    font-size: 11px;
    overflow-wrap: anywhere;
  }

  .directory-person p,
  .directory-mobile-location,
  .directory-contact,
  .directory-location {
    font-size: 8px;
  }

  .directory-mobile-location {
    display: block;
    margin-top: 3px;
    color: #6484a0;
    line-height: 1.2;
  }

  .directory-actions {
    gap: 3px;
    margin-bottom: 3px;
  }

  .directory-action {
    width: 12px;
    height: 10px;
    font-size: 6px;
  }

  .directory-location {
    overflow-wrap: anywhere;
  }
}
</style>
