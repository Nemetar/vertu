<template>
  <form @submit.prevent="submitForm">
    <div>
      <label for="username">Username:</label>
      <input type="text" id="username" v-model="username" required />
    </div>
    <div>
      <label for="password">Password:</label>
      <input type="password" id="password" v-model="password" required />
    </div>
    <button type="submit">Login</button>
  </form>
  <div v-if="error">{{ error.message }}</div>
</template>

<script lang="ts" src="./LoginForm.component.ts"></script>
