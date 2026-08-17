<template>
  <div class="contact">
    <!-- Page Banner -->
    <section class="page-banner">
      <div class="container container-xl">
        <span class="page-banner-eyebrow">Contact</span>
        <h1>Get in Touch</h1>
        <p class="page-banner-lead">
          We're here to support you and answer any questions. Feel free to reach out to us —
          remember, you are not alone in this journey.
        </p>
      </div>
    </section>

    <!-- Contact Methods -->
    <section class="section">
      <div class="container container-xl">
        <div class="section-header">
          <h2>Connect With Us</h2>
        </div>
        <div class="methods-grid">
          <div class="method-card card">
            <div class="method-icon">
              <v-icon size="36" color="primary">mdi-instagram</v-icon>
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
              <v-icon size="36" color="primary">mdi-twitter</v-icon>
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
              <v-icon size="36" color="primary">mdi-youtube</v-icon>
            </div>
            <h3 class="method-title">YouTube</h3>
            <p class="method-description">
              Watch our videos, stories, and educational content about epilepsy awareness.
            </p>
            <a href="https://www.youtube.com/@purplwav5518/featured" target="_blank" rel="noopener noreferrer" class="method-link">
              PurplWav on YouTube
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Support Message -->
    <section class="support-message">
      <div class="container container-lg">
        <h2 class="message-title">You Are Not Alone</h2>
        <p class="message-text">
          Living with epilepsy — whether as a patient, family member, or caregiver — can feel isolating.
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
    </section>

    <!-- Community Links -->
    <section class="section">
      <div class="container container-xl">
        <div class="section-header">
          <h2>Helpful Resources</h2>
        </div>
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
/* Contact Methods Section */
.methods-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--space-6);
}

.method-card {
  padding: var(--space-6);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.method-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  border-radius: var(--radius-md);
  background-color: var(--color-primary-50);
  margin-bottom: var(--space-4);
}

.method-title {
  font-size: var(--text-xl);
  margin-bottom: var(--space-3);
  color: var(--color-primary-800);
}

.method-description {
  color: var(--color-neutral-600);
  margin-bottom: var(--space-4);
  line-height: var(--leading-relaxed);
  flex: 1;
}

.method-link {
  display: inline-block;
  color: var(--color-primary-600);
  text-decoration: none;
  font-weight: var(--font-semibold);
  font-size: var(--text-base);
  padding: var(--space-2) var(--space-4);
  border: 2px solid var(--color-primary-600);
  border-radius: var(--radius-md);
  transition: background-color var(--transition-fast), color var(--transition-fast);
}

.method-link:hover {
  background-color: var(--color-primary-600);
  color: white;
}

/* Support Message Section */
.support-message {
  background-color: var(--color-primary-700);
  border-top: 4px solid var(--color-primary-900);
  border-bottom: 4px solid var(--color-primary-900);
  padding: var(--space-16) 0;
  text-align: center;
}

.message-title {
  font-size: var(--text-3xl);
  color: white;
  margin-bottom: var(--space-6);
}

.message-text {
  font-size: var(--text-lg);
  color: var(--color-primary-100);
  line-height: var(--leading-relaxed);
  margin: 0 auto var(--space-10);
  max-width: 760px;
}

.message-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--space-6);
}

.stat-item {
  text-align: center;
}

.stat-number {
  font-family: var(--font-family-heading);
  font-size: var(--text-3xl);
  font-weight: var(--font-bold);
  color: white;
  margin-bottom: var(--space-2);
}

.stat-label {
  font-size: var(--text-base);
  color: var(--color-primary-200);
}

/* Community Links Section */
.links-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: var(--space-6);
}

.link-card {
  display: flex;
  flex-direction: column;
  padding: var(--space-6);
  text-decoration: none;
  color: inherit;
  border-top: 4px solid var(--color-primary-600);
  transition: border-color var(--transition-fast), background-color var(--transition-fast);
}

.link-card:hover {
  background-color: var(--color-primary-50);
}

.link-card h4 {
  font-family: var(--font-family-primary);
  font-size: var(--text-lg);
  font-weight: var(--font-bold);
  margin-bottom: var(--space-2);
  color: var(--color-primary-800);
}

.link-card p {
  color: var(--color-neutral-600);
  line-height: var(--leading-relaxed);
  margin-bottom: var(--space-4);
  flex-grow: 1;
}

.link-arrow {
  font-size: var(--text-lg);
  color: var(--color-primary-600);
  font-weight: var(--font-bold);
  align-self: flex-end;
}

/* Responsive Design */
@media (max-width: 768px) {
  .methods-grid {
    grid-template-columns: 1fr;
  }

  .message-stats {
    grid-template-columns: 1fr;
  }

  .links-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .method-card {
    padding: var(--space-4);
  }
}
</style>