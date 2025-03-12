<script setup lang="ts">
useSeoMeta({
  title: "Вакансии",
  description: "Список актуальных вакансий",
});

const vacancyStore = useVacancyStore();
callOnce("vacancies", () => vacancyStore.fetchVacancies());

const vacancies = computed(() => vacancyStore.vacancies);

const searchQuery = ref("");

const router = useRouter();

const navigateToJob = (id: number) => {
  router.push(`/vacancies/${id}`);
};
</script>

<template>
  <div class="container mx-auto px-4 py-8">
    <div class="lg:flex lg:gap-8">
      <div class="order-2 mb-6 lg:order-1 lg:mb-0 lg:w-80"></div>

      <div class="order-1 lg:order-2 lg:flex-1">
        <div class="mb-6 rounded-3xl bg-white p-4 shadow-sm">
          <span class="p-input-icon-left w-full">
            <i class="pi pi-search" />
            <InputText
              v-model="searchQuery"
              placeholder="Поиск по вакансиям"
              class="w-full !rounded-3xl"
            />
          </span>
        </div>

        <div v-if="vacancyStore.error" class="py-8 text-center text-red-500">
          {{ vacancyStore.error }}
        </div>

        <template v-else>
          <div class="space-y-4">
            <VacancyCard
              v-for="vacancy in vacancies"
              :key="vacancy.id"
              :job="vacancy"
              @details="navigateToJob"
            />
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<style scoped>
@media (max-width: 1023px) {
  .sticky {
    position: relative;
    top: 0;
  }
}
</style>
