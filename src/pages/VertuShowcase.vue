<template>
  <div class="min-h-screen bg-dark text-light">
    <!-- Header -->
    <header class="fixed w-full z-50 py-4 bg-dark text-light">
      <div class="container mx-auto flex justify-between items-center">
        <h1 class="text-5xl font-bold tracking-widest font-sans uppercase logo">Vertu</h1>
        <nav class="flex space-x-8 text-lg">
          <router-link to="/login" class="hover:text-highlight transition-colors"
            >Login</router-link
          >
          <router-link to="/register" class="btn-primary">Join Us</router-link>
        </nav>
      </div>
    </header>

    <!-- Hero Section -->
    <section
      class="hero relative bg-cover bg-center min-h-screen flex flex-col items-center justify-center text-center"
    >
      <h2 class="text-7xl font-extrabold uppercase tracking-wide leading-tight mb-6 animate-fadeIn">
        Find Your <span class="text-highlight">Support</span>
      </h2>
      <p class="text-xl mb-12 max-w-2xl animate-fadeIn delay-1s">
        A safe, anonymous platform providing immediate support through video and audio meetings.
      </p>
      <div class="flex space-x-6 animate-fadeIn delay-2s">
        <router-link
          to="/register"
          class="btn-primary px-10 py-4 shadow-lg hover:scale-110 transition-transform"
          >Get Started</router-link
        >
        <router-link
          to="/login"
          class="btn-secondary px-10 py-4 shadow-lg hover:scale-110 transition-transform"
          >Already a Member</router-link
        >
      </div>
    </section>

    <!-- Features Section -->
    <section class="features py-24 bg-dark text-light">
      <div class="container mx-auto text-center">
        <h3 class="text-5xl font-sans uppercase mb-12">Why Vertu?</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div class="feature hover:scale-105 transition-transform duration-500">
            <i class="i-carbon-help w-8 h-8 text-accent"></i>
            <h4 class="text-2xl font-bold mb-4">Immediate Support</h4>
            <p class="text-lg text-gray-400">
              Access real-time support through video or audio meetings from anywhere.
            </p>
          </div>
          <div class="feature hover:scale-105 transition-transform duration-500">
            <i class="i-heroicons-user w-8 h-8 text-primary"></i>
            <h4 class="text-2xl font-bold mb-4">Anonymity Assured</h4>
            <p class="text-lg text-gray-400">
              Your privacy is our priority. Join anonymously and securely.
            </p>
          </div>
          <div class="feature hover:scale-105 transition-transform duration-500">
            <i class="i-material-symbols-schedule w-8 h-8 text-secondary"></i>
            <h4 class="text-2xl font-bold mb-4">Flexible Timing</h4>
            <p class="text-lg text-gray-400">Join meetings that fit your schedule, day or night.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="testimonials bg-gray-800 text-light py-24">
      <div class="container mx-auto text-center">
        <h3 class="text-5xl font-sans uppercase mb-12">User Testimonials</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div
            class="testimonial p-8 bg-dark-contrast rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            <p class="text-xl mb-6">
              "Vertu helped me find support during a tough time. I could access help without leaving
              home."
            </p>
            <span class="block text-highlight text-lg font-bold">- Marie</span>
          </div>
          <div
            class="testimonial p-8 bg-dark-contrast rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            <p class="text-xl mb-6">
              "The anonymous group sessions gave me the confidence to share my struggles."
            </p>
            <span class="block text-highlight text-lg font-bold">- Julien</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action Section -->
    <section class="cta bg-highlight text-dark py-24">
      <div class="container mx-auto text-center">
        <h3 class="text-5xl font-sans uppercase mb-6">Ready to Start?</h3>
        <p class="text-xl mb-12">Join Vertu today and find the support you need.</p>
        <router-link
          to="/register"
          class="btn-primary px-10 py-4 shadow-xl hover:scale-110 transition-transform"
          >Sign Up</router-link
        >
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-dark text-light py-12">
      <div class="container mx-auto text-center">
        <p>© 2024 Vertu. All rights reserved.</p>
        <nav class="mt-4">
          <router-link to="/about" class="hover:underline mx-4">About Us</router-link>
          <router-link to="/contact" class="hover:underline mx-4">Contact</router-link>
        </nav>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
  /* Custom Animations */
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
    border-radius: 9999px;
    font-size: 1.2rem;
    text-transform: uppercase;
    transition: transform 0.3s ease;
  }
  .btn-secondary {
    background-color: #1a1a1a;
    color: #ffffff;
    padding: 12px 24px;
    border-radius: 9999px;
    font-size: 1.2rem;
    text-transform: uppercase;
    transition: transform 0.3s ease;
  }
</style>
