<template>
  <form>
    <div class="form-group">
      <label for="exampleInputEmail1">My Note</label>
      <input type="text" class="form-control" id="exampleInputNote1" aria-describedby="noteHelp" placeholder="Enter Note"
        v-model="note">
    </div>
    <button type="submit" class="btn btn-primary" @click.prevent="sendNote">Submit</button>
    <RouterLink :to="{ name: 'login' }">Login</RouterLink>
    <p style='color:red'>{{ feedback }}</p>
  </form>
</template>

<script lang='ts' setup>
import { ref } from 'vue';
import useAuth from '@/store/auth';
import router from '@/router';

const feedback = ref('')
const store = useAuth()
const note = ref('')


const sendNote = async () => {
  const response = await store.createNote(note.value)
  if (response == false) {
    feedback.value = "Error recording note."
  } else {
    router.push({ name: 'list' })

  }
}
</script>