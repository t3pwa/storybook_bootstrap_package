/** @type { import('@storybook/vue').Preview } */

// import 'bootstrap/dist/css/bootstrap.min.css';


import { themes } from '@storybook/theming';
import './theme.scss';

const path = require('path');


// const style = require(path.resolve(__dirname, 'sass-extract-loader!./_variables.scss'));
// const brandInfo = style.global['$theme-colors'].value.primary.value.hex;
// console.log(brandInfo);

console.log ( path.resolve(__dirname, './') );

// import (path.resolve(__dirname, './theme.scss' ));

// Only import this if you want to use Bootstrap's
// JQuery helpers
import 'bootstrap/dist/js/bootstrap.bundle';


export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    expanded: true,
    hideNoControlsWarning: true,
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

import { withThemeByDataAttribute } from '@storybook/addon-themes';

// snipped for brevity
export const decorators = [
  withThemeByDataAttribute({
    themes: {
      light: 'light',
      dark: 'dark',
      init: 'initTheme'
    },
    defaultTheme: 'dark',
    attributeName: 'data-bs-theme',
  }),
];



const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};


export default preview;

