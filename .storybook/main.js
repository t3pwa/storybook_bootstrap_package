const path = require('path');


const config = {
  framework: {
    name: "@storybook/html-webpack5",
    options: {},
  },
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  staticDirs: ['../public'],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-styling-webpack",
    "@storybook/addon-webpack5-compiler-swc",
    "@storybook/addon-webpack5-compiler-babel",
    "@storybook/web-components",
    // https://storybook.js.org/addons/storybook-addon-headless
    "storybook-addon-headless"
  ],
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, "../"),
//      '@css': path.resolve(__dirname, '../src/css'),
      '@scss': path.resolve(__dirname,'../public/typo3conf/ext/bootstrap_package/Resources/Public/Scss/bootstrap5/')
      // ...
    };

    // ...

    // Make whatever fine-grained changes you need

    config.module.rules.push({
      test: /\.txt$/i,
      use: [
          'raw-loader',
      ]
    });

    config.module.rules.push({
      test: /\.http$/i,
      use: [
        // 'json-loader',
        'raw-loader',
      ]
    });


    config.module.rules.push({
      test: /\.s(a|c)ss$/,
      use: [
        'style-loader',
        'css-loader',
        {
          // https://stackoverflow.com/questions/50847065/storybook-global-scss-variables
          loader: 'sass-loader',
          options: {
            sourceMap: true,
            // data: '@import "@/sass/_variables.scss";',
//            data: '  @import "_variables.scss"; @import "@public/typo3conf/ext/bootstrap_package/Resources/Public/Scss/bootstrap5/theme.scss"; ',

            additionalData: `
              // @import "@css/_colors.scss";
              // @import "@css/_components.scss";
              // @import "@css/_mediaQuery.scss";
              // @import "@css/_variables.scss";
              
              
              import "@scss/bootstrap5/theme.scss";
              // import "../public/typo3conf/ext/bootstrap_package/Resources/Public/Scss/bootstrap5/theme.scss";
              import "@scss/bootstrap5/variables.scss";
              
            `
          },
        },
      ],
    });

    // Return the altered config
    return config;
  },
  docs: {
    autodocs: true,
  },
  env: (config) => ({
    ...config,
    STORYBOOK_TYPO3FLUID_API_PASSWORD: 'superpasword',
  }),

};

//https://gist.github.com/shilman/8856ea1786dcd247139b47b270912324?ref=storybookblog.ghost.io#upgrade
// module.exports = {};

export default config;
