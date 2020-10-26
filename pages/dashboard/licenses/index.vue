<template>
  <div class="col-md-10">
    <h3 class="my-2">Licenses:</h3>
    <nuxt-link :to="{name: 'dashboard-licenses-create'}" class="btn btn-primary my-3" v-if="isAdmin">Add new license</nuxt-link>
    <licenses-table />
  </div>
</template>

<script>
  const LicensesTable = () => import('~/components/LicensesTable.vue');

  export default {
    middleware: 'auth',

    layout: 'dashboard',

    components: {
      LicensesTable,
    },

    computed: {
      isAdmin() {
        return this.$store.getters['user/isAdmin'];
      }
    }
  }
</script>
