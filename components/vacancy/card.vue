<template>
  <div
    class="rounded-3xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
  >
    <div class="flex items-start gap-4">
      <div class="h-16 w-16 flex-shrink-0">
        <img
          v-if="job.company.logo"
          :src="job.company.logo"
          :alt="job.company.name"
          class="h-full w-full rounded-lg object-contain"
        />
        <div
          v-else
          class="flex h-full w-full items-center justify-center rounded-lg bg-gray-100 text-gray-400"
        >
          <i class="pi pi-building text-2xl"></i>
        </div>
      </div>

      <div class="flex-1">
        <div class="flex items-start justify-between gap-4">
          <div>
            <h3 class="text-xl font-semibold text-gray-900">{{ job.title }}</h3>
            <p class="mt-1 text-gray-600">{{ job.company.name }}</p>
          </div>
          <div class="text-right">
            <div class="text-lg font-medium text-gray-900">
              {{ formatSalary(job.salary) }}
            </div>
            <div class="mt-1 text-sm text-gray-500">
              {{ formatExperience(job.experience) }}
            </div>
          </div>
        </div>

        <div class="mt-4">
          <p class="text-gray-600">{{ job.description }}</p>
        </div>

        <div class="mt-4 flex flex-wrap gap-2">
          <span class="inline-flex items-center gap-1 text-sm text-gray-600">
            <i class="pi pi-map-marker"></i>
            {{ job.location }}
          </span>

          <span
            v-if="job.socialSupport"
            class="inline-flex items-center gap-1 text-sm text-green-600"
          >
            <i class="pi pi-check-circle"></i>
            Соц. поддержка
          </span>

          <span
            v-if="job.certification"
            class="inline-flex items-center gap-1 text-sm text-blue-600"
          >
            <i class="pi pi-verified"></i>
            Требуется сертификат
          </span>
        </div>

        <div class="mt-4 flex items-center justify-between">
          <span class="text-sm text-gray-500">
            Опубликовано {{ formatDate(job.publishedAt) }}
          </span>
          <Button
            label="Подробнее"
            class="p-button-outlined !rounded-3xl"
            @click="$emit('details', job.id)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Vacancy, Experience } from "@/types/vacancy/vacancy";

const props = defineProps<{
  job: Vacancy;
}>();

defineEmits<{
  (e: "details", id: number): void;
}>();

const formatSalary = (salary: Vacancy["salary"]) => {
  const formatter = new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: "RUB",
    maximumFractionDigits: 0,
  });

  if (salary.from === salary.to) {
    return formatter.format(salary.from);
  }

  return `${formatter.format(salary.from)} - ${formatter.format(salary.to)}`;
};

const formatExperience = (experience: Experience) => {
  const experienceMap: Record<Experience, string> = {
    "no-experience": "Без опыта",
    "1-3": "1-3 года",
    "3-5": "3-5 лет",
    "5+": "Более 5 лет",
  };
  return experienceMap[experience];
};

const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString("ru-RU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};
</script>
