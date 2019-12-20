<template>
  <main class="home container">
    <header class="text-center">
      <h1 class="text-uppercase font-weight-bold">
        Home of the Vue San Diego Meetup
      </h1>
      <hr class="divider my-4" />
    </header>

    <section class="py-5">
      <VsdMarkdown :markdown="markdown" />

      <h2 class="mt-5 text-center">Companies in San Diego using Vue.js</h2>
      <div class="row">
        <a
          v-for="(company, index) in companies"
          :key="index"
          :href="company.url"
          class="col-sm-6 col-md-4"
        >
          <img v-if="company.logo" :src="company.logo" :alt="company.title" />
          <h3 v-else>{{ company.title }}</h3>
        </a>
      </div>
    </section>
  </main>
</template>

<script>
import VsdMarkdown from "@/components/globals/Markdown";
import markdown from "@/content/about.md";

const importAll = r => r.keys().map(r);
const markdownFiles = importAll(
  require.context("@/content/companies", false, /\.md$/)
);

export default {
  components: {
    VsdMarkdown
  },

  data: () => ({
    markdown: markdown.content,
    companies: markdownFiles.map(modool => {
      return modool.default.data;
    })
  })
};
</script>
