<script setup>
import PersonalAccount from '~/components/buttons/personal-account.vue'
</script>

<template>
  <header class="header-container">
    <PersonalAccount />
  </header>
</template>

<style scoped>
/* Общий контейнер */
.header-container {
  margin-top: 1rem; /* Отступ от верха страницы */
  display: flex;
  justify-content: center; /* Центрирование меню по горизонтали */
}

/* Стили для "Dynamic Island" меню */
.dynamic-island-menu {
  display: flex;
  gap: 0.5rem; /* Промежуток между кнопками */
  background-color: #ffffff; /* Фоновое цвет меню */
  border-radius: 24px; /* Скругление углов */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Тень для эффекта отрыва */
  padding: 0.5rem; /* Внутренний отступ */
  overflow: hidden; /* Убираем лишние элементы за пределами контейнера */
}

/* Стили для элементов меню */
.menu-item {
  background-color: transparent; /* Прозрачный фон */
  border: none; /* Без границ */
  color: #333333; /* Цвет текста */
  font-size: 1rem; /* Размер шрифта */
  font-weight: 500; /* Полужирный шрифт */
  padding: 0.75rem 1.5rem; /* Паддинг для удобства нажатия */
  border-radius: 16px; /* Скругление кнопок */
  transition: background-color 0.3s ease, color 0.3s ease; /* Анимация при наведении */
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: capitalize; /* Каждое слово с большой буквы */
}

.menu-item.p-button-icon-only {
  padding: 0.75rem; /* Для кнопок только с иконкой */
}
</style>
