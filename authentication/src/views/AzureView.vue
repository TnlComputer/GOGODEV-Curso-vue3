<template>
  <div>Azure Login</div>
  <button @click='login'>Login</button>
</template>


// options API
<!-- <script lang="ts">
import { PublicClientApplication } from '@azure/msal-browser'
import { defineComponent } from "vue";
import AzureService from '@/services/AzureService'
export default defineComponent({
  name: 'AzureView',
  data() {
    return {
      account: ''
    }
  },
  async created() {
    const azureService = new AzureService()
    this.$msalInstance = new PublicClientApplication(azureService.getMsalConfig().value)
  },
  methods: {
    async login() {
      await this.$msalInstance
        .loginPopup()
        .then(() => {
          const myAccounts = this.$msalInstance.getAllAccounts()
          this.account = myAccounts[0]
          this.$emitter.emit('login', this.account)
        })
        .catch(error => {
          alert(error)
        })
    }
  }
})
</script> -->

// composition api
// <!-- <script lang = "ts" >
// import { PublicClientApplication } from '@azure/msal-browser'
// import { defineComponent, onMounted } from "vue";
// import AzureService from '@/services/AzureService'
// export default defineComponent({
//   name: 'AzureView',
//   setup() {
//     onMounted(() => {
//       const azureService = new AzureService();
//       $msalInstance = new PublicClientApplication(azureService.getMsalConfig().value)
//     })
//     const account = ''
//     const login = async () => {
//       await $msalInstance
//         .loginPopup()
//         .then(() => {
//           const myAccounts = $msalInstance.getAllAccounts()
//           account = myAccounts[0]
//           $emitter.emit('login', account)
//         })
//         .catch(error => {
//           alert(error)
//         })
//     }
//     return {
//       account, login
//     }
//   }
// }) -->
<!-- </script> -->

// composition setup
<script lang = "ts" setup>
import { PublicClientApplication } from '@azure/msal-browser'
import { onMounted } from "vue";
import AzureService from '@/services/AzureService'
onMounted(() => {
  const azureService = new AzureService()
  $msalInstance = new PublicClientApplication(azureService.getMsalConfig().value)
})
const account = ''
const login = async () => {
  await $msalInstance.loginPopup().then(() => {
    const myAccounts = $msalInstance.getAllAccounts()
    const account = myAccounts[0]
    $emitter.emit('login', account)
  })
    .catch(error => {
      alert(error)
    })
}
</script>

