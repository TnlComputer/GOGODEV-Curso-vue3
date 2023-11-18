<template>
  <h2>v-bind</h2>
  <p :class="{ ' danger': hasError }">El mensaje se ha enviado satisfactoriamente</p>
</template>

<!-- <script lang='ts' setup>
let hasError = false;
</script> -->

<!-- <script lang='ts'>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'ClassBind',
  setup() {
    let hasError = false;
    return { hasError }
  }
})
</script> -->

<script lang='ts'>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'ClassBind',
  data() {
    return {
      hasError: false
    }
  }
})
</script>

<style>
.danger {
  color: red;
}
</style>