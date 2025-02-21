<template>
  <header class="container mx-auto my-4 rounded-3xl bg-white px-4 shadow-sm">
    <div class="content flex items-center justify-between">
      <div class="logo">logo</div>
      <header-menu />
      <auth-btn />
    </div>
  </header>
</template>
<script setup lang="ts">
import AuthBtn from "~/components/shared/auth-btn.vue";
import HeaderMenu from "~/components/shared/header-menu.vue";
</script>
