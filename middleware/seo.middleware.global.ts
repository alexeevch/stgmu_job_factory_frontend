export default defineNuxtRouteMiddleware((to) => {
  const config = useRuntimeConfig();
  const defaultTitle = config.public.siteName;

  const newTitle = to.meta.title
    ? `${to.meta.title} - ${defaultTitle}`
    : defaultTitle;

  useHead({
    title: newTitle,
  });
});
