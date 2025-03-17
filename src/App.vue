<script setup lang="ts">
import { RouterView, RouterLink } from 'vue-router';
</script>

<template>
  <nav class="navbar">
    <RouterLink to="/" class="nav-link">Home</RouterLink>
    <RouterLink to="/about" class="nav-link">About Us</RouterLink>
    <RouterLink to="/epilepsy-facts" class="nav-link">Epilepsy Facts</RouterLink>
    <RouterLink to="/resources" class="nav-link">Resources</RouterLink>
    <RouterLink to="/first-aid" class="nav-link">First Aid</RouterLink>
    <RouterLink to="/contact" class="nav-link">Contact Us</RouterLink>
    <RouterLink to="/aydin" class="nav-link">Aydin's Story</RouterLink>
  </nav>
  <main>
    <RouterView />
  </main>
</template>

<style>
/* Global Content Box */
.content-container {
  padding: 40px;
  max-width: 1000px;
  min-width: 1000px;
  min-height: 200px;
  margin: 40px auto;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
}

/* Global Text Styling */
body {
  font-family: 'Inter', sans-serif; /* Change to your preferred font */
  color: #555; /* Dark gray for readability */
  font-size: 1.1em;
  line-height: 1.6;
}

/* Override for <p> tags */
p {
  color: #333; /* Slightly lighter gray */
  font-size: 1em;
  line-height: 1.6;
  text-align: left; /* Matches your current layout */
}
</style>

<style scoped>
/* Keep scoped styles for navbar only */
.navbar {
  display: flex;
  justify-content: center;
  background-color: #825ed1;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 20px;
}

.nav-link {
  color: white;
  text-decoration: none;
  margin: 0 15px;
  padding: 10px 15px;
  transition: background-color 0.3s;
}

.nav-link:hover {
  background-color: #6a4bbd;
}
</style>