module.exports = {
  lintOnSave: false,
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/scss/_shared.scss";`
      }
    }
  },
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.md$/,
          use: [{ loader: "gray-matter-loader" }]
        }
      ]
    }
  }
};
