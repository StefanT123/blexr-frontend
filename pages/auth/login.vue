<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <h3 class="mb-4">Login with your credentials</h3>

        <form @submit.prevent="login">
          <div class="form-group">
            <label for="email">Email address</label>
            <input type="email" class="form-control" id="email" placeholder="Enter email" v-model="form.email">
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input type="password" class="form-control" id="password" placeholder="Password" v-model="form.password">
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  </div>

</template>
<script>
  export default {
    middleware: 'guest',

    data() {
      return {
        form: {
          email: '',
          password: '',
        }
      }
    },

    methods: {
      login() {
        this.$store.dispatch('auth/login', this.form)
          .then(resp => {
            this.$router.push({name: 'index'});
          })
          .catch(({response}) => {
            let message = response.data.message;
            console.log(message);
          });
      },
    }
  }
</script>
