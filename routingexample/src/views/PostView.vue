<template>
  <h1>Sección Post {{ postId }}</h1>
</template>

<script lang='ts' setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

let postId = ref('');

onMounted(() => {
  const route = useRoute();
  postId.value = route.params.id;
})
</script>
