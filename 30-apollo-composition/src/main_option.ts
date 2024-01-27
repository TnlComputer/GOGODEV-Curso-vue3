import { createApp, h } from 'vue'
import App from './App.vue'
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core'
import { createApolloProvider} from '@vue/apollo-option'

const hhtpLink = createHttpLink({
  uri: 'http://localhost:4000/graphql'
})

const cache = new InMemoryCache()
const apolloClient = new ApolloClient({
  link: hhtpLink,
  cache
})

const apolloProvider = createApolloProvider({
  defaultClient : apolloClient
})

createApp({
  render: () => h(App),
}).use(apolloProvider).mount('#app')
