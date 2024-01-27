<template>
  <form>
    <input type="text" v-model="inputText" name="" id="">
    <input type="checkbox" v-model="agree"> Acepto los terminos y condiciones
    <h3>{{ inputText }}</h3>
    <br>
    <select v-model="country">
      <option value="Spain">Spain</option>
      <option value="Italy">Italy</option>
      <option value="UK">UK</option>
      <option value="France">France</option>
    </select>
  </form>
  <h3>{{ inputText }}</h3>
  <br><br><br><br><br><br><br>
</template>

<script lang='ts' setup>
import { ref } from 'vue'
let inputText = ref('')
let agree = ref('true')
let country = ref('Spain')

</script>

<!-- <script lang='ts'>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    let inputText = ref('')
      return {inputText}
  }
})
</script> -->

<!-- <script lang='ts'>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  data() {
    return {
      inputText: ref(''),
      agree: ref('true'),
    }

  }
})
</script> -->

<style scoped></style>