<template>
  <div class="full-page-layout">
    <RouterView />
  </div>
</template>

<style scoped>
  .full-page-layout {
    height: 100vh;
    overflow-y: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  .full-page-layout::-webkit-scrollbar {
    display: none;
  }
</style>
