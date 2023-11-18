<template>
  <h2>v-bind</h2>
  <p :style="{ backgroundColor: '#ccc', color: c }"> El mensaje se ha enviado satisfactoriamente</p>
  <br>
  <br>
  <br>
  <br>
</template>

<script lang = 'ts' setup >
let c = " #fff";
</script>

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

    <!-- <script lang='ts'>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'ClassBind',
  data() {
    return {
      hasError: false
    }
  }
})
</script> -->

<style></style>
