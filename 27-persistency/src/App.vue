<!-- <template>
  <h3>{{ store.count }}</h3>
  <button @click='store.increment(1)'>Añadir</button>
</template>

<script lang='ts' setup>
import { useExample } from '@/store/useExample';
const store = useExample()

/**
 * con local storage
 */

store.init()
</script>

<style>
</style> -->


// watchers con option api
<!-- <template>
  <h3>Notas:</h3>
  <input type="text" v-model='note'>
  <button>Añadir</button>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
export default defineComponent({
  data() {
    return {
      note: ''
    }
  },
  watch: {
    note(value, oldValue) {
      // alert("Valor: " + value + " Antiguo valor: " + oldValue)
      localStorage.setItem('note', value)
    }
  }
}) -->

// watcher composition api
<!-- <template>
  <h3>Notas:</h3>
  <input type="text" v-model='note'>
  <button>Añadir</button>
</template>

<script lang='ts'>
import { defineComponent, ref, watchEffect } from 'vue'
export default defineComponent({
  setup() {
    const note = ref('')
    watchEffect(() => alert("Se ha modificado el valor: " + note.value))
    return {
      note
    }
  }
}) -->

// watcher script setup con watchEffect
<!-- <template>
  <h3>Notas:</h3>
  <input type="text" v-model='note'>
  <button>Añadir</button>
</template>

<script lang='ts' setup>
import { ref, watchEffect } from 'vue'
const note = ref('')
watchEffect(() => alert("Se ha modificado el valor: " + note.value)) -->

// watcher script setup con watch
<template>
  <h3>Notas:</h3>
  <input type="text" v-model='note'>
  <button>Añadir</button>
</template>

<script lang='ts' setup>
import { ref, watch } from 'vue'
const note = ref('')
watch(note, () => alert("Se ha modificado el valor: " + note.value))


</script>

<style></style>