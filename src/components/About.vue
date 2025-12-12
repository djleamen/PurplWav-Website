<template>
  <div class="about">
    <!-- About Hero Section -->
    <section class="about-hero">
      <div class="container container-xl">
        <div class="hero-content">
          <h1 class="hero-title">About <span class="text-primary">PurplWav</span></h1>
          <p class="hero-description">
            PurplWav is dedicated to raising awareness about epilepsy and providing support to those affected by it.
            Started in 2016 by mother and daughter Melike and Dilara as a way of supporting son and younger brother Aydin,
            who has drug-resistant epilepsy, PurplWav has grown into a much larger campaign that works with local nonprofits
            to provide information and resources to those affected by the disease.
          </p>
        </div>
      </div>
    </section>

    <!-- Videos Section -->
    <section class="videos-section">
      <div class="container container-xl">
        <h2 class="section-title text-center mb-12">Our Story in Video</h2>
        <div class="videos-grid">
          <div class="video-card card">
            <div class="video-wrapper">
              <iframe 
                src="https://www.youtube.com/embed/lsITWSdajf8?si=LuFMenVeOXdkHXvq" 
                title="PurplWav Story - Part 1" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen>
              </iframe>
            </div>
          </div>
          <div class="video-card card">
            <div class="video-wrapper">
              <iframe 
                src="https://www.youtube.com/embed/IPIBJeWye3Y?si=3y9MKuqav2bu9wbP" 
                title="PurplWav Story - Part 2" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen>
              </iframe>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section class="team-section">
      <div class="container container-xl">
        <h2 class="section-title text-center mb-12">Meet the Team</h2>
        <div class="team-grid">
          <div class="team-member card">
            <div class="member-image">
              <img src="@/assets/Melike.jpg" alt="Melike Ceylan-Leamen" class="member-photo" />
            </div>
            <div class="member-info">
              <h3 class="member-name">Melike Ceylan-Leamen</h3>
              <p class="member-role">Co-Founder</p>
              <p class="member-description">
                Melike is the co-founder of PurplWav. She has been actively involved in raising awareness about
                epilepsy and providing support to those affected by it. As a mother of a child with epilepsy,
                she brings personal experience and passion to the cause.
              </p>
            </div>
          </div>

          <div class="team-member card">
            <div class="member-image">
              <img src="@/assets/Dilara.jpg" alt="Dilara Leamen" class="member-photo" />
            </div>
            <div class="member-info">
              <h3 class="member-name">Dilara Leamen</h3>
              <p class="member-role">Co-Founder</p>
              <p class="member-description">
                Dilara is the co-founder of PurplWav. She works closely with local nonprofits to provide information and
                resources to those affected by epilepsy. Her dedication to the cause stems from supporting her brother
                and helping other families navigate similar challenges.
              </p>
            </div>
          </div>

          <div class="team-member card">
            <div class="member-image">
              <img src="@/assets/Aydin.jpg" alt="Aydin Leamen" class="member-photo" />
            </div>
            <div class="member-info">
              <h3 class="member-name">Aydin Leamen</h3>
              <p class="member-role">Ambassador & Inspiration</p>
              <p class="member-description">
                Aydin is the inspiration behind PurplWav. Despite living with drug-resistant epilepsy, he continues to inspire
                others with his resilience and strength. His journey has been the driving force behind the campaign's mission.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Family Photos Section -->
    <section class="family-photos">
      <div class="container container-xl">
        <h2 class="section-title text-center mb-12">Our Journey Together</h2>
        <div class="photos-grid">
          <div class="photo-card">
            <img src="@/assets/CNTower.jpg" alt="Family at CN Tower" class="family-photo" />
            <p class="photo-caption">Creating memories together</p>
          </div>
          <div class="photo-card">
            <img src="@/assets/Recording.jpg" alt="Recording session" class="family-photo" />
            <p class="photo-caption">Sharing our story</p>
          </div>
          <div class="photo-card">
            <img src="@/assets/AydinActionDay.jpg" alt="Family portrait" class="family-photo" />
            <p class="photo-caption">The heart of PurplWav</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* About Hero Section */
.about-hero {
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

/* Videos Section */
.videos-section {
  padding: var(--space-20) 0;
  background-color: var(--color-surface-variant);
}

.section-title {
  font-size: var(--text-4xl);
  color: var(--color-neutral-900);
}

.videos-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: var(--space-8);
}

.video-card {
  padding: var(--space-6);
}

.video-wrapper {
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-md);
}

.video-wrapper iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

/* Team Section */
.team-section {
  padding: var(--space-20) 0;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--space-6);
  max-width: 1200px;
  margin: 0 auto;
}

.team-member {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-4);
  padding: var(--space-6);
  transition: transform var(--transition-normal);
  text-align: center;
}

.team-member:hover {
  transform: translateY(-2px);
}

.member-image {
  flex-shrink: 0;
}

.member-photo {
  width: 100px;
  height: 100px;
  border-radius: var(--radius-full);
  object-fit: cover;
  box-shadow: var(--shadow-md);
}

.member-info {
  flex: 1;
  text-align: center;
}

.member-name {
  font-size: var(--text-2xl);
  margin-bottom: var(--space-2);
  color: var(--color-primary-700);
}

.member-role {
  font-size: var(--text-sm);
  font-weight: var(--font-semibold);
  color: var(--color-primary-500);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: var(--space-4);
}

.member-description {
  color: var(--color-neutral-600);
  line-height: var(--leading-relaxed);
}

/* Family Photos Section */
.family-photos {
  padding: var(--space-20) 0;
  background-color: var(--color-surface-variant);
}

.photos-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--space-8);
}

.photo-card {
  text-align: center;
}

.family-photo {
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-md);
  margin-bottom: var(--space-4);
  transition: transform var(--transition-normal);
}

.family-photo:hover {
  transform: scale(1.02);
}

.photo-caption {
  font-size: var(--text-lg);
  font-weight: var(--font-medium);
  color: var(--color-neutral-700);
}

/* Responsive Design */
@media (max-width: 768px) {
  .about-hero {
    padding: var(--space-16) 0 var(--space-12);
  }

  .hero-title {
    font-size: var(--text-4xl);
  }

  .hero-description {
    font-size: var(--text-lg);
  }

  .videos-grid {
    grid-template-columns: 1fr;
    gap: var(--space-6);
  }

  .video-card {
    padding: var(--space-4);
  }

  .team-member {
    flex-direction: column;
    text-align: center;
    gap: var(--space-4);
    padding: var(--space-4);
  }

  .member-info {
    text-align: center;
  }

  .member-photo {
    width: 80px;
    height: 80px;
  }

  .photos-grid {
    grid-template-columns: 1fr;
    gap: var(--space-6);
  }
}

@media (max-width: 480px) {
  .videos-grid {
    grid-template-columns: 1fr;
  }
  
  .video-wrapper {
    padding-bottom: 75%; /* Adjust aspect ratio for mobile */
  }
}
</style>