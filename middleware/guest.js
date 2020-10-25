export default function ({ store, redirect }) {
  if (store.getters['user/currentUser']) {
    return redirect('/');
  }
}
