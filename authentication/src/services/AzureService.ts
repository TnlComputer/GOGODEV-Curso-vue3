import { Ref, ref } from "vue"
import IMsalConfig from "@/interfaces/IMsalConfig"

class AzureService {
  private msalConfig:Ref<IMsalConfig>
  private accessToken:Ref<string>

  constructor() {
    this.msalConfig = ref({
      auth: {
        clientId: '2697e657-7493-49ae-80e7-840b9f2b6a6a',
        authority: 'https://login.microsoft.com/6f356091-3d42-4f42-a45a-0223e8950bea'
      },
      cache: {
        cacheLocation: 'localStorage',
      }
    })
    this.accessToken = ref('')
  }

  setAccessToken(token:string): Ref<string> {
    this.accessToken.value = token
    return this.accessToken
  }

  getAccessToken():Ref<string> {
    return this.accessToken
  }

  getMsalConfig():Ref<IMsalConfig> {
    return this.msalConfig
  }
}

export default AzureService