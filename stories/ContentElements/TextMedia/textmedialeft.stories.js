import { FluidTemplate } from "storybook-typo3fluid/";

export default {
    title: 'ContentElements/TextmediaLeft',
    tags: ['autodocs'],
    argTypes: {
        data: {
            bodytext: "bodytext default left"
        },
        backgroundColor: { control: 'color' },
        // label: { control: 'text' },
        primary: { control: 'boolean' },
    },
};


export const Template = (args) => FluidTemplate({
    extension: 'bootstrappackage',
    template: 'ContentElements/TextmediaLeft',
    partial: '',
    section: '',
    args
});


export const Primary = Template.bind({});
Primary.args = {
    data: {
        imagecols: 1,
        bodytext: "Primary bodytext, layout 1", header_layout: 1, header: "Header/All",
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
                link: "http://www.de",
                title: "the-creative-exchange-373981-unsplash.jpg",
                src: "https://dev.kukurtihar.com/fileadmin/user_upload/undraw_lost_online_re_upmy.svg",
                _id: 767,
        } } },

    layout: 0,
    primary: true,
};







export const Secondary = Template.bind({});
Secondary.args = {
    data: {

        bodytext: "Sec bodytext, layout 1",
        header_layout: 1,
        header: "Header/All [video]",
        header_position: "above",
        subheader: "SEC Header/All/Subheader  [video]",
        date: "2024-04-21",
        layout: 1,
        imagecols: 3,
    },
    settings: {
        media: {
            additionalConfig: {
                "loop": "loop",
                "controls": "controls",
                "autoplay": "autoplay"
            }
        },
        header: {
            defaultHeaderType: 0
        },
        gallery: { columns: {
                1: { multiplier: {}, gutters: {}, corrections: {} },
                2: { multiplier: {}, gutters: {}, corrections: {} },
                3: { multiplier: {}, gutters: {}, corrections: {} }
            } }
    },
    files: {
        /*
        0: { properties: {
                link: "http://www.de",
                title: "[767] the-creative-exchange-373981-unsplash.jpg",
                src: "https://dev.kukurtihar.com/fileadmin/user_upload/undraw_lost_online_re_upmy.svg",
                id: "767",
            } },
        */
        1: { properties: {
                link: "http://www.de",
                title: "[767] the-creative-exchange-373981-unsplash.jpg",
                src: "/fileadmin/pexels-rostislav-uzunov-10613973__1080p__2e10da7287.mp4",
                _id : 782,
                type: 'video'
            } }

    },

    layout: 1,
    primary: true,
};





export const Tertiary = Template.bind({});
Tertiary.args = {
    frame: {
        type: "textmedia",
        layout: "default",
        size: "default",
        height: "default",
        background: "none",
        'space-before': "none",
        'space-after': "none"
    //        no-backgroundimage
    },
    data: {
        header_layout: 1,
        header: "Header/All [Image]",
        header_position: "above",
        subheader: "Header/All/Subheader #765",
        date: "2024-04-21",
        layout: 1,
        bodytext: "\n\"[1] 1 Gallia est omnis divisa in partes tres, quarum unam incolunt Belgae, aliam Aquitani, tertiam qui ipsorum lingua Celtae, nostra Galli appellantur. 2 Hi omnes lingua, institutis, legibus inter se differunt. Gallos ab Aquitanis Garumna flumen, a Belgis Matrona et Sequana dividit. 3 Horum omnium fortissimi sunt Belgae, propterea quod a cultu atque humanitate provinciae longissime absunt, minimeque ad eos mercatores saepe commeant atque ea quae ad effeminandos animos pertinent important, 4 proximique sunt Germanis, qui trans Rhenum incolunt, quibuscum continenter bellum gerunt. Qua de causa Helvetii quoque reliquos Gallos virtute praecedunt, quod fere cotidianis proeliis cum Germanis contendunt, cum aut suis finibus eos prohibent aut ipsi in eorum finibus bellum gerunt. 5 Eorum una pars, quam Gallos obtinere dictum est, initium capit a flumine Rhodano, continetur Garumna flumine, Oceano, finibus Belgarum, attingit etiam ab Sequanis et Helvetiis flumen Rhenum, vergit ad septentriones. 6 Belgae ab extremis Galliae finibus oriuntur, pertinent ad inferiorem partem fluminis Rheni, spectant in septentrionem et orientem solem. 7 Aquitania a Garumna flumine ad Pyrenaeos montes et eam partem Oceani quae est ad Hispaniam pertinet; spectat inter occasum solis et septentriones.\""
    },

    files: {
        0: {
            properties: {
                link: "http://www.de",
                title: "Image Title id 765",
                id: 765
            }
        },

    },
};


export const Frame = Template.bind({});
Frame.args = {
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
    frame: {

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

// (story) => `${Debug(Tertiary.args)}`,

Frame.decorators = [
    (story) => `
        <div class="frame frame-default 
            frame-type-`+Tertiary.args.frame.type+`
            frame-layout-`+Tertiary.args.frame.layout+` 
            frame-size-`+Tertiary.args.frame.size +`
            frame-height-`+Tertiary.args.frame.height +` 
            frame-background-none 
            frame-space-before-none 
            frame-space-after-none 
            frame-no-backgroundimage
        ">
            <div class="frame-group-container">
                <div class="frame-group-inner">
                    <div class="frame-container frame-container-default">
                        ${Frame(Tertiary.args)}
                    </div>
                </div>
            </div>

        </div>
    `,
    // (story) => html`<pre>${story()}</pre>`,
    // (story) => html`${panel_http()}`,
    // (story) => html`${panel_txt()}`,
]; // Frame.decorators end

export const FrameGlass = Template.bind({});
FrameGlass.args = {
    header : 'Frame Glass Tertiary Header, layout 1',
    layout : 1,
    class : 'btn btn-tertiary',
    displayClass : 'displayClass-frame-tertiary-glass',
    positionClass : 'left',
    // link : 'https://typo3.org/right',
    label: 'Glass Tertiary Header Label ',
    data: {
        header_layout: 1,
        header: "Haader/All Glass",
        header_position: "above",
        subheader: "Header/All/Subheader Subglassheader",
        date: "2024-04-04",
        layout: 1,
        bodytext: "Tertiary bodytext Glass, layout 1\n\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\""
    },


};

// (story) => `${Debug(Tertiary.args)}`,

FrameGlass.decorators = [
    (story) => `<div class="frame frame-default 
                            frame-type-`+Tertiary.args.frame.type+`
                            frame-layout-custom-frame-layout-1 
                            frame-size-default 
                            frame-height-default 
                            
                            frame-background-glass 
                            frame-no-backgroundimage
                            frame-custom_frame_class_2
                            
                            frame-space-before-none 
                            frame-space-after-none 
                            
                        ">

<div class="frame-group-container">
    <div class="frame-group-inner">
        <div class="frame-container frame-container-default">
            ${Frame(Tertiary.args)}
        </div>
    </div>
    
</div>
 
 
        </div>
    `,
    // (story) => html`<pre>${story()}</pre>`,
    // (story) => html`${panel_http()}`,
    // (story) => html`${panel_txt()}`,
];



export const FrameLight = Template.bind({});
FrameLight.decorators = [
    (story) => `
<div class="frame frame-default 
    frame-type-`+Tertiary.args.frame.type+`
    frame-background-light 
">
    <div class="frame-group-container">
        <div class="frame-group-inner">
            <div class="frame-container frame-container-default">
                ${Frame(Tertiary.args)}
            </div>
        </div>
    </div>
</div> <!-- frame end -->
    `,
];




export const FrameLightReversed = Template.bind({});
FrameLightReversed.decorators = [
    (story) => `
<div class="frame frame-default 
    frame-type-`+Tertiary.args.frame.type+`
    frame-background-light
    frame-textmedia-reversed 
">
    <div class="frame-group-container">
        <div class="frame-group-inner">
            <div class="frame-container frame-container-default">
                ${Frame(Tertiary.args)}
            </div>
        </div>
    </div>
</div> <!-- frame end -->
    `,
];





export const FrameBoxxed = Template.bind({});
FrameBoxxed.decorators = [
    (story) => `<div class="frame frame-default 
                            frame-type-`+Tertiary.args.frame.type+`
                            frame-layout-custom-frame-layout-1 
                            frame-layout-custom-boxxed

                            frame-size-default 
                            frame-height-default 
                            
                            frame-background-light 
                            frame-no-backgroundimage
                            
                            frame-space-before-small 
                            frame-space-after-small
                            
                        ">

    <div class="frame-group-container">
        <div class="frame-group-inner">
            <div class="frame-container frame-container-default">
                ${Frame(Tertiary.args)}
            </div>
        </div>
    </div>
</div> <!-- frame end -->
    `,

];





export const FrameLightReversedRatio = Template.bind({});
FrameLightReversedRatio.decorators = [
    (story) => `
<div class="frame frame-default 
    frame-type-`+Tertiary.args.frame.type+`
    frame-background-light
    frame-textmedia-reversed 
    frame-textmedia-ratio
">
    <div class="frame-group-container">
        <div class="frame-group-inner">
            <div class="frame-container frame-container-default">
                ${Frame(Tertiary.args)}
            </div>
        </div>
    </div>
</div> <!-- frame end -->
    `,
];



export const FrameLightReversedRatio2 = Template.bind({});
FrameLightReversedRatio2.decorators = [
    (story) => `
<div class="frame frame-default 
    frame-type-`+Tertiary.args.frame.type+`
    frame-background-light
    frame-textmedia-reversed 
    frame-textmedia-ratio2
">
    <div class="frame-group-container">
        <div class="frame-group-inner">
            <div class="frame-container frame-container-default">
                ${Frame(Tertiary.args)}
            </div>
        </div>
    </div>
</div> <!-- frame end -->
    `,
];


export const FrameLightReversedRatio3 = Template.bind({});
FrameLightReversedRatio3.decorators = [
    (story) => `
<div class="frame frame-default 
    frame-type-`+Tertiary.args.frame.type+`
    frame-background-light
    frame-textmedia-reversed 
    frame-textmedia-ratio3
">
    <div class="frame-group-container">
        <div class="frame-group-inner">
            <div class="frame-container frame-container-default">
                ${Frame(Tertiary.args)}
            </div>
        </div>
    </div>
</div> <!-- frame end -->
    `,
];