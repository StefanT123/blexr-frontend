<template>
  <div class="col-md-10">
    <h3 class="my-2">Employees:</h3>
    <nuxt-link :to="{name: 'dashboard-users-create'}" class="btn btn-primary my-3">Add new employee</nuxt-link>
    <button
    class="btn btn-primary"
    :disabled="! Object.keys(licensesToAdd).length"
    @click="addLicenses"
    >Add licenses</button>
    <users-table @addedLicenses="setLicenses" />
  </div>
</template>

<script>
  const UsersTable = () => import('~/components/UsersTable.vue');

  export default {
    middleware: 'admin',

    layout: 'dashboard',

    components: {
      UsersTable,
    },

    data() {
      return {
        licensesToAdd: {}
      }
    },

    methods: {
      setLicenses(licensesToAdd) {
        this.licensesToAdd = licensesToAdd;
      },

      addLicenses() {
        for (let id in this.licensesToAdd) {
          let employeeId = id;
          let licensesIds = this.licensesToAdd[id];

          this._addLicense(employeeId, licensesIds);
        }
      },

      _addLicense(employeeId, licensesIds) {
        return this.$repository.store(`employee/${employeeId}/licenses`, {
          ids: licensesIds,
        })
        .then(({employee, message}) => {
          console.log(message);
        })
        .catch(({response}) => {
          let message = response.data.message;
          console.log(message);
        });
      }
    }
  }
</script>
