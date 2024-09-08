<script lang="ts" src="./RegisterForm.component.ts"></script>

<template>
  <Card class="w-6/12">
    <CardHeader class="text-center">
      <CardTitle class="text-2xl font-bold">Register</CardTitle>
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
        <div class="mb-4">
          <label for="email" class="block mb-2 text-sm font-medium">Email</label>
          <input
            type="email"
            id="email"
            v-model="email"
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
        <Button
          type="submit"
          class="w-full bg-yellow-500 cursor-pointer hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded-md"
          >Register</Button
        >
      </form>
    </CardContent>

    <CardFooter class="text-center">
      <router-link to="/login" class="w-full text-accent underline text-black">
        I already have an account
      </router-link>
      <div v-if="error" class="text-red-500 mt-4">{{ error.message }}</div>
    </CardFooter>
  </Card>
</template>
