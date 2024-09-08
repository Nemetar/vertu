<template>
  <div class="min-h-screen bg-slate-950 flex justify-center items-center">
    <header class="absolute top-0 left-0 w-full py-6 z-50">
      <div class="container flex justify-between items-center">
        <router-link to="/"
          ><h1 class="text-white text-6xl font-semibold logo">Vertu</h1></router-link
        >
      </div>
    </header>
    <RouterView />
  </div>
</template>
