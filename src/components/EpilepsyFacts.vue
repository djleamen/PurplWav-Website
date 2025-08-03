<template>
  <div class="epilepsy-facts">
    <!-- Hero Section -->
    <section class="facts-hero">
      <div class="container container-xl">
        <div class="hero-content">
          <h1 class="hero-title">Understanding <span class="text-primary">Epilepsy</span></h1>
          <p class="hero-description">
            Learn about this neurological condition that affects millions of people worldwide. 
            Knowledge leads to understanding, and understanding leads to support.
          </p>
        </div>
      </div>
    </section>

    <!-- Key Facts Section -->
    <section class="key-facts">
      <div class="container container-xl">
        <h2 class="section-title text-center mb-12">Key Facts About Epilepsy</h2>
        <div class="facts-grid">
          <div class="fact-card card">
            <div class="fact-icon">
              <v-icon size="48" color="primary">mdi-brain</v-icon>
            </div>
            <h3 class="fact-title">Neurological Disorder</h3>
            <p class="fact-description">
              Epilepsy is a neurological disorder that affects the brain, causing recurrent seizures.
            </p>
          </div>
          
          <div class="fact-card card">
            <div class="fact-icon">
              <v-icon size="48" color="warning">mdi-lightning-bolt</v-icon>
            </div>
            <h3 class="fact-title">Various Triggers</h3>
            <p class="fact-description">
              Seizures can be triggered by stress, lack of sleep, flashing lights, or other factors.
            </p>
          </div>
          
          <div class="fact-card card">
            <div class="fact-icon">
              <v-icon size="48" color="success">mdi-pill</v-icon>
            </div>
            <h3 class="fact-title">Manageable Condition</h3>
            <p class="fact-description">
              While there's no cure, epilepsy can be managed with medication and other treatments.
            </p>
          </div>
          
          <div class="fact-card card">
            <div class="fact-icon">
              <v-icon size="48" color="secondary">mdi-star</v-icon>
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
    <section class="epilepsy-types">
      <div class="container container-xl">
        <div class="types-content">
          <div class="types-text">
            <h2 class="section-title">Types of Epilepsy</h2>
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
          <div class="seizure-types">
            <h2 class="section-title">Types of Seizures</h2>
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
    <section class="sudep-section">
      <div class="container container-xl">
        <div class="sudep-content card card-elevated">
          <h2 class="sudep-title">Understanding SUDEP</h2>
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
    <section class="drug-resistant">
      <div class="container container-xl">
        <div class="resistant-content">
          <div class="resistant-image">
            <img src="@/assets/AydinVNS.jpg" alt="VNS Device" class="vns-image" />
          </div>
          <div class="resistant-text">
            <h2 class="section-title">Drug-Resistant Epilepsy</h2>
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
/* Facts Hero Section */
.facts-hero {
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

/* Key Facts Section */
.key-facts {
  padding: var(--space-20) 0;
  background-color: var(--color-surface-variant);
}

.section-title {
  font-size: var(--text-4xl);
  color: var(--color-neutral-900);
}

.facts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--space-6);
}

.fact-card {
  text-align: center;
  padding: var(--space-8);
  transition: transform var(--transition-normal);
}

.fact-card:hover {
  transform: translateY(-4px);
}

.fact-icon {
  font-size: 3rem;
  margin-bottom: var(--space-4);
  display: flex;
  justify-content: center;
  align-items: center;
}

.fact-title {
  font-size: var(--text-xl);
  margin-bottom: var(--space-4);
  color: var(--color-primary-700);
}

.fact-description {
  color: var(--color-neutral-600);
  line-height: var(--leading-relaxed);
}

/* Types of Epilepsy Section */
.epilepsy-types {
  padding: var(--space-20) 0;
  background-color: var(--color-neutral-50);
}

.types-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-16);
  align-items: flex-start;
}

.types-text {
  background-color: white;
  padding: var(--space-8);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-md);
}

.types-text .section-title {
  color: var(--color-primary-700);
  margin-bottom: var(--space-4);
}

.section-description {
  font-size: var(--text-lg);
  color: var(--color-neutral-600);
  margin-bottom: var(--space-8);
  line-height: var(--leading-relaxed);
}

.types-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.type-item {
  padding: var(--space-6);
  background-color: white;
  border-radius: var(--radius-xl);
  border-left: 4px solid var(--color-primary-500);
  box-shadow: var(--shadow-sm);
  transition: all var(--transition-normal);
}

.type-item:hover {
  transform: translateX(4px);
  box-shadow: var(--shadow-md);
  border-left-width: 6px;
}

.type-item h4 {
  font-size: var(--text-lg);
  color: var(--color-primary-700);
  margin-bottom: var(--space-2);
}

.type-item p {
  color: var(--color-neutral-600);
  font-size: var(--text-sm);
  margin: 0;
}

.seizure-types {
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: var(--space-8);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-md);
}

.seizure-types .section-title {
  margin-bottom: var(--space-4);
  color: var(--color-primary-700);
}

.seizure-types .section-description {
  font-size: var(--text-lg);
  color: var(--color-neutral-600);
  margin-bottom: var(--space-8);
  line-height: var(--leading-relaxed);
}

/* SUDEP Section */
.sudep-section {
  padding: var(--space-20) 0;
  background-color: var(--color-surface-variant);
}

.sudep-content {
  max-width: 900px;
  margin: 0 auto;
  padding: var(--space-12);
  background: linear-gradient(135deg, var(--color-error) 0%, #dc2626 100%);
  color: white;
}

.sudep-title {
  font-size: var(--text-4xl);
  color: white;
  margin-bottom: var(--space-2);
}

.sudep-subtitle {
  font-size: var(--text-lg);
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: var(--space-6);
  font-style: italic;
}

.sudep-description {
  font-size: var(--text-lg);
  color: rgba(255, 255, 255, 0.95);
  margin-bottom: var(--space-8);
  line-height: var(--leading-relaxed);
}

.sudep-info {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-8);
  margin-bottom: var(--space-8);
}

.info-column h4 {
  font-size: var(--text-xl);
  color: white;
  margin-bottom: var(--space-4);
}

.info-column ul {
  list-style: none;
  padding: 0;
}

.info-column li {
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: var(--space-3);
  padding-left: var(--space-6);
  position: relative;
}

.info-column li::before {
  content: "→";
  position: absolute;
  left: 0;
  color: rgba(255, 255, 255, 0.7);
}

.sudep-note {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.95);
  font-style: italic;
  text-align: center;
  margin: 0;
}

/* Drug-Resistant Section */
.drug-resistant {
  padding: var(--space-20) 0;
}

.resistant-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-12);
  align-items: center;
}

.vns-image {
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-lg);
}

.resistant-info {
  margin: var(--space-6) 0;
}

.resistant-info h4 {
  font-size: var(--text-xl);
  color: var(--color-primary-700);
  margin-bottom: var(--space-4);
}

.resistant-info ul {
  list-style: none;
  padding: 0;
}

.resistant-info li {
  color: var(--color-neutral-600);
  margin-bottom: var(--space-3);
  padding-left: var(--space-6);
  position: relative;
}

.resistant-info li::before {
  content: "✓";
  position: absolute;
  left: 0;
  color: var(--color-primary-500);
  font-weight: var(--font-bold);
}

.resistant-note {
  font-size: var(--text-lg);
  color: var(--color-neutral-600);
  font-style: italic;
  line-height: var(--leading-relaxed);
}

/* Responsive Design */
@media (max-width: 768px) {
  .facts-hero {
    padding: var(--space-16) 0 var(--space-12);
  }

  .hero-title {
    font-size: var(--text-4xl);
  }

  .hero-description {
    font-size: var(--text-lg);
  }

  .facts-grid {
    grid-template-columns: 1fr;
    gap: var(--space-4);
  }

  .types-content,
  .resistant-content {
    grid-template-columns: 1fr;
    gap: var(--space-12);
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
    padding: var(--space-8) var(--space-6);
  }
}

@media (max-width: 480px) {
  .fact-card {
    padding: var(--space-6) var(--space-4);
  }
  
  .types-list {
    gap: var(--space-3);
  }
  
  .type-item {
    padding: var(--space-4);
  }

  .types-text,
  .seizure-types {
    padding: var(--space-4);
  }
}
</style>