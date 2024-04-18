import { within, userEvent, expect } from '@storybook/test';
import { FluidTemplate } from "storybook-typo3fluid/";

export default {
    title: 'Page',

    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
        layout: 'fullscreen',
    },

    argTypes: {
/*
{
    "header" : "header",
    "layout" : 1,
    "class" : "classname",
    "displayClass" : "displayClass",
    "positionClass" : "bottom",
    "link" : "http://www.de"
}
*/

        backgroundColor: { control: 'color' },
        label: { control: 'text' },
        onClick: { action: 'onClick' },
        primary: { control: 'boolean' },
        size: {
            control: { type: 'select' },
            options: ['small', 'medium', 'large'],
        },
        // apiUrl: { control: 'text' },
        apiPassword: { control: 'text' },
    },
};


const Template = (args) => FluidTemplate({
    extension: 'typo3fluid_storybook_example',
    partial: 'Examples/Page',
    args
});


export const PageDefault = Template.bind({});
PageDefault.args = {
    primary: true,
    label: 'Default'
};

export const PageSimple = Template.bind({});
PageSimple.args = {
    primary: true,
    label: 'Simple'
};

export const LoggedIn = Template.bind({});
// More on interaction testing: https://storybook.js.org/docs/writing-tests/interaction-testing
LoggedIn.args = {
// export const LoggedIn = {
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const loginButton = canvas.getByRole('button', { name: /Log in/i });
        await expect(loginButton).toBeInTheDocument();
        await userEvent.click(loginButton);
        await expect(loginButton).not.toBeInTheDocument();

        const logoutButton = canvas.getByRole('button', { name: /Log out/i });
        await expect(logoutButton).toBeInTheDocument();
    }
};


