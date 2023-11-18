<template>
  <h2>v-if - v-show</h2>

  <!-- en html se pinta solo el que cumple la condicion -->
  <!-- <h1 v-if='age < 18'>Eres menor de edad </h1>
    <h1 v-else>Eres mayor de edad </h1> -->

  <!-- en el html se pintan los 2 h1, pero uno tiene display none, segun la condicion -->
  <h1 v-show='age < 18'>Eres menor de edad </h1>
  <h1 v-show='age >= 18'>Eres mayor de edad </h1>
</template>

<script lang='ts' setup>
let age = 18
</script>

<!-- <script lang='ts'>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'ExampleSelective',
  setup() {

    let age = 10
    return { age }
  }
})
</script> -->

<style scoped></style>