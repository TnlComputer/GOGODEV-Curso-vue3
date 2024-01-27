<template>
  <div class="post-card">
    <h3>Titulo</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis alias tempore nesciunt ipsa suscipit labore
      voluptatum sint vitae voluptatibus earum eveniet, officia soluta quia officiis, harum itaque nemo. Magnam, expedita!
    </p>
    <PostButton />
  </div>
</template>

<script lang="ts" setup>
import PostButton from './PostButton.vue'
</script>

<style scoped>
.post-card {
  width: 20%;
  border-radius: 15px;
  padding: 10px;
  margin: 5px;
  border: 1px solid #ccc;
}
</style>

