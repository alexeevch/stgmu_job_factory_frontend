export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: {
    enabled: true,
  },
  modules: [
    "@nuxt/eslint",
    "@nuxtjs/tailwindcss",
    "@primevue/nuxt-module",
    "@pinia/nuxt",
    "pinia-plugin-persistedstate/nuxt",
  ],
  runtimeConfig: {
    public: {
      siteName: process.env.SITE_NAME,
      useMockData: process.env.USE_MOCK_DATA,
      apiUrl: process.env.API_URL,
    },
  },
  pinia: {
    storesDirs: ["./stores/**"],
  },
  primevue: {
    importTheme: { from: "~/configs/theme.config.ts" },
    options: {
      ripple: true,
    },
    autoImport: true,
  },
  tailwindcss: {
    configPath: "~/tailwind.config.js",
  },
  css: ["~/assets/css/main.css"],
});
