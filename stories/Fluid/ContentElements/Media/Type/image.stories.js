import { FluidTemplate } from "storybook-typo3fluid/";
import {size} from "../../../../storybook-static/205.4adc836c.iframe.bundle";
// import '../../public/typo3conf/ext/bootstrap_package/Resources/Public/Scss/plugins/_cookieconsent.scss';
// import '../../../public/typo3conf/ext/bootstrap_package/Resources/Public/Css/bootstrap5-theme.css';

export default {
    title: 'ContentElements/Media/Type/Image',
    tags: ['autodocs'],
    args : {
        file: {
            properties: {
                id: "591",
                link: "http://www.de",
                title: "Image Title"
            }
        },
        data: {

        },
    },
    argTypes: {
        data: {

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
    template: '',
    partial: 'ContentElements/Media/Type/Image',
    section: '',
    args
});


export const Primary = Template.bind({});
Primary.args = {

    file: {
        properties: {
            id: "591",
            link: "http://www.de",
            title: "Image Title"
        }
    },
    layout: 0,
    primary: true,
};
