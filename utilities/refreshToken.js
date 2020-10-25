import clientCookies from 'js-cookie';

export default function refreshToken(store) {
  let token = clientCookies.get('x-access-token');
  let user = store.getters['user/currentUser'];

  if (user && ! token) {
    store.dispatch('auth/refreshToken')
      .catch(errors => {
        store.dispatch('auth/signUserOut');
      });
  }
}
