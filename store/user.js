export const state = () => ({
  user: null,
});

export const mutations = {
  SET_USER(state, user) {
    state.user = user;
  },

  REMOVE_USER(state) {
    state.user = null;
  },
}

export const getters = {
  currentUser(state) {
    return state.user;
  },

  isAdmin(state) {
    return state.user.role === 'admin';
  }
}

export const actions = {
  setUser({commit}, user) {
    commit('SET_USER', user);
  },

  removeUser({commit}) {
    commit('REMOVE_USER');
  },
}
