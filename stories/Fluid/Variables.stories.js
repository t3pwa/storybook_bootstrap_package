import { FluidTemplate } from "storybook-typo3fluid/";

// import { within, userEvent, expect } from '@storybook/test';
// import { FluidTemplate } from "storybook-typo3fluid/";

import { within, userEvent, expect } from '@storybook/test';
import { createVariablesPage } from '../PageVariables';

/*
export default {
    title: 'Constants/Page',
    render: () => createPage(),
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
        layout: 'fullscreen',
    }
};
*/

export default {
    title: 'Variables',
    render: () => createVariablesPage(),
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
        layout: 'fullscreen',
    },
    argTypes: {

//        white: { control: 'color' },
/*
        scss: {
            control: { type: 'select' },
            options: ['white'],
        },
*/
        settings: {
            scss: {
                control: { type: 'select' },
                //white: "#ababab",
                options: ['white'],


                white: { control: 'color' },
                //"gray-100": "#f8f8f8",
                "gray-100": { control: 'color' },
                // "gray-200": "#e9e9e9",
                "gray-200": { control: 'color' },

                "gray-300": "#dedede",
                "gray-400": "#cecece",
                "gray-500": "#ababab",
                "gray-600": "#6c6c6c",
                "gray-700": "#494949",
                "gray-800": "#313131",
                "gray-900": "#212121",
                black: "#000000",
                primary: "#2a9d8f",
                secondary: "#e76f51",
                tertiary: "#f4a261",
                quaternary: "#e9c46a",
                default: "#eaebec",
                success: "#5cb85c",
                info: "#319fc0",
                warning: "#f0ad4e",
                danger: "#d9534f",
//                lighter: $gray-100
//                light: $gray-200
//                dark: $gray-800
//                darker: $gray-900
                "min-contrast-ratio": 2.4,
//                body-bg: $white
//                body-color: = $gray-900
//                link-color: = $primary
                "link-shade-percentage": "20%",
//                link-hover-color: shift-color($link-color, $link-shade-percentage)
//                font-family-sans-serif: "#{$google-webfont}", sans-serif
//                font-family-monospace: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
                "enable-rounded": true,
                "enable-shadows": true,
                "enable-gradients": false,
                "enable-transitions": true
            }
        }

        // backgroundColor: { control: 'color' },
        /*
        settings: {
            control: { type: 'select' },
            options: ['scss'],
        },
        scss: {
            control: { type: 'select' },
            options: ['white'],
        },
        white: { control: 'color' },
        apiPassword: { control: 'text' },
        */



    },
/*
    args: {
        settings: {
            scss: {
                white: "#00ff00",
            }
        }
    }
*/
};

const Template = (args) => FluidTemplate({
    extension: 'bootstrappackage',
    template: 'ContentElements/Panel',
    partial: '',
    section: 'Main',
    args
});

export const VariablesDefault = Template.bind({});
VariablesDefault.args = {
    data: {
      bodytext: "VariablesDefault.args Args Data bodytext"
    },
    settings: {
        scss: {
            white: "#ababab",
            "gray-100": "#f8f8f8",
            "gray-200": "#e9e9e9",
            "gray-300": "#dedede",
            "gray-400": "#cecece",
            "gray-500": "#ababab",
            "gray-600": "#6c6c6c",
            "gray-700": "#494949",
            "gray-800": "#313131",
            "gray-900": "#212121",
            black: "#000000",
            primary: "#2a9d8f",
            secondary: "#e76f51",
            tertiary: "#f4a261",
            quaternary: "#e9c46a",
            default: "#eaebec",
            success: "#5cb85c",
            info: "#319fc0",
            warning: "#f0ad4e",
            danger: "#d9534f",
//                lighter: $gray-100
//                light: $gray-200
//                dark: $gray-800
//                darker: $gray-900
            "min-contrast-ratio": 2.4,
//                body-bg: $white
//                body-color: = $gray-900
//                link-color: = $primary
            "link-shade-percentage": "20%",
//                link-hover-color: shift-color($link-color, $link-shade-percentage)
//                font-family-sans-serif: "#{$google-webfont}", sans-serif
//                font-family-monospace: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
            "enable-rounded": true,
            "enable-shadows": true,
            "enable-gradients": false,
            "enable-transitions": true
        }
    }
};

export const PageSimple = Template.bind({
    props: { }
});
PageSimple.args = {
    ...VariablesDefault.args,
    primary: false,
    label: 'Simple'
};




export const LoggedOut = {};
LoggedOut.args = {
    ...VariablesDefault.args,
    primary: false,
    label: 'Simple'
};

// More on interaction testing: https://storybook.js.org/docs/writing-tests/interaction-testing
export const LoggedIn = {
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const loginButton = canvas.getByRole('button', { name: /Log in/i });
        await expect(loginButton).toBeInTheDocument();
        await userEvent.click(loginButton);
        await expect(loginButton).not.toBeInTheDocument();

        const logoutButton = canvas.getByRole('button', { name: /Log out/i });
        await expect(logoutButton).toBeInTheDocument();
    },
};