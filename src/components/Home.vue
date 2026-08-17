<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="hero">
      <div class="container container-xl">
        <div class="hero-content">
          <span class="hero-eyebrow">Epilepsy Awareness · Outreach · Research</span>
          <h1 class="hero-title">Raising epilepsy awareness in Durham Region and beyond</h1>
          <p class="hero-description">
            PurplWav is a family-run outreach campaign dedicated to raising awareness about
            epilepsy, connecting families with local resources, and supporting those
            affected by the condition.
          </p>
          <div class="hero-actions">
            <RouterLink to="/epilepsy-facts" class="btn btn-inverse">Learn About Epilepsy</RouterLink>
            <RouterLink to="/first-aid" class="btn btn-inverse-outline">Seizure First Aid</RouterLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Statistics Band -->
    <section class="stats-band" aria-label="Epilepsy statistics">
      <div class="container container-xl">
        <div class="stats-grid">
          <div class="stat">
            <div class="stat-value">65M+</div>
            <div class="stat-label">people worldwide live with epilepsy</div>
          </div>
          <div class="stat">
            <div class="stat-value">1 in 26</div>
            <div class="stat-label">people will develop epilepsy in their lifetime</div>
          </div>
          <div class="stat">
            <div class="stat-value">30%</div>
            <div class="stat-label">of people with epilepsy have drug-resistant seizures</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="section">
      <div class="container container-xl">
        <div class="section-header section-header-center">
          <h2>How We're Making a Difference</h2>
        </div>
        <div class="features-grid">
          <article class="feature-card card">
            <img src="@/assets/AydinDilaraCarionFenn.jpg" alt="Speaking at an epilepsy awareness event" class="feature-image" />
            <div class="feature-body">
              <h3 class="feature-title">Raising Awareness</h3>
              <p class="feature-description">
                Educating communities about epilepsy, dispelling myths, and promoting understanding.
              </p>
              <RouterLink to="/epilepsy-facts" class="feature-link">Epilepsy facts →</RouterLink>
            </div>
          </article>

          <article class="feature-card card">
            <img src="@/assets/AydinHospital.jpg" alt="Supporting families through treatment" class="feature-image" />
            <div class="feature-body">
              <h3 class="feature-title">Providing Support</h3>
              <p class="feature-description">
                Connecting families and individuals with resources and support networks.
              </p>
              <RouterLink to="/resources" class="feature-link">Find resources →</RouterLink>
            </div>
          </article>

          <article class="feature-card card">
            <img src="@/assets/Aydin2023.jpg" alt="Aydin, the inspiration behind PurplWav" class="feature-image" />
            <div class="feature-body">
              <h3 class="feature-title">Sharing Stories</h3>
              <p class="feature-description">
                Highlighting real experiences to inspire hope and build community.
              </p>
              <RouterLink to="/aydin" class="feature-link">Read Aydin's story →</RouterLink>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- Emergency Notice -->
    <section class="emergency-strip">
      <div class="container container-lg">
        <div class="notice notice-emergency">
          <h2 class="notice-title">Seizure emergency?</h2>
          <p>
            If a seizure lasts longer than 5 minutes, or the person is injured, pregnant, or
            having repeated seizures, <strong>call 911 immediately</strong>.
          </p>
          <RouterLink to="/first-aid" class="notice-link">Learn seizure first aid →</RouterLink>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta">
      <div class="container container-lg">
        <h2 class="cta-title">Get Involved</h2>
        <p class="cta-description">
          Join us in raising awareness and supporting those affected by epilepsy.
        </p>
        <RouterLink to="/contact" class="btn btn-inverse">Contact Us</RouterLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<style scoped>
/* Hero Section */
.hero {
  background-color: var(--color-primary-700);
  border-bottom: 4px solid var(--color-primary-900);
  color: white;
  padding: var(--space-20) 0;
}

.hero-content {
  max-width: 780px;
}

.hero-eyebrow {
  display: block;
  font-size: var(--text-sm);
  font-weight: var(--font-semibold);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-primary-200);
  margin-bottom: var(--space-4);
}

.hero-title {
  font-size: var(--text-5xl);
  color: white;
  margin-bottom: var(--space-5);
  line-height: var(--leading-tight);
}

.hero-description {
  font-size: var(--text-xl);
  margin-bottom: var(--space-8);
  color: var(--color-primary-100);
  line-height: var(--leading-relaxed);
}

.hero-actions {
  display: flex;
  gap: var(--space-4);
  flex-wrap: wrap;
}

/* Statistics Band */
.stats-band {
  background-color: var(--color-surface-variant);
  border-bottom: 1px solid var(--color-border);
  padding: var(--space-10) 0;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-8);
}

.stat {
  text-align: center;
}

.stat-value {
  font-family: var(--font-family-heading);
  font-size: var(--text-4xl);
  font-weight: var(--font-bold);
  color: var(--color-primary-700);
  margin-bottom: var(--space-2);
}

.stat-label {
  font-size: var(--text-base);
  color: var(--color-neutral-600);
  max-width: 260px;
  margin: 0 auto;
}

/* Features Section */
.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--space-6);
}

.feature-card {
  padding: 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.feature-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  display: block;
}

.feature-body {
  padding: var(--space-6);
  display: flex;
  flex-direction: column;
  flex: 1;
}

.feature-title {
  font-size: var(--text-xl);
  margin-bottom: var(--space-3);
  color: var(--color-primary-800);
}

.feature-description {
  margin-bottom: var(--space-4);
  color: var(--color-neutral-600);
  flex: 1;
}

.feature-link {
  color: var(--color-primary-600);
  text-decoration: none;
  font-weight: var(--font-semibold);
}

.feature-link:hover {
  color: var(--color-primary-800);
  text-decoration: underline;
}

/* Emergency Notice */
.emergency-strip {
  padding: 0 0 var(--space-16);
}

.emergency-strip p {
  margin-bottom: var(--space-3);
}

.notice-link {
  color: var(--color-error);
  font-weight: var(--font-semibold);
  text-decoration: none;
}

.notice-link:hover {
  text-decoration: underline;
}

/* CTA Section */
.cta {
  background-color: var(--color-primary-700);
  border-top: 4px solid var(--color-primary-900);
  padding: var(--space-16) 0;
  text-align: center;
}

.cta-title {
  font-size: var(--text-3xl);
  margin-bottom: var(--space-4);
  color: white;
}

.cta-description {
  font-size: var(--text-lg);
  margin-bottom: var(--space-6);
  color: var(--color-primary-100);
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero {
    padding: var(--space-12) 0;
  }

  .hero-title {
    font-size: var(--text-4xl);
  }

  .hero-description {
    font-size: var(--text-lg);
  }

  .stats-grid {
    grid-template-columns: 1fr;
    gap: var(--space-6);
  }

  .features-grid {
    grid-template-columns: 1fr;
  }
}
</style>