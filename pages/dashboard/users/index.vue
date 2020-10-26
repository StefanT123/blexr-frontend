<template>
  <div class="col-md-10">
    <h3 class="my-2">Employees:</h3>
    <nuxt-link :to="{name: 'user-create'}" class="btn btn-primary my-3">Add new employee</nuxt-link>
    <users-table />
  </div>
</template>

<script>
  const UsersTable = () => import('~/components/UsersTable.vue');

  export default {
    middleware: 'admin',

    layout: 'dashboard',

    components: {
      UsersTable,
    }
  }
</script>
