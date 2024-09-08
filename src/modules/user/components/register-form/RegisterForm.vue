<script lang="ts" src="./RegisterForm.component.ts"></script>

<template>
  <Card>
    <CardHeader class="text-center">
      <CardTitle class="text-2xl font-bold">Register</CardTitle>
    </CardHeader>

    <CardContent>
      <form @submit.prevent="submitForm">
        <div class="mb-4">
          <Label for="username" class="block mb-2 text-sm font-medium">Username:</Label>
          <Input
            type="text"
            id="username"
            v-model="username"
            required
            class="px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-accent"
          />
        </div>
        <div class="mb-4">
          <Label for="email" class="block mb-2 text-sm font-medium">Email:</Label>
          <Input
            type="email"
            id="email"
            v-model="email"
            required
            class="px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-accent"
          />
        </div>
        <div class="mb-6">
          <Label for="password" class="block mb-2 text-sm font-medium">Password:</Label>
          <Input
            type="password"
            id="password"
            v-model="password"
            required
            class="px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-accent"
          />
        </div>
        <Button type="submit" class="w-full py-2">Register</Button>
      </form>
    </CardContent>

    <CardFooter class="text-center">
      <router-link to="/login" class="text-accent underline">Login</router-link>
      <div v-if="error" class="text-red-500 mt-4">{{ error.message }}</div>
    </CardFooter>
  </Card>
</template>
