<script setup lang="ts">
interface Organization {
  name: string
  scope: string
  description: string
  url: string
  urlLabel: string
  phone?: string
}

const organizations: Organization[] = [
  {
    name: 'Epilepsy Durham Region',
    scope: 'Local — Durham Region',
    description:
      'Community epilepsy agency serving Durham Region with client services, education programs, and events for individuals and families living with epilepsy and seizure disorders.',
    url: 'https://epilepsydurham.com/',
    urlLabel: 'epilepsydurham.com',
    phone: '905-430-3090 · 1-866-EPILEPSY',
  },
  {
    name: 'Epilepsy Toronto',
    scope: 'Regional — Toronto',
    description:
      'Offers adult, children and youth, and employment services, support groups, and public education for people living with epilepsy and other seizure disorders.',
    url: 'https://epilepsytoronto.org/',
    urlLabel: 'epilepsytoronto.org',
    phone: '416-964-9095',
  },
  {
    name: 'Epilepsy Ontario',
    scope: 'Provincial',
    description:
      'The voice of epilepsy in Ontario since 1956, promoting independence and optimal quality of life through awareness, education, advocacy, and an agency locator for community supports.',
    url: 'https://epilepsyontario.org/',
    urlLabel: 'epilepsyontario.org',
    phone: '905-738-9431',
  },
  {
    name: 'Canadian Epilepsy Alliance',
    scope: 'National',
    description:
      'A Canada-wide network of community epilepsy agencies — including Epilepsy Durham Region — providing support, information, and referrals through one toll-free line.',
    url: 'https://www.canadianepilepsyalliance.org/',
    urlLabel: 'canadianepilepsyalliance.org',
    phone: '1-866-EPILEPSY (374-5377)',
  },
  {
    name: 'Epilepsy Canada',
    scope: 'National',
    description:
      'A registered charity founded in 1966, dedicated to funding peer-reviewed epilepsy research and advancing treatment and cures through awareness and education.',
    url: 'https://www.epilepsy.ca/',
    urlLabel: 'epilepsy.ca',
  },
  {
    name: 'Canadian League Against Epilepsy',
    scope: 'National — Professional',
    description:
      'The professional association of physicians, scientists, and healthcare workers dedicated to improving epilepsy care in Canada through research, education, and advocacy.',
    url: 'https://claegroup.org/',
    urlLabel: 'claegroup.org',
  },
  {
    name: 'SickKids Epilepsy Classroom',
    scope: 'Education',
    description:
      'Free learning modules from The Hospital for Sick Children (Toronto) covering epilepsy basics, treatment, and daily life — written for patients, families, and educators.',
    url: 'https://www.sickkids.ca/en/learning/patient-family-education/epilepsy-classroom/',
    urlLabel: 'sickkids.ca',
  },
  {
    name: 'Purple Day',
    scope: 'International',
    description:
      'Global epilepsy awareness day held every March 26, founded in 2008 by Cassidy Megan of Nova Scotia. Supporters wear purple to increase understanding and reduce stigma.',
    url: 'https://purpleday.org/',
    urlLabel: 'purpleday.org',
  },
]

const supportGroups = [
  {
    title: 'Medical Care',
    icon: 'mdi-stethoscope',
    items: [
      {
        name: 'Lakeridge Health',
        text: "Durham Region's hospital network, including emergency and neurology services.",
      },
      {
        name: 'Comprehensive Epilepsy Programs',
        text: 'Specialized epilepsy centres in Ontario — SickKids for children, Toronto Western Hospital for adults. Ask your doctor about a referral.',
      },
    ],
  },
  {
    title: 'At School',
    icon: 'mdi-school-outline',
    items: [
      {
        name: 'School Support Programs',
        text: 'Individual Education Plan (IEP) development and classroom accommodations through your school board.',
      },
      {
        name: 'Educator Training',
        text: 'Epilepsy awareness presentations for teachers and classrooms, offered by community epilepsy agencies.',
      },
    ],
  },
  {
    title: 'In the Community',
    icon: 'mdi-account-group-outline',
    items: [
      {
        name: 'Support Groups',
        text: 'Connect with other individuals and families through programs run by Epilepsy Durham Region and Epilepsy Toronto.',
      },
      {
        name: 'Advocacy & Awareness',
        text: 'Get involved in Purple Day and other initiatives that reduce stigma and improve epilepsy care.',
      },
    ],
  },
]

const emergencyContacts = [
  {
    label: 'Emergency Services',
    number: '911',
    tel: '911',
    text: 'Call immediately if a seizure lasts more than 5 minutes, repeats without recovery, or causes injury.',
  },
  {
    label: 'Health811',
    number: '811',
    tel: '811',
    text: 'Free, 24/7 health advice from registered nurses. Call or text 811 (formerly Telehealth Ontario).',
  },
  {
    label: 'Ontario Poison Centre',
    number: '1-800-268-9017',
    tel: '18002689017',
    text: '24/7 assistance for medication overdose or drug interactions.',
  },
  {
    label: 'Canadian Epilepsy Alliance',
    number: '1-866-EPILEPSY',
    tel: '18663745377',
    text: 'Information and referral to your nearest community epilepsy agency (1-866-374-5377).',
  },
]
</script>

<template>
  <div class="resources">
    <!-- Page Banner -->
    <section class="page-banner">
      <div class="container container-xl">
        <span class="page-banner-eyebrow">Support</span>
        <h1>Local Resources</h1>
        <p class="page-banner-lead">
          Find support services, organizations, and resources available in Durham Region 
          and across Ontario for those affected by epilepsy.
        </p>
      </div>
    </section>

    <!-- Key Organizations Directory -->
    <section class="section">
      <div class="container container-xl">
        <div class="section-header">
          <h2>Key Organizations</h2>
          <p class="section-note">
            A directory of trusted epilepsy organizations, from local support in Durham Region 
            to national research and international awareness.
          </p>
        </div>
        <ul class="org-directory">
          <li v-for="org in organizations" :key="org.name" class="org-row">
            <div class="org-main">
              <div class="org-heading">
                <h3 class="org-name">
                  <a :href="org.url" target="_blank" rel="noopener noreferrer">{{ org.name }}</a>
                </h3>
                <span class="org-scope">{{ org.scope }}</span>
              </div>
              <p class="org-description">{{ org.description }}</p>
            </div>
            <div class="org-meta">
              <a :href="org.url" target="_blank" rel="noopener noreferrer" class="org-link">
                <v-icon size="16">mdi-open-in-new</v-icon>
                {{ org.urlLabel }}
              </a>
              <span v-if="org.phone" class="org-phone">
                <v-icon size="16">mdi-phone-outline</v-icon>
                {{ org.phone }}
              </span>
            </div>
          </li>
        </ul>
      </div>
    </section>

    <!-- Additional Resources -->
    <section class="section section-alt">
      <div class="container container-xl">
        <div class="section-header">
          <h2>Additional Support</h2>
        </div>
        <div class="support-columns">
          <div v-for="group in supportGroups" :key="group.title" class="support-column">
            <h3 class="support-title">
              <v-icon size="20" color="primary">{{ group.icon }}</v-icon>
              {{ group.title }}
            </h3>
            <ul class="support-list">
              <li v-for="item in group.items" :key="item.name" class="support-item">
                <h4>{{ item.name }}</h4>
                <p>{{ item.text }}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Emergency Information -->
    <section class="section">
      <div class="container container-xl">
        <div class="section-header">
          <h2>Emergency Contacts</h2>
        </div>
        <div class="emergency-panel">
          <div v-for="contact in emergencyContacts" :key="contact.label" class="emergency-row">
            <div class="emergency-label">{{ contact.label }}</div>
            <a :href="`tel:${contact.tel}`" class="emergency-number">{{ contact.number }}</a>
            <p class="emergency-text">{{ contact.text }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* Key Organizations Directory */
.section-note {
  color: var(--color-neutral-600);
  max-width: 65ch;
  margin-top: var(--space-2);
}

.org-directory {
  list-style: none;
  margin: 0;
  padding: 0;
  border-top: 1px solid var(--color-border);
}

.org-row {
  display: grid;
  grid-template-columns: 1fr 260px;
  gap: var(--space-6);
  align-items: start;
  padding: var(--space-5) var(--space-2);
  border-bottom: 1px solid var(--color-border);
}

.org-row:hover {
  background-color: var(--color-primary-50);
}

.org-heading {
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  gap: var(--space-3);
  margin-bottom: var(--space-2);
}

.org-name {
  font-size: var(--text-lg);
  margin: 0;
}

.org-name a {
  color: var(--color-primary-800);
  text-decoration: none;
}

.org-name a:hover {
  text-decoration: underline;
}

.org-scope {
  font-size: var(--text-xs);
  font-weight: var(--font-semibold);
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--color-neutral-500);
}

.org-description {
  color: var(--color-neutral-600);
  line-height: var(--leading-relaxed);
  margin: 0;
  max-width: 68ch;
}

.org-meta {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  font-size: var(--text-sm);
  padding-top: var(--space-1);
}

.org-link,
.org-phone {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  color: var(--color-neutral-700);
}

.org-link {
  color: var(--color-primary-600);
  text-decoration: none;
  font-weight: var(--font-semibold);
}

.org-link:hover {
  color: var(--color-primary-800);
  text-decoration: underline;
}

/* Additional Support */
.support-columns {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-10);
}

.support-title {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  font-size: var(--text-lg);
  color: var(--color-primary-800);
  margin-bottom: var(--space-4);
  padding-bottom: var(--space-3);
  border-bottom: 2px solid var(--color-primary-600);
}

.support-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
}

.support-item {
  padding: var(--space-4) 0;
}

.support-item + .support-item {
  border-top: 1px solid var(--color-border);
}

.support-item h4 {
  font-family: var(--font-family-primary);
  font-size: var(--text-base);
  font-weight: var(--font-bold);
  color: var(--color-neutral-900);
  margin-bottom: var(--space-1);
}

.support-item p {
  color: var(--color-neutral-600);
  font-size: var(--text-sm);
  line-height: var(--leading-relaxed);
  margin: 0;
}

/* Emergency Contacts */
.emergency-panel {
  border: 1px solid var(--color-border);
  border-left: 4px solid var(--color-error);
  border-radius: var(--radius-md);
  background-color: var(--color-surface);
  overflow: hidden;
}

.emergency-row {
  display: grid;
  grid-template-columns: 240px 200px 1fr;
  gap: var(--space-6);
  align-items: baseline;
  padding: var(--space-4) var(--space-6);
}

.emergency-row + .emergency-row {
  border-top: 1px solid var(--color-border);
}

.emergency-label {
  font-weight: var(--font-bold);
  color: var(--color-neutral-900);
}

.emergency-number {
  font-size: var(--text-lg);
  font-weight: var(--font-bold);
  color: var(--color-error);
  text-decoration: none;
  white-space: nowrap;
  font-variant-numeric: tabular-nums;
}

.emergency-number:hover {
  text-decoration: underline;
}

.emergency-text {
  color: var(--color-neutral-600);
  font-size: var(--text-sm);
  line-height: var(--leading-relaxed);
  margin: 0;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .support-columns {
    grid-template-columns: 1fr;
    gap: var(--space-8);
  }

  .emergency-row {
    grid-template-columns: 200px 160px 1fr;
    gap: var(--space-4);
  }
}

@media (max-width: 768px) {
  .org-row {
    grid-template-columns: 1fr;
    gap: var(--space-3);
  }

  .org-meta {
    flex-direction: row;
    flex-wrap: wrap;
    gap: var(--space-4);
  }

  .emergency-row {
    grid-template-columns: 1fr;
    gap: var(--space-1);
    padding: var(--space-4);
  }
}
</style>