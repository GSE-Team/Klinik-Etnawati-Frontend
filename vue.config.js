const { defineConfig } = require("@vue/cli-service");
const webpack = require("webpack");

module.exports = defineConfig({
  publicPath:
    process.env.NODE_ENV === "production" ? process.env.VUE_APP_BASE_URL : "/",

  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        mapboxgl: "mapbox-gl",
      }),
      new webpack.DefinePlugin({
        // Vue CLI is in maintenance mode, and probably won't merge my PR to fix this in their tooling
        // https://github.com/vuejs/vue-cli/pull/7443
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: "false",
      }),
    ],
  },

  chainWebpack: (config) => {
    config.module
      .rule("vue")
      .use("vue-loader")
      .loader("vue-loader")
      .tap((options) => {
        // Ensure options is defined
        if (!options) {
          options = {};
        }
        // Ensure compilerOptions is defined
        if (!options.compilerOptions) {
          options.compilerOptions = {};
        }
        // Add isCustomElement option
        options.compilerOptions.isCustomElement = (tag) => tag === "marquee";
        return options;
      });
  },

  pluginOptions: {
    i18n: {
      locale: "en",
      fallbackLocale: "en",
      localeDir: "locales",
      enableInSFC: false,
    },
  },
  transpileDependencies: true,
});
