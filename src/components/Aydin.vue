<template>
  <div class="aydin-story">
    <!-- Page Banner -->
    <section class="page-banner">
      <div class="container container-xl">
        <span class="page-banner-eyebrow">Our Ambassador</span>
        <h1>Meet Aydin</h1>
        <p class="page-banner-lead">
          Aydin has shown incredible resilience throughout his life, facing many medical challenges 
          and hospital visits with strength and courage.
        </p>
      </div>
    </section>

    <!-- Intro Section -->
    <section class="section">
      <div class="container container-xl">
        <div class="intro-content">
          <img src="@/assets/Aydin.jpg" alt="Aydin Leamen" class="aydin-photo" />
          <div class="intro-text">
            <div class="section-header">
              <h2>Aydin's Journey</h2>
            </div>
            <p>
              Aydin lives with drug-resistant epilepsy and was diagnosed with Lennox-Gastaut
              Syndrome in 2023. Through years of treatments, hospital stays, and surgeries,
              he has remained positive and determined to overcome his obstacles, inspiring
              those around him with his unwavering spirit.
            </p>
            <p>
              His journey is the reason PurplWav exists — and the timeline below traces the
              milestones that shaped our campaign.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Timeline Section -->
    <section class="section section-alt">
      <div class="container container-xl">
        <div class="section-header">
          <h2>Journey Timeline</h2>
        </div>
        <Timeline />
      </div>
    </section>

    <!-- Impact Section -->
    <section class="impact-section">
      <div class="container container-lg">
        <h2 class="impact-title">The Inspiration Behind PurplWav</h2>
        <p class="impact-text">
          Aydin's courage in facing drug-resistant epilepsy has not only inspired his family 
          but has become the driving force behind PurplWav's mission. His story shows that 
          with love, support, and determination, challenges can become sources of strength 
          and inspiration for others.
        </p>
        <div class="impact-stats">
          <div class="stat-item">Inspiring countless families</div>
          <div class="stat-item">Raising awareness daily</div>
          <div class="stat-item">Building community support</div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import Timeline from '@/components/TImeline.vue';
</script>

<style scoped>
/* Intro Section */
.intro-content {
  display: grid;
  grid-template-columns: 320px 1fr;
  gap: var(--space-12);
  align-items: start;
}

.aydin-photo {
  width: 100%;
  border-radius: var(--radius-lg);
  border: 1px solid var(--color-border);
  object-fit: cover;
  aspect-ratio: 1;
}

.intro-text p {
  font-size: var(--text-lg);
  color: var(--color-neutral-700);
  line-height: var(--leading-relaxed);
}

/* Impact Section */
.impact-section {
  background-color: var(--color-primary-700);
  border-top: 4px solid var(--color-primary-900);
  padding: var(--space-16) 0;
  text-align: center;
}

.impact-title {
  font-size: var(--text-3xl);
  color: white;
  margin-bottom: var(--space-6);
}

.impact-text {
  font-size: var(--text-lg);
  color: var(--color-primary-100);
  line-height: var(--leading-relaxed);
  margin: 0 auto var(--space-8);
  max-width: 760px;
}

.impact-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: var(--space-4);
}

.stat-item {
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: var(--radius-md);
  padding: var(--space-5);
  font-size: var(--text-base);
  font-weight: var(--font-semibold);
  color: white;
}

/* Responsive Design */
@media (max-width: 768px) {
  .intro-content {
    grid-template-columns: 1fr;
    gap: var(--space-6);
  }

  .aydin-photo {
    max-width: 320px;
    margin: 0 auto;
  }

  .impact-stats {
    grid-template-columns: 1fr;
  }
}
</style>