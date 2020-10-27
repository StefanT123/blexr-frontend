# Frontend for Blexr test application

### Framework:
- [Nuxt.js (framework based on Vue.js)](https://nuxtjs.org/)

### Dependencies:
- Bootstrap
- [cookie](https://github.com/jshttp/cookie)
- [js-cookie](https://github.com/js-cookie/js-cookie)
- [vuejs-datepicker](https://github.com/charliekassel/vuejs-datepicker)
- [vuex-persistedstate](https://github.com/robinvdvleuten/vuex-persistedstate)

This application works with the REST API of the [backend application](https://github.com/StefanT123/blexr).

Custom code can be found in these files and folders:
- `components`
- `layouts`
- `middleware`
- `pages`
- `plugins`
- `store`
- `utilities`

Steps that need to be done in order to use this application:
- in `nuxt.config.js` set the `env` variables for `baseUrl` (url of this application) and `apiUrl` (url of the REST API application)
- run `npm run dev`

- admin credentials:
  - email: `admin@admin.com`
  - password: `password`
