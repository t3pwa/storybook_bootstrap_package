import { FluidTemplate } from "storybook-typo3fluid/";
import {size} from "../../../../storybook-static/205.4adc836c.iframe.bundle";
// import '../../public/typo3conf/ext/bootstrap_package/Resources/Public/Scss/plugins/_cookieconsent.scss';
// import '../../../../public/typo3conf/ext/bootstrap_package/Resources/Public/Css/bootstrap5-theme.css';

export default {
    title: 'ContentElements/Media/Gallery',
    tags: ['autodocs'],
    args : {

    },
    argTypes: {
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

        apiPassword: { control: 'text' },
    },
};


export const Template = (args) => FluidTemplate({
    extension: 'bootstrappackage',
    template: '',
    partial: 'ContentElements/Media/Gallery',
    section: '',
    args
});


export const Primary = Template.bind({});
Primary.args = {

    pi_flexform: {
        align: "left",
        columns: "3",
    },

    data: {
        imagecols: 3
    },
    settings: {
        gallery: {
            columns: {
                3: {
                    multiplier: {},
                    gutters: {},
                    corrections: {}
                }
            }
        }
    },

    files: {
        0: {
            properties: {
                link: "http://www.de",
                title: "the-creative-exchange-373981-unsplash.jpg",
                _src: "https://t3v11.ddev.site/fileadmin/_processed_/2/e/csm_Antilocapra_americana_Pronghorn_9f7cfcfb72.png",
                id: "765"
            }
        },
        1: {
            properties: {
                link: "http://www.de",
                title: "Image Title",
                _src: "https://t3v11.ddev.site/fileadmin/_processed_/e/9/pexels-rostislav-uzunov-10613973__1080p__e73feb0b12.mp4#t=5",
                type: "image",
                id: "765"
            }
        }
    },
    layout: 0,
    primary: true,
};


export const Secondary = Template.bind({});
Secondary.args = {

    data: {
        imagecols: 3
    },
    settings: {
        gallery: {
            columns: {
                3: {
                    multiplier: {},
                    gutters: {},
                    corrections: {}
                }
            }
        }
    },

    files: {
        0: {
            properties: {
                link: "http://www.de",
                title: "the-creative-exchange-373981-unsplash.jpg",
                _id: "765",
                type: "image"
            }
        }
    },
    layout: 0,
    primary: false,
};


/*
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
const meta: Meta<typeof Button> = {
    component: Button,
};
export default meta;

type Story = StoryObj<typeof Button>;
export const Secondary: Story = {
    decorators: [
        (Story) => (
            <div style={{ margin: '3em' }}>
                {// 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  }
                <Story />
            </div>
        ),
    ],
};

*/