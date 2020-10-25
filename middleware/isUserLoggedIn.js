import refreshToken from '~/utilities/refreshToken.js';

/**
 * For refreshing the token on route change.
 *
 * @param  {Object} context.store
 * @return {Void}
 */
export default function ({store}) {
  if (process.server) return;

  refreshToken(store);
}
