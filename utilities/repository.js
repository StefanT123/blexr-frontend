class Repository {
  constructor(axios) {
    this.axios = axios;
  }

  index(url) {
    return this.axios.$get(url);
  }

  store(url, payload) {
    return this.axios.$post(url, payload)
  }

  show(url) {
    return this.axios.$get(url);
  }

  update(url, payload) {
    if (payload instanceof FormData) {
      payload.append('_method', 'put');
    } else {
      payload = {...payload, _method: 'put'};
    }

    return this.axios.$post(url, payload);
  }

  delete(url, payload) {
    return this.axios.$delete(url, {data: payload});
  }
}

export default Repository;
