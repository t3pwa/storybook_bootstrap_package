import { FluidTemplate } from "storybook-typo3fluid/";
import { html } from 'lit';

import './cardgroup.scss';

export default {
    title: 'ContentElements/CardGroup',

//    component: 'demo-your-component',
//    decorators: [(story) => html`<div style="margin: 3em">${story()}</div>`],

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
        }
    },
};


export const Template = (args) => FluidTemplate({
    extension: 'bootstrappackage',
    template: 'ContentElements/CardGroup',
    partial: '',
    section: '',
    args
});


export const Primary = Template.bind({});
Primary.args = {
    data: {
        pi_flexform: {
            columns: 3,
            align: "left"
        }
    },
    records: { // records are called items in headless
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
                        header: "record/data/image/properties/header",
                        title: "0/record/data/image/properties/title",
                        src: "https://t3v11.ddev.site/fileadmin/_processed_/2/e/csm_Antilocapra_americana_Pronghorn_9f7cfcfb72.png"
                    }
                }
            }
        },
        1: {
            data: {
                header: "[Header] Lorem ipsum doloret 1/record/data/header",
                bodytext: "Lorem ipsum bodytext",
                subheader: "Sup header?",
                link: "/news",
                link_title: "Read more",
                link_class: "primary",
            },
            link: "http://www.de",
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
                        _src: "https://t3v11.ddev.site/fileadmin/_processed_/2/e/csm_Antilocapra_americana_Pronghorn_9f7cfcfb72.png",
                        id: "765"
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
    frame: {
        type: "textmedia"
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
                header: "[Header] Lorem ipsum doloret 1/record/data/header",
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


export const Secondary = Template.bind({});
Secondary.args = {
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
                header: "[Header] Lorem ipsum doloret 1/record/data/header",
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
                header: "Once upon a time, they lived happily after all!",
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
                        id: 771
                    }
                }

            }
        },
        3: {
            data: {
                header: "Once upon a time, they lived happily after all!",
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
                        id: 771
                    }
                }

            }
        },
        4: {
            data: {
                header: "Once upon a time, they lived happily after all!",
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
                        id: 771
                    }
                }

            }
        }

    },
    layout: 1,
    primary: false,
};


export const Columns4 = Template.bind({});
Columns4.args = {
    data: {
        pi_flexform: {
            columns: 4,
            align: "center"
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
                header: "[Header] Lorem ipsum doloret 1/record/data/header",
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
                        _src: "https://t3v11.ddev.site/fileadmin/_processed_/2/e/csm_Antilocapra_americana_Pronghorn_9f7cfcfb72.png",
                        id: 590
                    }
                }

            }
        },
        3: {
            data: {
                header: "Once upon a time, they lived happily after all!",
                bodytext: "Lorem ipsum bodytext<br><br><br><hr>...",
                subheader: "Sup header? 4",
                link: "/news",
                link_title: "Read more 4",
                link_class: "primary-4",
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
                        _src: "https://t3v11.ddev.site/fileadmin/_processed_/2/e/csm_Antilocapra_americana_Pronghorn_9f7cfcfb72.png",
                        id: 771
                    }
                }

            }
        }
    },

    layout: 3,
    primary: false,
};


/* **************************** */
// copied from textmedialeft
// Frame.decorators = [
// old way
/*
Columns3framed.decorators = [
    (story) => `
<div class="frame frame-default 
    frame-type-`+Tertiary.args.frame.type+`
    frame-background-light
    frame-textmedia-reversed 
    frame-default-indentation-image-bottom
">
    <div class="frame-group-container">
        <div class="frame-group-inner">
            <div class="frame-container frame-container-default">
                ${Columns3framed(Tertiary.args)}
            </div>
        </div>
    </div>
</div> <!-- frame end -->
    `,
    // (story) => html`<pre>${story()}</pre>`,
    // (story) => html`${panel_http()}`,
    // (story) => html`${panel_txt()}`,
];
*/

import { createFrame, Frame } from './../../Frame';
//import { createFrame, Frame } from 'stories/Frame';

export const DefaultFrame = {
    render: ({ label, ...args }) => {
        return createFrame({ label, ...args});
    },
    argTypes: {...Frame.argTypes},
    args: {
        ...Frame.args,
        innerHTML: Template(Primary.args),
        frameLayout: 'custom-boxxed',
        data: {
            pi_flexform: {
                columns: 3
            }
        }
    }
};



export const DefaultFrameB = {
    render: ({ label, ...args }) => {
        return createFrame({ label, ...args});
    },
    argTypes: {...Frame.argTypes},
    args: {
        ...Frame.args,
        innerHTML: Template(Secondary.args),
        frameLayout: 'custom-boxxed',
        data: {
            pi_flexform: {
                columns: 4
            }
        }
    }
};
