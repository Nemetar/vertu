<script setup lang="ts">
  import { Card, CardHeader, CardTitle, CardFooter, CardContent } from '@/components/ui/card';
  import { Button } from '@/components/ui/button';
</script>

<template>
  <div class="min-h-screen bg-black text-white">
    <!-- Header -->
    <header class="absolute top-0 left-0 w-full py-6 z-50">
      <div class="container flex justify-between items-center">
        <h1 class="text-white text-6xl font-semibold logo">Vertu</h1>
        <nav class="hidden md:flex space-x-8 text-lg">
          <router-link
            to="/login"
            class="hover:text-yellow-400 transition duration-300 no-underline"
            >Login</router-link
          >
          <router-link
            to="/register"
            class="hover:text-yellow-400 transition duration-300 no-underline"
            >Register</router-link
          >
        </nav>
      </div>
    </header>

    <!-- Hero Section -->
    <section class="flex items-center justify-center min-h-screen relative">
      <div></div>
      <Card
        class="relative z-10 bg-black bg-opacity-75 p-10 shadow-xl text-white max-w-4xl mx-auto rounded-lg border-0"
      >
        <CardHeader class="text-center">
          <CardTitle class="text-6xl font-extrabold uppercase leading-tight tracking-wider">
            Find Your <span class="text-yellow-400">Support</span>
          </CardTitle>
        </CardHeader>
        <CardContent class="mt-6">
          <p class="text-xl max-w-2xl mx-auto text-gray-300">
            A safe, anonymous platform providing immediate support through video and audio meetings.
          </p>
        </CardContent>
        <CardFooter class="mt-8 flex justify-center space-x-6">
          <Button
            as="a"
            href="/register"
            class="bg-yellow-500 cursor-pointer hover:bg-yellow-600 text-black font-bold py-4 px-8 rounded-md transition duration-300 transform hover:scale-105"
          >
            Get Started
          </Button>
          <Button
            as="a"
            href="/login"
            class="bg-transparent cursor-pointer border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black font-bold py-4 px-8 rounded-md transition duration-300 transform hover:scale-105"
          >
            Already a Member
          </Button>
        </CardFooter>
      </Card>
    </section>
  </div>
</template>

<style scoped></style>
