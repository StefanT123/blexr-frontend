<template>
  <div>
    <h3 class="my-4">Request to work from home</h3>

    <p>Pick a date</p>
    <client-only>
      <date-picker
      v-model="date" />
    </client-only>

    <div class="my-4">
      <p>Enter for how many hours will you be working form home</p>
      <input type="number" min="1" max="10" v-model="hours">
    </div>

    <button class="btn btn-primary" @click.prevent="makeRequest">Make a request</button>
  </div>
</template>

<script>
  export default {
    middleware: 'auth',

    layout: 'dashboard',

    data() {
      return {
        date: null,
        hours: null,
      }
    },

    methods: {
      makeRequest() {
        this.$repository.store('employee/work-from-home', {
          date: new Date(this.date),
          hours: this.hours,
        })
        .then(({message}) => {
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
