import { FluidTemplate } from "storybook-typo3fluid/";
import {size} from "../../../../storybook-static/205.4adc836c.iframe.bundle";
import { html } from 'lit';
export default {
    title: 'ContentElements/MenuThumbnailDir',
    tags: ['autodocs'],
    args : {
        data : {
            pi_flexform: {
                align: "left",
                columns: "3",
                icon_position: "left"
            },
        },

        "menu": {
            0: {
                title: "menu/Accordion 1",
                link: "https://dev.init",
                target: "",
                data: {
                    "abstract": "Abstract <br> \n\r \n\r \n\r /end",
                },
                files: {
                    0: {
                        properties: {
                            link: "http://www.de",
                            title: "the-creative-exchange-373981-unsplash.jpg",
                            _src: "https://t3v11.ddev.site/fileadmin/_processed_/2/e/csm_Antilocapra_americana_Pronghorn_9f7cfcfb72.png",
                            id: 765
                        }
                    },
                    1: {
                        properties: {
                            link: "http://www.de",
                            title: "Image Title",
                            _src: "https://t3v11.ddev.site/fileadmin/_processed_/e/9/pexels-rostislav-uzunov-10613973__1080p__e73feb0b12.mp4#t=5",
                            type: "image",
                            id: 763
                        }
                    }
                },
            },
            1: {
                "title": "Menu Card Directory",
                "link": "https://dev.init:6006/?path=/story/contentelements-menucarddir--primary",
                "data": {
                    "abstract": "[Abstract] Menu Card Directory <br><br>"
                },
                files: {
                    0: {
                        properties: {
                            link: "http://www.de",
                            title: "the-creative-exchange-373981-unsplash.jpg",
                            _src: "https://t3v11.ddev.site/fileadmin/_processed_/2/e/csm_Antilocapra_americana_Pronghorn_9f7cfcfb72.png",
                            id: 767
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
            },
            3: {
                "title": "Card Group",
                "link": "https://dev.init:6006/?path=/story/contentelements-cardgroup--primary",
                "data": {
                    "abstract": "[Abstract] Card Groups <br><br>"
                },
                files: {
                    0: {
                        properties: {
                            link: "http://www.de",
                            title: "the-creative-exchange-373981-unsplash.jpg",
                            _src: "https://t3v11.ddev.site/fileadmin/_processed_/2/e/csm_Antilocapra_americana_Pronghorn_9f7cfcfb72.png",
                            id: 772
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
            }

        },
        settings: {
            /*
            gallery: {
                columns: {
                    3: {
                        multiplier: {},
                        gutters: {},
                        corrections: {}
                    }
                }
            },
            */
            menuthumbnail: {
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
            /*
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
            */


        },
    },
};

export const Template = (args) => FluidTemplate({
    extension: 'bootstrappackage',
    template: 'ContentElements/MenuThumbnailDir',
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


    menu: {
        // ...default.args,
        4: {
            title: "associative menu/Fourth 0",
            link: "https://dev.init",
            target: "",
            data: {
                "abstract": "Abstract <br> \n\r \n\r \n\r /end",
            },
            files: {
                0: {
                    properties: {
                        link: "http://www.de",
                        title: "the-creative-exchange-373981-unsplash.jpg",
                        _src: "https://t3v11.ddev.site/fileadmin/_processed_/2/e/csm_Antilocapra_americana_Pronghorn_9f7cfcfb72.png",
                        id: 765
                    }
                },
                1: {
                    properties: {
                        link: "http://www.de",
                        title: "Image Title",
                        _src: "https://t3v11.ddev.site/fileadmin/_processed_/e/9/pexels-rostislav-uzunov-10613973__1080p__e73feb0b12.mp4#t=5",
                        type: "image",
                        id: 763
                    }
                }
            },
        },
        51: {
            title: "menu/Fourth2",
            link: "https://dev.init",
            target: "",
            data: {
                "abstract": "Abstract <br> \n\r \n\r \n\r /end",
            },
            files: {
                0: {
                    properties: {
                        link: "http://www.de",
                        title: "the-creative-exchange-373981-unsplash.jpg",
                        _src: "https://t3v11.ddev.site/fileadmin/_processed_/2/e/csm_Antilocapra_americana_Pronghorn_9f7cfcfb72.png",
                        id: 767
                    }
                },
                1: {
                    properties: {
                        link: "http://www.de",
                        title: "Image Title",
                        _src: "https://t3v11.ddev.site/fileadmin/_processed_/e/9/pexels-rostislav-uzunov-10613973__1080p__e73feb0b12.mp4#t=5",
                        type: "image",
                        id: 763
                    }
                }
            },
        },
        41: {
            title: "menu/Fourth3",
            link: "https://dev.init",
            target: "",
            data: {
                "abstract": "Abstract <br> \n\r \n\r \n\r /end",
            },
            files: {
                0: {
                    properties: {
                        link: "http://www.de",
                        title: "the-creative-exchange-373981-unsplash.jpg",
                        _src: "https://t3v11.ddev.site/fileadmin/_processed_/2/e/csm_Antilocapra_americana_Pronghorn_9f7cfcfb72.png",
                        id: 761
                    }
                },
                1: {
                    properties: {
                        link: "http://www.de",
                        title: "Image Title",
                        _src: "https://t3v11.ddev.site/fileadmin/_processed_/e/9/pexels-rostislav-uzunov-10613973__1080p__e73feb0b12.mp4#t=5",
                        type: "image",
                        id: 763
                    }
                }
            },
        },
        44: {
            title: "menu/Fourth",
            link: "https://dev.init",
            target: "",
            data: {
                "abstract": "Abstract <br> \n\r \n\r \n\r /end",
            },
            files: {
                0: {
                    properties: {
                        link: "http://www.de",
                        title: "the-creative-exchange-373981-unsplash.jpg",
                        _src: "https://t3v11.ddev.site/fileadmin/_processed_/2/e/csm_Antilocapra_americana_Pronghorn_9f7cfcfb72.png",
                        id: 771
                    }
                },
                1: {
                    properties: {
                        link: "http://www.de",
                        title: "Image Title",
                        _src: "https://t3v11.ddev.site/fileadmin/_processed_/e/9/pexels-rostislav-uzunov-10613973__1080p__e73feb0b12.mp4#t=5",
                        type: "image",
                        id: 763
                    }
                }
            },
        },
    },


    page: {
        title: "page title",
        data: {
            title: "page title",

        },
        files: {
            0: {
                properties: {
                    link: "http://www.de",
                    header: "record/data/image/properties/header",
                    title: "0/record/data/image/properties/title",
                    src: "https://t3v11.ddev.site/fileadmin/_processed_/2/e/csm_Antilocapra_americana_Pronghorn_9f7cfcfb72.png",
                    _id: 0
                }
            }
        }
    },

    layout: 0,
    primary: true,
};

