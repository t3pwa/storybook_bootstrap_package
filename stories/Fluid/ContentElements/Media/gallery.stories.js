import { FluidTemplate } from "storybook-typo3fluid/";
import {size} from "../../../../storybook-static/205.4adc836c.iframe.bundle";
// import '../../public/typo3conf/ext/bootstrap_package/Resources/Public/Scss/plugins/_cookieconsent.scss';
// import '../../../public/typo3conf/ext/bootstrap_package/Resources/Public/Css/bootstrap5-theme.css';

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
                title: "Image Title",
                src: "https://t3v11.ddev.site/fileadmin/_processed_/2/e/csm_Antilocapra_americana_Pronghorn_9f7cfcfb72.png"
            }
        },
        1: {
            properties: {
                link: "http://www.de",
                title: "Video Title",
                src: "https://t3v11.ddev.site/fileadmin/_processed_/e/9/pexels-rostislav-uzunov-10613973__1080p__e73feb0b12.mp4#t=5"
            }
        }
    },
    layout: 0,
    primary: true,
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