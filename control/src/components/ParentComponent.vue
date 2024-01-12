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
<!-- <template>
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

</script> -->


// Lazyload
<!-- 
<template>
  <img v-lazy="{ src: lazyOptions.src, lifecycle: lazyOptions.lifecycle, delay: lazyOptions.delay }" />
</template>

<script lang='ts' setup>
import { ref, VNode } from 'vue';
const lazyOptions = ref({
  src: 'https://picsum.photos/1280/800',
  delay: 500,
  lifecycle: {
    loading: (el: VNode) => {
      console.log('Cargando imagen', el)
    },
    error: (el: VNode) => {
      console.log('Error Cargando imagen', el)
    },
    loaded: (el: VNode) => {
      console.log('Imagen cargada', el)
    }
  }
})
</script>

<style>
img[lazy=loading] {
  background-color: blue;
  width: 500px;
}

img[lazy=loaded] {
  background-color: aqua;
}

img[lazy=error] {
  background-color: red;
}
</style> -->


// WEBCHUNK
<template>
  <img v-lazy="{ src: lazyOptions.src, lifecycle: lazyOptions.lifecycle, delay: lazyOptions.delay }" />
</template>

<script lang='ts' setup>
import { ref, VNode } from 'vue';
const lazyOptions = ref({
  src: 'https://picsum.photos/1280/800',
  delay: 500,
  lifecycle: {
    loading: (el: VNode) => {
      console.log('Cargando imagen', el)
    },
    error: (el: VNode) => {
      console.log('Error Cargando imagen', el)
    },
    loaded: (el: VNode) => {
      console.log('Imagen cargada', el)
    }
  }
})
</script>

<style>
img[lazy=loading] {
  background-color: blue;
  width: 500px;
}

img[lazy=loaded] {
  background-color: aqua;
}

img[lazy=error] {
  background-color: red;
}
</style>