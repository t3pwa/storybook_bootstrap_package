import { FluidTemplate } from "storybook-typo3fluid/";
//import 'bootstrap/dist/css/bootstrap.min.css';

import {size} from "../../../../storybook-static/205.4adc836c.iframe.bundle";
import panel_txt from "../../../packages/storybook_bootstrap_package/stories/Fluid/ContentElements/panel.txt";
import {Debug} from "./panel.stories";
// import '../../public/typo3conf/ext/bootstrap_package/Resources/Public/Scss/plugins/_cookieconsent.scss';
// import "@scss/theme.scss";
// import "@scss/components/textpic.scss";
// import '../../public/typo3conf/ext/bootstrap_package/Resources/Public/Css/bootstrap5-theme.css';
// import './page_structure_copyright.css';

/*
Vokalbelheft:

TYPO3 Header/Header are Typography/Headings in Boostrap
https://getbootstrap.com/docs/5.0/content/typography/#headings
*/

import './frame.scss'


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
        layout: 1,
    },
    settings: { gallery: { columns: {
                1: { multiplier: {}, gutters: {}, corrections: {} },
                2: { multiplier: {}, gutters: {}, corrections: {} },
                3: { multiplier: {}, gutters: {}, corrections: {} }
        } } },

    files: { 0: { properties: {
                link: "http://www.de",
                title: "the-creative-exchange-373981-unsplash.jpg",
                _src: "https://dev.kukurtihar.com/fileadmin/user_upload/undraw_lost_online_re_upmy.svg",
                id: "765",
        } } },

    layout: 1,
    primary: true,
};


export const Tertiary = Template.bind({});
Tertiary.args = {
    header : 'Tertiary Header, layout 1',
    layout : 1,
    class : 'btn btn-tertiary',
    displayClass : 'displayClass-tertiary',
    positionClass : 'left',
    // link : 'https://typo3.org/right',
    label: 'Tertiary Header Label ',

    frame: {
        type: "textmedia"
    },

    data: {
        header_layout: 1,
        header: "Haader/All",
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
    (story) => `<div class="frame frame-default 
                            frame-type-`+Tertiary.args.frame.type+`
                            frame-layout-default 
                            frame-size-default 
                            frame-height-default 
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
];



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