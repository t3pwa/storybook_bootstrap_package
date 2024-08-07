import { FluidTemplate } from "storybook-typo3fluid/";
import { html } from 'lit';

export default {
    title: 'ContentElements/Tab',
    tags: ['autodocs'],
    args : {

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

        data: {
            external_media_source: "https://www.youtube.com/watch?v=ufcPzP1baPk"
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
    template: 'ContentElements/Tab',
    partial: 'ContentElements/',
    section: '',
    args
});


export const Primary = Template.bind({});
Primary.args = {
    data: {
        pi_flexform: {
            default_element: "1",
            align: "left"
        },
        uid: "0"
    },

    records: { // records are called items in headless
        0: {
            data: {
                uid: "0",
                // title: "0/record/data/title",
                header: "header 0",
                subheader: "0/record/data/subheader",
                bodytext: "records/0/data/bodytext<br>Lorem ipsum bodytext<br>...<br>..<br>.<br>\n/end",
                link: "http://www.de",
                link_title: "Read more",
                link_class: "primary",
            },
            files: {
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
        1: {
            // header: "accordion/record/1/header",
            data: {
                uid: "1",
                header: "1/record/data/header",
                bodytext: "Lorem ipsum bodytext 1",
                subheader: "Sup header?",
                link: "/news",
                link_title: "Read more",
                link_class: "primary",

            },
            files: {
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
        2: {

            header: "accordion/record/2/header",
            data: {
                uid: "2",
                header: "Once upon a time, they lived happily after all",
                bodytext: "Lorem ipsum bodytext<br><br><br><hr>...",
                subheader: "Sup header?",
                link: "/news",
                link_title: "Read more",
                link_class: "primary",
            },
            image: {
                link: "http://www.de",
                header: "record/image/header",
                title: "record/image/header",


                0: {
                    properties: {
                        link: "http://www.de",
                        header: "record/image/header",
                        title: "record/image/header",
                        uid: "584"
                    }
                }

            }
        }
    },
    layout: 0,
    primary: true,
};

export const Tertiary = Template.bind({});


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
            columns: 3,
            align: "left"
        }
    },

    records: { // records are items in headless
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
        1: {
            data: {
                header: "1/record/data/header",
                bodytext: "Lorem ipsum bodytext",
                subheader: "Sup header?",
                link: "/news",
                link_title: "Read more",
                link_class: "primary",



            },
            link: "http://www.de",
            link_class: "secodary",
            title: "record/image/header",
            image: {
                0: {
                    properties: {
                        link: "http://www.de",
                        header: "record/image/header",
                        title: "record/image/header",
                        src: "https://dev.kukurtihar.com/fileadmin/user_upload/undraw_lost_online_re_upmy.svg"
                    }
                }
            }
        },
        2: {
            data: {
                header: "Once upon a time, they lived happily after all",
                bodytext: "Lorem ipsum bodytext<br><br><br><hr>...",
                subheader: "Sup header?",
                link: "/news",
                link_title: "Read more",
                link_class: "primary",
            },
            image: {
                link: "http://www.de",
                header: "record/image/header",
                title: "record/image/header",

                0: {
                    properties: {
                        link: "http://www.de",
                        header: "record/image/header",
                        title: "record/image/header",
                        src: "https://t3v11.ddev.site/fileadmin/_processed_/2/e/csm_Antilocapra_americana_Pronghorn_9f7cfcfb72.png"
                    }
                }

            }
        }
    },

    layout: 1,
    primary: false,
};


//import { createFrame, Frame } from './../../ViewHelpers/Frame';
import { createFrame, Frame } from 'stories/ViewHelpers/Frame';

export const DefaultFrame = {
    render: ({ label, ...args }) => {
        return createFrame({ label, ...args});
    },
    argTypes: {...Frame.argTypes},
    args: {
        ...Frame.args,
        innerHTML: Template(Primary.args),
        frameLayout: 'custom-boxxed'
    }
};