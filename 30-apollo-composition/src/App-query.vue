// video 29
<!-- <template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from './components/HelloWorld.vue';

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style> -->


// video 30 
// Composition api
<!-- <template>
  <h1>Comment</h1>
  <div v-if='loading'>
    <h3>
      Loading...
    </h3>
  </div>
  <div v-else>
    <h3>
      <ul>
        <li v-for="(comment, index) in result.getCommentsFromUser" :key='index'><b>{{ comment.name }}</b>: {{ comment.text
        }}</li>
      </ul>
    </h3>
  </div>
  <div v-if='error'>
    <h3 style="error">
      {{ error.message }}
    </h3>
  </div>

  <button @click='$event => refetch()'>Refresh</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useQuery } from '@vue/apollo-composable';
import gql from 'graphql-tag'

export default defineComponent({
  setup() {
    const { result, loading, error, refetch, onResult, onError } = useQuery(gql`
      query ($name: String!) {
        getCommentsFromUser(name: $name) {
          name
          text
        }
      }
    `, () => ({
      name: 'User 1'
    }), {
      fetchPolicy: 'cache-and-network', // cache-and-network es el mas versatil.
      pollInterval: 5000
    })

    onResult((queryResult) => {
      console.log(queryResult.data)
      console.log(queryResult.loading)
      console.log(queryResult.networkStatus)
    })

    onError((error) => {
      console.log(error.graphQLErrors)
    })

    return {
      result, loading, error, refetch
    }
  }
});
</script>

<style>
.error {
  color: red;
}
</style> -->

// option setup
<template>
  <h1>Comment</h1>
  <div v-if='loading'>
    <h3>
      Loading...
    </h3>
  </div>
  <div v-else>
    <h3>
      <ul>
        <li v-for="(comment, index) in result.getCommentsFromUser" :key='index'><b>{{ comment.name }}</b>: {{ comment.text
        }}</li>
      </ul>
    </h3>
  </div>
  <div v-if='error'>
    <h3 style="error">
      {{ error.message }}
    </h3>
  </div>

  <button @click='$event => refetch()'>Refresh</button>
</template>

<script lang="ts" setup>
import { useQuery } from '@vue/apollo-composable';
import gql from 'graphql-tag'

const { result, loading, error, refetch, onResult, onError } = useQuery(gql`
      query ($name: String!) {
        getCommentsFromUser(name: $name) {
          name
          text
        }
      }
    `, () => ({
  name: 'User 1'
}), {
  fetchPolicy: 'cache-and-network', // cache-and-network es el mas versatil.
  pollInterval: 5000
})

onResult((queryResult) => {
  console.log(queryResult.data)
  console.log(queryResult.loading)
  console.log(queryResult.networkStatus)
})

onError((error) => {
  console.log(error.graphQLErrors)
})

</script>

<style>
.error {
  color: red;
}
</style>
