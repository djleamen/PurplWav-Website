<template>
  <div class="first-aid">
    <!-- Hero Section -->
    <section class="aid-hero">
      <div class="container container-xl">
        <div class="hero-content">
          <h1 class="hero-title">Seizure <span class="text-primary">First Aid</span></h1>
          <p class="hero-description">
            Knowing how to respond during a seizure can help keep someone safe. 
            Here's what you need to know about providing proper seizure first aid.
          </p>
        </div>
      </div>
    </section>

    <!-- Quick Action Guide -->
    <section class="quick-actions">
      <div class="container container-xl">
        <h2 class="section-title text-center mb-12">What to Do During a Seizure</h2>
        <div class="actions-grid">
          <div class="action-card card do-card">
            <div class="action-header">
              <div class="action-icon do-icon">✓</div>
              <h3 class="action-title">DO</h3>
            </div>
            <ul class="action-list">
              <li>Stay calm and stay with the person</li>
              <li>Time the seizure</li>
              <li>Move objects that could cause injury</li>
              <li>Place person on their side</li>
              <li>Cushion their head</li>
              <li>Stay until they're fully alert</li>
            </ul>
          </div>

          <div class="action-card card dont-card">
            <div class="action-header">
              <div class="action-icon dont-icon">✗</div>
              <h3 class="action-title">DON'T</h3>
            </div>
            <ul class="action-list">
              <li>Put anything in their mouth</li>
              <li>Restrain or hold them down</li>
              <li>Give water, pills, or food</li>
              <li>Perform CPR</li>
              <li>Leave them alone</li>
              <li>Panic or create a scene</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Detailed Steps -->
    <section class="detailed-steps">
      <div class="container container-xl">
        <h2 class="section-title text-center mb-12">Step-by-Step Guide</h2>
        <div class="steps-container">
          <div class="step-item">
            <div class="step-number">1</div>
            <div class="step-content">
              <h4>Stay Calm</h4>
              <p>Keep yourself calm and reassure others around you. Your calm presence will help the situation.</p>
            </div>
          </div>

          <div class="step-item">
            <div class="step-number">2</div>
            <div class="step-content">
              <h4>Clear the Area</h4>
              <p>Remove any nearby objects that could cause injury, like furniture or sharp objects.</p>
            </div>
          </div>

          <div class="step-item">
            <div class="step-number">3</div>
            <div class="step-content">
              <h4>Position Safely</h4>
              <p>Gently turn the person onto their side to help keep their airway clear and prevent choking.</p>
            </div>
          </div>

          <div class="step-item">
            <div class="step-number">4</div>
            <div class="step-content">
              <h4>Time the Seizure</h4>
              <p>Note when the seizure started. This information is important for medical professionals.</p>
            </div>
          </div>

          <div class="step-item">
            <div class="step-number">5</div>
            <div class="step-content">
              <h4>Stay and Comfort</h4>
              <p>Remain with the person until they're fully conscious and oriented. Speak calmly and reassuringly.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- When to Call 911 -->
    <section class="emergency-section">
      <div class="container container-xl">
        <div class="emergency-content card card-elevated">
          <h2 class="emergency-title">When to Call 911</h2>
          <div class="emergency-grid">
            <div class="emergency-reasons">
              <h4>Call Emergency Services If:</h4>
              <ul>
                <li>The seizure lasts longer than 5 minutes</li>
                <li>The person has repeated seizures</li>
                <li>The person is injured during the seizure</li>
                <li>The person has difficulty breathing or staying conscious</li>
                <li>The person has diabetes or is pregnant</li>
                <li>This is the person's first seizure</li>
                <li>The seizure happens in water</li>
              </ul>
            </div>
            <div class="emergency-image">
              <div class="emergency-icon">
                <v-icon size="64" color="white">mdi-ambulance</v-icon>
              </div>
              <p class="emergency-note">
                When in doubt, it's always better to call for help. Emergency responders are trained to handle these situations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Educational Video -->
    <section class="video-section">
      <div class="container container-xl">
        <h2 class="section-title text-center mb-8">Learn More</h2>
        <p class="section-description text-center mb-12">
          Watch this educational video to better understand seizure first aid in action.
        </p>
        <div class="video-container">
          <div class="video-wrapper">
            <iframe 
              src="https://www.youtube.com/embed/zqXPcEuor8w?si=JdiiqPvp6BZ5i_1J" 
              title="Seizure First Aid Training Video" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerpolicy="strict-origin-when-cross-origin" 
              allowfullscreen>
            </iframe>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* Aid Hero Section */
.aid-hero {
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

/* Quick Actions Section */
.quick-actions {
  padding: var(--space-20) 0;
  background-color: var(--color-surface-variant);
}

.section-title {
  font-size: var(--text-4xl);
  color: var(--color-neutral-900);
}

.actions-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-8);
  max-width: 900px;
  margin: 0 auto;
}

.action-card {
  padding: var(--space-8);
}

.do-card {
  border-left: 6px solid var(--color-success);
}

.dont-card {
  border-left: 6px solid var(--color-error);
}

.action-header {
  display: flex;
  align-items: center;
  margin-bottom: var(--space-6);
}

.action-icon {
  width: 60px;
  height: 60px;
  border-radius: var(--radius-full);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--text-2xl);
  font-weight: var(--font-bold);
  margin-right: var(--space-4);
}

.do-icon {
  background-color: var(--color-success);
  color: white;
}

.dont-icon {
  background-color: var(--color-error);
  color: white;
}

.action-title {
  font-size: var(--text-3xl);
  margin: 0;
}

.do-card .action-title {
  color: var(--color-success);
}

.dont-card .action-title {
  color: var(--color-error);
}

.action-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.action-list li {
  padding: var(--space-3) 0;
  color: var(--color-neutral-700);
  font-size: var(--text-lg);
  border-bottom: 1px solid var(--color-neutral-200);
  position: relative;
  padding-left: var(--space-8);
}

.action-list li:last-child {
  border-bottom: none;
}

.do-card .action-list li::before {
  content: "✓";
  position: absolute;
  left: 0;
  color: var(--color-success);
  font-weight: var(--font-bold);
}

.dont-card .action-list li::before {
  content: "✗";
  position: absolute;
  left: 0;
  color: var(--color-error);
  font-weight: var(--font-bold);
}

/* Detailed Steps Section */
.detailed-steps {
  padding: var(--space-20) 0;
}

.steps-container {
  max-width: 800px;
  margin: 0 auto;
}

.step-item {
  display: flex;
  align-items: flex-start;
  margin-bottom: var(--space-8);
  padding: var(--space-6);
  background-color: var(--color-surface);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-sm);
  transition: transform var(--transition-normal);
}

.step-item:hover {
  transform: translateX(var(--space-2));
}

.step-number {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, var(--color-primary-500), var(--color-primary-600));
  color: white;
  border-radius: var(--radius-full);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--text-2xl);
  font-weight: var(--font-bold);
  margin-right: var(--space-6);
  flex-shrink: 0;
}

.step-content h4 {
  font-size: var(--text-xl);
  color: var(--color-primary-700);
  margin-bottom: var(--space-3);
}

.step-content p {
  color: var(--color-neutral-600);
  line-height: var(--leading-relaxed);
  margin: 0;
}

/* Emergency Section */
.emergency-section {
  padding: var(--space-20) 0;
  background-color: var(--color-surface-variant);
}

.emergency-content {
  max-width: 900px;
  margin: 0 auto;
  padding: var(--space-12);
  background: linear-gradient(135deg, var(--color-warning) 0%, #f59e0b 100%);
  color: white;
}

.emergency-title {
  font-size: var(--text-4xl);
  color: white;
  margin-bottom: var(--space-8);
  text-align: center;
}

.emergency-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: var(--space-8);
  align-items: center;
}

.emergency-reasons h4 {
  font-size: var(--text-2xl);
  color: white;
  margin-bottom: var(--space-6);
}

.emergency-reasons ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.emergency-reasons li {
  color: rgba(255, 255, 255, 0.95);
  margin-bottom: var(--space-4);
  padding-left: var(--space-6);
  position: relative;
  font-size: 14px;
}

.emergency-reasons li::before {
  content: "!";
  position: absolute;
  left: 0;
  color: white;
  font-weight: var(--font-bold);
  width: 20px;
  height: 20px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: var(--radius-full);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--text-sm);
}

.emergency-image {
  text-align: center;
}

.emergency-icon {
  font-size: 4rem;
  margin-bottom: var(--space-4);
  display: flex;
  justify-content: center;
  align-items: center;
}

.emergency-note {
  color: rgba(255, 255, 255, 0.9);
  font-style: italic;
  line-height: var(--leading-relaxed);
  margin: 0;
}

/* Video Section */
.video-section {
  padding: var(--space-20) 0;
}

.section-description {
  font-size: var(--text-lg);
  color: var(--color-neutral-600);
  line-height: var(--leading-relaxed);
  max-width: 600px;
  margin: 0 auto;
}

.video-container {
  max-width: 800px;
  margin: 0 auto;
}

.video-wrapper {
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  border-radius: var(--radius-xl);
  overflow: hidden;
  box-shadow: var(--shadow-lg);
}

.video-wrapper iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

/* Responsive Design */
@media (max-width: 768px) {
  .aid-hero {
    padding: var(--space-16) 0 var(--space-12);
  }

  .hero-title {
    font-size: var(--text-4xl);
  }

  .hero-description {
    font-size: var(--text-lg);
  }

  .actions-grid {
    grid-template-columns: 1fr;
    gap: var(--space-6);
  }

  .step-item {
    flex-direction: column;
    text-align: center;
    gap: var(--space-4);
  }

  .step-number {
    margin-right: 0;
  }

  .emergency-grid {
    grid-template-columns: 1fr;
    gap: var(--space-6);
  }

  .emergency-content {
    padding: var(--space-8) var(--space-6);
  }
}

@media (max-width: 480px) {
  .action-card {
    padding: var(--space-6) var(--space-4);
  }

  .action-header {
    flex-direction: column;
    text-align: center;
    gap: var(--space-3);
  }

  .action-icon {
    margin-right: 0;
  }

  .step-item {
    padding: var(--space-4);
  }

  .video-wrapper {
    padding-bottom: 75%; /* Adjust aspect ratio for mobile */
  }
}
</style>