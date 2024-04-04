import './news_list.css';

import { FluidTemplate } from "storybook-typo3fluid/";

export default {
    title: 'News/List',

    argTypes: {
        backgroundColor: { control: 'color' },
        label: { control: 'text' },
        onClick: { action: 'onClick' },
        primary: { control: 'boolean' },
        size: {
            control: { type: 'select' },
            options: ['small', 'medium', 'large'],
        },

        exampleProp: { control: 'text' },
        apiUrl: { control: 'text' },
        apiPassword: { control: 'text' },
    },
};


export const Template = (args) => FluidTemplate({
    extension: 'news',
    template: 'News/List',
    section: 'Main',
    args
});


export const Primary = Template.bind({});
Primary.args = {
    exampleProp: process.env.STORYBOOK_TYPO3FLUID_API_URL,

    primary: true,
    label: 'News'
};

