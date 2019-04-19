<template>
  <main class="container pt-5">
    <header>
      <h1>About VueSD</h1>
    </header>

    <VsdMarkdown :markdown="markdown" />

    <section>
      <h3>Upcoming Events</h3>
    </section>

    <section>
      <h3>GitHub Projects</h3>
    </section>
  </main>
</template>

<script>
import VsdMarkdown from "@/components/helpers/Markdown";
import markdown from "@/markdown/about.md";
import API from "@/api";

export default {
  name: "about",

  components: {
    VsdMarkdown
  },

  data: () => ({
    markdown,
    example: "Vue is cool"
  }),

  async mounted() {
    const projects = await API.githubProjects("VueSD");
  }
};
</script>
