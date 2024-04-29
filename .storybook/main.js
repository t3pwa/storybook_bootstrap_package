// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

/*
Multiple Options in Toolbar:
https://storybook.js.org/addons/storybook-addon-multiselect

 */


const path = require('path');
// Not used?
var sass = require("node-sass");
require("sass-extract-loader");

//Storybook: how can I pass a global setting to story's / component's argument
//https://stackoverflow.com/questions/76589946/storybook-how-can-i-pass-a-global-setting-to-storys-components-argument

/*
@ToDo: method import theme.js as json, works, but not the best idea
var sassUtils = require("node-sass-utils")(sass);
const sassVars = require("./theme");
// console.log(sassVars);
*/

/*
@ToDo newer example, evaluate, works
#https://stackoverflow.com/questions/17787845/how-to-control-sass-variable-with-javascript
# @ToDo load from .storybook folder
const style = require('sass-extract-loader!./_variables.scss');
const brandInfo = style.global['$theme-colors'].value.primary.value.hex;
console.log(brandInfo);
*/

const alias = {
  // @Todo: not used yet, better: my-theme? tbd
  'my-kit': path.resolve(__dirname, '../src'),
};

const config = {
  framework: {
    name: "@storybook/html-webpack5",
    options: {},
  },
  stats: {
    // @ToDo add those other loaders
    // loggingDebug: ["sass-loader", "sass-resources-loader"],
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
    "@storybook/preset-scss"
    // https://storybook.js.org/addons/storybook-addon-headless
    // "storybook-addon-headless"
  ],
  core: {
    builder: 'webpack5',
  },

  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // You should see this!
    console.log(configType);
    console.log(config);

    /*
    // Debug

    const scssConfigIndex = config.module.rules.findIndex((c) =>
        '.scss'.match(c.test),
    );
    console.log("scssConfigIndex", scssConfigIndex);
    const cssConfigIndex = config.module.rules.findIndex((c) =>
        '.css'.match(c.test),
    );
    console.log("cssConfigIndex", cssConfigIndex);
    */

//    config.entry = './.storybook/main.js',


    /*
config.plugins = [

// Where the compiled SASS is saved to
new MiniCssExtractPlugin(
   {
     filename: './index.css'
     // allChunks: true,
   }
)

    ];
*/

/*
    config.Plugins[ProgressPlugin] = {
      profile: true,
      handler: undefined,
      modulesCount: 2,
      dependenciesCount: 10000,
      showEntries: true,
      showModules: true,
      showDependencies: true,
      showActiveModules: true,
      percentBy: undefined
    ],
*/
    config.watchOptions = {
      // those are regex
      // don't traverse too much!
      ignored: ['/node_modules/', '/node_modules2/', '/app/', '/extensions/', '/tmp/', '/var/', '/vendor/', '/public/fileadmin/', '/public/typo3/', '/public/typo3conf/', '/public/typo3temp/' ]

    },
    // keep that empty as is
//     config.output.publicPath = "./public",
/*
    config.entry = [
      '/var/www/html/node_modules/webpack-hot-middleware/client.js?reload=true&quiet=false&noInfo=undefined',
      '/var/www/html/storybook-config-entry.js'
    ],
  */

// This is not needed for now, example doc

//    config.target = 'node',
//    config.resolve.extensions.push('.scss'),
        /*
        config.resolve.fallback = {
//            crypto: false,
//            assert: '/var/www/html/node_modules/browser-assert/lib/assert.js',
//            stream: false,
//            path: '/var/www/html/node_modules/path-browserify/index.js',
//            util: 'util',
//            url: 'url',
            fs: false,
//            constants: '/var/www/html/node_modules/constants-browserify/constants.json',
            os: false
        }
        */

// @ToDo do we need this?
    config.resolve.fallback.os = false

    config.resolve.alias = {

//      ...config.resolve.alias,
      // This does not help!
//      ...config.resolve.extensions = ['.scss'],

      // @storybook is predefined

//      '@': path.join(process.cwd(), "./public/packages/storybook_bootstrap_package/"),
      //'@css': path.resolve(__dirname, '../public/typo3conf/ext/bootstrap_package/Resources/Public/Css/'),
      '@scss': path.join(process.cwd(),'./public/typo3conf/ext/bootstrap_package/Resources/Public/Scss'),
      'jquery': path.join(process.cwd(),'./node_modules/jquery/dist/jquery.js'),
      'jquery-jsonview': path.join(process.cwd(),'./node_modules/jquery-jsonview/dist/jquery.jsonview.js')
      // ...
    };

    config.module.rules.push({
      test: /\.(txt|http)$/i,
      use: [
        {
          loader: 'raw-loader',
          options: {
            // @other loaders should be linted
            esModule: false,
          },
        }
      ]
    });

    config.module.rules.push({
      test: /\.(js|jsx)$/i,
      exclude: /node_modules/,
      use: [
        {
          loader: 'babel-loader',
          options: {},
        }
      ]
    });



// this schould be in package.json, right? Overwrite here?
//    config.entry =  '/.storybook/main.js';
    // show all warnings
    config.ignoreWarnings = [];
/*
    config.output = {
//      path: '/var/www/html/storybook-static'
//      publicPath: 'auto'
    };
*/
    console.log("config", config);
    console.log("config.module.rules", config.module.rules);

    // Return the altered config
    return {
      ...config,
      resolve: {
        ...config.resolve
//        , alias
      },
    };
  },
  docs: {
    autodocs: true,
  },
  // @ToDo move to pipeline, as long its internal this is ok here
  env: (config) => ({
    ...config,
    STORYBOOK_TYPO3FLUID_API_PASSWORD: 'superpasword',
    STORYBOOK_TYPO3FLUID_API_URL: 'https://t3v11.ddev.site/api/typo3fluid'
  }),
};

//https://gist.github.com/shilman/8856ea1786dcd247139b47b270912324?ref=storybookblog.ghost.io#upgrade
export default config;
