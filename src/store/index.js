import { createStore } from 'vuex'

export default createStore({
  state() {
    return {
      showSignIn: true,
    }
  },
  mutations: {
    TOGGLE_FORM(state) {
      state.showSignIn = !state.showSignIn;
    }
  },
  actions: {
    toggleForm({ commit }) {
      commit('TOGGLE_FORM');
    }
  },
  getters: {
    showSignInForm(state) {
      return state.showSignIn;
    }
  }
})
