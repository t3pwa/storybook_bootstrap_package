import { FluidTemplate } from "storybook-typo3fluid/";
import {size} from "../../../../storybook-static/205.4adc836c.iframe.bundle";
import { html } from 'lit';
export default {
    title: 'ContentElements/MenuCategorizedContent',
    tags: ['autodocs'],
    args : {
        data : {
            pi_flexform: {
                align: "left",
                columns: "3",
                icon_position: "left"
            },
        },
        settings: {
            "header": {
                "defaultHeaderType": 0
            }


        },
        content: {
            "0": {
                data: {
                    pid: 16,
                    "uid": 0,
                    header: "header0"
                }
            },
            "1": {
                data: {
                    pid: 16,
                    "uid": 1,
                    header: "header 1b",
                    "link": "http://www.de"
                },

                "image": {
                    "link": "http://www.de",
                    "header": "record/image/header"
                }
            }
        }
    },
};

export const Template = (args) => FluidTemplate({
    extension: 'bootstrappackage',
    template: 'ContentElements/MenuCategorizedContent',
    partial: '',
    section: '',
    args
});


export const Primary = Template.bind({});
Primary.args = {
    data: {
        pi_flexform: {
            columns: 4,
            align: "left"
        }
    },




    layout: 0,
    primary: true,
};

