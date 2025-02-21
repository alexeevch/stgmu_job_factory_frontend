export default defineNuxtRouteMiddleware(() => {
  const config = useRuntimeConfig();
  const defaultTitle = config.public.siteName;

  useHead({
    titleTemplate: (titleChunk) => {
      return titleChunk ? `${titleChunk} - ${defaultTitle}` : defaultTitle;
    },
  });
});
