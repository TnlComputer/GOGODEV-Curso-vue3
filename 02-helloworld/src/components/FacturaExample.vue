<template>
  <div>
    <label v-mod-font.red.lg> Subtotal</label>
    <input type="number" v-model="subtotal">
    <h3 v-mod-font.xxl.blue>Total impuestos a pagar: {{ totalVat }} ({{ vat }}%)</h3>

  </div>
</template>

<script lang="ts" setup>
import { Ref, ref, computed } from "vue";

const vat = 21
let subtotal: Ref<number> = ref(0)
const totalVat = computed(() => (vat * subtotal.value) / 100)

</script>

<style scoped></style>