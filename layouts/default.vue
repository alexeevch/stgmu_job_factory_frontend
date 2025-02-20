<template>
  <div class="default-template bg-[#F7FAFD] font-inter">
    <WidgetsHeader />
    <main>
      <slot />
    </main>
    <footer class="footer">footer</footer>
  </div>
</template>

<style scoped>
.default-template {
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
}
</style>
