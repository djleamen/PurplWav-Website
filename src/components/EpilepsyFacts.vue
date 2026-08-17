<template>
  <div class="epilepsy-facts">
    <!-- Page Banner -->
    <section class="page-banner">
      <div class="container container-xl">
        <span class="page-banner-eyebrow">Education</span>
        <h1>Understanding Epilepsy</h1>
        <p class="page-banner-lead">
          Epilepsy is a neurological condition that affects millions of people worldwide.
          Knowledge leads to understanding, and understanding leads to support.
        </p>
      </div>
    </section>

    <!-- Key Facts Section -->
    <section class="section">
      <div class="container container-xl">
        <div class="section-header">
          <h2>Key Facts About Epilepsy</h2>
        </div>
        <div class="facts-grid">
          <div class="fact-card card">
            <div class="fact-icon">
              <v-icon size="36" color="primary">mdi-brain</v-icon>
            </div>
            <h3 class="fact-title">Neurological Disorder</h3>
            <p class="fact-description">
              Epilepsy is a neurological disorder that affects the brain, causing recurrent seizures.
            </p>
          </div>
          
          <div class="fact-card card">
            <div class="fact-icon">
              <v-icon size="36" color="primary">mdi-lightning-bolt</v-icon>
            </div>
            <h3 class="fact-title">Various Triggers</h3>
            <p class="fact-description">
              Seizures can be triggered by stress, lack of sleep, flashing lights, or other factors.
            </p>
          </div>
          
          <div class="fact-card card">
            <div class="fact-icon">
              <v-icon size="36" color="primary">mdi-pill</v-icon>
            </div>
            <h3 class="fact-title">Manageable Condition</h3>
            <p class="fact-description">
              While there's no cure, epilepsy can be managed with medication and other treatments.
            </p>
          </div>
          
          <div class="fact-card card">
            <div class="fact-icon">
              <v-icon size="36" color="primary">mdi-star</v-icon>
            </div>
            <h3 class="fact-title">Full Lives Possible</h3>
            <p class="fact-description">
              People with epilepsy can lead full and productive lives with proper support and treatment.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Types of Epilepsy Section -->
    <section class="section section-alt">
      <div class="container container-xl">
        <div class="types-content">
          <div class="types-text card">
            <h2 class="panel-title">Types of Epilepsy</h2>
            <p class="section-description">
              There are many different types of epilepsy, each with its own set of symptoms and characteristics.
            </p>
            <div class="types-list">
              <div class="type-item">
                <h4>Temporal Lobe Epilepsy</h4>
                <p>The most common form of focal epilepsy in adults</p>
              </div>
              <div class="type-item">
                <h4>Frontal Lobe Epilepsy</h4>
                <p>Often occurs during sleep and can cause unusual behaviors</p>
              </div>
              <div class="type-item">
                <h4>Generalized Epilepsy</h4>
                <p>Affects both sides of the brain simultaneously</p>
              </div>
              <div class="type-item">
                <h4>Lennox-Gastaut Syndrome</h4>
                <p>A severe form of epilepsy that usually begins in childhood</p>
              </div>
              <div class="type-item">
                <h4>Dravet Syndrome</h4>
                <p>A rare, severe form of epilepsy that begins in infancy</p>
              </div>
            </div>
          </div>
          <div class="seizure-types card">
            <h2 class="panel-title">Types of Seizures</h2>
            <p class="section-description">
              Seizures can be classified into different types based on where they start in the brain 
              and how they affect consciousness and movement.
            </p>
            <div class="types-list">
              <div class="type-item">
                <h4>Generalized Tonic-Clonic</h4>
                <p>Previously called "grand mal" - involves stiffening and jerking</p>
              </div>
              <div class="type-item">
                <h4>Absence Seizures</h4>
                <p>Brief episodes of staring and loss of awareness</p>
              </div>
              <div class="type-item">
                <h4>Focal Aware Seizures</h4>
                <p>Consciousness is maintained during the seizure</p>
              </div>
              <div class="type-item">
                <h4>Focal Impaired Awareness</h4>
                <p>Consciousness is altered or lost during the seizure</p>
              </div>
              <div class="type-item">
                <h4>Myoclonic Seizures</h4>
                <p>Brief, shock-like jerks of muscles or muscle groups</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SUDEP Section -->
    <section class="section">
      <div class="container container-lg">
        <div class="notice notice-emergency sudep-content">
          <h2 class="notice-title">Understanding SUDEP</h2>
          <p class="sudep-subtitle">Sudden Unexpected Death in Epilepsy</p>
          <p class="sudep-description">
            SUDEP is a rare but serious complication of epilepsy that affects approximately 
            1 in 1,000 people with epilepsy each year.
          </p>
          
          <div class="sudep-info">
            <div class="info-column">
              <h4>What We Know</h4>
              <ul>
                <li>The exact cause is unknown</li>
                <li>May be related to seizures affecting breathing or heart rate</li>
                <li>More common in uncontrolled epilepsy</li>
              </ul>
            </div>
            
            <div class="info-column">
              <h4>Risk Reduction</h4>
              <ul>
                <li>Take medication as prescribed</li>
                <li>Get adequate sleep</li>
                <li>Avoid alcohol and drugs</li>
                <li>Regular medical follow-ups</li>
              </ul>
            </div>
          </div>
          
          <p class="sudep-note">
            It's important for people with epilepsy and their caregivers to discuss SUDEP 
            with their healthcare provider.
          </p>
        </div>
      </div>
    </section>

    <!-- Drug-Resistant Epilepsy Section -->
    <section class="section section-alt">
      <div class="container container-xl">
        <div class="resistant-content">
          <div class="resistant-image">
            <img src="@/assets/AydinVNS.jpg" alt="VNS Device" class="vns-image" />
          </div>
          <div class="resistant-text">
            <div class="section-header">
              <h2>Drug-Resistant Epilepsy</h2>
            </div>
            <p class="section-description">
              About 30% of people with epilepsy have drug-resistant epilepsy, meaning their 
              seizures don't respond adequately to medication.
            </p>
            
            <div class="resistant-info">
              <h4>Alternative Treatments</h4>
              <ul>
                <li>Epilepsy surgery</li>
                <li>Vagus nerve stimulation (VNS)</li>
                <li>Ketogenic diet therapy</li>
                <li>Responsive neurostimulation (RNS)</li>
                <li>Deep brain stimulation (DBS)</li>
              </ul>
            </div>
            
            <p class="resistant-note">
              Working closely with an epilepsy specialist is crucial for finding the right 
              treatment approach for drug-resistant epilepsy.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* Key Facts Section */
.facts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--space-6);
}

.fact-card {
  padding: var(--space-6);
}

.fact-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  border-radius: var(--radius-md);
  background-color: var(--color-primary-50);
  margin-bottom: var(--space-4);
}

.fact-title {
  font-size: var(--text-lg);
  margin-bottom: var(--space-3);
  color: var(--color-primary-800);
}

.fact-description {
  color: var(--color-neutral-600);
  line-height: var(--leading-relaxed);
  margin: 0;
}

/* Types of Epilepsy Section */
.types-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-8);
  align-items: flex-start;
}

.types-text,
.seizure-types {
  padding: var(--space-8);
}

.panel-title {
  font-size: var(--text-2xl);
  color: var(--color-primary-800);
  margin-bottom: var(--space-3);
  padding-bottom: var(--space-3);
  border-bottom: 3px solid var(--color-primary-600);
}

.section-description {
  font-size: var(--text-base);
  color: var(--color-neutral-600);
  margin-bottom: var(--space-6);
  line-height: var(--leading-relaxed);
}

.types-list {
  display: flex;
  flex-direction: column;
}

.type-item {
  padding: var(--space-4) 0;
  border-bottom: 1px solid var(--color-neutral-200);
}

.type-item:last-child {
  border-bottom: none;
  padding-bottom: 0;
}

.type-item h4 {
  font-family: var(--font-family-primary);
  font-size: var(--text-base);
  font-weight: var(--font-bold);
  color: var(--color-primary-800);
  margin-bottom: var(--space-1);
}

.type-item p {
  color: var(--color-neutral-600);
  font-size: var(--text-sm);
  margin: 0;
}

/* SUDEP Section */
.sudep-content {
  padding: var(--space-8);
}

.sudep-subtitle {
  font-size: var(--text-base);
  color: var(--color-neutral-600);
  margin-bottom: var(--space-4);
  font-style: italic;
}

.sudep-description {
  font-size: var(--text-lg);
  color: var(--color-neutral-800);
  margin-bottom: var(--space-6);
  line-height: var(--leading-relaxed);
}

.sudep-info {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-8);
  margin-bottom: var(--space-6);
}

.info-column h4 {
  font-family: var(--font-family-primary);
  font-size: var(--text-base);
  font-weight: var(--font-bold);
  color: var(--color-neutral-900);
  margin-bottom: var(--space-3);
}

.info-column ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.info-column li {
  color: var(--color-neutral-700);
  margin-bottom: var(--space-2);
  padding-left: var(--space-5);
  position: relative;
}

.info-column li::before {
  content: "–";
  position: absolute;
  left: 0;
  color: var(--color-error);
  font-weight: var(--font-bold);
}

.sudep-note {
  font-size: var(--text-sm);
  color: var(--color-neutral-600);
  font-style: italic;
  margin: 0;
}

/* Drug-Resistant Section */
.resistant-content {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: var(--space-12);
  align-items: start;
}

.vns-image {
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: var(--radius-lg);
  border: 1px solid var(--color-border);
}

.resistant-info {
  margin: var(--space-4) 0;
}

.resistant-info h4 {
  font-family: var(--font-family-primary);
  font-size: var(--text-base);
  font-weight: var(--font-bold);
  color: var(--color-primary-800);
  margin-bottom: var(--space-3);
}

.resistant-info ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.resistant-info li {
  color: var(--color-neutral-700);
  margin-bottom: var(--space-2);
  padding-left: var(--space-5);
  position: relative;
}

.resistant-info li::before {
  content: "✓";
  position: absolute;
  left: 0;
  color: var(--color-primary-600);
  font-weight: var(--font-bold);
}

.resistant-note {
  font-size: var(--text-base);
  color: var(--color-neutral-600);
  font-style: italic;
  line-height: var(--leading-relaxed);
}

/* Responsive Design */
@media (max-width: 768px) {
  .facts-grid {
    grid-template-columns: 1fr;
    gap: var(--space-4);
  }

  .types-content,
  .resistant-content {
    grid-template-columns: 1fr;
    gap: var(--space-6);
  }

  .types-text,
  .seizure-types {
    padding: var(--space-6);
  }

  .sudep-info {
    grid-template-columns: 1fr;
    gap: var(--space-6);
  }

  .vns-image {
    height: 250px;
  }

  .sudep-content {
    padding: var(--space-6);
  }
}

@media (max-width: 480px) {
  .fact-card {
    padding: var(--space-4);
  }

  .types-text,
  .seizure-types {
    padding: var(--space-4);
  }
}
</style>