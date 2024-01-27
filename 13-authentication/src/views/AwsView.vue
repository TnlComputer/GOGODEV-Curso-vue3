<template>
  <div class="container">
    <Authenticator>
      <template v-slot='{ user, signOut }'>
        <h1> {{ user.email }}</h1>
        <button @click='signOut'>Sing Out</button>
      </template>
    </Authenticator>

  </div>
</template>

<script lang='ts' setup>
import { Authenticator } from '@aws-amplify/ui-vue'
import '@aws-amplify/ui-vue/styles.css'
</script>