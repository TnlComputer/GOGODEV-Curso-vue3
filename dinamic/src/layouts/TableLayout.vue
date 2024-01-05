<template>
  <h1>Component Tabla</h1>
  <div class="container">
    <table class='table'>
      <tr>
        <th class='item'>Nombre</th>
        <th class='item'>Edad</th>
        <th class='item'>Posición</th>
      </tr>
      <UserTable v-for="item in props.content" :key="item.name" :content="item" />
    </table>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'
import UserTable from '@/components/UserRow.vue'

const props = defineProps(['content'])

</script>

<style scope>
.container {
  width: 100vw;
  /* display: flex;
  justify-content: space-arrow; */
  align-items: center;
  flex-wrap: wrap;
}

.table {
  width: 600px;
  margin: 0 auto;
}

.item {
  width: 100px;
}
</style>