<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="hero">
      <div class="container container-xl">
        <div class="hero-content">
          <div class="hero-text pl-8">
            <h1 class="hero-title">Welcome to <span class="text-primary">PurplWav</span></h1>
            <p class="hero-description">
              Epilepsy awareness, outreach, and research campaign. We are a family-run outreach 
              campaign dedicated to raising awareness about epilepsy and providing support to 
              those affected by the disease.
            </p>
            <div class="hero-actions">
              <RouterLink to="/about" class="btn btn-primary btn-large">Learn About Us</RouterLink>
              <RouterLink to="/epilepsy-facts" class="btn btn-outline btn-large">Epilepsy Facts</RouterLink>
            </div>
          </div>
          <div class="hero-image">
            <img src="@/assets/logo.svg" alt="PurplWav Logo" class="logo" />
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features">
      <div class="container container-xl">
        <h2 class="section-title text-center mb-12">How We're Making a Difference</h2>
        <div class="features-grid">
          <div class="feature-card card">
            <div class="feature-icon">
              <img src="@/assets/AydinDilaraCarionFenn.jpg" alt="Awareness" class="feature-image" />
            </div>
            <h3 class="feature-title">Raising Awareness</h3>
            <p class="feature-description">
              Educating communities about epilepsy, dispelling myths, and promoting understanding.
            </p>
            <RouterLink to="/epilepsy-facts" class="feature-link">Learn More →</RouterLink>
          </div>

          <div class="feature-card card">
            <div class="feature-icon">
              <img src="@/assets/AydinHospital.jpg" alt="Support" class="feature-image" />
            </div>
            <h3 class="feature-title">Providing Support</h3>
            <p class="feature-description">
              Connecting families and individuals with resources and support networks.
            </p>
            <RouterLink to="/resources" class="feature-link">Find Resources →</RouterLink>
          </div>

          <div class="feature-card card">
            <div class="feature-icon">
              <img src="@/assets/Aydin2023.jpg" alt="Advocacy" class="feature-image" />
            </div>
            <h3 class="feature-title">Sharing Stories</h3>
            <p class="feature-description">
              Highlighting real experiences to inspire hope and build community.
            </p>
            <RouterLink to="/aydin" class="feature-link">Read Aydin's Story →</RouterLink>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta">
      <div class="container container-lg">
        <div class="cta-content card card-elevated">
          <h2 class="cta-title">Ready to Get Involved?</h2>
          <p class="cta-description">
            Join us in raising awareness and supporting those affected by epilepsy.
          </p>
          <RouterLink to="/contact" class="btn btn-primary btn-large">Contact Us</RouterLink>
        </div>
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
  background: linear-gradient(135deg, var(--color-primary-50) 0%, white 100%);
  padding: var(--space-20) 0 var(--space-16);
  min-height: 70vh;
  display: flex;
  align-items: center;
}

.hero-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-12);
  align-items: center;
}

.hero-title {
  font-size: var(--text-5xl);
  margin-bottom: var(--space-6);
  line-height: var(--leading-tight);
}

.hero-description {
  font-size: var(--text-xl);
  margin-bottom: var(--space-8);
  color: var(--color-neutral-600);
  line-height: var(--leading-relaxed);
}

.hero-actions {
  display: flex;
  gap: var(--space-4);
  flex-wrap: wrap;
}

.btn-large {
  padding: var(--space-4) var(--space-8);
  font-size: var(--text-lg);
}

.hero-image {
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo {
  width: 300px;
  height: 300px;
  filter: drop-shadow(var(--shadow-lg));
}

/* Features Section */
.features {
  padding: var(--space-20) 0;
  background-color: var(--color-surface-variant);
}

.section-title {
  font-size: var(--text-4xl);
  color: var(--color-neutral-900);
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--space-8);
  margin-top: var(--space-12);
}

.feature-card {
  text-align: center;
  padding: var(--space-8);
  transition: transform var(--transition-normal);
}

.feature-card:hover {
  transform: translateY(-4px);
}

.feature-icon {
  margin-bottom: var(--space-6);
}

.feature-image {
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: var(--radius-full);
  box-shadow: var(--shadow-md);
}

.feature-title {
  font-size: var(--text-2xl);
  margin-bottom: var(--space-4);
  color: var(--color-primary-700);
}

.feature-description {
  margin-bottom: var(--space-6);
  color: var(--color-neutral-600);
}

.feature-link {
  color: var(--color-primary-500);
  text-decoration: none;
  font-weight: var(--font-semibold);
  transition: color var(--transition-fast);
}

.feature-link:hover {
  color: var(--color-primary-700);
}

/* CTA Section */
.cta {
  padding: var(--space-20) 0;
}

.cta-content {
  text-align: center;
  padding: var(--space-12) var(--space-8);
  background: linear-gradient(135deg, var(--color-primary-500) 0%, var(--color-primary-600) 100%);
  color: white;
}

.cta-title {
  font-size: var(--text-4xl);
  margin-bottom: var(--space-6);
  color: white;
}

.cta-description {
  font-size: var(--text-xl);
  margin-bottom: var(--space-8);
  color: rgba(255, 255, 255, 0.9);
}

.cta .btn-primary {
  background-color: white;
  color: var(--color-primary-600);
}

.cta .btn-primary:hover {
  background-color: var(--color-neutral-100);
  transform: translateY(-2px);
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero {
    padding: var(--space-16) 0 var(--space-12);
    min-height: auto;
  }

  .hero-content {
    grid-template-columns: 1fr;
    gap: var(--space-8);
    text-align: center;
  }

  .hero-title {
    font-size: var(--text-4xl);
  }

  .hero-description {
    font-size: var(--text-lg);
  }

  .logo {
    width: 200px;
    height: 200px;
  }

  .features-grid {
    grid-template-columns: 1fr;
    gap: var(--space-6);
  }

  .hero-actions {
    justify-content: center;
  }

  .btn-large {
    padding: var(--space-3) var(--space-6);
    font-size: var(--text-base);
  }
}
</style>