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
      class="flex items-center justify-center shadow-sm w-full mt-8 bg-white dark:bg-gray-800 rounded-3xl align-middle"
    >
      <li
        v-for="item in menuItems"
        :key="item.name"
        class="pl-7 pr-7 pb-4 pt-4 hover:text-link transition duration-300"
      >
        <router-link :to="item.to">
          {{ item.label }}
        </router-link>
      </li>
    </ul>
  </header>
</template>
