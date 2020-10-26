<template>
  <div>
    <table class="table">
      <thead class="thead-light">
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Role</th>
          <th scope="col">Licenses</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="employee in employees">
          <th scope="row">{{ employee.id }}</th>
          <td>{{ employee.name }}</td>
          <td>{{ employee.email }}</td>
          <td>{{ employee.role }}</td>
          <td>
            License1: <input type="checkbox">
            License2: <input type="checkbox">
            License3: <input type="checkbox">
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        employees: [],
      }
    },

    created() {
      this.$repository.show('employees')
        .then(({employees}) => {
          this.employees = employees;
        })
        .catch(({response}) => {
          let message = response.data.message;
          console.log(message);
        });
    }
  }
</script>
