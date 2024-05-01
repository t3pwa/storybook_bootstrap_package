// import './news_list.scss';

import { FluidTemplate } from "storybook-typo3fluid/";

export default {
    title: 'News/List',

    argTypes: {
        backgroundColor: { control: 'color' },
        label: { control: 'text' },
        onClick: { action: 'onClick' },
        primary: { control: 'boolean' },

        /*
        size: {
            control: { type: 'select' },
            options: ['small', 'medium', 'large'],
        },
        */

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
    primary: true,
    label: 'News',

    data: {
        news: {
            0: {
                data: {
                    title: "0/record/data/title",
                    header: "0/record/data/header",
                    subheader: "0/record/data/subheader",
                    bodytext: "records/0/data/bodytext<br>Lorem ipsum bodytext<br>...<br>..<br>.<br>\n/end",
                    link: "http://www.de",
                    link_title: "Read more",
                    link_class: "primary",
                },
                image: {
                    0: {
                        properties: {
                            link: "http://www.de",
                            link_class: "primary",
                            header: "record/data/image/properties/header",
                            title: "0/record/data/image/properties/title",
                            src: "https://t3v11.ddev.site/fileadmin/_processed_/2/e/csm_Antilocapra_americana_Pronghorn_9f7cfcfb72.png"
                        }
                    }
                }
            },
        }

    }

};

