<template>
  <component :is="layoutComponent">
    <router-view></router-view>
  </component>
</template>

<script setup lang="ts">
  import { computed, defineAsyncComponent } from 'vue';
  import { useRoute } from 'vue-router';

  const route = useRoute();

  const layoutComponent = computed(() => {
    const layoutName = route.meta.layout || 'DefaultLayout';
    return defineAsyncComponent(() => import(`./app/components/layouts/${layoutName}.vue`));
  });
</script>
