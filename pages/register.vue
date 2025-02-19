<script setup lang="ts">
import { Form } from '@primevue/forms'
</script>

<template>
  <div class="flex justify-center">
    <Form :initialValues :resolver  class="flex flex-col gap-4 w-full sm:w-80">
    <FormField v-slot="$field" name="username" initialValue="" class="flex flex-col gap-1">
        <InputText type="text" placeholder="Логин" />
        <Message v-if="$field?.invalid" severity="error" size="small" variant="simple">{{ $field.error?.message }}</Message>
    </FormField>
    <FormField v-slot="$field" name="firstname" initialValue=""  class="flex flex-col gap-1">
        <InputText type="text" placeholder="Имя" />
        <Message v-if="$field?.invalid" severity="error" size="small" variant="simple">{{ $field.error?.message }}</Message>
    </FormField>
    <FormField v-slot="$field" name="lastname" initialValue=""  class="flex flex-col gap-1">
        <InputText type="text" placeholder="Фамилия" />
        <Message v-if="$field?.invalid" severity="error" size="small" variant="simple">{{ $field.error?.message }}</Message>
    </FormField>
    <FormField v-slot="$field" name="password" initialValue="" class="flex flex-col gap-1">
        <Password type="text" placeholder="Пароль" :feedback="false" toggleMask fluid />
        <Message v-if="$field?.invalid" severity="error" size="small" variant="simple">{{ $field.error?.message }}</Message>
    </FormField>
    <FormField v-slot="$field" name="details" class="flex flex-col gap-1">
        <Textarea placeholder="О себе" />
        <Message v-if="$field?.invalid" severity="error" size="small" variant="simple">{{ $field.error?.message }}</Message>
    </FormField>
    <Button type="submit" severity="secondary" label="Submit" />
</Form>
  </div>
</template>

<style scoped>

</style>
