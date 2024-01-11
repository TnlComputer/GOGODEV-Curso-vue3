import { defineStore } from 'pinia';

// export const useExample = defineStore('useExample',{
//   state: () => {
//     return {
//       count : 1
//     }
//   },
//   actions:{
//     increment(val = 1) {
//       this.count += val
//     }
//   },
//   //persistencia con pinia
//   // persist: true  // persist facil

//   // persistencia con pinia diciendole que persiste y que campos
//   persist: {
//     storage: sessionStorage,
//     paths: ['count']
//   }
// })


export const useExample = defineStore('useExample',{
  //persistencia con localStorge
  state: () => {
    return {
      count : 1
    }
  },
  actions:{
    init() {
      const initCount = localStorage.getItem('count')
      if (initCount){
        this.count = parseInt(initCount)
      }
    },
    increment(val = 1) { 
      this.count += val
      localStorage.setItem('count', this.count.toString() )
    }
  },

})