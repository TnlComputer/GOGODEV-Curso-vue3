<template>
  <h1>Listado de Posts:</h1>
  <PostContainer />
  <CounterOption />
  <CounterComposition />
  <ExampleSelective />
  <ExampleVFor />
  <ClassBind />
  <StyleBind />
  <StyleBind_vVon />
</template>

<script lang="ts" setup>
import PostContainer from './components/PostContainer.vue';
import CounterOption from './components/CounterOption.vue';
import CounterComposition from './components/CounterComposition.vue';
import ExampleSelective from './components/ExampleSelective.vue';
import ExampleVFor from './components/ExampleV-For.vue';
import ClassBind from './components/ClassBind.vue';
import StyleBind from './components/styleBind.vue';
import StyleBind_vVon from './components/styleBind_v-von.vue';
</script>

<style>
h1 {
  color: green;
}
</style>
