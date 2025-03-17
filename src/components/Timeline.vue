<script setup>
import image2008 from '@/assets/AydinBaby.jpg';
import image2009 from '@/assets/SeizureClipart.jpg';
import image2010 from '@/assets/Aydin2010.jpg';
import image2014 from '@/assets/Aydin2014.jpg';
import image2017 from '@/assets/AydinDilaraCarionFenn.jpg';
import image2018 from '@/assets/AydinMelRogers.jpg';
import image2019 from '@/assets/AydinEEG.jpg';
import image2023 from '@/assets/Aydin2023.jpg';
import image2024 from '@/assets/AydinVNS.jpg';

const events = [
  { date: '2008', title: 'Aydin is Born', description: 'Aydin Leamen was born a healthy baby boy.', image: image2008 },
  { date: '2009', title: 'First Seizure', description: 'Aydin had his first seizure at 18 months old.', image: image2009 },
  { date: '2010', title: 'Epilepsy Diagnosis', description: 'Aydin was diagnosed with epilepsy at 2 years old.', image: image2010 },
  { date: '2014', title: 'First Overnight @ SickKids', description: 'Aydin had his first overnight EEG at The Hospital for Sick Children.', image: image2014 },
  { date: '2017', title: 'Rare Disease Expo', description: 'Dilara and Aydin spoke at the Carion Fenn Rare Disease Expo to talk about epilepsy and mental health.', image: image2017 },
  { date: '2018', title: "Health 180 with Carion Fenn", description: 'Aydin and Melike were featured on Health 180 on ROGERStv.', image: image2018 },
  { date: '2019', title: 'Stereo EEG Surgery', description: 'Aydin underwent invasive Stereo EEG surgery to locate seizure focus for possible resection.', image: image2019 },
  { date: '2023', title: 'Diagnosed with LGS & ADHD', description: 'Aydin was diagnosed with Lennox-Gastaut Syndrome and ADHD, requiring new treatment strategies.', image: image2023 },
  { date: '2024', title: 'VNS Implant Surgery', description: 'Aydin received a Vagus Nerve Stimulator to help manage seizures.', image: image2024 },
];
</script>

<template>
  <div class="timeline-container">
    <div class="timeline">
      <div v-for="(event, index) in events" :key="event.date" :class="['timeline-item', { 'left': index % 2 === 0, 'right': index % 2 !== 0 }]">
        <div class="timeline-content">
          <div class="timeline-date">{{ event.date }}</div>
          <h3>{{ event.title }}</h3>
          <p>{{ event.description }}</p>
          <img :src="event.image" alt="Event Image" class="timeline-image" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.timeline-container {
  padding: 20px;
  max-width: 800px;
  min-width: 800px;
  margin: auto;
  text-align: center;
  overflow-y: scroll;
  scroll-behavior: smooth;
}

.timeline {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  gap: 40px;
}

.timeline-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 20px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 600px;
  position: relative;
}

.timeline-item.left {
  align-self: flex-start;
  margin-left: 0;  /* Ensures left-aligned items stay flush */
}

.timeline-item.right {
  align-self: flex-end;
  margin-right: 0; /* Ensures right-aligned items stay flush */
}

.timeline-date {
  font-weight: bold;
  font-size: 1.2em;
  background: #6a5acd;
  color: white;
  padding: 10px 0;
  border-radius: 5px;
  width: 100%; /* Ensure it stretches to the container */
  min-width : 600px; /* Set a minimum width */
  max-width: 600px; /* Set a maximum width so all bars are the same */
  text-align: center; /* Center text inside */
}

.timeline-image {
  width: 300px;
  height: 300px;
  object-fit: cover;
  border-radius: 10px;
  margin-top: 10px;
}

p {
  color: #555; /* Slightly lighter gray */
  font-size: 1em;
  line-height: 1.6;
  text-align: center; /* Matches your current layout */
}
</style>