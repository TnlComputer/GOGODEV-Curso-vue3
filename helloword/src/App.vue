<template>
  <h1>Listado de Posts:</h1>
  <PostContainer />

  <CounterOption />
  <CounterComposition />
</template>

<script lang="ts" setup>
import PostContainer from './components/PostContainer.vue';
import CounterOption from './components/CounterOption.vue';
import CounterComposition from './components/CounterComposition.vue';
</script>

<style>
h1 {
  color: green;
}
</style>
