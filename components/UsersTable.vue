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
          <th>{{ employee.id }}</th>
          <td>{{ employee.name }}</td>
          <td>{{ employee.email }}</td>
          <td>{{ employee.role }}</td>
          <td>
            <p v-for="license in licenses">
              {{ license.name }}:
              <input
              type="checkbox"
              :value="license.id"
              :checked="employee.licenses.some(item => item.id === license.id)"
              @change="addLicense($event)"
              :data-employee-id="employee.id"
              >
            </p>
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
        licenses: [],
        employeeLicenses: [],
      }
    },

    created() {
      this.fetchEmployees();
      this.fetchLicenses();
    },

    methods: {
      fetchEmployees() {
        this.$repository.get('employees')
          .then(({employees}) => {
            this.employees = employees;
            this.employees.forEach(employee => {
              employee.licenses.forEach(license => {
                this._storeLicense(license.id, employee.id);
              })
            })
          })
          .catch(({response}) => {
            let message = response.data.message;
            console.log(message);
          });
      },

      fetchLicenses() {
        this.$repository.get('licenses')
          .then(({licenses}) => {
             this.licenses = licenses;
           })
           .catch(({response}) => {
             let message = response.data.message;
             console.log(message);
           });
      },

      addLicense(e) {
        let licenseId = e.target.value;
        let employeeId = e.target.dataset.employeeId;

        this._storeLicense(licenseId, employeeId);

        this.$emit('addedLicenses', this.employeeLicenses);
      },

      _storeLicense(licenseId, employeeId) {
        if (this.employeeLicenses[employeeId]) {
          this.employeeLicenses[employeeId].push(licenseId);
        } else {
          this.$set(this.employeeLicenses, employeeId, [licenseId]);
        }
      }
    }
  }
</script>
