<template>
  <div class="container mx-auto mt-12 px-4 py-8">
    <div v-if="vacancyStore.error" class="py-8 text-center text-red-500">
      {{ vacancyStore.error }}
    </div>

    <template v-else-if="vacancy">
      <div class="mb-6 rounded-3xl bg-white p-6 shadow-sm">
        <!-- Заголовок и кнопка "Назад" -->
        <div class="mb-6 flex items-start justify-between">
          <h1 class="text-2xl font-bold">{{ vacancy.title }}</h1>
          <Button icon="pi pi-arrow-left" text rounded @click="router.back()" />
        </div>

        <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <div class="mb-4">
              <h2 class="mb-2 text-lg font-semibold">Компания</h2>
              <p>{{ vacancy.company.name }}</p>
            </div>

            <div class="mb-4">
              <h2 class="mb-2 text-lg font-semibold">Зарплата</h2>
              <p>{{ formatSalary(vacancy.salary) }}</p>
            </div>

            <div class="mb-4">
              <h2 class="mb-2 text-lg font-semibold">Местоположение</h2>
              <p>{{ vacancy.location }}</p>
            </div>

            <div class="mb-4">
              <h2 class="mb-2 text-lg font-semibold">Дата публикации</h2>
              <p>{{ formatDate(vacancy.publishedAt) }}</p>
            </div>
          </div>

          <div>
            <div class="mb-4">
              <h2 class="mb-2 text-lg font-semibold">Образование</h2>
              <p>{{ formatEducation(vacancy.education) }}</p>
            </div>

            <div class="mb-4">
              <h2 class="mb-2 text-lg font-semibold">Опыт работы</h2>
              <p>{{ formatExperience(vacancy.experience) }}</p>
            </div>

            <div class="mb-4">
              <h2 class="mb-2 text-lg font-semibold">Тип занятости</h2>
              <p>{{ formatEmploymentType(vacancy.employmentType) }}</p>
            </div>

            <div class="mb-4">
              <h2 class="mb-2 text-lg font-semibold">Специальность</h2>
              <p>{{ vacancy.specialty }}</p>
            </div>
          </div>
        </div>

        <div class="mt-6">
          <h2 class="mb-2 text-lg font-semibold">Описание вакансии</h2>
          <p class="whitespace-pre-line">{{ vacancy.description }}</p>
        </div>

        <div class="mt-6">
          <h2 class="mb-2 text-lg font-semibold">
            Дополнительные преимущества
          </h2>
          <div class="flex flex-wrap gap-2">
            <Chip
              v-if="vacancy.socialSupport"
              label="Социальный пакет"
              icon="pi pi-check"
            />
            <Chip
              v-if="vacancy.certification"
              label="Сертификация"
              icon="pi pi-check"
            />
          </div>
        </div>

        <div class="mt-8">
          <Button
            label="Откликнуться на вакансию"
            icon="pi pi-send"
            class="w-full md:w-auto"
          />
        </div>
      </div>
    </template>

    <div v-else class="py-8 text-center">
      <h2 class="mb-4 text-xl font-semibold">Вакансия не найдена</h2>
      <Button
        label="Вернуться к списку вакансий"
        icon="pi pi-arrow-left"
        @click="router.push('/vacancies')"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Vacancy } from "@/types/vacancy/vacancy";

const router = useRouter();
const route = useRoute();

const vacancyStore = useVacancyStore();

if (vacancyStore.vacancies.length === 0) {
  callOnce("vacancy", () => vacancyStore.fetchVacancies());
}

const vacancy = computed(() =>
  vacancyStore.getVacancyById(Number(route.params.id)),
);

const formatSalary = (salary: Vacancy["salary"]) => {
  const formatNumber = (num: number) => num.toLocaleString("ru-RU");
  return `${formatNumber(salary.from)} - ${formatNumber(salary.to)} ${salary.currency} в месяц`;
};

const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString("ru-RU", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const formatEducation = (education: string) => {
  const educationMap: Record<string, string> = {
    graduate: "Выпускник",
    bachelor: "Бакалавр",
    master: "Магистр",
    specialist: "Специалист",
  };
  return educationMap[education] || education;
};

const formatExperience = (experience: string) => {
  const experienceMap: Record<string, string> = {
    "no-experience": "Без опыта",
    "1-3": "1-3 года",
    "3-5": "3-5 лет",
    "5+": "Более 5 лет",
  };
  return experienceMap[experience] || experience;
};

const formatEmploymentType = (type: string) => {
  const typeMap: Record<string, string> = {
    "full-time": "Полная занятость",
    "part-time": "Частичная занятость",
    contract: "Контрактная работа",
    temporary: "Временная работа",
  };
  return typeMap[type] || type;
};
</script>
