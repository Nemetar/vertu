<script lang="ts" src="./LoginForm.component.ts"></script>

<template>
  <Card class="w-6/12">
    <CardHeader class="text-center">
      <CardTitle class="text-2xl font-bold">Login</CardTitle>
    </CardHeader>

    <CardContent>
      <form @submit.prevent="submitForm">
        <div class="mb-4">
          <label for="username" class="block mb-2 text-sm font-medium">Username</label>
          <input
            type="text"
            id="username"
            v-model="username"
            required
            class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-accent"
          />
        </div>
        <div class="mb-6">
          <label for="password" class="block mb-2 text-sm font-medium">Password</label>
          <input
            type="password"
            id="password"
            v-model="password"
            required
            class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-accent"
          />
        </div>
        <button
          type="submit"
          class="w-full bg-yellow-500 cursor-pointer hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded-md"
        >
          Login
        </button>
      </form>
    </CardContent>

    <CardFooter class="text-center">
      <router-link to="/register" class="w-full text-accent underline text-black">
        I want to register
      </router-link>
      <div v-if="error" class="text-red-500 mt-4">{{ error.message }}</div>
    </CardFooter>
  </Card>
</template>
