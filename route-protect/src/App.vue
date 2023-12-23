<template>
  <!-- <div>
    <input type="text" V-MODEL='note'>
    <button type="submit" @click='sendToServer'>Enviar nota al servidor</button>
  </div> -->

  <router-view></router-view>
</template>

<!-- <script lang='ts' setup>
import { ref } from 'vue';

let note = ref('')
const sendToServer = async () => {
  const rawResponse = await fetch('http://localhost', {
    // datos
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer + token'
    },
    body: JSON.stringify({
      note: note.value,
      // si hay otros campos los agregamos
    })
  })
  const response = await rawResponse.json();
  alert("Funciona")
}
</script> -->

<script></script>