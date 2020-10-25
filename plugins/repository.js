import Repository from '~/utilities/repository.js';

export default function ({ $axios }, inject) {
  $axios.defaults.baseURL = process.env.apiUrl;
  const repositoryToInject = new Repository($axios);

  inject('repository', repositoryToInject);
}
