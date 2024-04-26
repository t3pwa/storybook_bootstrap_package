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
    title: 'ContentElements/Header/Header',
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
    partial: 'ContentElements/Header/Header',
    section: '',
    args
});


export const Primary = Template.bind({});
Primary.args = {
    header: 'Primary Header, layout 2',
    layout: 2,
    class : 'header header-layout-1',
    displayClass : 'displayClass display-headerLayout-1',
    positionClass : 'bottom',
//    link : 'https://t3pwa.org',
    primary: true,
    label: 'Primary Label'
};

export const Secondary = Template.bind({});
Secondary.args = {
    header : 'Secondary Header, layout 3, linked',
    backgroundColor: '#00ff00',
    layout : 3,
    class : 'header',
    displayClass : 'displayClass-Secondary',
    positionClass : 'bottom',
    link : 'https://typo3.org',
    label: 'Header Label Secondary'
};

export const Tertiary = Template.bind({});
Tertiary.args = {
    logo: {
        alt: "ALT",
    },
    header : 'TYPO3 für Verwaltungen und Behörden CMS-Projekte einfach umgesetzt ',
    layout : 4,
    class : 'btn btn-tertiary',
    displayClass : 'displayClass-Tertiary',
    positionClass : 'right',
    // link : 'https://typo3.org/right',
    label: 'Tertiary Header Label'
};

