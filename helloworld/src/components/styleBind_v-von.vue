<template>
  <h2>v-bind - style - v-on</h2>
  <p :style="{ backgroundColor: '#ccc', color: c }"> El mensaje se ha enviado satisfactoriamente</p>
  <button @click="handleClick">Cambiar Color </button>
  <br>
  <br>
  <br>
  <br>
</template>

<!-- <script script lang = 'ts' setup >
import { ref } from 'vue'
let c = ref("blue");
const handleClick = () => { c.value = '#ff0000' }
</script> -->

<!-- <script lang='ts'>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'ClassBind',
  data() {
    return {
      c: "blue"
    }
  },
  methods: {
    handleClick() {
      this.c = '#ff0000'
    }
  }
})
</script> -->

<script lang='ts'>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'ClassBind',
  setup() {
    let c = ref("blue");
    const handleClick = () => { c.value = '#ff0000' }
    return { c, handleClick }
  }
})
</script>

<style></style>
