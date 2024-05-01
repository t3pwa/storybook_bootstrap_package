import { FluidTemplate } from "storybook-typo3fluid/";
import { html } from 'lit';

export default {
    title: 'ContentElements/Quote',

//    component: 'demo-your-component',
//    decorators: [(story) => html`<div style="margin: 3em">${story()}</div>`],

    tags: ['autodocs'],
    args : {
        "data": {
            "quote_link": "https://www.init.de/thema/typo3-public-sector",
            "bodytext": "Wir schöpfen in unserer TYPO3-Unit das volle Potenzial des Systems aus und schaffen einfach nutzbare, zukunftssichere Websites. Das macht uns zum verlässlichsten und umsetzungsstärksten TYPO3-Digitalisierer im Public Sector.",
            "quote_source": " Niels Gongoll\n" +
                "\n" +
                "Unit Manager TYPO3 "
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
    template: 'ContentElements/Quote',
    partial: 'ContentElements/',
    section: 'Main',
    args
});


export const Primary = Template.bind({});
Primary.args = {
    data: {
        pi_flexform: {
            transition: "fade",
            interval: 10,
            wrap: "true"
        },
        uid: 0
    },
    settings: {
        header: {
            defaultHeaderType: 0
        }
    },

    layout: 0,
    primary: true,
};

export const Tertiary = Template.bind({});


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

export const Secondary = Template.bind({});
Secondary.args = {
    data: {
        pi_flexform: {
            transition: "fade",
            interval: 10,
            wrap: "true"
        },
        uid: 2
    },
    settings: {
        header: {
            defaultHeaderType: 0
        }
    },


    layout: 1,
    primary: false,
};
