import { defineStore } from 'pinia'

// Example store - can be used as a template for other stores
export const useExampleStore = defineStore('example', {
  state: () => ({
    count: 0
  }),
  getters: {
    doubleCount: (state) => state.count * 2
  },
  actions: {
    increment() {
      this.count++
    }
  }
})

