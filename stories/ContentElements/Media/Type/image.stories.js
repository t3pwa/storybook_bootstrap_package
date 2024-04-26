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
                id: 765,
                link: "http://www.de",
                title: "exchange"
            }
        },
        data: {

        },
    },
    argTypes: {
        data: {

        },
        // label: { control: 'text' },
        primary: { control: 'boolean' },
        size: {
            control: { type: 'select' },
            options: ['small', 'medium', 'large'],
        },
        layout: {
            control: { type: 'select' },
            options: ['0', '1', '2'],
        }
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


export const Secondary = Template.bind({});
Secondary.args = {
    title: "SVG",
    file: {
        properties: {
            id: 770,
            link: "http://svg.org",
            title: "SVG Title"
        }
    },
    layout: 0,
    primary: true,
};

export const OpenSVG = Template.bind({});
OpenSVG.args = {
    title: "open SVG",
    file: {
        properties: {
            _id: 770,
            src: "/fileadmin/user_upload/undraw_relaunch_day_902d.svg",
            link: "http://svg.org",
            title: "Open SVG Title",
            embedSVG: 1
        }
    },
    layout: 0,
    primary: true,
};