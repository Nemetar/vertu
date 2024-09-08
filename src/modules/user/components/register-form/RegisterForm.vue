<template>
  <BasicCard>
    <template #header>
      <h2 class="text-2xl font-bold text-center">Register</h2>
    </template>

    <template #body>
      <form @submit.prevent="submitForm">
        <div class="mb-4">
          <label for="username" class="block mb-2 text-sm font-medium">Username:</label>
          <input
            type="text"
            id="username"
            v-model="username"
            required
            class="px-4 py-2 border rounded-md focus:outline-none focus:border-accent"
          />
        </div>
        <div class="mb-4">
          <label for="email" class="block mb-2 text-sm font-medium">Email:</label>
          <input
            type="email"
            id="email"
            v-model="email"
            required
            class="px-4 py-2 border rounded-md focus:outline-none focus:border-accent"
          />
        </div>
        <div class="mb-6">
          <label for="password" class="block mb-2 text-sm font-medium">Password:</label>
          <input
            type="password"
            id="password"
            v-model="password"
            required
            class="px-4 py-2 border rounded-md focus:outline-none focus:border-accent"
          />
        </div>
        <button type="submit" class="btn-primary border-none w-full py-2 text-center rounded-md">
          Register
        </button>
      </form>
    </template>

    <template #footer>
      <router-link to="/login" class="text-center no-underline">Login</router-link>
      <div v-if="error" class="text-red-500 mt-4 text-center">
        {{ error.message }}
      </div>
    </template>
  </BasicCard>
</template>

<script lang="ts" src="./RegisterForm.component.ts"></script>
