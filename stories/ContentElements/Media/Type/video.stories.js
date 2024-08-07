import { FluidTemplate } from "storybook-typo3fluid/";
import {size} from "../../../../storybook-static/205.4adc836c.iframe.bundle";
// import '../../public/typo3conf/ext/bootstrap_package/Resources/Public/Scss/plugins/_cookieconsent.scss';
// import '../../../public/typo3conf/ext/bootstrap_package/Resources/Public/Css/bootstrap5-theme.css';

export default {
    title: 'ContentElements/Media/Type/Video',
    tags: ['autodocs'],
    args : {
        file: {
            properties: {
                link: "http://www.de",
                title: "Video Title",
                src: "/fileadmin/pexels-rostislav-uzunov-10613973__1080p__2e10da7287.mp4",
                id : 782
            }
        }

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
    partial: 'ContentElements/Media/Type/Video',
    section: '',
    args
});


export const Primary = Template.bind({});
Primary.args = {
    data: {

    },
    settings: {
        media: {
            additionalConfig: {
                "loop": "loop",
                "controls": "controls",
                "autoplay": "autoplay"
            }
        }
    },
    file: {
        properties: {
            link: "http://www.de",
            title: "Primary external SRC Video Title",
            alternative: "Primary external SRC Video Title",
            id: 782,

        }
    },
    layout: 0,
    primary: true,
};




export const Secondary = Template.bind({});
Secondary.args = {
    data: {

    },
    settings: {
        media: {
            additionalConfig: {
//                "loop": 1,
//                "autoplay": 1
            }
        }
    },
    file: {
        properties: {
            id: "782",
            link: "http://www.de",
            title: "Video Title",
            src: "https://t3v11.ddev.site/fileadmin/_processed_/e/9/pexels-rostislav-uzunov-10613973__1080p__e73feb0b12.mp4",
            description: "Video description"
        }
    },
    layout: 0,
    primary: true,
};

