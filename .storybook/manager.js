import { addons } from '@storybook/manager-api';
import { themes } from '@storybook/theming';

import initTheme from './initTheme';

addons.setConfig({


    //theme: themes.dark,
    theme: initTheme, // which is based on dark

    navSize: 300,
    bottomPanelHeight: 300,
    rightPanelWidth: 300,
    panelPosition: 'bottom',
    enableShortcuts: true,
    showToolbar: true,

    selectedPanel: undefined,
    initialActive: 'sidebar',
    sidebar: {
        showRoots: false,
        collapsedRoots: ['other', 'example'],
    },
    toolbar: {
        title: { hidden: true },
        zoom: { hidden: false },
        eject: { hidden: false },
        copy: { hidden: false },
        fullscreen: { hidden: false },
    },
});