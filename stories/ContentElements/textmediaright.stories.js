import { FluidTemplate } from "storybook-typo3fluid/";
import './frame.scss'

import { createFrame } from './../Frame';
import {createButton} from "../Button";


export default {
    title: 'ContentElements/TextmediaRight',
    tags: ['autodocs'],
    render: ({ label, ...args }) => {
        // You can either use a function to create DOM elements or use a plain html string!
        // return `<div>${label}</div>`;
        return createFrame ({ label, ...args });
    },
    argTypes: {
        frameSpaceBefore: {
            control: {type: 'select'},
            options: ['default', 'extra-small', 'small', 'medium', 'large', 'extra-large']
        },
        data: {
            bodytext: "bodytext default TextmediaRight"
        },
        backgroundColor: { control: 'color' },
        // ... inherit Frame argTypes
        // label: { control: 'text' },
        primary: { control: 'boolean' },
    },
    args: {
        frameSpaceBefore: 'small',
        label: 'label',
        // innerHTML: Template(Template.args)
        // innerHTML: Template(default.args)
    }
};

export const Template = (args) => FluidTemplate({
    extension: 'bootstrappackage',
    template: 'ContentElements/TextmediaRight',
    partial: '',
    section: '',
    args,

});


export const Primary = Template.bind({});

Primary.args = {
    data: {
        imagecols: 1,
        bodytext: "\n\"[1] 1 Gallia est omnis divisa in partes tres, quarum unam incolunt Belgae, aliam Aquitani, tertiam qui ipsorum lingua Celtae, nostra Galli appellantur. 2 Hi omnes lingua, institutis, legibus inter se differunt. Gallos ab Aquitanis Garumna flumen, a Belgis Matrona et Sequana dividit. 3 Horum omnium fortissimi sunt Belgae, propterea quod a cultu atque humanitate provinciae longissime absunt, minimeque ad eos mercatores saepe commeant atque ea quae ad effeminandos animos pertinent important, 4 proximique sunt Germanis, qui trans Rhenum incolunt, quibuscum continenter bellum gerunt. Qua de causa Helvetii quoque reliquos Gallos virtute praecedunt, quod fere cotidianis proeliis cum Germanis contendunt, cum aut suis finibus eos prohibent aut ipsi in eorum finibus bellum gerunt. 5 Eorum una pars, quam Gallos obtinere dictum est, initium capit a flumine Rhodano, continetur Garumna flumine, Oceano, finibus Belgarum, attingit etiam ab Sequanis et Helvetiis flumen Rhenum, vergit ad septentriones. 6 Belgae ab extremis Galliae finibus oriuntur, pertinent ad inferiorem partem fluminis Rheni, spectant in septentrionem et orientem solem. 7 Aquitania a Garumna flumine ad Pyrenaeos montes et eam partem Oceani quae est ad Hispaniam pertinet; spectat inter occasum solis et septentriones.\"",
        header_layout: 1, header: "Header/All",
        header_position: "above",
        subheader: "Header/All/Subheader",
        date: "2024-04-04",
        layout: 0,
    },
    settings: { gallery: { columns: {
                0: { multiplier: {}, gutters: {}, corrections: {} },
                1: { multiplier: {}, gutters: {}, corrections: {} },
                2: { multiplier: {}, gutters: {}, corrections: {} },
                3: { multiplier: {}, gutters: {}, corrections: {} }
        } } },

    files: { 0: { properties: {
                _id: 770,
                src: "/fileadmin/user_upload/undraw_relaunch_day_902d.svg",
                link: "http://svg.org",
                title: "Open SVG Title",
                embedSVG: 1
        } } },

    layout: 0,
    primary: true,
};


var frameSpaceAfterOptions = {
    default: 'default',
    'extra-small': 'extra-small',
    small: 'small',
    medium: 'medium',
    large: 'large',
    'extra-large': 'extra-large',
    giant: 'Giant'
};


export const Framed = Template.bind({});

Framed.argTypes = {
    frameLayout: {
        control: {type: 'select'},
        options: ['small', 'medium', 'large']
    },
    frameSize: {
        control: {type: 'select'},
        options: ['small', 'medium', 'large']
    },
    frameSpaceBefore: {
        control: {type: 'select'},
        options: ['default', 'extra-small', 'small', 'medium', 'large', 'extra-large']
    },
    frameSpaceAfter: {
        control: {type: 'select'},
        // is default = none? Is there a difference?
        // options: ['none', 'default', 'extra-small', 'small', 'medium', 'large', 'extra-large'],
        options: Object.keys(frameSpaceAfterOptions),
        mapping: frameSpaceAfterOptions,
        sort: 'requiredFirst',
        /*
        labels: {
            None: 'none',
            Default: 'Default',
            'extra-small': 'Extra Small',
        },
        */
        table: {
            type: { summary: 'select' },
            defaultValue: { summary: 'default' },
        },


    },
}
/*
Frame.argTypes = {
    ...Frame.argTypes,

    frame: {
        layout: {
            ...Frame.argTypes.frameLayout
        },
        size: {
            ...Frame.argTypes.frameSize
        },
        spaceBefore: {
            ...Frame.argTypes.frameSpaceBefore
        },
        spaceAfter: {
            ...Frame.argTypes.frameSpaceAfter
        },

    }


}
*/

Framed.args = {
    ...Template.args,
    header : 'Frame Tertiary Header, layout 1',
    layout : 1,
    class : 'btn btn-tertiary',
    displayClass : 'displayClass-frame-tertiary',
    positionClass : 'left',
    // link : 'https://typo3.org/right',
    label: 'Tertiary Header Label ',
    data: {
        header_layout: 1,
        header: "Haader/All",
        header_position: "above",
        subheader: "Header/All/Subheader",
        date: "2024-04-03",
        layout: 1,
        bodytext: "Tertiary bodytext, layout 1\n\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\""
    },
    /*
    frame: {
        type: "textmedia",
        layout: "default",
        size: "default",
        height: "default",
        background: "none",

        spaceBefore: 'default',
        spaceAfter: 'none',

        //        no-backgroundimage

    },
     */
    files: {
        0: {
            properties: {
                link: "http://www.de",
                title: "Image Title id 765",
                id: "765"
            }
        },

    },

//    frameSpaceBefore: Frame.args.frame.spaceBefore,
    // frameSpaceBefore: 'medium',
    // frameSpaceAfter: 'medium',
}

/*
Frame.decorators = [
    ({frameSpaceBefore, frameSpaceAfter }) => (

        `<div class="frame frame-default 
            frame-type-`+Frame.args.frameType+`
            frame-layout-`+Frame.args.frameLayout+` 
            frame-size-`+Frame.args.frameSize+`
            frame-height-`+Frame.args.frameHeight+` 
            frame-background-none 
            frame-space-before-`+Frame.args.frameSpaceBefore+`
            frame-space-after-`+Frame.args.frameSpaceAfter+`
            
            frame-no-backgroundimage
        ">
            <div class="frame-group-container">
                <div class="frame-group-inner">
                    <div class="frame-container frame-container-default">
                        ${Frame(Frame.args)}
                        ${Frame.args.frameSpaceBefore}
                        ${Frame.args.frameSpaceAfter}
                        ${frameSpaceBefore}
                        ${frameSpaceAfter}
                        
                    </div>
                </div>
            </div>

        </div>`
    ),

]; // Frame.decorators end
*/


export const Tertiary = Template.bind({});
Tertiary.args = {
    ...Framed.args,

    header : 'Tertiary Header, layout 1',
    layout : 1,
    class : 'btn btn-tertiary',
    displayClass : 'displayClass-tertiary',
    positionClass : 'left',
    // link : 'https://typo3.org/right',
    label: 'Tertiary Header Label ',

    data: {
        header_layout: 1,
        header: "[765] Haader/All",
        header_position: "above",
        subheader: "Header/All/Subheader",
        date: "2024-04-03",
        layout: 1,
        bodytext: "Tertiary bodytext, layout 1\n\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\""
    },

    files: {
        0: {
            properties: {
                link: "http://www.de",
                title: "Image Title id 765",
                id: "765"
            }
        },

    },
};


export const PrimaryFramed = {
    // title: 'Example/Button',
    tags: ['autodocs'],
    render: ({ label, ...args }) => {
        // You can either use a function to create DOM elements or use a plain html string!
        // return `<div>${label}</div>`;
        return createFrame({ label, ...args });
    },
    argTypes: {
        /*
        backgroundColor: { control: 'color' },
        label: { control: 'text' },
        onClick: { action: 'onClick' },
        primary: { control: 'boolean' },
        */
        size: {
            control: { type: 'select' },
            options: ['small', 'medium', 'large'],
        },
        frameLayout: {
            control: {type: 'select'},
            options: [
                'custom-boxxed',
                'ratio3',
                'ratio5',
                'glass',
                'light',
                'dark'
            ]
        },
        frameSize: {
            control: {type: 'select'},
            options: ['small', 'medium', 'large']
        },
        frameSpaceBefore: {
            control: {type: 'select'},
            options: ['default', 'extra-small', 'small', 'medium', 'large', 'extra-large']
        },
        frameSpaceAfter: {
            control: {type: 'select'},
            // is default = none? Is there a difference?
            // options: ['none', 'default', 'extra-small', 'small', 'medium', 'large', 'extra-large'],
            options: Object.keys(frameSpaceAfterOptions),
            mapping: frameSpaceAfterOptions,
            sort: 'requiredFirst',
            /*
            labels: {
                None: 'none',
                Default: 'Default',
                'extra-small': 'Extra Small',
            },
            */
            table: {
                type: {summary: 'select'},
                defaultValue: {summary: 'default'},
            },

        }



        },
    args: {
        innerHTML: Template(Primary.args)
    }
};

/*
export const newFrameTest = Template.bind({});
newFrameTest.args = {
    header: 'Tertiary Header, layout 1',
    label: 'Tertiary Header, layout 1',
    frameSpaceBefore: 'extra-large',
    frameSpaceAfter: 'extra-large',
}

 */




export const SecondaryFramed = {
    tags: ['autodocs'],
    render: ({ label, ...args }) => {
        return createFrame({ label, ...args });
    },
    argTypes: {
        frameLayout: {
            control: {type: 'select'},
            options: [
                'custom-boxxed',
                'ratio3',
                'ratio5',
                'glass',
                'light',
                'dark'
            ]
        },
        frameSize: {
            control: {type: 'select'},
            options: ['small', 'medium', 'large']
        },
        frameSpaceBefore: {
            control: {type: 'select'},
            options: ['default', 'extra-small', 'small', 'medium', 'large', 'extra-large']
        },
        frameSpaceAfter: {
            control: {type: 'select'},
            // is default = none? Is there a difference?
            // options: ['none', 'default', 'extra-small', 'small', 'medium', 'large', 'extra-large'],
            options: Object.keys(frameSpaceAfterOptions),
            mapping: frameSpaceAfterOptions,
            sort: 'requiredFirst',
            table: {
                type: {summary: 'select'},
                defaultValue: {summary: 'default'},
            },
        }
    },
    args: {
        innerHTML: Template(Primary.args)
    }
};

export const SecondaryFramedRatio5 = {
    tags: ['autodocs'],
    render: ({ label, ...args }) => {
        return createFrame({ label, ...args });
    },
    argTypes: {
        ...Primary.argTypes,
        /*
        frameLayout: {
            control: {type: 'select'},
            options: [
                'custom-boxxed',
                'ratio3',
                'ratio5',
                'glass',
                'light',
                'dark'
            ]
        },
        frameSize: {
            control: {type: 'select'},
            options: ['small', 'medium', 'large']
        },
        frameSpaceBefore: {
            control: {type: 'select'},
            options: ['default', 'extra-small', 'small', 'medium', 'large', 'extra-large']
        },
        frameSpaceAfter: {
            control: {type: 'select'},
            // is default = none? Is there a difference?
            // options: ['none', 'default', 'extra-small', 'small', 'medium', 'large', 'extra-large'],
            options: Object.keys(frameSpaceAfterOptions),
            mapping: frameSpaceAfterOptions,
            sort: 'requiredFirst',
            table: {
                type: {summary: 'select'},
                defaultValue: {summary: 'default'},
            },
        }
         */
    },

    args: {
        innerHTML: Template(Primary.args),
        frameLayout: 'ratio5'
    }
};

export const SecondaryFramedHeader = {
    tags: ['autodocs'],
    render: ({ label, ...args }) => {
        return createFrame({ label, ...args });
    },
    argTypes: {
        ...Primary.argTypes,
    },

    args: {
        innerHTML: Template(Primary.args),
        frameLayout: 'header-underline'
    }
};
