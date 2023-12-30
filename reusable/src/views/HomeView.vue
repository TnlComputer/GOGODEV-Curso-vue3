<template>
  <MainLayout>
    <template v-slot:main>
      <!--  #main es la forma corta -->
      <h1>Main content</h1>
    </template>
    <template #aux>
      <p>X position is: {{ x }}, Y position is: {{ y }}</p>
    </template>
  </MainLayout>
</template>

<script lang="ts" setup>
import MainLayout from "../layouts/MainLayouts.vue";
import { useMouse } from "../composables/useMouse";

const { x, y } = useMouse()
</script>
