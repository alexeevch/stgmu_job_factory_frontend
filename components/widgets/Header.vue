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
      class="dark:bg-gray-800 mt-8 flex w-full items-center justify-center rounded-3xl bg-white align-middle shadow-sm"
    >
      <li
        v-for="item in menuItems"
        :key="item.name"
        class="pb-4 pl-7 pr-7 pt-4 font-semibold text-gray-600 transition duration-300 hover:text-link"
      >
        <router-link :to="item.to">
          {{ item.label }}
        </router-link>
      </li>
    </ul>
  </header>
</template>
