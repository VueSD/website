<template>
  <ul>
    <li v-for="project in projects" :key="project.id">
      {{ project.name }}
    </li>
  </ul>
</template>

<script>
import API from "@/api";

export default {
  data: () => ({
    projects: []
  }),

  async mounted() {
    this.projects = await API.githubProjects("VueSD");
  }
};
</script>

<style>
</style>
