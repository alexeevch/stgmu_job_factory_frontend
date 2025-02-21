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
  <ul class="flex items-center justify-center align-middle">
    <li
      v-for="item in menuItems"
      :key="item.name"
      class="block font-semibold text-gray-600 transition duration-300 hover:text-link"
    >
      <nuxt-link :to="item.to" :aria-label="item.label" class="block px-4 py-5">
        {{ item.label }}
      </nuxt-link>
    </li>
  </ul>
</template>
