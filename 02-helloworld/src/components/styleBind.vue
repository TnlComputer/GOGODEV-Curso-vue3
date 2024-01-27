<template>
  <h2>v-bind</h2>
  <p :style="{ backgroundColor: '#ccc', color: c }"> El mensaje se ha enviado satisfactoriamente</p>
  <br>
  <br>
  <h2>v-bind - style - v-on</h2>
  <p :style="{ backgroundColor: '#ccc', color: d }"> El mensaje se ha enviado satisfactoriamente</p>
  <button @click="handleClick">Cambiar Color </button>
  <br>
  <br>
  <br>
  <br>
</template>

<script lang = 'ts' setup >
import { ref } from 'vue'
let c = " #fff";
let d = ref("blue");
const handleClick = () => { d.value = '#ff0000' }


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

<!-- <script lang='ts'>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'ClassBind',
  setup() {
    let c = ref("blue");
    const handleClick = () => { c.value = '#ff0000' }
    return { c, handleClick }
  }
})
</script> -->

<style></style>
