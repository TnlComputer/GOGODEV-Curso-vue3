<!-- <template>
  <button @click="show = !show">Mostrar / Ocultar</button>
  <Transition>
    <h1 v-if="show">Hello word animated</h1>
  </Transition>
</template>

<script lang='ts' setup>
import { ref } from 'vue'
const show = ref(false)
</script> -->


<template>
  <TransitionGroup name='list' tag='ul'>
    <li v-for='note in  notes ' :key='note'>{{ note }}</li>
  </TransitionGroup>
  <input type="text" v-model='note'>
  <button @click='handdleNote'>Save note</button>
</template>

<script lang='ts' setup>
import { ref } from 'vue'

const notes = ref([])
const note = ref('')

const handdleNote = () => {
  notes.value.push(note.value)
  note.value = ''
}
</script>

<style>
/* para transition */
/* enter-from // opacity:0
enter-active // opacity: 2s ease
enter-to // opacity:1

leave-from // opacity:
leave-active // opacity:
leave-to // opacity: */


/* para transitionGroup */
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
