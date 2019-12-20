<template>
  <component :is="tag" class="vsd-markdown" v-html="html" />
</template>

<script>
import marked from "marked";

export default {
  name: "vsd-markdown",
  props: {
    markdown: {
      type: String,
      required: true
    },
    tag: {
      type: String,
      default: "div"
    }
  },

  computed: {
    html() {
      return marked(this.markdown);
    }
  }
};
</script>

<style lang="scss">
/*
Code block highlighting
Light style
*/

.hljs {
  display: block;
  overflow-x: auto;
  padding: 0.5em;
  color: rgb(34, 34, 34);
}

.hljs-comment,
.hljs-quote {
  color: rgb(65, 65, 60);
  font-style: italic;
}

.hljs-keyword,
.hljs-selector-tag,
.hljs-subst {
  color: rgb(41, 70, 133);
  font-weight: bold;
}

.hljs-number,
.hljs-literal,
.hljs-variable,
.hljs-template-variable,
.hljs-tag .hljs-attr {
  color: #125a5a;
}

.hljs-string,
.hljs-doctag {
  color: rgb(150, 53, 15);
}

.hljs-title,
.hljs-section,
.hljs-selector-id {
  color: rgb(189, 141, 52);
  font-weight: bold;
}

.hljs-subst {
  font-weight: normal;
}

.hljs-type,
.hljs-class .hljs-title {
  color: rgb(41, 70, 133);
  font-weight: bold;
}

.hljs-tag,
.hljs-name,
.hljs-attribute {
  color: rgb(8, 33, 87);
  font-weight: normal;
}

.hljs-regexp,
.hljs-link {
  color: rgb(79, 192, 141);
}

.hljs-symbol,
.hljs-bullet {
  color: #6e0253;
}

.hljs-built_in,
.hljs-builtin-name {
  color: #075f7c;
}

.hljs-meta {
  color: #7e7e7e;
  font-weight: bold;
}

.hljs-deletion {
  background: rgb(255, 223, 223);
}

.hljs-addition {
  background: rgb(227, 255, 221);
}

.hljs-emphasis {
  font-style: italic;
}

.hljs-strong {
  font-weight: bold;
}
</style>
