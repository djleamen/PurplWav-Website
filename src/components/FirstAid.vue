<template>
  <div class="first-aid">
    <!-- Page Banner -->
    <section class="page-banner">
      <div class="container container-xl">
        <span class="page-banner-eyebrow">First Aid</span>
        <h1>Seizure First Aid</h1>
        <p class="page-banner-lead">
          Knowing how to respond during a seizure can help keep someone safe. 
          Here's what you need to know about providing proper seizure first aid.
        </p>
      </div>
    </section>

    <!-- Quick Action Guide -->
    <section class="section">
      <div class="container container-xl">
        <div class="section-header">
          <h2>What to Do During a Seizure</h2>
        </div>
        <div class="actions-grid">
          <div class="action-card card do-card">
            <h3 class="action-title do-title">Do</h3>
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
            <h3 class="action-title dont-title">Don't</h3>
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
    <section class="section section-alt">
      <div class="container container-xl">
        <div class="section-header">
          <h2>Step-by-Step Guide</h2>
        </div>
        <div class="steps-container">
          <div class="step-item card">
            <div class="step-number">1</div>
            <div class="step-content">
              <h4>Stay Calm</h4>
              <p>Keep yourself calm and reassure others around you. Your calm presence will help the situation.</p>
            </div>
          </div>

          <div class="step-item card">
            <div class="step-number">2</div>
            <div class="step-content">
              <h4>Clear the Area</h4>
              <p>Remove any nearby objects that could cause injury, like furniture or sharp objects.</p>
            </div>
          </div>

          <div class="step-item card">
            <div class="step-number">3</div>
            <div class="step-content">
              <h4>Position Safely</h4>
              <p>Gently turn the person onto their side to help keep their airway clear and prevent choking.</p>
            </div>
          </div>

          <div class="step-item card">
            <div class="step-number">4</div>
            <div class="step-content">
              <h4>Time the Seizure</h4>
              <p>Note when the seizure started. This information is important for medical professionals.</p>
            </div>
          </div>

          <div class="step-item card">
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
    <section class="section">
      <div class="container container-lg">
        <div class="notice notice-emergency emergency-content">
          <h2 class="notice-title">When to Call 911</h2>
          <p class="emergency-intro">Call emergency services if any of the following apply:</p>
          <ul class="emergency-list">
            <li>The seizure lasts longer than 5 minutes</li>
            <li>The person has repeated seizures</li>
            <li>The person is injured during the seizure</li>
            <li>The person has difficulty breathing or staying conscious</li>
            <li>The person has diabetes or is pregnant</li>
            <li>This is the person's first seizure</li>
            <li>The seizure happens in water</li>
          </ul>
          <p class="emergency-note">
            When in doubt, it's always better to call for help. Emergency responders are trained to handle these situations.
          </p>
        </div>
      </div>
    </section>

    <!-- Educational Video -->
    <section class="section section-alt">
      <div class="container container-xl">
        <div class="section-header">
          <h2>Learn More</h2>
          <p class="section-lead">
            Watch this educational video to better understand seizure first aid in action.
          </p>
        </div>
        <div class="video-container">
          <div class="video-wrapper">
            <iframe 
              src="https://www.youtube.com/embed/zqXPcEuor8w?si=JdiiqPvp6BZ5i_1J" 
              title="Seizure First Aid Training Video" 
              frameborder="0" 
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
/* Quick Actions Section */
.actions-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-6);
  max-width: 900px;
}

.action-card {
  padding: var(--space-6);
}

.do-card {
  border-top: 4px solid var(--color-success);
}

.dont-card {
  border-top: 4px solid var(--color-error);
}

.action-title {
  font-family: var(--font-family-primary);
  font-size: var(--text-xl);
  font-weight: var(--font-bold);
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin: 0 0 var(--space-4) 0;
}

.do-title {
  color: var(--color-success);
}

.dont-title {
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
  font-size: var(--text-base);
  border-bottom: 1px solid var(--color-neutral-200);
  position: relative;
  padding-left: var(--space-6);
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
.steps-container {
  max-width: 800px;
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.step-item {
  display: flex;
  align-items: flex-start;
  padding: var(--space-5) var(--space-6);
}

.step-number {
  width: 44px;
  height: 44px;
  background-color: var(--color-primary-700);
  color: white;
  border-radius: var(--radius-full);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--text-lg);
  font-weight: var(--font-bold);
  margin-right: var(--space-5);
  flex-shrink: 0;
}

.step-content h4 {
  font-family: var(--font-family-primary);
  font-size: var(--text-lg);
  font-weight: var(--font-bold);
  color: var(--color-primary-800);
  margin-bottom: var(--space-2);
}

.step-content p {
  color: var(--color-neutral-600);
  line-height: var(--leading-relaxed);
  margin: 0;
}

/* Emergency Section */
.emergency-content {
  padding: var(--space-8);
}

.emergency-intro {
  font-size: var(--text-base);
  font-weight: var(--font-semibold);
  color: var(--color-neutral-800);
  margin-bottom: var(--space-4);
}

.emergency-list {
  list-style: none;
  padding: 0;
  margin: 0 0 var(--space-6) 0;
}

.emergency-list li {
  color: var(--color-neutral-700);
  padding: var(--space-2) 0 var(--space-2) var(--space-6);
  position: relative;
  border-bottom: 1px solid rgba(179, 38, 30, 0.12);
}

.emergency-list li:last-child {
  border-bottom: none;
}

.emergency-list li::before {
  content: "!";
  position: absolute;
  left: 0;
  top: var(--space-2);
  color: white;
  font-weight: var(--font-bold);
  width: 20px;
  height: 20px;
  background-color: var(--color-error);
  border-radius: var(--radius-full);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--text-xs);
}

.emergency-note {
  color: var(--color-neutral-600);
  font-style: italic;
  line-height: var(--leading-relaxed);
  margin: 0;
}

/* Video Section */
.video-container {
  max-width: 800px;
}

.video-wrapper {
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  border-radius: var(--radius-md);
  overflow: hidden;
  border: 1px solid var(--color-border);
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
  .actions-grid {
    grid-template-columns: 1fr;
  }

  .emergency-content {
    padding: var(--space-6);
  }
}

@media (max-width: 480px) {
  .action-card {
    padding: var(--space-4);
  }

  .step-item {
    flex-direction: column;
    gap: var(--space-3);
    padding: var(--space-4);
  }

  .step-number {
    margin-right: 0;
  }

  .video-wrapper {
    padding-bottom: 75%; /* Adjust aspect ratio for mobile */
  }
}
</style>