<template>
  <div>
    <select v-model='$i18n.locale'>
      <option v-for='locale in $i18n.availableLocales' :key='`locale-${locale} `' :value="locale">{{ locale }}</option>
    </select>
  </div>
  <H1>{{ $t('message.hello', { name: username, surname: surname }) }}</H1>
  <p>{{ $t('message.content') }}</p>
  <p>{{ $t('message.products', { count: 1 }) }}</p>
  <p>{{ $t('message.comments', 5) }}</p>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const username = ref('Jorge')
const surname = ref('Martinez')
</script>

<style></style>
