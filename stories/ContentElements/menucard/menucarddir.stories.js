import { FluidTemplate } from "storybook-typo3fluid/";
import {size} from "../../../../storybook-static/205.4adc836c.iframe.bundle";
import { html } from 'lit';
export default {
    title: 'ContentElements/MenuCardDir',
    tags: ['autodocs'],
    args : {
        "menu": {
            "accordion": {
                title: "Accordion",
                link: "https://dev.init",
                data: {
                    "abstract": "Abstract <br> \n\r \n\r \n\r /end"
                },
                "files": {
                    "0": {
                        "properties": {
                            "title": "image",
                            "id": 0
                        }
                    },
                }
            },
            "menucarddir": {
                "title": "Menu Card Directory",
                "link": "https://dev.init:6006/?path=/story/contentelements-menucarddir--primary",
                "data": {
                    "abstract": "[Abstract] Menu Card Directory <br><br>"
                },
                files: {
                    0: {
                        properties: {
                            title: "image",
                            id: 0
                        }
                    },
                }
            },
            "cardgroup": {
                "title": "Card Group",
                "link": "https://dev.init:6006/?path=/story/contentelements-cardgroup--primary",
                "data": {
                    "abstract": "[Abstract] Card Groups <br><br>"
                },
                "files": {
                    "0": {
                        "properties": {
                            "title": "image",
                            "id": 0
                        }
                    },
                }
            }

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
            },

            menucard: {
                title: {
                    crop: 25
                },
                subtitle: {
                    crop: 35
                },
                abstract: {
                    crop: 65
                },
                icon: {
                    height: 16,
                    width: 24
                }
            },
        },
    },
};

export const Template = (args) => FluidTemplate({
    extension: 'bootstrappackage',
    template: 'ContentElements/MenuCardDir',
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

