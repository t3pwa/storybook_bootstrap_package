import { FluidTemplate } from "storybook-typo3fluid/";
import {size} from "../../../../storybook-static/205.4adc836c.iframe.bundle";
// import '../../public/typo3conf/ext/bootstrap_package/Resources/Public/Scss/plugins/_cookieconsent.scss';
// import '../../public/typo3conf/ext/bootstrap_package/Resources/Public/Css/bootstrap5-theme.css';

// import './page_structure_copyright.css';

/*
TYPO3 Header/Header are Typography/Headings in Boostrap
https://getbootstrap.com/docs/5.0/content/typography/#headings
*/

export default {
    title: 'ContentElements/Header/All',
    tags: ['autodocs'],
    argTypes: {
        /*
        page: {
            logo: {
                file: "EXT:bootstrap_package/Resources/Public/Images/BootstrapPackage.svg"
            }
        },
        */

        backgroundColor: { control: 'color' },
        label: { control: 'text' },
        // onClick: { action: 'onClick' },
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
    template: '',
    partial: 'ContentElements/Header/All',
    section: '',
    args
});


export const Primary = Template.bind({});
Primary.args = {
    header: 'Primary Header, layout 1',
    layout: 1,
    class : 'header header-layout-1',
    displayClass : 'displayClass display-headerLayout-1',
    positionClass : 'bottom',
//    link : 'https://t3pwa.org',
    primary: true,
    label: 'Primary Label',
    data: {
        header_layout: 1,
        header: "Haader/All",
        header_position: "above",
        subheader: "Header/All/Subheader",
        date: "2024-03-27",
        layout: 1,
        bodytext: "Secondary bodytext, layout 2"


    }
};

export const Secondary = Template.bind({});
Secondary.args = {
    header : 'Secondary Header, layout 3, linked',
    backgroundColor: '#00ff00',
    layout : 2,
    class : 'header',
    displayClass : 'displayClass-Secondary',
    positionClass : 'bottom',
    link : 'https://typo3.org',
    label: 'Header Label Secondary',
    data: {
        header_layout: 1,
        header: "Haader/All",
        header_position: "above",
        subheader: "Header/All/Subheader",
        date: "2024-03-27",
        layout: 1,
        bodytext: "Secondary bodytext, layout 2"


    }
};

export const Tertiary = Template.bind({});
Tertiary.args = {
    header : 'Tertiary Header, layout 3',
    layout : 3,
    class : 'btn btn-tertiary',
    displayClass : 'displayClass-Tertiary',
    positionClass : 'right',
    // link : 'https://typo3.org/right',
    label: 'Tertiary Header Label',

    data: {
        header_layout: 4,
        header: "Haader/All",
        header_position: "above",
        subheader: "Header/All/Subheader",
        date: "2024-03-27",
        layout: 3,

        bodytext: "Tertiary  bodytext, layout 3"


    }

};

