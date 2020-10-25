import cookies from 'js-cookie';

export const state = () => ({
  token: null,
});

export const mutations = {
  SET_TOKEN(state, token) {
    state.token = token;
  },

  REMOVE_TOKEN(state) {
    state.token = null;
  }
}

export const actions = {
  async login({commit, dispatch}, data) {
    const {user, expiresIn, token, message} = await this.$repository.store('login', data);
    dispatch('signInUser', {user, expiresIn, token});

    return message;
  },

  signInUser({commit, dispatch}, {user, expiresIn, token}) {
    dispatch('setToken', {token, expiresIn});
    dispatch('user/setUser', user, {root: true});
  },

  setToken({commit}, {token, expiresIn}) {
    this.$axios.setToken(token, 'Bearer');
    const expiryTime = new Date(new Date().getTime() + expiresIn * 1000);
    cookies.set('x-access-token', token, {expires: expiryTime, sameSite: 'strict'});
    commit('SET_TOKEN', token);
  },

  validateToken({commit}) {
    return this.$repository.show('validate-token');
  },

  async refreshToken({dispatch}) {
    const {token, expiresIn} = await this.$repository.store('refresh-token');
    dispatch('setToken', {token, expiresIn});

    return token;
  },

  async logout({dispatch}) {
    const {message} = await this.$repository.store('logout');
    dispatch('signUserOut');

    return message;
  },

  signUserOut({commit, dispatch}) {
    this.$axios.setToken(false);
    cookies.remove('x-access-token');
    dispatch('user/removeUser', null, {root: true});
    commit('REMOVE_TOKEN');
  }
}
