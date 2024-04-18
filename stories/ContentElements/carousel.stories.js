import { FluidTemplate } from "storybook-typo3fluid/";
import {size} from "../../../../storybook-static/205.4adc836c.iframe.bundle";
// import '../../public/typo3conf/ext/bootstrap_package/Resources/Public/Scss/plugins/_cookieconsent.scss';
// import '../../../public/typo3conf/ext/bootstrap_package/Resources/Public/Css/bootstrap5-theme.css';

import { html } from 'lit';

//import './cardgroup.scss';


export default {
    title: 'ContentElements/Carousel',

//    component: 'demo-your-component',
//    decorators: [(story) => html`<div style="margin: 3em">${story()}</div>`],

    tags: ['autodocs'],
    args : {
        data: {
            pi_flexform: {
                transition: "fade",
                interval: "100",
                wrap: true
            },
            uid: 0
        }


    },
    argTypes: {
        label: {
            options: ['TRUE', 'Normal', 'Bold', 'Italic'],
            mapping: {
                TRUE: html`<b>True bold</b>`,
                Bold: html`<b>Bold</b>`,
                Italic: html`<i>Italic</i>`,
            },
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
    template: 'ContentElements/Carousel',
    partial: 'ContentElements/',
    section: 'Main',
    args
});


export const Primary = Template.bind({});
Primary.args = {
    data: {
        pi_flexform: {
            transition: "fade",
            interval: 10,
            wrap: "true"
        },
        uid: 0
    },
    settings: {
        header: {
            defaultHeaderType: 0
        }
    },
    records: {
        "0": {
            link: "http://www.de",
            nav_title: "carousel/record/0/header",
            header: "carousel/record/0/header",
            layout: 0,

            // only one?
            images: {
                0: {
                    properties: {
                        link: "http://storybook.dev.typo3.init?path=/story/contentelements-carousel--primary",
                        link_class: "primary",
                        header: "images/0/record/data/image/properties/header",
                        title: "images/0/record/data/image/properties/title",
                        _src: "https://t3v11.ddev.site/fileadmin/_processed_/2/e/csm_Antilocapra_americana_Pronghorn_9f7cfcfb72.png",
                        id: 767
                    }
                }
            },

            data: {
                uid: "0",
                item_type: "image",
                background_color: "",
                text_color: "",
            }

        },
        "1": {
            link: "http://www.de",
            nav_title: "carousel/record/1/header",
            header: "carousel/record/1/header",
            layout: 1,

            images: {
                0: {
                    properties: {
                        link: "http://www.de",
                        link_class: "primary",
                        header: "1/record/data/image/properties/header",
                        title: "1/record/data/image/properties/title",
                        _src: "",
                        id: 767,
                    }
                }
            },

            data: {
                item_type: "image",
                background_color: "#00ff00",
                text_color: "$white"
            }

        }
    },
    layout: 0,
    primary: true,
};


export const Special = Template.bind({});
Special.args = {
    data: {
        pi_flexform: {
            transition: "fade",
            interval: 10,
            wrap: "true"
        },
        uid: 0
    },
    settings: {
        header: {
            defaultHeaderType: 0
        }
    },
    records: {
        0: {
            link: "http://www.de",
            nav_title: "carousel/record/0/header",
            header: "carousel/record/0/header",
            layout: 0,

            // only one?
            images: {
                0: {
                    properties: {
                        link: "http://storybook.dev.typo3.init?path=/story/contentelements-carousel--primary",
                        link_class: "primary",
                        header: "images/0/record/data/image/properties/header",
                        title: "images/0/record/data/image/properties/title",
                        _src: "https://t3v11.ddev.site/fileadmin/_processed_/2/e/csm_Antilocapra_americana_Pronghorn_9f7cfcfb72.png",
                        id: 767
                    }
                }
            },

            data: {
                uid: "0",
                item_type: "image",
                background_color: "",
                text_color: "",
            }

        },
        1: {
            link: "http://www.de",
            nav_title: "carousel/record/1/header",
            header: "carousel/record/1/header",
            layout: 1,

            images: {
                0: {
                    properties: {
                        link: "http://www.de",
                        link_class: "primary",
                        header: "1/record/data/image/properties/header",
                        title: "1/record/data/image/properties/title",
                        _src: "",
                        id: 767,
                    }
                }
            },

            data: {

                item_type: "call_to_action",
                background_color: "#00ff00",
                text_color: "$white"
            }

        }
    },
    layout: 0,
    primary: true,
};

export const Tertiary = Template.bind({});

// https://dev.kukurtihar.com/content-elements/menus/cards
// https://fäb.com/content-elements/menus/cards

// menu_card_dir
// content/colpos0/2/type:menu_card_dir/content/pi_flexform/align
// content/colpos0/2/type:menu_card_dir/content/pi_flexform/columns

// https://api.dev.kukurtihar.com/content-elements/menus/cards
// https://t3v11.ddev.site/content-elements/menus/cards
// https://t3v11.fäb.com/content-elements/menus/cards

// Tertiary with decorators
Tertiary.decorators = [(story) => html`<pre>${story()}</pre>`];

Tertiary.argTypes = {
    label: {
        options: ['TRUE', 'Normal', 'Bold', 'Italic'],
        mapping: {
            TRUE: html`<b>True bold</b>`,
            Bold: html`<b>Bold</b>`,
            Italic: html`<i>Italic</i>`,
        },
    },
}

Tertiary.args = {
    data: {
        pi_flexform: {
            transition: "fade",
            interval: 10,
            wrap: "true"
        },
        uid: 0
    },
    settings: {
        header: {
            defaultHeaderType: 0
        }
    },
    records: {
        "0": {
            link: "http://www.de",
            nav_title: "carousel/record/0/header",
            header: "carousel/record/0/header",
            layout: 0,

            images: {
                0: {
                    properties: {
                        link: "http://storybook.dev.typo3.init?path=/story/contentelements-carousel--primary",
                        link_class: "primary",
                        header: "images/0/record/data/image/properties/header",
                        title: "images/0/record/data/image/properties/title",
                        src: "https://t3v11.ddev.site/fileadmin/_processed_/2/e/csm_Antilocapra_americana_Pronghorn_9f7cfcfb72.png"
                    }
                }
            },

            data: {
                uid: "0",
                item_type: "image",
                background_color: "",
                text_color: "",
            }

        },
        "1": {
            link: "http://www.de",
            nav_title: "carousel/record/1/header",
            header: "carousel/record/1/header",
            layout: 1,

            images: {
                0: {
                    properties: {
                        link: "http://www.de",
                        link_class: "primary",
                        header: "1/record/data/image/properties/header",
                        title: "1/record/data/image/properties/title",
                        _src: "",
                        id: "594",
                    }
                }
            },

            data: {
                item_type: "Image",
                background_color: "",
                text_color: ""
            }

        }
    },

    layout: 1,
    primary: false,
};

export const Secondary = Template.bind({});
Secondary.args = {
    data: {
        pi_flexform: {
            transition: "fade",
            interval: 10,
            wrap: "true"
        },
        uid: 2
    },
    settings: {
        header: {
            defaultHeaderType: 0
        }
    },
    records: {
        "0": {
            link: "http://www.de",
            nav_title: "carousel/record/0/header",
            header: "carousel/record/0/header",
            layout: 0,

            images: {
                0: {
                    properties: {
                        link: "http://storybook.dev.typo3.init?path=/story/contentelements-carousel--primary",
                        link_class: "secondary",
                        header: "images/0/record/data/image/properties/header",
                        title: "images/0/record/data/image/properties/title",
                        id: "594",
                    }
                }
            },

            data: {
                uid: "0",
                item_type: "image",
                background_color: "",
                text_color: "",
            }

        },
        "1": {
            link: "http://www.de",
            nav_title: "carousel/record/1/header",
            header: "carousel/record/1/header",
            layout: 1,

            images: {
                0: {
                    properties: {
                        link: "http://www.de",
                        link_class: "primary",
                        header: "1/record/data/image/properties/header",
                        title: "1/record/data/image/properties/title",
                        _src: "",
                        id: 594,
                    }
                }
            },

            data: {
                item_type: "Image",
                background_color: "",
                text_color: ""
            }

        }
    },

    layout: 1,
    primary: false,
};
