<template>
  <h3> {{ counter }} </h3>
  <button @click='increment'>Increment</button>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const counter = ref(0)
const increment = () => counter.value++

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
