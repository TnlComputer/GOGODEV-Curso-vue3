<template>
  <tr>
    <td class='item'>{{ props.content.name }}</td>
    <td class='item'>{{ props.content.age }}</td>
    <td class='item'>{{ props.content.position }}</td>
  </tr>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';
const props = defineProps(['content'])
</script>

<style scoped>
.card {
  background-color: aquamarine;
  border-radius: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  width: 350px;
  margin: 10px;
}

.item {
  width: 200px;
}
</style>