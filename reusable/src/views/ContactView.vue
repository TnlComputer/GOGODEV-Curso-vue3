<template>
  <MainLayout>
    <template #main>
      <h1>My Contenet content</h1>
    </template>
    <template #aux>
      <p>X position is: {{ x }}, y position is: {{ y }}</p>
    </template>
  </MainLayout>
</template>

<script lang="ts" setup>
import MainLayout from "../layouts/MainLayouts.vue";
import { useMouse } from "../composables/useMouse";

const { x, y } = useMouse()
</script>

