<!-- <template>
  <div>
    <ChildComponent ref='percentageComponent'></ChildComponent>
    <button @click='banco'>Añadir cuanta bancaria</button>
  </div>
</template>

<script lang='ts' setup>
import ChildComponent from './ChildComponent.vue';
import { ref } from 'vue';
const percentageComponent = ref(null)
const banco = () => {
  // alert("cuenta bancaria")
  // Conectar con el servicio y subir la info
  percentageComponent.value.recalculate()
}
</script> -->


//composition api
<template>
  <div>
    <ChildComponent ref='percentageComponent'></ChildComponent>
    <button @click='banco'>Añadir cuanta bancaria</button>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import ChildComponent from './ChildComponent.vue';

export default defineComponent({
  components: {
    ChildComponent
  },
  methods: {
    banco() {
      this.$refs.percentageComponent.recalculate()
    }
  }
})

</script>