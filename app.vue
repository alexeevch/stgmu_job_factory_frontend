<script setup lang="ts">
const config = useRuntimeConfig();
const route = useRoute();

const getPageTitle = (): string => {
  return route.meta.title
    ? `${route.meta.title} - ${config.public.siteName}`
    : config.public.siteName;
};

useHead({
  title: getPageTitle(),
});
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
