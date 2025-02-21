<script lang="ts" setup>
interface MenuItem {
  name: string;
  to: string;
  label: string;
}

const menuItems: Array<MenuItem> = [
  { name: "home", to: "/", label: "Главная" },
  { name: "vacancies", to: "/vacancies", label: "Вакансии" },
  { name: "resume", to: "/resume", label: "Разместить резюме" },
  {
    name: "public-vacancy",
    to: "/public-vacancy",
    label: "Опубликовать вакансию",
  },
];
</script>

<template>
  <header class="container mx-auto">
    <ul
      class="my-4 flex w-full items-center justify-center rounded-3xl bg-white py-5 align-middle shadow-sm"
    >
      <li
        v-for="item in menuItems"
        :key="item.name"
        class="font-semibold text-gray-600 transition duration-300 hover:text-link"
      >
        <nuxt-link :to="item.to" :aria-label="item.label" class="px-4 py-3">
          {{ item.label }}
        </nuxt-link>
      </li>
    </ul>
  </header>
</template>
