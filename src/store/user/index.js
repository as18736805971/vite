import { defineStore } from 'pinia'

export const userStore = defineStore('main', {
    state:() => ({
        info: {
            name: '星星',
            age: 18
        }
    }),
    getters: {
      handleNumber(store) {
          return store.info.age + 2
      }
    },
    actions: {
        handleAge() {
            this.info.age++
        }
    }
})
