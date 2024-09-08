<template>
  <div class="bg-white shadow-lg rounded-lg overflow-hidden">
    <div v-if="$slots.image" class="card-image">
      <slot name="image" />
    </div>

    <div class="p-6">
      <h2 v-if="$slots.header" class="text-xl font-semibold mb-4">
        <slot name="header" />
      </h2>

      <div v-if="$slots.body" class="text-base text-neutral-700 mb-4">
        <slot name="body" />
      </div>

      <div v-if="$slots.footer" class="mt-4">
        <slot name="footer" />
      </div>
    </div>
  </div>
</template>
