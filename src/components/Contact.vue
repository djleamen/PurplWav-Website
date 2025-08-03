<template>
  <div class="contact">
    <!-- Contact Hero Section -->
    <section class="contact-hero">
      <div class="container container-xl">
        <div class="hero-content">
          <h1 class="hero-title">Get in <span class="text-primary">Touch</span></h1>
          <p class="hero-description">
            We're here to support you and answer any questions. Feel free to reach out to us—
            remember, you are not alone in this journey.
          </p>
        </div>
      </div>
    </section>

    <!-- Contact Methods -->
    <section class="contact-methods">
      <div class="container container-xl">
        <h2 class="section-title text-center mb-12">Connect With Us</h2>
        <div class="methods-grid">
          <div class="method-card card">
            <div class="method-icon">
              <v-icon size="64" color="primary">mdi-instagram</v-icon>
            </div>
            <h3 class="method-title">Instagram</h3>
            <p class="method-description">
              See our visual stories, behind-the-scenes content, and daily inspiration.
            </p>
            <a href="https://www.instagram.com/purplwav/" target="_blank" rel="noopener noreferrer" class="method-link">
              @purplwav
            </a>
          </div>

          <div class="method-card card">
            <div class="method-icon">
              <v-icon size="64" color="primary">mdi-twitter</v-icon>
            </div>
            <h3 class="method-title">Twitter/X</h3>
            <p class="method-description">
              Follow us for updates, epilepsy awareness content, and community support.
            </p>
            <a href="https://x.com/Purpl_Wav" target="_blank" rel="noopener noreferrer" class="method-link">
              @Purpl_Wav
            </a>
          </div>

          <div class="method-card card">
            <div class="method-icon">
              <v-icon size="64" color="primary">mdi-youtube</v-icon>
            </div>
            <h3 class="method-title">YouTube</h3>
            <p class="method-description">
              Watch our videos, stories, and educational content about epilepsy awareness.
            </p>
            <a href="https://www.youtube.com/@purplwav5518/featured" target="_blank" rel="noopener noreferrer" class="method-link">
              Purpl Wav YouTube
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Support Message -->
    <section class="support-message">
      <div class="container container-lg">
        <div class="message-content card card-elevated">
          <h2 class="message-title">You Are Not Alone</h2>
          <p class="message-text">
            Living with epilepsy—whether as a patient, family member, or caregiver—can feel isolating. 
            But you're part of a strong, supportive community. We're here to provide resources, 
            share experiences, and remind you that together, we're stronger.
          </p>
          <div class="message-stats">
            <div class="stat-item">
              <div class="stat-number">65M+</div>
              <div class="stat-label">People worldwide with epilepsy</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">1 in 26</div>
              <div class="stat-label">People who will develop epilepsy</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">Together</div>
              <div class="stat-label">We make a difference</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Community Links -->
    <section class="community-links">
      <div class="container container-xl">
        <h2 class="section-title text-center mb-12">Helpful Resources</h2>
        <div class="links-grid">
          <RouterLink to="/epilepsy-facts" class="link-card card">
            <h4>Learn About Epilepsy</h4>
            <p>Get factual information about epilepsy, types, and treatments.</p>
            <span class="link-arrow">→</span>
          </RouterLink>

          <RouterLink to="/first-aid" class="link-card card">
            <h4>Seizure First Aid</h4>
            <p>Learn how to help someone during a seizure safely.</p>
            <span class="link-arrow">→</span>
          </RouterLink>

          <RouterLink to="/resources" class="link-card card">
            <h4>Local Resources</h4>
            <p>Find support services and resources in Durham Region.</p>
            <span class="link-arrow">→</span>
          </RouterLink>

          <RouterLink to="/aydin" class="link-card card">
            <h4>Aydin's Story</h4>
            <p>Read about our inspiration and the journey that started PurplWav.</p>
            <span class="link-arrow">→</span>
          </RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<style scoped>
/* Contact Hero Section */
.contact-hero {
  background: linear-gradient(135deg, var(--color-primary-50) 0%, white 100%);
  padding: var(--space-20) 0 var(--space-16);
}

.hero-content {
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
}

.hero-title {
  font-size: var(--text-5xl);
  margin-bottom: var(--space-6);
  line-height: var(--leading-tight);
}

.hero-description {
  font-size: var(--text-xl);
  color: var(--color-neutral-600);
  line-height: var(--leading-relaxed);
}

/* Contact Methods Section */
.contact-methods {
  padding: var(--space-20) 0;
  background-color: var(--color-surface-variant);
}

.section-title {
  font-size: var(--text-4xl);
  color: var(--color-neutral-900);
}

.methods-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--space-8);
}

.method-card {
  text-align: center;
  padding: var(--space-8);
  transition: transform var(--transition-normal);
}

.method-card:hover {
  transform: translateY(-4px);
}

.method-icon {
  font-size: 4rem;
  margin-bottom: var(--space-6);
  display: flex;
  justify-content: center;
  align-items: center;
}

.method-title {
  font-size: var(--text-2xl);
  margin-bottom: var(--space-4);
  color: var(--color-primary-700);
}

.method-description {
  color: var(--color-neutral-600);
  margin-bottom: var(--space-6);
  line-height: var(--leading-relaxed);
}

.method-link {
  display: inline-block;
  color: var(--color-primary-500);
  text-decoration: none;
  font-weight: var(--font-semibold);
  font-size: var(--text-lg);
  padding: var(--space-3) var(--space-6);
  border: 2px solid var(--color-primary-500);
  border-radius: var(--radius-lg);
  transition: all var(--transition-fast);
}

.method-link:hover {
  background-color: var(--color-primary-500);
  color: white;
  transform: translateY(-2px);
}

/* Support Message Section */
.support-message {
  padding: var(--space-20) 0;
}

.message-content {
  max-width: 900px;
  margin: 0 auto;
  padding: var(--space-12);
  text-align: center;
  background: linear-gradient(135deg, var(--color-primary-500) 0%, var(--color-primary-600) 100%);
  color: white;
}

.message-title {
  font-size: var(--text-4xl);
  color: white;
  margin-bottom: var(--space-8);
}

.message-text {
  font-size: var(--text-xl);
  color: rgba(255, 255, 255, 0.95);
  line-height: var(--leading-relaxed);
  margin-bottom: var(--space-12);
}

.message-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--space-8);
}

.stat-item {
  text-align: center;
}

.stat-number {
  font-size: var(--text-4xl);
  font-weight: var(--font-bold);
  color: white;
  margin-bottom: var(--space-2);
}

.stat-label {
  font-size: var(--text-base);
  color: rgba(255, 255, 255, 0.9);
}

/* Community Links Section */
.community-links {
  padding: var(--space-20) 0;
  background-color: var(--color-surface-variant);
}

.links-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--space-6);
}

.link-card {
  display: flex;
  flex-direction: column;
  padding: var(--space-8);
  text-decoration: none;
  color: inherit;
  transition: all var(--transition-normal);
  position: relative;
  overflow: hidden;
}

.link-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 4px;
  height: 100%;
  background-color: var(--color-primary-500);
  transform: scaleY(0);
  transition: transform var(--transition-normal);
}

.link-card:hover::before {
  transform: scaleY(1);
}

.link-card:hover {
  transform: translateY(-2px);
  color: var(--color-primary-700);
}

.link-card h4 {
  font-size: var(--text-xl);
  margin-bottom: var(--space-3);
  color: var(--color-primary-700);
}

.link-card p {
  color: var(--color-neutral-600);
  line-height: var(--leading-relaxed);
  margin-bottom: var(--space-4);
  flex-grow: 1;
}

.link-arrow {
  font-size: var(--text-xl);
  color: var(--color-primary-500);
  font-weight: var(--font-bold);
  align-self: flex-end;
  transition: transform var(--transition-fast);
}

.link-card:hover .link-arrow {
  transform: translateX(var(--space-2));
}

/* Responsive Design */
@media (max-width: 768px) {
  .contact-hero {
    padding: var(--space-16) 0 var(--space-12);
  }

  .hero-title {
    font-size: var(--text-4xl);
  }

  .hero-description {
    font-size: var(--text-lg);
  }

  .methods-grid {
    grid-template-columns: 1fr;
    gap: var(--space-6);
  }

  .message-content {
    padding: var(--space-8) var(--space-6);
  }

  .message-stats {
    grid-template-columns: 1fr;
    gap: var(--space-6);
  }

  .links-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .method-card {
    padding: var(--space-6) var(--space-4);
  }

  .method-icon {
    font-size: 3rem;
  }

  .stat-number {
    font-size: var(--text-3xl);
  }
}
</style>