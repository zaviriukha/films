import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    likeList: []
  },
  getters: {
    likeList: state => state.likeList
  },
  mutations: {
    ADD_TO_CART(state, result) {
      state.likeList.push(result)
      console.log("id: " + result.overview)
    }
  },
  actions: {
    likeFilm(context, result) {
      context.commit('ADD_TO_CART', result)
    }
  }
})