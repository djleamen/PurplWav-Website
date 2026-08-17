<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue';
import image2008 from '@/assets/AydinBaby.jpg';
import image2009 from '@/assets/EEGSpikeWaves.png';
import image2010 from '@/assets/Aydin2010.jpg';
import image2014 from '@/assets/Aydin2014.jpg';
import image2017 from '@/assets/AydinDilaraCarionFenn.jpg';
import image2018 from '@/assets/AydinMelRogers.jpg';
import image2019 from '@/assets/AydinEEG.jpg';
import image2020 from '@/assets/VNS.jpg';
import image2023 from '@/assets/Aydin2023.jpg';
import image2026 from '@/assets/AydinScholarship.png';

const events = [
  { date: '2008', title: 'Aydin is Born', description: 'Aydin Leamen was born a healthy baby boy.', image: image2008 },
  {
    date: '2009',
    title: 'First Seizure',
    description: 'Aydin had his first seizure at 18 months old.',
    image: image2009,
    imageAlt: 'EEG recording showing generalized spike-and-wave discharges',
    credit: 'EEG: Der Lange / Wikimedia Commons, CC BY-SA 2.0',
  },
  { date: '2010', title: 'Epilepsy Diagnosis', description: 'Aydin was diagnosed with epilepsy at 2 years old.', image: image2010 },
  { date: '2014', title: 'First Overnight @ SickKids', description: 'Aydin had his first overnight EEG at The Hospital for Sick Children in Toronto.', image: image2014 },
  { date: '2017', title: 'Rare Disease Expo', description: 'Dilara and Aydin spoke at the Carion Fenn Rare Disease Expo to talk about epilepsy and mental health.', image: image2017 },
  { date: '2018', title: "Health 180 with Carion Fenn", description: 'Aydin and Melike were featured on Health 180 on ROGERStv to talk about epilepsy and mental health.', image: image2018 },
  { date: '2019', title: 'Stereo EEG Surgery', description: 'Aydin underwent invasive Stereo EEG surgery to locate seizure focus for possible resection.', image: image2019 },
  { date: '2020', title: 'VNS Implant Surgery', description: 'Aydin received a Vagus Nerve Stimulator implant to help manage his seizures.', image: image2020 },
  { date: '2023', title: 'Diagnosed with LGS & ADHD', description: 'Aydin was diagnosed with Lennox-Gastaut Syndrome and ADHD, requiring new treatment strategies.', image: image2023 },
  { date: '2026', title: 'Aydin wins the Ade Adegbite Memorial Scholarship', description: 'Aydin was awarded the Ade Adegbite Memorial Scholarship for demonstrating resilience, overcoming barriers, and pursuing higher education.', image: image2026 },
];

const itemRefs = ref([]);
let observer = null;

const setItemRef = (el) => {
  if (el && !itemRefs.value.includes(el)) itemRefs.value.push(el);
};

onMounted(() => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    itemRefs.value.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2, rootMargin: '0px 0px -10% 0px' },
  );

  itemRefs.value.forEach((el) => observer.observe(el));
});

onBeforeUnmount(() => {
  observer?.disconnect();
  observer = null;
});
</script>

<template>
  <div class="timeline">
    <div v-for="event in events" :key="event.date" :ref="setItemRef" class="timeline-item reveal">
      <div class="timeline-marker">
        <span class="timeline-dot"></span>
      </div>
      <div class="timeline-content card">
        <div class="timeline-date">{{ event.date }}</div>
        <h3>{{ event.title }}</h3>
        <p>{{ event.description }}</p>
        <img :src="event.image" :alt="event.imageAlt || event.title" class="timeline-image" />
        <p v-if="event.credit" class="timeline-credit">{{ event.credit }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.timeline {
  position: relative;
  max-width: 720px;
  padding-left: var(--space-8);
}

/* Vertical rail */
.timeline::before {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: 11px;
  width: 3px;
  background-color: var(--color-primary-200);
}

.timeline-item {
  position: relative;
  padding-bottom: var(--space-8);
}

.timeline-item:last-child {
  padding-bottom: 0;
}

.timeline-item.reveal .timeline-content,
.timeline-item.reveal .timeline-marker {
  opacity: 0;
  transform: translateY(24px);
  transition:
    opacity 0.7s ease-out,
    transform 0.7s ease-out;
}

.timeline-item.reveal .timeline-marker {
  transform: scale(0.4);
  transition-duration: 0.5s;
}

.timeline-item.reveal.is-visible .timeline-content {
  opacity: 1;
  transform: translateY(0);
  transition-delay: 0.12s;
}

.timeline-item.reveal.is-visible .timeline-marker {
  opacity: 1;
  transform: scale(1);
}

@media (prefers-reduced-motion: reduce) {
  .timeline-item.reveal .timeline-content,
  .timeline-item.reveal .timeline-marker {
    opacity: 1;
    transform: none;
    transition: none;
  }
}

.timeline-marker {
  position: absolute;
  left: calc(-1 * var(--space-8));
  top: var(--space-5);
}

.timeline-dot {
  display: block;
  width: 16px;
  height: 16px;
  border-radius: var(--radius-full);
  background-color: var(--color-primary-600);
  border: 3px solid white;
  box-shadow: 0 0 0 2px var(--color-primary-600);
  margin-left: 3px;
}

.timeline-content {
  padding: var(--space-6);
}

.timeline-date {
  display: inline-block;
  font-size: var(--text-sm);
  font-weight: var(--font-bold);
  letter-spacing: 0.08em;
  color: white;
  background-color: var(--color-primary-700);
  padding: var(--space-1) var(--space-3);
  border-radius: var(--radius-sm);
  margin-bottom: var(--space-3);
}

.timeline-content h3 {
  font-size: var(--text-xl);
  color: var(--color-primary-800);
  margin-bottom: var(--space-2);
}

.timeline-content p {
  color: var(--color-neutral-600);
  line-height: var(--leading-relaxed);
  margin-bottom: var(--space-4);
}

.timeline-image {
  width: 100%;
  max-width: 320px;
  height: 300px;
  object-fit: cover;
  border-radius: var(--radius-md);
  border: 1px solid var(--color-border);
  display: block;
}

.timeline-credit {
  font-size: var(--text-xs);
  color: var(--color-neutral-500);
  margin: var(--space-2) 0 0;
}

@media (max-width: 640px) {
  .timeline {
    padding-left: var(--space-6);
  }

  .timeline-marker {
    left: calc(-1 * var(--space-6));
  }

  .timeline::before {
    left: 9px;
  }

  .timeline-dot {
    width: 14px;
    height: 14px;
    margin-left: 2px;
  }

  .timeline-image {
    max-width: 100%;
    height: 180px;
  }
}
</style>