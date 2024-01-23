<template>
  <h1>Comments</h1>
  <button @click='addComment'>Write Comment</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import gql from 'graphql-tag';
import { storeKeyNameFromField } from '@apollo/client/utilities';

export default defineComponent({
  methods: {
    addComment() {
      this.$apollo.mutate({
        mutation: gql`
        mutation CreateComment($name: String!, $text: String!) {
          createComment(name: $name, text: $text)
        }
        `,
        variables() {
          return {
            name: 'Vue',
            text: 'Comment from vue'
          }
        }
        ,
        // update: (store, { data_ {createComment}}) => {
        //   let data = store.readQuery({ query: comments})
        //   data = [
        //     ...data,
        //     createComment
        // ]
        // store.writeQuery({query: comments, data});
        // }
      })
    }
  }
})
</script>