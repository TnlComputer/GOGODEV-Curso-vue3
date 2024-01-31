<template>
  <h1>Counter App</h1>
  <h3 id='counterInfo'>{{ counter }}</h3>
  <button @click='$event => counter++'>Increment</button>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const counter = ref(0)
</script>
