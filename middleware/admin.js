export default function ({ store, redirect }) {
  const user = store.getters['user/currentUser'];

  if (! user || user.role !== 'admin') {
    return redirect('/');
  }
}
