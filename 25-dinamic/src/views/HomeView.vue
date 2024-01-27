<template>
  <h1>Listado de usuarios</h1>

  <input type="text" placeholder='Filtrar Usuario' v-model="search" @keyup="handleSearch" />

  <div>
    <button @click="handleLayout(ListLayout)">Ver en lista</button>
    <button @click="handleLayout(CardLayout)">Ver en tarjeta</button>
    <button @click="handleLayout(TableLayout)">Ver en tabla</button>
  </div>
  <component :is="layout" :content="filteredUsers" />
</template>

<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue'


const ListLayout = defineAsyncComponent(() => import('@/layouts/ListLayout.vue'))
const CardLayout = defineAsyncComponent(() => import('@/layouts/CardLayout.vue'))
const TableLayout = defineAsyncComponent(() => import('@/layouts/TableLayout.vue'))
const layout = ref(ListLayout)

const search = ref('')

const handleSearch = () => {
  filteredUsers.value = users.value.filter(item => item.name.toLowerCase().includes(search.value.toLowerCase()))
}

const handleLayout = (cmp: any) => layout.value = cmp
const users = ref([
  {
    name: "John",
    age: 21,
    position: "Fullstack"
  },
  {
    name: "Jorge",
    age: 22,
    position: "Frontend"
  },
  {
    name: "Pedro",
    age: 23,
    position: "Backend"
  },
  {
    name: "Luis",
    age: 24,
    position: "Fullstack"
  },
  {
    name: "Raul",
    age: 25,
    position: "Backend"
  },
  {
    name: "Jaime",
    age: 26,
    position: "Java Developers"
  },
  {
    name: "Tatiana",
    age: 27,
    position: "Java Developer"
  },
  {
    name: "Tomas",
    age: 28,
    position: "Operador"
  },
  {
    name: "Carlos",
    age: 29,
    position: "Frontend"
  },
  {
    name: "Javier",
    age: 30,
    position: "Operador"
  },
])

const filteredUsers = ref([])

filteredUsers.value = users.value

</script>

<style>
button {
  margin: 10px;
}
</style>

