import { FluidTemplate } from "storybook-typo3fluid/";

import {size} from "../../../../storybook-static/205.4adc836c.iframe.bundle";

import { html } from 'lit';

import panel_http from './panel.http'
import panel_txt from './panel.txt'

// import './debug.scss';
// https://www.w3schools.com/Bootstrap/bootstrap_panels.asp

export default {
    title: 'ContentElements/Panel',
//    component: 'demo-your-component',
//    decorators: [(story) => html`<div style="margin: 3em">${story()}</div>`],
    tags: ['autodocs'],
    args : {
        data: {
            pi_flexform: {

            },
            panel_class: 'default'
        }
    },
    argTypes: {
        data: {
            panel_class: {
                control: { type: 'select' },
                options: ['danger', 'info', 'primary', 'default'],
            }
        },
        panel_class: {
            control: { type: 'select' },
            options: ['danger', 'info', 'primary', 'default'],
        },

        /*
        label: {
            options: ['TRUE', 'Normal', 'Bold', 'Italic'],
            mapping: {
                TRUE: html`<b>True bold</b>`,
                Bold: html`<b>Bold</b>`,
                Italic: html`<i>Italic</i>`,
            },
        },
        */

        // backgroundColor: { control: 'color' },
        // label: { control: 'text' },
        primary: { control: 'boolean' },
        /*
        size: {
            control: { type: 'select' },
            options: ['small', 'medium', 'large'],
        },
        */
        layout: {
            control: { type: 'select' },
            options: ['0', '1', '2'],
        },

        /*
        apiUrl: { control: 'text' },
        apiPassword: { control: 'text' },
        */
    },
};


export const Template = (args) => FluidTemplate({
    extension: 'bootstrappackage',
    template: 'ContentElements/Panel',
    partial: 'ContentElements/',
    section: 'Main',
    args
});

Template.args = {
    panel_class: 'default',
}
Template.args = {
    data: {
        panel_class: Template.args.panel_class,

        header: "[header] Panel with panel-default class",
        header_layout: 0,
        bodytext: "[bodytext] Panel Content",
        pi_flexform: {

        },
//        panel_class: panel_class
    },
    // panel_class : { ...Template.args.data.panel_class },

    settings: {
        header: {
            defaultHeaderType: 1
        }
    },
    layout: 0,
    primary: false,
};
Template.argTypes = {
    panel_class: {
        control: { type: 'select' },
        options: ['danger', 'info', 'primary', 'default'],
    },
    data : {
//      ...panel_class,

    }
}



export const Primary = Template.bind({});
Primary.argTypes = {
    ...Template.argTypes,
}
Primary.args = {
    panel_class: 'danger',
}
Primary.args = {
    data: {
        // panel_class: 'info',
        // panel_class: `${Primary => Primary.args.panel_class}`,
        // panel_class2: { ...Primary.args.panel_class },
        panel_class: Primary.args.panel_class,
        header: "Header layout 1",
        header_layout: 1,
        bodytext: "Bodytext",
    },
    settings: {
        header: {
            defaultHeaderType: 1
        }
    },
    layout: 1,
    primary: true,
};



export const Debug = Template.bind({});
Debug.args = {
    data: {
        panel_class: "danger",
        header: "Debug",
        header_layout: 1,
        bodytext: "[Bodytext]",
    },
    settings: {
        header: {
            defaultHeaderType: 1
        }
    },
    // layout: 1,
    // primary: true,
};
Debug.decorators = [
    // (story) => `${Debug(Tertiary.args)}`,
    // (story) => html`<pre>${story()}</pre>`,
    // (story) => html`${panel_http()}`,

// raw loader deactivated for now debugging
//    (story) => html`${panel_txt()}`,


];


export const Tertiary = Template.bind({});
// https://dev.kukurtihar.com/content-elements/menus/cards
// https://fäb.com/content-elements/menus/cards

// menu_card_dir
// content/colpos0/2/type:menu_card_dir/content/pi_flexform/align
// content/colpos0/2/type:menu_card_dir/content/pi_flexform/columns

// https://api.dev.kukurtihar.com/content-elements/menus/cards
// https://t3v11.ddev.site/content-elements/menus/cards
// https://t3v11.fäb.com/content-elements/menus/cards

// Tertiary with decorators
// Tertiary.decorators = [(story) => html`<pre>${story()}</pre>`];
Tertiary.decorators = [
    (story) => `${Debug(Tertiary.args)}`,
//    (story) => html`<pre>${story()}</pre>`,
];

Tertiary.argTypes = {
    panel_class: {
        options: ['primary', 'danger', 'info'],
        mapping: {
            // default: html`<b>default bold</b>`,
            primary: html`<b>primary Bold</b>`,
            danger: html`<i>danger Italic</i>`,

            Bold: html`<b>Bold</b>`,
//            Italic: html`<i>Italic</i>`,
        },
    },
    "--bs-card-spacer-y": {
        value: {
            control: {
                type: 'number'
            }
        },
        unit: 'rem'
    }
}

Tertiary.args = {
    ...Primary.args,
    primary: false,

    "--bs-card-spacer-y" : "1.7",
    "--bs-card-spacer-x" : "1.7",

    data: {
        panel_class: "info",
        header: "Panel Header Tertiary layout 3",
        bodytext: "Tertiary bodytext",
        header_layout: 3,
//        pi_flexform: {}
    },
    /*
    // inherit from Primary args
    settings: {
        header: {
            defaultHeaderType: 3
        }
    },
    */

};


// const panel_class = Primary.args.data.panel_class.toString();
// const panel_data = JSON.stringify(Primary.args.data);

// deactivated for now
// const panel_text = JSON.stringify(panel_txt);

// const panel_http = JSON.stringify(panel_http);

export const HttpRequest = Template.bind({});
HttpRequest.args = {
    ...Primary.args,
    primary: false,
    data: {
        panel_class: "info",
        header: "Import panel_http",
        subheader: "subheader",
        header_layout: 2,
        bodytext: `<pre>${panel_http}</pre>`,
    },
};
