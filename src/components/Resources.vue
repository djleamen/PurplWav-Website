<template>
  <div class="resources">
    <!-- Resources Hero Section -->
    <section class="resources-hero">
      <div class="container container-xl">
        <div class="hero-content">
          <h1 class="hero-title">Local <span class="text-primary">Resources</span></h1>
          <p class="hero-description">
            Find support services, organizations, and resources available in Durham Region 
            and across Ontario for those affected by epilepsy.
          </p>
        </div>
      </div>
    </section>

    <!-- Featured Resources -->
    <section class="featured-resources">
      <div class="container container-xl">
        <h2 class="section-title text-center mb-12">Key Organizations</h2>
        <div class="resources-grid">
          <div class="resource-card card card-elevated">
            <div class="resource-header">
              <h3 class="resource-title">Epilepsy Canada</h3>
              <div class="resource-badge">National</div>
            </div>
            <p class="resource-description">
              The national organization providing comprehensive support, education, and advocacy 
              for people with epilepsy across Canada.
            </p>
            <div class="resource-services">
              <span class="service-tag">Education</span>
              <span class="service-tag">Advocacy</span>
              <span class="service-tag">Support</span>
            </div>
            <a href="https://www.epilepsy.ca/" target="_blank" rel="noopener noreferrer" class="resource-link">
              Visit Website →
            </a>
          </div>

          <div class="resource-card card card-elevated">
            <div class="resource-header">
              <h3 class="resource-title">Epilepsy Ontario</h3>
              <div class="resource-badge provincial">Provincial</div>
            </div>
            <p class="resource-description">
              Provincial organization offering programs, services, and community support 
              throughout Ontario for individuals and families.
            </p>
            <div class="resource-services">
              <span class="service-tag">Programs</span>
              <span class="service-tag">Community</span>
              <span class="service-tag">Resources</span>
            </div>
            <a href="https://epilepsyontario.org/" target="_blank" rel="noopener noreferrer" class="resource-link">
              Visit Website →
            </a>
          </div>

          <div class="resource-card card card-elevated">
            <div class="resource-header">
              <h3 class="resource-title">Epilepsy Durham Region</h3>
              <div class="resource-badge local">Local</div>
            </div>
            <p class="resource-description">
              Local support specifically for Durham Region residents, offering personalized 
              assistance and community connections.
            </p>
            <div class="resource-services">
              <span class="service-tag">Local Support</span>
              <span class="service-tag">Community</span>
              <span class="service-tag">Assistance</span>
            </div>
            <a href="https://epilepsydurham.com/" target="_blank" rel="noopener noreferrer" class="resource-link">
              Visit Website →
            </a>
          </div>

          <div class="resource-card card card-elevated">
            <div class="resource-header">
              <h3 class="resource-title">Epilepsy Toronto</h3>
              <div class="resource-badge regional">Regional</div>
            </div>
            <p class="resource-description">
              Serving the Greater Toronto Area with specialized programs, support groups, 
              and educational resources for the epilepsy community.
            </p>
            <div class="resource-services">
              <span class="service-tag">Support Groups</span>
              <span class="service-tag">Education</span>
              <span class="service-tag">GTA Service</span>
            </div>
            <a href="https://www.epilepsytoronto.org/" target="_blank" rel="noopener noreferrer" class="resource-link">
              Visit Website →
            </a>
          </div>

          <div class="resource-card card card-elevated">
            <div class="resource-header">
              <h3 class="resource-title">Canadian League Against Epilepsy</h3>
              <div class="resource-badge">National</div>
            </div>
            <p class="resource-description">
              Professional organization of healthcare providers dedicated to improving 
              epilepsy care through research, education, and advocacy.
            </p>
            <div class="resource-services">
              <span class="service-tag">Research</span>
              <span class="service-tag">Medical</span>
              <span class="service-tag">Professional</span>
            </div>
            <a href="https://claegroup.org" target="_blank" rel="noopener noreferrer" class="resource-link">
              Visit Website →
            </a>
          </div>

          <div class="resource-card card card-elevated">
            <div class="resource-header">
              <h3 class="resource-title">Purple Day</h3>
              <div class="resource-badge global">Global</div>
            </div>
            <p class="resource-description">
              Annual awareness campaign dedicated to increasing understanding 
              and reducing stigma around epilepsy through Purple Day events.
            </p>
            <div class="resource-services">
              <span class="service-tag">Awareness</span>
              <span class="service-tag">Events</span>
              <span class="service-tag">Stigma Reduction</span>
            </div>
            <a href="https://www.purpleday.org/" target="_blank" rel="noopener noreferrer" class="resource-link">
              Visit Website →
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Additional Resources -->
    <section class="additional-resources">
      <div class="container container-xl">
        <h2 class="section-title text-center mb-12">Additional Support</h2>
        <div class="additional-grid">
          <div class="additional-category">
            <h3 class="category-title">Medical Resources</h3>
            <div class="category-content">
              <div class="resource-item">
                <div class="icon-placeholder">
                  <v-icon size="32" color="other">mdi-hospital-building</v-icon>
                </div>
                <div>
                  <h4>Children's Hospital of Eastern Ontario</h4>
                  <p>Educational support and specialized programs for students</p>
                </div>
              </div>
              <div class="resource-item">
                <div class="icon-placeholder">
                  <v-icon size="32" color="other">mdi-brain</v-icon>
                </div>
                <div>
                  <h4>Local Neurologists</h4>
                  <p>Find epilepsy specialists in Durham Region</p>
                </div>
              </div>
            </div>
          </div>

          <div class="additional-category">
            <h3 class="category-title">Educational Support</h3>
            <div class="category-content">
              <div class="resource-item">
                <div class="icon-placeholder">
                  <v-icon size="32" color="other">mdi-school</v-icon>
                </div>
                <div>
                  <h4>School Support Programs</h4>
                  <p>IEP development and classroom accommodations</p>
                </div>
              </div>
              <div class="resource-item">
                <div class="icon-placeholder">
                  <v-icon size="32" color="other">mdi-book</v-icon>
                </div>
                <div>
                  <h4>Teacher Training</h4>
                  <p>Epilepsy awareness programs for educators</p>
                </div>
              </div>
            </div>
          </div>

          <div class="additional-category">
            <h3 class="category-title">Community Support</h3>
            <div class="category-content">
              <div class="resource-item">
                <div class="icon-placeholder">
                  <v-icon size="32" color="other">mdi-account-group</v-icon>
                </div>
                <div>
                  <h4>Support Groups</h4>
                  <p>Connect with other families and individuals</p>
                </div>
              </div>
              <div class="resource-item">
                <div class="icon-placeholder">
                  <v-icon size="32" color="other">mdi-heart</v-icon>
                </div>
                <div>
                  <h4>Advocacy Programs</h4>
                  <p>Get involved in epilepsy awareness initiatives</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Emergency Information -->
    <section class="emergency-info">
      <div class="container container-lg">
        <div class="emergency-content card card-elevated">
          <h2 class="emergency-title">Emergency Resources</h2>
          <div class="emergency-grid">
            <div class="emergency-item">
              <div class="emergency-icon">
                <v-icon size="48" color="white">mdi-ambulance</v-icon>
              </div>
              <h4>Emergency Services</h4>
              <p class="emergency-number">911</p>
              <p>Call immediately if seizure lasts more than 5 minutes</p>
            </div>
            <div class="emergency-item">
              <div class="emergency-icon">
                <v-icon size="48" color="white">mdi-phone</v-icon>
              </div>
              <h4>Telehealth Ontario</h4>
              <p class="emergency-number">1-866-797-0000</p>
              <p>24/7 health advice from registered nurses</p>
            </div>
            <div class="emergency-item">
              <div class="emergency-icon">
                <v-icon size="48" color="white">mdi-hospital-building</v-icon>
              </div>
              <h4>Local Hospital</h4>
              <p class="emergency-number">Lakeridge Health</p>
              <p>Emergency department for urgent epilepsy-related care</p>
            </div>
            <div class="emergency-item">
              <div class="emergency-icon">
                <v-icon size="48" color="white">mdi-medical-bag</v-icon>
              </div>
              <h4>Poison Control</h4>
              <p class="emergency-number">1-800-268-9017</p>
              <p>24/7 assistance for medication overdose or interactions</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* Resources Hero Section */
.resources-hero {
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

/* Featured Resources Section */
.featured-resources {
  padding: var(--space-20) 0;
  background-color: var(--color-surface-variant);
}

.section-title {
  font-size: var(--text-4xl);
  color: var(--color-neutral-900);
}

.resources-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: var(--space-6);
}

.resource-card {
  padding: var(--space-8);
  transition: transform var(--transition-normal);
  position: relative;
  overflow: hidden;
}

.resource-card:hover {
  transform: translateY(-4px);
}

.resource-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: var(--space-4);
}

.resource-title {
  font-size: var(--text-2xl);
  color: var(--color-primary-700);
  margin: 0;
  flex: 1;
}

.resource-badge {
  background-color: var(--color-primary-500);
  color: white;
  padding: var(--space-1) var(--space-3);
  border-radius: var(--radius-full);
  font-size: var(--text-xs);
  font-weight: var(--font-semibold);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.resource-badge.provincial {
  background-color: var(--color-info);
}

.resource-badge.local {
  background-color: var(--color-success);
}

.resource-badge.regional {
  background-color: var(--color-warning);
}

.resource-badge.global {
  background-color: var(--color-other);
}

.resource-description {
  color: var(--color-neutral-600);
  line-height: var(--leading-relaxed);
  margin-bottom: var(--space-6);
}

.resource-services {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  margin-bottom: var(--space-6);
}

.service-tag {
  background-color: var(--color-primary-100);
  color: var(--color-primary-700);
  padding: var(--space-1) var(--space-3);
  border-radius: var(--radius-md);
  font-size: var(--text-sm);
  font-weight: var(--font-medium);
}

.resource-link {
  display: inline-flex;
  align-items: center;
  color: var(--color-primary-500);
  text-decoration: none;
  font-weight: var(--font-semibold);
  font-size: var(--text-lg);
  transition: color var(--transition-fast);
}

.resource-link:hover {
  color: var(--color-primary-700);
}

/* Additional Resources Section */
.additional-resources {
  padding: var(--space-20) 0;
}

.additional-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--space-8);
}

.additional-category {
  background-color: var(--color-surface);
  border-radius: var(--radius-xl);
  padding: var(--space-8);
  box-shadow: var(--shadow-md);
}

.category-title {
  font-size: var(--text-2xl);
  color: var(--color-primary-700);
  margin-bottom: var(--space-6);
  text-align: center;
}

.category-content {
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
}

.resource-item {
  display: flex;
  align-items: flex-start;
  gap: var(--space-4);
}

.resource-icon {
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
}

.icon-placeholder {
  width: 60px;
  height: 60px;
  background-color: var(--color-primary-100);
  border-radius: var(--radius-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--text-2xl);
  flex-shrink: 0;
}

.resource-item h4 {
  font-size: var(--text-lg);
  color: var(--color-neutral-800);
  margin-bottom: var(--space-2);
}

.resource-item p {
  color: var(--color-neutral-600);
  font-size: var(--text-sm);
  line-height: var(--leading-relaxed);
  margin: 0;
}

/* Emergency Information Section */
.emergency-info {
  padding: var(--space-20) 0;
  background-color: var(--color-surface-variant);
}

.emergency-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: var(--space-12);
  background: linear-gradient(135deg, var(--color-error) 0%, #dc2626 100%);
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
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-8);
}

.emergency-item {
  text-align: center;
  background-color: rgba(255, 255, 255, 0.1);
  padding: var(--space-6);
  border-radius: var(--radius-lg);
}

.emergency-icon {
  font-size: 3rem;
  margin-bottom: var(--space-4);
  display: flex;
  justify-content: center;
  align-items: center;
}

.emergency-item h4 {
  font-size: var(--text-xl);
  color: white;
  margin-bottom: var(--space-3);
}

.emergency-number {
  font-size: var(--text-2xl);
  font-weight: var(--font-bold);
  color: white;
  margin-bottom: var(--space-3);
}

.emergency-item p:last-child {
  color: rgba(255, 255, 255, 0.9);
  font-size: var(--text-sm);
  line-height: var(--leading-relaxed);
  margin: 0;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .emergency-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-5);
  }
}

@media (max-width: 768px) {
  .resources-hero {
    padding: var(--space-16) 0 var(--space-12);
  }

  .hero-title {
    font-size: var(--text-4xl);
  }

  .hero-description {
    font-size: var(--text-lg);
  }

  .resources-grid {
    grid-template-columns: 1fr;
    gap: var(--space-4);
  }

  .resource-header {
    flex-direction: column;
    gap: var(--space-3);
    align-items: flex-start;
  }

  .additional-grid {
    grid-template-columns: 1fr;
    gap: var(--space-6);
  }

  .emergency-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-4);
  }

  .emergency-content {
    padding: var(--space-8) var(--space-6);
  }
}

@media (max-width: 480px) {
  .resource-card {
    padding: var(--space-6) var(--space-4);
  }

  .additional-category {
    padding: var(--space-6) var(--space-4);
  }

  .resource-item {
    flex-direction: column;
    text-align: center;
    gap: var(--space-3);
  }

  .resource-icon,
  .icon-placeholder {
    width: 50px;
    height: 50px;
    align-self: center;
  }
}
</style>