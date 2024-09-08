<script setup lang="ts">
  import { computed, defineAsyncComponent } from 'vue';
  import { useRoute } from 'vue-router';

  const route = useRoute();

  const layoutComponent = computed(() => {
    const layoutName = route.meta.layout || 'EmptyLayout';
    return defineAsyncComponent(() => import(`@/components/layouts/${layoutName}.vue`));
  });
</script>

<template>
  <component :is="layoutComponent"></component>
</template>
