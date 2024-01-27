<template>
  <div>
    <input type="text" v-model='message' />
    <h3>{{ message }}</h3>
    <h3>{{ reverse }}</h3>
  </div>
</template>

<!-- composition api -->
<script lang="ts" setup>
import { Ref, ref, computed } from 'vue';
let message: Ref<string> = ref('')
const reverse = computed(() => message.value.split('').reverse().join(''))
</script>

<!-- composition api -->
<!-- <script lang="ts">
import { defineComponent, Ref, ref, computed } from 'vue';

export default defineComponent({
  name: "ComputedExampleNew",
  setup() {
    let message: Ref<string> = ref('')
    const reverse = computed(() => message.value.split('').reverse().join(''))
    return { message, reverse }
  }
})
</script> -->

<style scoped></style>