<template>
  <h3>Notifications</h3>
  <ul>
    <li v-for="(comment, index) of comments" :key="index">
      <b>{{ comment.name }}:</b> {{ comment.text }}
    </li>
  </ul>
</template>

<script lang='ts'>
import { defineComponent, ref, watch } from 'vue';
import { useSubscription } from '@vue/apollo-composable'
import gql from 'graphql-tag';

export default defineComponent({
  setup() {
    const comments = ref([])
    const { result } = useSubscription(gql`
    subscription Subscription {
      commentCreated {
        name
        text
      }
    }
    `,
      () => ({

      }))

    watch(
      result,
      data => {
        comments.value.push(data.commentCreated)
      },
      {
        lazy: true
      }
    )
    return { comments }
  }
})

</script>