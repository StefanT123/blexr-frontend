import cookies from 'js-cookie';

export default function ({$axios, store}) {
  const token = cookies.get('x-access-token');

  if (token) {
    $axios.setToken(token, 'Bearer');
  } else {
    $axios.setToken(false);
  }
}
