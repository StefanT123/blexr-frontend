<template>
  <div>
    <table class="table">
      <thead class="thead-light">
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Employee</th>
          <th scope="col">Date</th>
          <th scope="col">Hours</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="request in requests">
          <td>{{ request.id }}</td>
          <td>{{ request.employee.name }}</td>
          <td>{{ request.date }}</td>
          <td>{{ request.hours }}</td>
          <td v-if="request.approved === null">
            <button class="btn btn-success" @click.prevent="approve(request.id)">Approve</button>
            <button class="btn btn-danger" @click.prevent="deny(request.id)">Deny</button>
          </td>
          <td v-else>
            {{ request.approved ? 'Approved' : 'Denied' }}
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
        requests: [],
      }
    },

    created() {
      this.fetchRequests();
    },

    methods: {
      fetchRequests() {
        this.$repository.get('work-from-home')
          .then(({requests}) => {
             this.requests = requests;
           })
           .catch(({response}) => {
             let message = response.data.message;
             console.log(message);
           });
      },

      approve(requestId) {
        this.$repository.store(`work-from-home/${requestId}/approve`)
          .then(({message}) => {
            this.fetchRequests();
          })
          .catch(({response}) => {
            let message = response.data.message;
            console.log(message);
          });
      },

      deny(requestId) {
        this.$repository.store(`work-from-home/${requestId}/deny`)
          .then(({message}) => {
            this.fetchRequests();
          })
          .catch(({response}) => {
            let message = response.data.message;
            console.log(message);
          });
      }
    }
  }
</script>
