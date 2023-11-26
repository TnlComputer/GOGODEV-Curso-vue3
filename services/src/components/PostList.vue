<template>
  <div>Listado de Post <button class='btn btn-primary'>Estilado con bootstrap</button></div>
  <ul class='post-list'>
    <li v-for='post in posts' :key='post.id'>{{ post.title }}</li>
  </ul>
</template>

<!-- <script lang="ts" >
import PostService from '@/services/PostService';
import { defineComponent, onMounted } from 'vue';
export default defineComponent({
  name: 'PostList',
  data() {
    const service = new PostService()
    const posts = service.getPosts()
    return { posts, service }
  },
  async onMounted() {
    await this.service.fetchAll()
  }
})

</script> -->

<!-- // <script lang="ts" >
// import PostService from '@/services/PostService';
// import { defineComponent, onMounted } from 'vue';
// export default defineComponent({
//   name: 'PostList',
//   setup() {
//     const service = new PostService()
//     const posts = service.getPosts()

//     onMounted(async () => {
//       await service.fetchAll()
//     })

//     return { posts }
//   }
// })
// </script>  -->

<script lang="ts" setup >
// import { defineComponent, onMounted } from 'vue';
import { onMounted } from 'vue';
import PostService from '@/services/PostService';
const service = new PostService()
const posts = service.getPosts()

onMounted(async () => {
  await service.fetchAll()
})
</script> 

<style scoped lang='scss'>
.post-list {
  width: 95vw;
  height: 75px;
  padding: 20px;
  text-align: left;
  list-style-type: none;

  li {
    padding: 20px;
    width: 100%;
    border: 1px solid #ccc;
    color: $red;
  }

  li:hover {
    background-color: darken(#000000, 20%);
  }
}
</style> 