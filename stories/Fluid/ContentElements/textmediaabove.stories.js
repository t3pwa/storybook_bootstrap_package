import { FluidTemplate } from "storybook-typo3fluid/";
import 'bootstrap/dist/css/bootstrap.min.css';

import {size} from "../../../../storybook-static/205.4adc836c.iframe.bundle";
// import '../../public/typo3conf/ext/bootstrap_package/Resources/Public/Scss/plugins/_cookieconsent.scss';

// import "@scss/theme.scss";



// import "@scss/components/textpic.scss";



// import '../../public/typo3conf/ext/bootstrap_package/Resources/Public/Css/bootstrap5-theme.css';

// import './page_structure_copyright.css';

/*
TYPO3 Header/Header are Typography/Headings in Boostrap
https://getbootstrap.com/docs/5.0/content/typography/#headings
*/

export default {
    title: 'ContentElements/TextmediaAbove',
    tags: ['autodocs'],
    argTypes: {
        data: {
            bodytext: "bodytext default"
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
/*
should be now in .env
 */
//        apiUrl: { control: 'text' },
//        apiPassword: { control: 'text' },
    },
};


export const Template = (args) => FluidTemplate({
    extension: 'bootstrappackage',
    template: 'ContentElements/TextmediaAbove',
    partial: '',
    section: '',
    args
});


export const Primary = Template.bind({});
Primary.args = {
    data: {
        imagecols: 3,
        bodytext: "Primary bodytext, layout 0",

        header_layout: 1,
        header: "Haader/All",
        header_position: "above",
        subheader: "Header/All/Subheader",
        date: "2024-03-27",
        layout: 1,
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
                src: "https://dev.kukurtihar.com/fileadmin/user_upload/undraw_lost_online_re_upmy.svg"
            }
        },

    },

    layout: 1,
    primary: true,
};


export const Tertiary = Template.bind({});
Tertiary.args = {
    header : 'Tertiary Header, layout 4',
    layout : 3,
    class : 'btn btn-tertiary',
    displayClass : 'displayClass-Tertiary',
    positionClass : 'right',
    // link : 'https://typo3.org/right',
    label: 'Tertiary Header Label',
    data: {
        header_layout: 3,
        header: "Haader/All",
        header_position: "above",
        subheader: "Header/All/Subheader",
        date: "2024-03-27",
        layout: 3,
        bodytext: "Tertiary bodytext, layout 2\n\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\""
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
                title: "Image Title",
                _src: "https://t3v11.ddev.site/fileadmin/_processed_/2/e/csm_Antilocapra_americana_Pronghorn_9f7cfcfb72.png",
                id: "591"

            }
        }
    },
};

