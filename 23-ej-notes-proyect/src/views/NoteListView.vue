<template>
  <RouterLink :to="{ name: 'create' }">Crear new note</RouterLink>
  <button @click.prevent="logout">Logout</button>
  <table class="table" v-if="notes.length > 0">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Note</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="note in notes" :key="note.id">
        <th scope="row">{{ note.id }}</th>
        <td>{{ note.content }}</td>
      </tr>
    </tbody>
  </table>
  <p v-else>No data yet.</p>
</template>

<script lang='ts' setup>
import { Ref, ref, onMounted } from 'vue'
import useAuth from '@/store/auth'
import INotes from '@/Interfaces/INote'
import router from '@/router'
const store = useAuth()

const notes: Ref<Array<INotes>> = ref([])
onMounted(async () => {
  notes.value = await store.getNotes()
})

const logout = () => {
  store.logout()
  router.push({ name: 'login' })
}
</script>
