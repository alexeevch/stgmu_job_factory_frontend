<script setup lang="ts">
import { Form } from '@primevue/forms'
</script>

<template>
  <div>
    <Form v-slot="$form"
          class="flex flex-col gap-4 w-full sm:w-100">
      <div class="flex flex-col gap-1">
        <InputText name="username" type="text" placeholder="Имя" fluid />
        <Message v-if="$form.username?.invalid" severity="error" size="small" variant="simple">
          {{ $form.username.error.message }}
        </Message>
      </div>
      <ButtonGroup>
        <Button label="Сохранить" icon="pi pi-check" severity="success"/>
        <Button label="Удалить" icon="pi pi-trash" severity="danger"/>
        <Button label="Отмена" icon="pi pi-times" severity="info"/>
      </ButtonGroup>
    </Form>
  </div>
</template>

<style scoped>

</style>
