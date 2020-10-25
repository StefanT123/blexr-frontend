import cookie from 'cookie';

export const state = () => ({});
export const mutations = {};
export const getters = {};
export const actions = {
  async nuxtServerInit ({dispatch}, {req, redirect}) {
    await dispatch('checkToken', {dispatch, redirect, req});
  },

  checkToken(state, {dispatch, redirect, req}) {
    return new Promise((resolve, reject) => {
      const cookies = cookie.parse(req.headers.cookie || '');

      if (cookies.hasOwnProperty('x-access-token')) {
        const token = cookies['x-access-token'];

        this.$axios.setToken(token, 'Bearer');
        dispatch('auth/validateToken')
          .then(({user, expiresIn}) => {
            dispatch('auth/signInUser', {user, expiresIn, token});
            resolve(true);
          })
          .catch(error => {
            console.log('Provided token is invalid:', error);
            dispatch('auth/signUserOut');
            redirect('/');
            resolve(false);
          })
      } else {
        dispatch('auth/signUserOut'); // maybe I don't need this
        resolve(false);
      }
    });
  }
};
