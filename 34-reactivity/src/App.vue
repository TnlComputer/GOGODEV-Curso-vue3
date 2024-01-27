// signal angular - para intalar signal - npm i vue-signals
<!-- <template>
  <h3>{{ count() }}</h3>
  <button @click='$event => setCont((v) => v + 1)'>Increment</button>
</template>

<script lang="ts" setup>
import { createSignal } from 'vue-signals/solid'

const [count, setCont] = createSignal(0)
</script> -->

// signal angular
<!-- <template>
  <h3> Contador {{ count() }}</h3>
  <button @click='$event => count.update((v) => v + 1)'>Increment</button>
  <button @click='$event => count.set(0)'>Reset</button>
</template>

<script lang="ts" setup>
import { signal } from 'vue-signals/angular'

const count = signal(0)

</script> -->

// reactive - reactive viene con el paquete de vue
<template>
  <h3> Contador {{ obj.count }}</h3>
  <button @click='$event => obj.count++'>Increment</button>
  <button @click='$event => obj.count = 0'>Reset</button>

  // plugin y variable glovales
  <h3>{{ $count() }}</h3>
  <button @click='event => $saySomething()'>Say Something</button>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';

const obj = reactive({
  count: 0
})


// const count = ref({
//   value: 0
// })

// count.value = {
//   value: 5
// }



</script>

<style></style>
