import { FluidTemplate } from "storybook-typo3fluid/";
import {size} from "../../../../storybook-static/205.4adc836c.iframe.bundle";
// import '../../public/typo3conf/ext/bootstrap_package/Resources/Public/Scss/plugins/_cookieconsent.scss';
// import '../../../public/typo3conf/ext/bootstrap_package/Resources/Public/Css/bootstrap5-theme.css';

export default {
    title: 'ContentElements/ExternalMedia',
    tags: ['autodocs'],
    args : {
        data: {
            external_media_source: "https://www.youtube.com/embed/dA_UO86MjLY?si=bfCsuJ50dWjD3nqF"
            // external_media_ratio: "16x9"
        },
    },
    argTypes: {
        data: {
            external_media_source: "https://www.youtube.com/embed/dA_UO86MjLY?si=bfCsuJ50dWjD3nqF"
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

//        apiUrl: { control: 'text' },
//        apiPassword: { control: 'text' },
    },
};

export const Template = (args) => FluidTemplate({
    extension: 'bootstrappackage',
    template: 'ContentElements/ExternalMedia',
    partial: '',
    section: '',
    args
});


export const Primary = Template.bind({});
Primary.args = {
    data: {
        external_media_source: "https://www.youtube.com/embed/dA_UO86MjLY?si=bfCsuJ50dWjD3nqF"
    },
    layout: 0,
    primary: true,
};

export const Secondary = Template.bind({});
Secondary.args = {
    data: {
        external_media_source: "https://www.youtube.com/watch?v=ufcPzP1baPk"
        // external_media_ratio: "4x3"
    },
    layout: 0,
    primary: true,
};