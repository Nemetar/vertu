<template>
  <div class="min-h-screen bg-dark text-light">
    <!-- Header -->
    <header class="fixed w-full z-50 py-4 bg-dark text-light">
      <div class="container mx-auto flex justify-between items-center">
        <h1 class="text-5xl font-bold tracking-widest font-sans uppercase logo">Vertu</h1>
        <nav class="flex space-x-8 text-lg justify-between items-center">
          <router-link
            to="/login"
            class="font-sans hover:text-highlight transition-colors no-underline"
            >Login</router-link
          >
          <router-link
            to="/register"
            class="font-sans hover:text-highlight transition-colors no-underline"
            >Register</router-link
          >
        </nav>
      </div>
    </header>

    <!-- Hero Section -->
    <section
      class="hero relative bg-cover bg-center min-h-screen flex flex-col items-center justify-center text-center"
    >
      <h2
        class="text-7xl font-extrabold uppercase font-sans tracking-wide leading-tight mb-6 animate-fadeIn"
      >
        Find Your <span class="text-highlight">Support</span>
      </h2>
      <p class="font-sans text-xl mb-12 max-w-2xl animate-fadeIn delay-1s">
        A safe, anonymous platform providing immediate support through video and audio meetings.
      </p>
      <div class="flex space-x-6 animate-fadeIn delay-2s">
        <router-link
          to="/register"
          class="font-sans btn-primary px-10 py-4 shadow-lg hover:scale-105 transition-transform no-underline"
          >Get Started</router-link
        >
        <router-link
          to="/login"
          class="font-sans btn-secondary px-10 py-4 shadow-lg hover:scale-105 transition-transform no-underline"
          >Already a Member</router-link
        >
      </div>
    </section>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  .animate-fadeIn {
    animation: fadeIn 1.5s ease-in-out forwards;
  }

  /* Styling inspired by Maniac Studios */
  .bg-dark {
    background-color: #0d0d0d;
  }
  .bg-dark-contrast {
    background-color: #1a1a1a;
  }
  .text-light {
    color: #ffffff;
  }
  .text-highlight {
    color: #ffc482;
  }
  .btn-primary {
    background-color: #ffc482;
    color: #0d0d0d;
    padding: 12px 24px;
    border-radius: 6px;
    font-size: 1.2rem;
    text-transform: uppercase;
    transition: transform 0.3s ease;
    font-weight: 600;
  }
  .btn-secondary {
    background-color: #1a1a1a;
    color: #ffffff;
    padding: 12px 24px;
    border-radius: 6px;
    font-size: 1.2rem;
    text-transform: uppercase;
    transition: transform 0.3s ease;
    font-weight: 600;
  }
</style>
