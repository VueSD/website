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
    </section>
  </main>
</template>

<script>
import VsdMarkdown from "@/components/globals/Markdown";
import markdown from "@/content/about.md";

export default {
  components: {
    VsdMarkdown
  },

  data: () => ({
    markdown: markdown.content
  })
};
</script>
