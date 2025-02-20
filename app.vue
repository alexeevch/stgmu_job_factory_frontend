<script setup lang="ts">
const config = useRuntimeConfig();
const route = useRoute();

useHead({
  title: `${route.meta.title} - ${config.public.siteName}`,
});
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
