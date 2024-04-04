/** @type { import('@storybook/vue').Preview } */


// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../public/typo3conf/ext/bootstrap_package/Resources/Public/Scss/bootstrap5/theme.scss';

// import base css
// @ToDo move to main
// import '../public/typo3conf/ext/bootstrap_package/Resources/Public/Css/bootstrap5-theme.css';

// import './theme.scss';
// import './bootstrap5-theme.css';

// loaded already in main additional data
// import "../public/typo3conf/ext/bootstrap_package/Resources/Public/Scss/bootstrap5/theme.scss";
// import './_variables.scss';


// Only import this if you want to use Bootstrap's
// JQuery helpers
// import 'bootstrap/dist/js/bootstrap.bundle';


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
    },
    defaultTheme: 'light',
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

