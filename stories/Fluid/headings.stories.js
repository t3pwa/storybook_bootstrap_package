// import { FluidTemplate } from "storybook-typo3fluid/dist/vite";
import { FluidTemplate } from "storybook-typo3fluid/";

export default {
    title: 'Example/Headings',

    argTypes: {
        backgroundColor: { control: 'color' },
        label: { control: 'text' },
        onClick: { action: 'onClick' },
        primary: { control: 'boolean' },
        size: {
            control: { type: 'select' },
            options: ['small', 'medium', 'large'],
        },
        apiUrl: { control: 'text' },
        apiPassword: { control: 'text' },
    },
};


export const Template = (args) => FluidTemplate({
    extension: 'typo3fluid_storybook_example',
    partial: 'Examples/Button',
    args
});


export const Primary = Template.bind({});
Primary.args = {
    primary: true,
    label: 'Button'
};


export const H1 = () => '<h1>Heading 1</h1>'
export const H2 = () => '<h2>Heading 2</h2>'
export const H3 = () => '<h3>Heading 3</h3>'
export const H4 = () => '<h4>Heading 4</h4>'
export const H5 = () => '<h5>Heading 5</h5>'
export const H6 = () => '<h6>Heading 6</h6>'
