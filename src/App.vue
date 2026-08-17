<script setup lang="ts">
import { RouterView, RouterLink } from 'vue-router';
import { ref, onMounted, onUnmounted } from 'vue';

const isMenuOpen = ref(false);
const isScrolled = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const handleScroll = () => {
  isScrolled.value = window.scrollY > 10;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <div class="utility-bar">
    <div class="utility-container">
      <span class="utility-tagline">A family-run epilepsy awareness, outreach &amp; research campaign</span>
      <div class="utility-social">
        <a href="https://www.instagram.com/purplwav/" target="_blank" rel="noopener noreferrer" title="Instagram" aria-label="Follow us on Instagram">
          <v-icon size="16">mdi-instagram</v-icon>
        </a>
        <a href="https://x.com/Purpl_Wav" target="_blank" rel="noopener noreferrer" title="Twitter/X" aria-label="Follow us on Twitter/X">
          <v-icon size="16">mdi-twitter</v-icon>
        </a>
        <a href="https://www.youtube.com/@purplwav5518/featured" target="_blank" rel="noopener noreferrer" title="YouTube" aria-label="Subscribe to our YouTube">
          <v-icon size="16">mdi-youtube</v-icon>
        </a>
      </div>
    </div>
  </div>

  <header class="navbar" :class="{ 'navbar-scrolled': isScrolled }">
    <div class="navbar-container">
      <RouterLink to="/" class="navbar-brand">
        <img src="@/assets/logo.svg" alt="PurplWav Logo" class="navbar-logo" />
        <span class="navbar-wordmark">
          <span class="navbar-title">PurplWav</span>
          <span class="navbar-subtitle">Epilepsy Awareness &amp; Outreach</span>
        </span>
      </RouterLink>

      <nav class="navbar-nav" :class="{ 'navbar-nav-open': isMenuOpen }" aria-label="Main navigation">
        <RouterLink to="/" class="nav-link" @click="isMenuOpen = false">Home</RouterLink>
        <RouterLink to="/about" class="nav-link" @click="isMenuOpen = false">About Us</RouterLink>
        <RouterLink to="/epilepsy-facts" class="nav-link" @click="isMenuOpen = false">Epilepsy Facts</RouterLink>
        <RouterLink to="/resources" class="nav-link" @click="isMenuOpen = false">Resources</RouterLink>
        <RouterLink to="/first-aid" class="nav-link" @click="isMenuOpen = false">Seizure First Aid</RouterLink>
        <RouterLink to="/aydin" class="nav-link" @click="isMenuOpen = false">Aydin's Story</RouterLink>
        <RouterLink to="/contact" class="nav-link nav-link-cta" @click="isMenuOpen = false">Contact Us</RouterLink>
      </nav>

      <button class="navbar-toggle" @click="toggleMenu" :class="{ 'navbar-toggle-open': isMenuOpen }" aria-label="Toggle navigation menu">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  </header>

  <main>
    <RouterView />
  </main>

  <footer class="footer">
    <div class="container container-xl">
      <div class="footer-columns">
        <div class="footer-col footer-about">
          <div class="footer-logo">PurplWav</div>
          <p>
            A family-run epilepsy awareness, outreach, and research campaign based in
            Durham Region, Ontario. Founded in 2016 and inspired by Aydin, who lives
            with drug-resistant epilepsy.
          </p>
        </div>
        <div class="footer-col">
          <h3 class="footer-heading">Learn</h3>
          <ul class="footer-links">
            <li><RouterLink to="/epilepsy-facts">Epilepsy Facts</RouterLink></li>
            <li><RouterLink to="/first-aid">Seizure First Aid</RouterLink></li>
            <li><RouterLink to="/resources">Local Resources</RouterLink></li>
            <li><RouterLink to="/aydin">Aydin's Story</RouterLink></li>
          </ul>
        </div>
        <div class="footer-col">
          <h3 class="footer-heading">About</h3>
          <ul class="footer-links">
            <li><RouterLink to="/about">Who We Are</RouterLink></li>
            <li><RouterLink to="/contact">Contact Us</RouterLink></li>
            <li><a href="https://www.purpleday.org/" target="_blank" rel="noopener noreferrer">Purple Day</a></li>
            <li><a href="https://www.epilepsy.ca/" target="_blank" rel="noopener noreferrer">Epilepsy Canada</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h3 class="footer-heading">Connect</h3>
          <div class="footer-social">
            <a href="https://www.instagram.com/purplwav/" target="_blank" rel="noopener noreferrer" class="social-link" title="Follow us on Instagram" aria-label="Instagram">
              <v-icon>mdi-instagram</v-icon>
            </a>
            <a href="https://x.com/Purpl_Wav" target="_blank" rel="noopener noreferrer" class="social-link" title="Follow us on Twitter/X" aria-label="Twitter/X">
              <v-icon>mdi-twitter</v-icon>
            </a>
            <a href="https://www.youtube.com/@purplwav5518/featured" target="_blank" rel="noopener noreferrer" class="social-link" title="Subscribe to our YouTube" aria-label="YouTube">
              <v-icon>mdi-youtube</v-icon>
            </a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p>© 2024 PurplWav. Raising awareness about epilepsy with love and support.</p>
        <p>Dedicated to Aydin and all those affected by epilepsy. This site provides general information only and is not a substitute for medical advice.</p>
      </div>
    </div>
  </footer>
</template>

<style>
/* Utility Bar */
.utility-bar {
  background-color: var(--color-primary-900);
  color: var(--color-primary-100);
  font-size: var(--text-sm);
}

.utility-container {
  max-width: var(--container-xl);
  margin: 0 auto;
  padding: var(--space-2) var(--space-5);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-4);
}

.utility-tagline {
  letter-spacing: 0.02em;
}

.utility-social {
  display: flex;
  gap: var(--space-3);
  align-items: center;
}

.utility-social a {
  color: var(--color-primary-200);
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: color var(--transition-fast);
}

.utility-social a:hover {
  color: white;
}

/* Navigation Bar */
.navbar {
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  background-color: white;
  border-bottom: 1px solid var(--color-neutral-200);
  z-index: 1000;
}

.navbar-scrolled {
  box-shadow: var(--shadow-md);
}

.navbar-container {
  max-width: var(--container-xl);
  margin: 0 auto;
  padding: 0 var(--space-5);
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 76px;
}

.navbar-brand {
  display: flex;
  align-items: center;
  text-decoration: none;
}

.navbar-logo {
  height: 40px;
  width: 40px;
  margin-right: var(--space-3);
}

.navbar-wordmark {
  display: flex;
  flex-direction: column;
  line-height: 1.15;
}

.navbar-title {
  font-family: var(--font-family-heading);
  font-size: var(--text-xl);
  font-weight: var(--font-bold);
  color: var(--color-primary-700);
}

.navbar-subtitle {
  font-size: var(--text-xs);
  font-weight: var(--font-semibold);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-neutral-500);
}

.navbar-nav {
  display: flex;
  align-items: center;
  gap: var(--space-1);
}

.nav-link {
  display: flex;
  align-items: center;
  padding: var(--space-2) var(--space-3);
  text-decoration: none;
  font-weight: var(--font-semibold);
  font-size: var(--text-sm);
  color: var(--color-neutral-700);
  border-bottom: 3px solid transparent;
  border-top: 3px solid transparent;
  transition: color var(--transition-fast), border-color var(--transition-fast);
}

.nav-link:hover {
  color: var(--color-primary-700);
}

.nav-link.router-link-active {
  color: var(--color-primary-700);
  border-bottom-color: var(--color-primary-600);
}

.nav-link-cta {
  background-color: var(--color-primary-600);
  color: white !important;
  border: none;
  border-radius: var(--radius-md);
  padding: var(--space-2) var(--space-4);
  margin-left: var(--space-3);
}

.nav-link-cta:hover {
  background-color: var(--color-primary-700) !important;
}

.navbar-toggle {
  display: none;
  flex-direction: column;
  background: none;
  border: none;
  cursor: pointer;
  padding: var(--space-2);
  gap: 4px;
}

.navbar-toggle span {
  width: 24px;
  height: 3px;
  background-color: var(--color-neutral-700);
  transition: all var(--transition-fast);
  border-radius: 2px;
}

.navbar-toggle-open span:nth-child(1) {
  transform: rotate(45deg) translate(6px, 6px);
}

.navbar-toggle-open span:nth-child(2) {
  opacity: 0;
}

.navbar-toggle-open span:nth-child(3) {
  transform: rotate(-45deg) translate(6px, -6px);
}

/* Footer */
.footer {
  background-color: var(--color-primary-900);
  color: var(--color-primary-100);
  padding: var(--space-12) 0 var(--space-6);
  margin-top: var(--space-16);
}

.footer-columns {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: var(--space-8);
  padding-bottom: var(--space-8);
  border-bottom: 1px solid rgba(255, 255, 255, 0.15);
}

.footer-logo {
  font-family: var(--font-family-heading);
  font-size: var(--text-xl);
  font-weight: var(--font-bold);
  color: white;
  margin-bottom: var(--space-3);
}

.footer-about p {
  color: var(--color-primary-200);
  font-size: var(--text-sm);
  line-height: var(--leading-relaxed);
  margin: 0;
}

.footer-heading {
  font-family: var(--font-family-primary);
  font-size: var(--text-sm);
  font-weight: var(--font-bold);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: white;
  margin-bottom: var(--space-4);
}

.footer-links {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.footer-links a {
  color: var(--color-primary-200);
  text-decoration: none;
  font-size: var(--text-sm);
  transition: color var(--transition-fast);
}

.footer-links a:hover {
  color: white;
  text-decoration: underline;
}

.footer-social {
  display: flex;
  gap: var(--space-3);
  align-items: center;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: var(--radius-md);
  background-color: rgba(255, 255, 255, 0.1);
  color: var(--color-primary-100);
  text-decoration: none;
  transition: background-color var(--transition-fast), color var(--transition-fast);
}

.social-link:hover {
  background-color: white;
  color: var(--color-primary-800);
}

.social-link .v-icon {
  color: inherit;
}

.footer-bottom {
  padding-top: var(--space-6);
  text-align: center;
}

.footer-bottom p {
  font-size: var(--text-xs);
  color: var(--color-primary-300);
  line-height: var(--leading-relaxed);
  margin: 0 0 var(--space-1) 0;
}

/* Mobile Navigation */
@media (max-width: 900px) {
  .utility-tagline {
    display: none;
  }

  .utility-container {
    justify-content: flex-end;
  }

  .navbar-nav {
    position: fixed;
    top: 76px;
    left: 0;
    right: 0;
    background-color: white;
    flex-direction: column;
    padding: var(--space-6);
    gap: var(--space-1);
    border-bottom: 1px solid var(--color-neutral-200);
    box-shadow: var(--shadow-lg);
    transform: translateY(-110%);
    opacity: 0;
    visibility: hidden;
    transition: all var(--transition-normal);
    z-index: 999;
  }

  .navbar-nav-open {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
  }

  .navbar-toggle {
    display: flex;
  }

  .nav-link {
    width: 100%;
    justify-content: center;
    padding: var(--space-3);
    border-bottom: 1px solid var(--color-neutral-100);
    border-top: none;
  }

  .nav-link.router-link-active {
    border-bottom-color: var(--color-neutral-100);
    background-color: var(--color-primary-50);
  }

  .nav-link-cta {
    margin-left: 0;
    margin-top: var(--space-3);
  }

  .footer-columns {
    grid-template-columns: 1fr;
    gap: var(--space-6);
  }
}

/* Content Container */
.content-container {
  max-width: var(--container-lg);
  margin: 0 auto;
  padding: var(--space-8) var(--space-4);
}

@media (min-width: 768px) {
  .content-container {
    padding: var(--space-12) var(--space-6);
  }
}
</style>