<script setup lang="ts">
const config = useRuntimeConfig();
const route = useRoute();

const title = computed(() => {
  return route.meta.title
    ? `${route.meta.title} - ${config.public.siteName}`
    : config.public.siteName;
});

useHead({
  title,
});
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
