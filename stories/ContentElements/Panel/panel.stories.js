import { FluidTemplate } from "storybook-typo3fluid/";

export const Template = (args) => FluidTemplate({
    extension: 'bootstrappackage',
    template: 'ContentElements/Panel',
    partial: 'ContentElements/',
    section: 'Main',
    args
});


import { html } from 'lit';
import panel_http from './panel.http'

// import {createFrame, Frame} from "../../../packages/storybook_bootstrap_package/stories/Frame";

export const HttpRequest = Template.bind({});
HttpRequest.args = {
    primary: false,
    data: {
        panel_class: "info",
        header: "Import panel_http",
        header_layout: 1,
        subheader: "subheader",
        bodytext: `<pre>${panel_http}</pre>`,
    },
};


export default {
    title: 'ContentElements/Panel',
//    decorators: [(story) => html`<div style="margin: 3em">${story()}</div>`],
    tags: ['autodocs'],
    args : {
        data: {
            /*
            pi_flexform: {
            },
             */
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
        /*
        panel_class: {
            control: { type: 'select' },
            options: ['danger', 'info', 'primary', 'default'],
        },
        */

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
        primary: { control: 'boolean' },
    },
};


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
    primary: false,
};

Template.argTypes = {
    panel_class: {
        control: { type: 'select' },
        options: ['danger', 'info', 'primary', 'default'],
    },
    /*
    // dont use data in argTypes
    data : {
    }
    */
}

export const Primary = Template.bind({});
Primary.argTypes = {
    ...Template.argTypes,
}
Primary.args = {
    ...HttpRequest.args,
    data: {
        ...HttpRequest.args.data,
        panel_class: 'success',
    },
//    ...default.args,
    primary: true,
};


export const Debug = Template.bind({});
Debug.args = {
    data: {
        ...Primary.args.data,
        panel_class: "danger",
        header: "Debug",
        // header_layout: 1,
        bodytext: "[Bodytext]",
    },
    /*
    settings: {
        header: {
            defaultHeaderType: 1
        }
    },
     */
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
//    ...Primary.args,
    ...HttpRequest.args,
    primary: false,

    "--bs-card-spacer-y" : "1.7",
    "--bs-card-spacer-x" : "1.7",

    data: {
        ...HttpRequest.args.data,
        panel_class: "info",
        header: "Panel Header Tertiary (panel_class: info)",
        bodytext: "Tertiary bodytext",
//        header_layout: 3,
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

import { createFrame, Frame } from './../../Frame';

export const DefaultFrame = {
    render: ({ label, ...args }) => {
        return createFrame({ label, ...args});
    },
    argTypes: {...Frame.argTypes},
    args: {
        ...Frame.args,
        innerHTML: Template(Primary.args),
        frameLayout: 'custom-boxxed'
    }
};