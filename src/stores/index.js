import { createPinia, defineStore} from 'pinia'
export const basePinia = createPinia();
export const useStore = defineStore('main', {
  state: () => {
    return {
      pageIndex: 0,
      loadScreenAssets: null,
    };
  },
  actions:{
    changePageIndex(payload) {
      this.pageIndex = payload
      sessionStorage.setItem('pageIndex', payload)
    },
  }
})

