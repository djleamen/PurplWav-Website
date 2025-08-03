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
  <header class="navbar" :class="{ 'navbar-scrolled': isScrolled }">
    <div class="navbar-container">
      <RouterLink to="/" class="navbar-brand">
        <img src="@/assets/logo.svg" alt="PurplWav Logo" class="navbar-logo" />
        <span class="navbar-title">PurplWav</span>
      </RouterLink>
      
      <nav class="navbar-nav" :class="{ 'navbar-nav-open': isMenuOpen }">
        <RouterLink to="/" class="nav-link" @click="isMenuOpen = false">Home</RouterLink>
        <RouterLink to="/about" class="nav-link" @click="isMenuOpen = false">About Us</RouterLink>
        <RouterLink to="/epilepsy-facts" class="nav-link" @click="isMenuOpen = false">Epilepsy Facts</RouterLink>
        <RouterLink to="/resources" class="nav-link" @click="isMenuOpen = false">Resources</RouterLink>
        <RouterLink to="/first-aid" class="nav-link" @click="isMenuOpen = false">First Aid</RouterLink>
        <RouterLink to="/aydin" class="nav-link" @click="isMenuOpen = false">Aydin's Story</RouterLink>
        <RouterLink to="/contact" class="nav-link nav-link-cta" @click="isMenuOpen = false">Contact Us</RouterLink>
      </nav>
      
      <button class="navbar-toggle" @click="toggleMenu" :class="{ 'navbar-toggle-open': isMenuOpen }">
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
      <div class="footer-content">
        <div class="footer-logo">PurplWav</div>
        <div class="footer-social">
          <a href="https://www.instagram.com/purplwav/" target="_blank" rel="noopener noreferrer" class="social-link" title="Follow us on Instagram">
            <v-icon>mdi-instagram</v-icon>
          </a>
          <a href="https://x.com/Purpl_Wav" target="_blank" rel="noopener noreferrer" class="social-link" title="Follow us on Twitter/X">
            <v-icon>mdi-twitter</v-icon>
          </a>
          <a href="https://www.youtube.com/@purplwav5518/featured" target="_blank" rel="noopener noreferrer" class="social-link" title="Subscribe to our YouTube">
            <v-icon>mdi-youtube</v-icon>
          </a>
        </div>
        <div class="footer-text">
          <p>© 2024 PurplWav. Raising awareness about epilepsy with love and support.</p>
          <p>Dedicated to Aydin and all those affected by epilepsy.</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style>
/* Navigation Bar */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--color-neutral-200);
  z-index: 1000;
  transition: all var(--transition-normal);
}

.navbar-scrolled {
  background-color: rgba(255, 255, 255, 0.98);
  box-shadow: var(--shadow-md);
}

.navbar-container {
  max-width: var(--container-xl);
  margin: 0 auto;
  padding: 0 var(--space-4);
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 72px;
}

.navbar-brand {
  display: flex;
  align-items: center;
  text-decoration: none;
  font-weight: var(--font-bold);
  font-size: var(--text-xl);
  color: var(--color-primary-600);
  transition: color var(--transition-fast);
}

.navbar-brand:hover {
  color: var(--color-primary-700);
}

.navbar-logo {
  height: 32px;
  width: 32px;
  margin-right: var(--space-3);
}

.navbar-title {
  font-size: var(--text-xl);
  font-weight: var(--font-bold);
}

.navbar-nav {
  display: flex;
  align-items: center;
  gap: var(--space-2);
}

.nav-link {
  display: flex;
  align-items: center;
  padding: var(--space-2) var(--space-4);
  text-decoration: none;
  font-weight: var(--font-medium);
  font-size: var(--text-sm);
  color: var(--color-neutral-700);
  border-radius: var(--radius-lg);
  transition: all var(--transition-fast);
  position: relative;
}

.nav-link:hover {
  color: var(--color-primary-600);
  background-color: var(--color-primary-50);
}

.nav-link.router-link-active {
  color: var(--color-primary-600);
  background-color: var(--color-primary-100);
}

.nav-link-cta {
  background-color: var(--color-primary-500);
  color: white !important;
  margin-left: var(--space-4);
}

.nav-link-cta:hover {
  background-color: var(--color-primary-600) !important;
  transform: translateY(-1px);
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

/* Main Content */
main {
  margin-top: 72px; /* Account for fixed navbar */
}

/* Mobile Navigation */
@media (max-width: 768px) {
  .navbar-nav {
    position: fixed;
    top: 72px;
    left: 0;
    right: 0;
    background-color: white;
    flex-direction: column;
    padding: var(--space-6);
    gap: var(--space-2);
    border-bottom: 1px solid var(--color-neutral-200);
    transform: translateY(-100%);
    opacity: 0;
    visibility: hidden;
    transition: all var(--transition-normal);
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
    padding: var(--space-4);
  }

  .nav-link-cta {
    margin-left: 0;
    margin-top: var(--space-4);
  }
}

/* Content Container - Replaced the old global styles */
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