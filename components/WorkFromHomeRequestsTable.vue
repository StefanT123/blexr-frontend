<template>
  <div>
    <nuxt-link
    :to="{name: 'dashboard-work-from-home-create'}"
    v-if="! isAdmin"
    class="btn btn-primary my-4"
    tag="button"
    >Make request to work from home</nuxt-link>

    <div v-if="isAdmin">
      <div class="form-check form-check-inline my-4">
        <input class="form-check-input" type="radio" name="status" id="all" value="all" v-model="filter">
        <label class="form-check-label" for="all">All</label>
      </div>
      <div class="form-check form-check-inline my-4">
        <input class="form-check-input" type="radio" name="status" id="waiting" value="waiting" v-model="filter">
        <label class="form-check-label" for="waiting">Waiting</label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="status" id="approved" value="approved" v-model="filter">
        <label class="form-check-label" for="approved">Approved</label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="status" id="denied" value="denied" v-model="filter">
        <label class="form-check-label" for="denied">Denied</label>
      </div>
    </div>

    <table class="table">
      <thead class="thead-light">
        <tr>
          <th scope="col" v-if="isAdmin">ID</th>
          <th scope="col" v-if="isAdmin">Employee</th>
          <th scope="col">Date</th>
          <th scope="col">Hours</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="request in requests">
          <td v-if="isAdmin">{{ request.id }}</td>
          <td v-if="isAdmin">{{ request.employee.name }}</td>
          <td>{{ request.date }}</td>
          <td>{{ request.hours }}</td>
          <td v-if="request.approved === null && isAdmin">
            <button class="btn btn-success" @click.prevent="approve(request.id)">Approve</button>
            <button class="btn btn-danger" @click.prevent="deny(request.id)">Deny</button>
          </td>
          <td v-if="request.approved === null && ! isAdmin">
            Waiting for approval
          </td>
          <td v-if="request.approved !== null">
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
        filter: 'all',
      }
    },

    computed: {
      isAdmin() {
        return this.$store.getters['user/isAdmin'];
      }
    },

    watch: {
      filter: function (newVal, oldVal) {
        this.fetchRequests();
      }
    },

    created() {
      this.fetchRequests();
    },

    methods: {
      fetchRequests() {
        let query = this.setQuery();

        this.$repository.get(`work-from-home${query}`)
          .then(({requests}) => {
             this.requests = requests;
           })
           .catch(({response}) => {
             let message = response.data.message;
             console.log(message);
           });
      },

      setQuery() {
        if (this.filter === 'all') {
          return '';
        }

        return `?status=${this.filter}`;
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
