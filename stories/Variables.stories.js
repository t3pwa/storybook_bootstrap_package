import { FluidTemplate } from "storybook-typo3fluid/";
import { within, userEvent, expect } from '@storybook/test';
import { createVariablesPage } from './PageVariables';


import { html } from 'lit';

import { style } from './PageVariables';

export default {
    title: 'Variables',
    primary: false,
    // @ToDo Should this be called createVariablesView?
    render: () => createVariablesPage(),
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
        layout: 'fullscreen',
    },
    data: {
        bodytext: "default default VariablesDefault.args Args Data bodytext"
    },
    argTypes: {

    },
};

// used for page simple
const ContentElementsPanelTemplate = (args) => FluidTemplate({
    extension: 'bootstrappackage',
    template: 'ContentElements/Panel',
    partial: '',
    section: 'Main',
    args
});




export const VariablesDefault = ContentElementsPanelTemplate.bind({});
VariablesDefault.argTypes = {
    /*
    settings: {
        scss: {
            white: { control: 'color' },
        }
    },
    colors: {
        white: { control: 'color' },
        black: { control: 'color' },
    }
    */
}

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

// https://github.com/storybookjs/storybook/issues/17089
// import { useArgs } from '@storybook/client-api';
import React from 'react';
const Template = (args) => {
    /*
        const [{ value, onChange }, updateArgs] = useArgs();

        return (
            <Input
                {...args}
                value={value}
                onChange={(e) => {
                    updateArgs({ value: e.target.value });
                    onChange(e);
                }}
            />
        );

     */
};

export const VariablesExtracted = ContentElementsPanelTemplate.bind({
    data: {
        pi_flexform: {
            columns: 4,
            align: "left"
        }
    }
});
VariablesExtracted.storyName = 'VariablesExtracted';
VariablesExtracted.argTypes = {

}
VariablesExtracted.args = {
    data: {
        bodytext: "VariablesExtracted.args Data bodytext"
    }
};


for (let key in style.global ) {
    // filter colors only
    if ( style.global[key].type != "SassColor" ) {
        break
    }
//    console.log(`Variables.stories.js ${key}: ${style.global[key].type}`);
//    console.log(`Variables.stories.js [COLOR] ${key}: ${style.global[key].value.hex}`);

    VariablesExtracted["args"][key] = style.global[key].value.hex ;
    VariablesExtracted["argTypes"][key] = {};
    VariablesExtracted["argTypes"][key]["control"] = 'color';

}

export const PageSimple = ContentElementsPanelTemplate.bind({
    props: { }
});


// uses panel template
PageSimple.args = {
    ...VariablesDefault.args,
    ...VariablesExtracted.args,
    primary: true,
    label: 'Simple',

    data: {
        bodytext: '[data bodytext] Page Simple',
        header: 'Page Simple Header data.args.header class info, layout 1',
        panel_class: "info",
        header_layout: 1,
    }
};
PageSimple.argTypes = {
    ...VariablesDefault.argTypes,
    ...VariablesExtracted.argTypes
}


//https://stackoverflow.com/questions/71848065/adding-external-script-to-specific-story-in-storybook
import { Story, Meta } from '@storybook/react';
import { useEffect, useState } from '@storybook/addons';

/*
export default {
    title: 'Variables',
        //component: MyStory,
        component: PageSimple,
        decorators: [

            (Story) => {
                const [isLoaded, setIsLoaded] = useState(false);
                useEffect(() => {
                    const script = document.createElement('script');
                    script.onload = () => {
                        setIsLoaded(true);
                    };
                    script.src = '/my-script';
                    document.body.appendChild(script);
                    return () => {
                        // clean up effects of script here
                    };
                }, []);

                // return isLoaded ? <Story /> : <div>Loading...</div>;
                return <Story />;
            },
    ],
};
*/

export const LoggedOut = {};
LoggedOut.args = {
    ...VariablesDefault.args,
    ...VariablesDefault.argTypes,
    primary: false,
    label: 'LoggedOut'
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

LoggedIn.args = {
    ...VariablesDefault.args,
    ...VariablesExtracted.args,
    primary: false,
    label: 'LoggedIn'
};

LoggedIn.argTypes = {
    ...VariablesDefault.argTypes,
    ...VariablesExtracted.argTypes
}