<template>
  <div class="auth-button-container">
    <!-- Кнопка "Личный кабинет" -->
    <Button
      label="Личный кабинет"
      icon="pi pi-user"
      class="auth-button"
      @click="toggleMenu"
      aria-haspopup="true"
      aria-controls="auth-menu"
    />

    <!-- Выпадающее меню -->
    <Menu
      id="auth-menu"
      :model="menuItems"
      :popup="true"
      ref="menu"
      class="auth-menu"
    />
  </div>
</template>

<script setup>
const menu = ref(null);

// Массив элементов меню
const menuItems = [
  {
    label: "Регистрация",
    icon: "pi pi-user-plus",
    command: () => navigate("/register"),
  },
  {
    label: "Вход",
    icon: "pi pi-sign-in",
    command: () => navigate("/login"),
  },
];

// Функция для отображения/скрытия меню
const toggleMenu = (event) => {
  menu.value.toggle(event);
};

// Функция для навигации
const navigate = (path) => {
  window.location.href = path;
};
</script>

<style scoped>
/* Стили для кнопки */
.auth-button-container {
  display: inline-block;
  position: relative;
}

.auth-button {
  background-color: #007bff; /* Цвет фона кнопки */
  color: #ffffff; /* Цвет текста */
  font-weight: 600; /* Полужирный шрифт */
  border-radius: 8px; /* Скругление углов */
  padding: 0.75rem 1.5rem; /* Паддинг для удобства нажатия */
  transition: background-color 0.3s ease, color 0.3s ease; /* Анимация при наведении */
}

.auth-button:hover {
  background-color: #0056b3; /* Темный цвет фона при наведении */
}

/* Стили для выпадающего меню */
.auth-menu {
  min-width: 15rem; /* Минимальная ширина меню */
  border-radius: 8px; /* Скругление углов */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Тень для эффекта отрыва */
}

/* Стили для элементов меню */
.auth-menu .p-menuitem-link {
  color: #333333; /* Цвет текста */
  padding: 0.75rem 1rem; /* Паддинг для удобства нажатия */
  transition: background-color 0.3s ease, color 0.3s ease; /* Анимация при наведении */
}

.auth-menu .p-menuitem-link:hover {
  background-color: #f0f0f0; /* Фон при наведении */
  color: #007bff; /* Цвет текста при наведении */
}
</style>
