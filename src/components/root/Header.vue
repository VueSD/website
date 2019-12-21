<template>
  <nav class="vsd-header navbar navbar-expand-lg navbar-light py-3">
    <div class="container">
      <router-link to="/" class="navbar-brand">
        <img class="lg-logo" src="static/logo.png" alt="Vue San Diego" />
      </router-link>
      <button
        v-on:click="isVisible = !isVisible"
        class="navbar-toggler navbar-toggler-right"
        type="button"
        data-toggle="collapse"
        data-target="#navbarResponsive"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        v-bind:class="{ show: isVisible }"
        class="collapse navbar-collapse"
        id="navbarResponsive"
      >
        <ul class="navbar-nav ml-auto my-2 my-lg-0">
          <li class="nav-item">
            <router-link :to="{ name: 'resources' }" class="nav-link">
              Resources
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "VueSD"
    }
  },
  data: () => ({
    isVisible: false
  })
};
</script>

<style>
.navbar-brand {
  width: 150px;
}
</style>
