module.exports = {
  lintOnSave: false,
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/scss/_shared.scss";`
      }
    }
  },
  chainWebpack: config => {
    config.module
      .rule("markdown-loader")
      .test(/\.md$/)
      .use("html")
      .loader("html-loader")
      .end()
      .use("markdown")
      .loader("markdown-loader")
      .options({
        highlight: function(code) {
          return require("highlightjs").highlightAuto(code).value;
        },
        gfm: true,
        breaks: true,
        sanatize: true
      })
      .end();
  }
};
