import Vuex from 'vuex'

const store = () => new Vuex.Store({

  state: {
    logged_user: undefined,
    snack: {},
    carrinho_lista: [],
  },
  mutations: {
    SET_LOGGED_USER(state, logged_user) {
      console.log('set logged user: '+JSON.stringify(logged_user))
      state.logged_user = logged_user
    },

    SET_SNACK_STATE(state, newstate) {
      state.snack = newstate
    },

    ADD_CARRINHO_LISTA(state, produto) {
      state.carrinho_lista.push(produto) 
    },

  },
  getters: {
    
    logged_user(state) {
      return state.logged_user
    },

    snack (state) {
      return state.snack
    },

    carrinho (state) {
      return state.carrinho_lista
    },

  }
})

export default store