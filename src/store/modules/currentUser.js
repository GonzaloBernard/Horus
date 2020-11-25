const state = {
  currentUser: null,
};

const getters = {
  getCurrentUser: (state) => state.currentUser,
};

const actions = {
  setCurrentUser({ commit }, user) {
    commit('setNewCurrentUser', user.email),
    console.log(user);
  },
};

const mutations = {
  setNewCurrentUser: (state, newCurrentUser) => state.currentUser = newCurrentUser,
};

export default {
  state,
  getters,
  actions,
  mutations,
};
