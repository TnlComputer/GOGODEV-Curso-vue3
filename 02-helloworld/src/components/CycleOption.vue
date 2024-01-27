<template>
  <div>Create, Mounted, Update</div>
</template>

<script lang="ts" setup>
import { onMounted, onUpdated } from 'vue'

onMounted(() => {
  console.log('Mounted')
})

onUpdated(() => {
  console.log('Updated')
})
</script>

<!-- <script lang = "ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: "CycleOption",
  methods: {
  },
  created() {
    console.log("created");
  },
  mounted() {
    console.log("mounted");
  },
  updated() {
    console.log('updated');
  },
  unmounted() {
    console.log('destroyed');
  },
})
</script> -->

<style scoped></style>