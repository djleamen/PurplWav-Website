<template>
  <div class="aydin-story">
    <!-- Hero Section -->
    <section class="story-hero">
      <div class="container container-xl">
        <div class="hero-content">
          <div class="hero-text pl-8">
            <h1 class="hero-title">Meet <span class="text-primary">Aydin</span></h1>
            <p class="hero-description">
              Aydin has shown incredible resilience throughout his life, facing many medical challenges 
              and hospital visits with strength and courage. Through it all, he has remained positive 
              and determined to overcome his obstacles, inspiring those around him with his unwavering spirit.
            </p>
          </div>
          <div class="hero-image">
            <img src="@/assets/Aydin.jpg" alt="Aydin Leamen" class="aydin-photo" />
          </div>
        </div>
      </div>
    </section>

    <!-- Timeline Section -->
    <section class="timeline-section">
      <div class="container container-xl">
        <h2 class="section-title text-center mb-12">Journey Timeline</h2>
        <Timeline />
      </div>
    </section>

    <!-- Impact Section -->
    <section class="impact-section">
      <div class="container container-lg">
        <div class="impact-content card card-elevated">
          <h2 class="impact-title">The Inspiration Behind PurplWav</h2>
          <p class="impact-text">
            Aydin's courage in facing drug-resistant epilepsy has not only inspired his family 
            but has become the driving force behind PurplWav's mission. His story shows that 
            with love, support, and determination, challenges can become sources of strength 
            and inspiration for others.
          </p>
          <div class="impact-stats">
            <div class="stat-item">
              <div class="stat-icon">
                <v-icon size="32" color="white">mdi-heart</v-icon>
              </div>
              <div class="stat-text">Inspiring countless families</div>
            </div>
            <div class="stat-item">
              <div class="stat-icon">
                <v-icon size="32" color="white">mdi-star</v-icon>
              </div>
              <div class="stat-text">Raising awareness daily</div>
            </div>
            <div class="stat-item">
              <div class="stat-icon">
                <v-icon size="32" color="white">mdi-handshake</v-icon>
              </div>
              <div class="stat-text">Building community support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import Timeline from '@/components/TImeline.vue';
</script>

<style scoped>
/* Story Hero Section */
.story-hero {
  background: linear-gradient(135deg, var(--color-primary-50) 0%, white 100%);
  padding: var(--space-20) 0 var(--space-16);
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
  color: var(--color-neutral-600);
  line-height: var(--leading-relaxed);
}

.hero-image {
  display: flex;
  justify-content: center;
}

.aydin-photo {
  width: 300px;
  height: 300px;
  border-radius: var(--radius-full);
  object-fit: cover;
  box-shadow: var(--shadow-xl);
  border: 6px solid white;
}

/* Photo Gallery Section */
.photo-gallery {
  padding: var(--space-20) 0;
  background-color: var(--color-surface-variant);
}

.section-title {
  font-size: var(--text-4xl);
  color: var(--color-neutral-900);
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--space-6);
}

.photo-item {
  text-align: center;
}

.gallery-photo {
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-md);
  margin-bottom: var(--space-4);
  transition: transform var(--transition-normal);
}

.gallery-photo:hover {
  transform: scale(1.05);
}

.photo-caption {
  font-size: var(--text-lg);
  font-weight: var(--font-medium);
  color: var(--color-neutral-700);
  margin: 0;
}

/* Timeline Section */
.timeline-section {
  padding: var(--space-20) 0;
}

/* Impact Section */
.impact-section {
  padding: var(--space-20) 0;
  background-color: var(--color-surface-variant);
}

.impact-content {
  max-width: 900px;
  margin: 0 auto;
  padding: var(--space-12);
  text-align: center;
  background: linear-gradient(135deg, var(--color-primary-500) 0%, var(--color-primary-600) 100%);
  color: white;
}

.impact-title {
  font-size: var(--text-4xl);
  color: white;
  margin-bottom: var(--space-8);
}

.impact-text {
  font-size: var(--text-xl);
  color: rgba(255, 255, 255, 0.95);
  line-height: var(--leading-relaxed);
  margin-bottom: var(--space-12);
}

.impact-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--space-8);
}

.stat-item {
  display: flex;
  align-items: center;
  gap: var(--space-4);
  background-color: rgba(255, 255, 255, 0.1);
  padding: var(--space-6);
  border-radius: var(--radius-lg);
}

.stat-icon {
  font-size: var(--text-3xl);
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.stat-text {
  font-size: var(--text-lg);
  color: rgba(255, 255, 255, 0.95);
  font-weight: var(--font-medium);
}

/* Responsive Design */
@media (max-width: 768px) {
  .story-hero {
    padding: var(--space-16) 0 var(--space-12);
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

  .aydin-photo {
    width: 250px;
    height: 250px;
  }

  .gallery-grid {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: var(--space-4);
  }

  .gallery-photo {
    height: 250px;
  }

  .impact-content {
    padding: var(--space-8) var(--space-6);
  }

  .impact-stats {
    grid-template-columns: 1fr;
    gap: var(--space-6);
  }

  .stat-item {
    flex-direction: column;
    text-align: center;
    gap: var(--space-3);
  }
}

@media (max-width: 480px) {
  .aydin-photo {
    width: 200px;
    height: 200px;
  }

  .gallery-grid {
    grid-template-columns: 1fr;
  }

  .gallery-photo {
    height: 200px;
  }
}
</style>