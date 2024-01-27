<!-- <template>
  <div>
    <h3>Porcentaje completado : {{ percentage }}%</h3>
  </div>
</template>

<script lang='ts' setup>
import { onMounted, ref, defineExpose } from 'vue';
const percentage = ref(0)

onMounted(() => {
  // Trae el valor del porcentaje del servicio
  percentage.value = 24
})

const recalculate = () => {
  // Actualizar el valor del porcentaje a travez del servicio
  percentage.value = 42
}

defineExpose({ recalculate })
</script> -->


// Composition api
<!-- <template>
  <div>
    <h3>Porcentaje completado : {{ percentage }}%</h3>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import { onMounted, ref, defineExpose } from 'vue';
export default defineComponent({
  setup() {
    const percentage = ref(0)
    const recalculate = () => percentage.value = 42
    onMounted(() => percentage.value = 24)
    return {
      percentage, recalculate
    }
  }
})
</script> -->

// Composition api
<template>
  <div>
    <h3>Porcentaje completado : {{ percentage }}%</h3>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
export default defineComponent({
  data() {
    return {
      percentage: 0
    }
  },
  methods: {
    recalculate() {
      this.percentage = 42
    }
  },
  mounted() {
    this.percentage = 24
  }
})
</script>