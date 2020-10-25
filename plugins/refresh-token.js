import refreshToken from '~/utilities/refreshToken.js';

/**
 * For refreshing the token on page reload.
 *
 * @param  {Object} context.store
 * @return {Void}
 */
export default function ({store}) {
  window.onNuxtReady(() => {
    refreshToken(store);
  });
}
