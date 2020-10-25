<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <nuxt-link class="navbar-brand" :to="'/'">Blexr</nuxt-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse">
      <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
        <li class="nav-item active">
          <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
  export default {

  }
</script>

<style>
  .custom-nav {
    margin-bottom: 20px;
  }
</style>
