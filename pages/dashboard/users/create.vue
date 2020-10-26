<template>
  <div class="mx-3">
    <h3 class="my-2">Add new employee</h3>

    <form @submit.prevent="create">
      <div class="form-group">
        <label for="name">Name</label>
        <input type="name" class="form-control" id="name" placeholder="Enter name" v-model="form.name">
      </div>

      <div class="form-group">
        <label for="email">Email address</label>
        <input type="email" class="form-control" id="email" placeholder="Enter email" v-model="form.email">
      </div>
      <button type="submit" class="btn btn-primary">Create</button>
    </form>
  </div>
</template>

<script>
  export default {
    middleware: 'admin',

    layout: 'dashboard',

    data() {
      return {
        form: {
          name: '',
          email: '',
        }
      }
    },

    methods: {
      create() {
        this.$repository.store('employee', this.form)
          .then(({employee}) => {
            this.$router.push({name: 'dashboard-users'});
          })
          .catch(({response}) => {
            let message = response.data.message;
            console.log(message);
          });
      }
    }
  }
</script>
