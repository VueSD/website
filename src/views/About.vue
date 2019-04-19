<template>
  <main class="container pt-5">
    <header>
      <h1>About VueSD</h1>
    </header>

    <VsdMarkdown :markdown="markdown" />

    <section>
      <h3>Upcoming Events</h3>
      <ul>
        <li v-for="meetup in meetups" :key="meetup.id">
          {{ meetup.name }}
        </li>
      </ul>
    </section>

    <section>
      <h3>GitHub Projects</h3>
      <GitHubProjects />
    </section>
  </main>
</template>

<script>
import VsdMarkdown from "@/components/helpers/Markdown";
import markdown from "@/markdown/about.md";
import API from "@/api";

import GitHubProjects from "@/components/GitHubProjects";

export default {
  name: "about",

  components: {
    VsdMarkdown,
    GitHubProjects
  },

  data: () => ({
    markdown,
    projects: [],
    meetups: []
  }),

  async mounted() {
    const res = await API.meetupEvents();
    this.meetups = res.data;
    console.log(this.meetups[0]);
    this.projects = await API.githubProjects("VueSD");
  }
};
</script>
