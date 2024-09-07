<template>
  <div class="full-page-layout">
    <RouterView />
  </div>
</template>

<style scoped>
  .full-page-layout {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    overflow-y: scroll;
  }
</style>
