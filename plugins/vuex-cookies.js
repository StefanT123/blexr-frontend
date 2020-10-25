import createPersistedState from 'vuex-persistedstate';
import Cookies from 'js-cookie';

export default ({store}) => {
  window.onNuxtReady(() => {
    createPersistedState({
      storage: {
        getItem: key => Cookies.get(key),
        setItem: (key, value) => {
          Cookies.set(key, value, { expires: 3, secure: false });
        },
        removeItem: key => Cookies.remove(key),
      },
      key: 'blexr_vuex',
      paths: ['user.user'],
    })(store);
  });
}
