<template>
  <BasicCard>
    <template #header>
      <h2 class="text-2xl font-bold text-center">Login</h2>
    </template>

    <template #body>
      <form @submit.prevent="submitForm">
        <div class="mb-4">
          <label for="username" class="block mb-2 text-sm font-medium">Username</label>
          <input
            type="text"
            id="username"
            v-model="username"
            required
            class="px-4 py-2 border rounded-md focus:outline-none focus:border-accent"
          />
        </div>
        <div class="mb-6">
          <label for="password" class="block mb-2 text-sm font-medium">Password</label>
          <input
            type="password"
            id="password"
            v-model="password"
            required
            class="px-4 py-2 border rounded-md focus:outline-none focus:border-accent"
          />
        </div>
        <button type="submit" class="btn-primary border-none w-full py-2 text-center rounded-md">
          Login
        </button>
      </form>
    </template>

    <template #footer>
      <router-link to="/register" class="no-underline">Register</router-link>
      <div v-if="error" class="text-red-500 mt-4 text-center">
        {{ error.message }}
      </div>
    </template>
  </BasicCard>
</template>

<script lang="ts" src="./LoginForm.component.ts"></script>
