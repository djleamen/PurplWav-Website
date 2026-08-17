<template>
  <div class="about">
    <!-- Page Banner -->
    <section class="page-banner">
      <div class="container container-xl">
        <span class="page-banner-eyebrow">About Us</span>
        <h1>About PurplWav</h1>
        <p class="page-banner-lead">
          PurplWav is dedicated to raising awareness about epilepsy and providing support to those affected by it.
          Started in 2016 by mother and daughter Melike and Dilara as a way of supporting son and younger brother Aydin,
          who has drug-resistant epilepsy, PurplWav has grown into a much larger campaign that works with local nonprofits
          to provide information and resources to those affected by the condition.
        </p>
      </div>
    </section>

    <!-- Videos Section -->
    <section class="section">
      <div class="container container-xl">
        <div class="section-header">
          <h2>Our Story in Video</h2>
        </div>
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
    <section class="section section-alt">
      <div class="container container-xl">
        <div class="section-header">
          <h2>Meet the Team</h2>
        </div>
        <div class="team-grid">
          <article class="team-member card">
            <img src="@/assets/Melike.jpg" alt="Melike Ceylan-Leamen" class="member-photo" />
            <div class="member-info">
              <h3 class="member-name">Melike Ceylan-Leamen</h3>
              <p class="member-role">Co-Founder</p>
              <p class="member-description">
                Melike is the co-founder of PurplWav. She has been actively involved in raising awareness about
                epilepsy and providing support to those affected by it. As a mother of a child with epilepsy,
                she brings personal experience and passion to the cause.
              </p>
            </div>
          </article>

          <article class="team-member card">
            <img src="@/assets/Dilara.jpg" alt="Dilara Leamen" class="member-photo" />
            <div class="member-info">
              <h3 class="member-name">Dilara Leamen</h3>
              <p class="member-role">Co-Founder</p>
              <p class="member-description">
                Dilara is the co-founder of PurplWav. She works closely with local nonprofits to provide information and
                resources to those affected by epilepsy. Her dedication to the cause stems from supporting her brother
                and helping other families navigate similar challenges.
              </p>
            </div>
          </article>

          <article class="team-member card">
            <img src="@/assets/Aydin.jpg" alt="Aydin Leamen" class="member-photo" />
            <div class="member-info">
              <h3 class="member-name">Aydin Leamen</h3>
              <p class="member-role">Ambassador &amp; Inspiration</p>
              <p class="member-description">
                Aydin is the inspiration behind PurplWav. Despite living with drug-resistant epilepsy, he continues to inspire
                others with his resilience and strength. His journey has been the driving force behind the campaign's mission.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- Family Photos Section -->
    <section class="section">
      <div class="container container-xl">
        <div class="section-header">
          <h2>Our Journey Together</h2>
        </div>
        <div class="photos-grid">
          <figure class="photo-card">
            <img src="@/assets/CNTower.jpg" alt="Family at CN Tower" class="family-photo" />
            <figcaption class="photo-caption">Creating memories together</figcaption>
          </figure>
          <figure class="photo-card">
            <img src="@/assets/Recording.jpg" alt="Recording session" class="family-photo" />
            <figcaption class="photo-caption">Sharing our story</figcaption>
          </figure>
          <figure class="photo-card">
            <img src="@/assets/AydinActionDay.jpg" alt="Family portrait" class="family-photo" />
            <figcaption class="photo-caption">The heart of PurplWav</figcaption>
          </figure>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* Videos Section */
.videos-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: var(--space-6);
}

.video-card {
  padding: var(--space-4);
}

.video-wrapper {
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  border-radius: var(--radius-md);
  overflow: hidden;
}

.video-wrapper iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

/* Team Section */
.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--space-6);
}

.team-member {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-4);
  padding: var(--space-8) var(--space-6);
  text-align: center;
}

.member-photo {
  width: 120px;
  height: 120px;
  border-radius: var(--radius-full);
  object-fit: cover;
  border: 3px solid var(--color-primary-100);
}

.member-name {
  font-size: var(--text-xl);
  margin-bottom: var(--space-1);
  color: var(--color-primary-800);
}

.member-role {
  font-size: var(--text-sm);
  font-weight: var(--font-semibold);
  color: var(--color-primary-600);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: var(--space-4);
}

.member-description {
  color: var(--color-neutral-600);
  line-height: var(--leading-relaxed);
  margin: 0;
}

/* Family Photos Section */
.photos-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--space-6);
}

.photo-card {
  margin: 0;
}

.family-photo {
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: var(--radius-lg);
  border: 1px solid var(--color-border);
  margin-bottom: var(--space-3);
}

.photo-caption {
  font-size: var(--text-base);
  color: var(--color-neutral-600);
  text-align: center;
}

/* Responsive Design */
@media (max-width: 768px) {
  .videos-grid {
    grid-template-columns: 1fr;
  }

  .team-member {
    padding: var(--space-6) var(--space-4);
  }

  .member-photo {
    width: 96px;
    height: 96px;
  }

  .photos-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .video-wrapper {
    padding-bottom: 75%; /* Adjust aspect ratio for mobile */
  }
}
</style>