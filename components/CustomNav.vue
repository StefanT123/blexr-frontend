<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <nuxt-link class="navbar-brand" :to="'/'">Blexr</nuxt-link>

    <div class="collapse navbar-collapse" id="navbarToggle"></div>

    <div class="navbar-right">
      <div class="navbar-item">
        <div class="buttons" v-if="! isUserLoggedIn">
          <nuxt-link :to="{name: 'auth-login'}" class="btn btn-outline-primary btn-lg">
            Login
          </nuxt-link>
        </div>

        <div class="buttons" v-else>
          <nuxt-link :to="{name: 'dashboard'}" class="btn btn-outline-info btn-lg">
            Dashboard
          </nuxt-link>
          <button class="navbar-right btn btn-danger btn-lg" @click.prevent="logout">Logout</button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {
    computed: {
      isUserLoggedIn() {
        return !! this.$store.state.auth.token;
      },

      isAdmin() {
        return this.$store.getters['user/isAdmin'];
      }
    },

    methods: {
      logout() {
        this.$store.dispatch('auth/logout')
          .catch(({response}) => {
            let message = response.data.message;
            console.log(message);
            this.$store.dispatch('auth/signUserOut');
          })
          .finally(() => {
            this.$router.push({name: 'index'});
          })
      },
    }
  }
</script>

<style>
  .custom-nav {
    margin-bottom: 20px;
  }
</style>
