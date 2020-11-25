import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    usuario: "",
  },
  
  mutations: {
    setUser(state, email) {
      state.usuario = email;
    }
  },
  actions: {
    setUser ({ commit }, email) {
        console.log(email.email)
        commit('setUser', email.email)
    }
}
});
