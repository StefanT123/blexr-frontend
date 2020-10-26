<template>
  <div class="col-md-10">
    <h3 class="my-2">Work from home requests:</h3>
    <work-from-home-requests-table />
  </div>
</template>

<script>
  const WorkFromHomeRequestsTable = () => import('~/components/WorkFromHomeRequestsTable.vue');

  export default {
    middleware: 'admin',

    layout: 'dashboard',

    components: {
      WorkFromHomeRequestsTable,
    }
  }
</script>
