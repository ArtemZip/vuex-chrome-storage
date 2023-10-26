import { createStore } from 'vuex'
import VuexPersistence from 'vuex-persist'
import { ChromeSyncStorage } from '@/store/chrome-storage'

const storage = new VuexPersistence({
  asyncStorage: true,
  storage: ChromeSyncStorage
})

// Create a new store instance.
export const store = createStore({
  state () {
    return {
      count: 0
    }
  },
  mutations: {
    increment (state) {
      state.count++
    }
  },
  getters: {
    count (state) {
        return state.count
    }
  },
  plugins: [ storage.plugin ]
})