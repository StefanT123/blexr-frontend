<template>
  <nav class="col-md-2 d-none d-md-block bg-light sidebar">
    <div class="sidebar-sticky">
      <ul class="nav flex-column">
        <li class="nav-item">
          <nuxt-link :to="{name: 'dashboard-users'}" class="nav-link">Users</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link :to="{name: 'dashboard-licenses'}" class="nav-link">Licenses</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link :to="{name: 'dashboard-roles'}" class="nav-link">Roles</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link :to="{name: 'dashboard-work-from-home'}" class="nav-link">Work from home requests</nuxt-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
  export default {
  }
</script>
