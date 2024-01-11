import { defineStore } from 'pinia';

export const useExample = defineStore('useExample',{
  state: () => {
    return {
      count : 1
    }
  },
  actions:{
    increment(val = 1) {
      this.count += val
    }
  },
  //persistencia con pinia
  // persist: true  // persist facil

  // persistencia con pinia diciendole que persiste y que campos
  persist: {
    storage: sessionStorage,
    paths: ['count']
  }
})