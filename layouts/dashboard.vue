<template>
  <div>
    <custom-nav />

    <div class="container-fluid">
      <div class="row">
        <side-menu />
        <Nuxt />
      </div>
    </div>
  </div>
</template>

<script>
  const SideMenu = () => import('~/components/SideMenu.vue');
  const CustomNav = () =>  import('~/components/CustomNav.vue');

  export default {
    components: {
      SideMenu,
      CustomNav,
    },
  }
</script>
