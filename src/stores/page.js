import { defineStore } from 'pinia'

export const usePageStore = defineStore('page', {
  state: () => ({
    currentPage: null,
  }),
  actions: {
    getCurrentPage(){
        return this.currentPage
    },
    setPage(page) {
      this.currentPage = page
    },
}
})