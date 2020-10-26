<template>
  <div>
    <table class="table">
      <thead class="thead-light">
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Name</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="license in licenses">
          <td>{{ license.id }}</td>
          <td>{{ license.name }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        licenses: [],
      }
    },

    created() {
      let url = this.$store.getters['user/isAdmin'] ?
        'licenses' :
        'employee/licenses';

      this.$repository.get(url)
        .then(({licenses}) => {
           this.licenses = licenses;
         })
         .catch(({response}) => {
           let message = response.data.message;
           console.log(message);
         });
    }
  }
</script>
