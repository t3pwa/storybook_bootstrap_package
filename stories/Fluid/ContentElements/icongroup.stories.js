import { FluidTemplate } from "storybook-typo3fluid/";
import {size} from "../../../../storybook-static/205.4adc836c.iframe.bundle";
// import '../../public/typo3conf/ext/bootstrap_package/Resources/Public/Scss/plugins/_cookieconsent.scss';
// import '../../../public/typo3conf/ext/bootstrap_package/Resources/Public/Css/bootstrap5-theme.css';

import { html } from 'lit';

//import './cardgroup.scss';


export default {
    title: 'ContentElements/IconGroup',

//    component: 'demo-your-component',
//    decorators: [(story) => html`<div style="margin: 3em">${story()}</div>`],

    tags: ['autodocs'],
    args : {
        data: {
            pi_flexform: {
                align: "left",
                columns: "3",
                icon_position: "left"

            },
            uid: 0
        }


    },
    argTypes: {
        label: {
            options: ['TRUE', 'Normal', 'Bold', 'Italic'],
            mapping: {
                TRUE: html`<b>True bold</b>`,
                Bold: html`<b>Bold</b>`,
                Italic: html`<i>Italic</i>`,
            },
        },


        backgroundColor: { control: 'color' },
        // label: { control: 'text' },
        primary: { control: 'boolean' },
        size: {
            control: { type: 'select' },
            options: ['small', 'medium', 'large'],
        },
        layout: {
            control: { type: 'select' },
            options: ['0', '1', '2'],
        },

        apiUrl: { control: 'text' },
        apiPassword: { control: 'text' },
    },
};


export const Template = (args) => FluidTemplate({
    extension: 'bootstrappackage',
    template: 'ContentElements/IconGroup',
    partial: 'ContentElements/',
    section: 'Main',
    args
});


export const Primary = Template.bind({});
Primary.args = {
    data: {
        pi_flexform: {
            columns: "3",
            icon_position: "center",
            align: "center"
        },

    },
    settings: {

    },
    records: {
        "0": {
            data: {
                header: "Header 1",
                subheader: "subheader",
                bodytext: "bodytext",
                link: "https://www.de"
            }
        },
        "1": {
            data: {
                header: "Header 2",
                subheader: "subheader",
                bodytext: "bodytext",
                link: "https://www.de"
            }
        },
        "2": {
            data: {
                header: "Header 3",
                subheader: "subheader 2",
                bodytext: "bodytext 2",
                link: "https://www.2.de"
            }
        }
    },
    layout: 0,
    primary: true,
};

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
Tertiary.decorators = [(story) => html`<pre>${story()}</pre>`];

Tertiary.argTypes = {
    label: {
        options: ['TRUE', 'Normal', 'Bold', 'Italic'],
        mapping: {
            TRUE: html`<b>True bold</b>`,
            Bold: html`<b>Bold</b>`,
            Italic: html`<i>Italic</i>`,
        },
    },
}

Tertiary.args = {
    data: {
        pi_flexform: {
            columns: "3",
            icon_position: "center",
            align: "center"
        }
    },
    settings: {
        header: {
            defaultHeaderType: 0
        }
    },


    layout: 1,
    primary: false,
};

export const Secondary = Template.bind({});
Secondary.args = {
    data: {
        pi_flexform: {
            columns: "3",
            icon_position: "center",
            align: "center"
        }
    },
    settings: {
        header: {
            defaultHeaderType: 0
        }
    },

    layout: 1,
    primary: false,
};
