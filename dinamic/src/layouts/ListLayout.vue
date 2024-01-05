<template>
  <h1>Component Lista</h1>
  <div class="container">
    <UserList v-for="item in props.content" :key="item.name" :content="item" />
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'
import UserList from '@/components/UserList.vue'

const props = defineProps(['content'])

</script>

<style scope>
.container {
  width: 100vw;
  display: flex;
  justify-content: space-arrow;
  align-items: center;
  flex-wrap: wrap;
}
</style>