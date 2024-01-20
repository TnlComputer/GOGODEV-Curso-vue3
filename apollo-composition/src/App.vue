<!-- <template>
  <button @click='$event => createComment()'> Generar comentario </button>
</template>

<script lang="ts">
import { useMutation } from '@vue/apollo-composable';
import gql from 'graphql-tag';
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    const { mutate: createComment, loading: createCommentLoading, error: createCommentError, onDone, onError } = useMutation(gql`
      mutation($name: String!, $text: String!) {
        createComment(name: $name, text: $text)
      }
    `, () => ({
      variables: {
        name: "Gogodev",
        text: "Hi fonm vew again"
      },
      update: (cache, { data: { createComment } }) => {
        let data = cache.readQuery({ query: getAllComments })
        data = {
          ...data,
          comments: [
            ...data.comments,
            {
              name: "",
              text: ""
            }
          ]
        }
        cache.writeQuery({ query: getAllComments, data })
      }
    }))

    onDone((done) => {
      console.log(done.value)
    })

    onError((error) => {
      console.log(error.message)
    })

    return {
      createComment
    }
  }
})
</script>

<style>
.error {
  color: red;
}
</style> -->

// video 30 - mutaciones
// script setup
<template>
  <button @click='$event => createComment()'> Generar comentario </button>
</template>

<script lang="ts" setup>
import { useMutation } from '@vue/apollo-composable';
import gql from 'graphql-tag';

const { mutate: createComment, loading: createCommentLoading, error: createCommentError, onDone, onError } = useMutation(gql`
      mutation($name: String!, $text: String!) {
        createComment(name: $name, text: $text)
      }
    `, () => ({
  variables: {
    name: "Gogodev",
    text: "Hi fonm vew again"
  },
  update: (cache, { data: { createComment } }) => {
    let data = cache.readQuery({ query: getAllComments })
    data = {
      ...data,
      comments: [
        ...data.comments,
        {
          name: "",
          text: ""
        }
      ]
    }
    cache.writeQuery({ query: getAllComments, data })
  }
}))

onDone((done) => {
  console.log(done.value)
})

onError((error) => {
  console.log(error.message)
})

</script>

<style>
.error {
  color: red;
}
</style>