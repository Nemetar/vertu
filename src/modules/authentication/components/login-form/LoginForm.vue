<script lang="ts" src="./LoginForm.component.ts"></script>

<template>
  <Card>
    <CardHeader class="text-center">
      <CardTitle class="text-2xl font-bold">Login</CardTitle>
    </CardHeader>

    <CardContent>
      <form @submit.prevent="submitForm">
        <div class="mb-4">
          <Label for="username" class="block mb-2 text-sm font-medium">Username</Label>
          <Input
            type="text"
            id="username"
            v-model="username"
            required
            class="px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-accent"
          />
        </div>
        <div class="mb-6">
          <Label for="password" class="block mb-2 text-sm font-medium">Password</Label>
          <Input
            type="password"
            id="password"
            v-model="password"
            required
            class="px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-accent"
          />
        </div>
        <Button type="submit" class="w-full py-2">Login</Button>
      </form>
    </CardContent>

    <CardFooter class="text-center">
      <router-link to="/register" class="text-accent underline">Register</router-link>
      <div v-if="error" class="text-red-500 mt-4">{{ error.message }}</div>
    </CardFooter>
  </Card>
</template>
