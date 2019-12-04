<template>
  <main class="container pt-5">
    <header>
      <h1>Vue Resources</h1>
    </header>

    <VsdMarkdown :markdown="markdown" />
  </main>
</template>

<script>
import VsdMarkdown from "@/components/globals/Markdown";
import markdown from "@/markdown/resources.md";

export default {
  name: "resources",
  components: {
    VsdMarkdown
  },
  data: () => ({
    markdown
  })
};
</script>
