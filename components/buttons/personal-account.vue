<template>
  <div class="auth-button-container">
    <Button
        label="Личный кабинет"
        icon="pi pi-user"
        class="auth-button !rounded-2xl"
        @click="toggleMenu"
        aria-haspopup="true"
        aria-controls="auth-menu"
    />

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

const toggleMenu = (event) => {
  menu.value.toggle(event);
};

const navigate = (path) => {
  window.location.href = path;
};
</script>
