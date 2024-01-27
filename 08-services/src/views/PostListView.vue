<template>
  <h1>Listado de Post </h1>
  <ul class='post-list'>
    <li v-for='post in posts' :key='post.id'>
      <router-link :to="{ name: 'PostDetail', params: { id: post.id } }">
        {{ post.title }}
      </router-link>
    </li>
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
import PostService from '@/services/PostService';
// import { defineComponent, onMounted } from 'vue';
import { onMounted } from 'vue';
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
  list-style-type: none;

  li {
    padding: 10px;
    width: 100%;
    border: 1px solid #ccc;

    a {
      text-decoration: none;
      color: $textColor;
      cursor: pointer;
    }

    a:hover {
      color: $primaryColor;
    }

  }

}
</style>