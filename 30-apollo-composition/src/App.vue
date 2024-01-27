<template>
  <h1>Comments</h1>
  <ul>
    <li v-for="(comment, index) in comments" :key="index">{{ comment.text }}</li>
  </ul>
</template>

<script>
import { defineComponent } from 'vue';
import gql from 'graphql-tag';

export default defineComponent({
  data() {
    return {
      comments: []
    }
  },
  apollo: {
    $subscribe: {
      comments: {
        query: gql`
        subscription {
          commentCreated {
            name
            text
          }
        }`,
        resul({ data }) {
          this.comments = data.commentCreated
        }
      }
    }
  }

})
</script>