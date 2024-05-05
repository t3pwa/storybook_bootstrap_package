import { FluidTemplate } from "storybook-typo3fluid/";
import {size} from "../../../../storybook-static/205.4adc836c.iframe.bundle";
import {createFrame, Frame} from "../../ViewHelpers/Frame";
import {Secondary} from "../CardGroup/cardgroup.stories";
// import '../../public/typo3conf/ext/bootstrap_package/Resources/Public/Scss/plugins/_cookieconsent.scss';
// import '../../public/typo3conf/ext/bootstrap_package/Resources/Public/Css/bootstrap5-theme.css';

// import './page_structure_copyright.css';

/*
TYPO3 Header/Header are Typography/Headings in Boostrap
https://getbootstrap.com/docs/5.0/content/typography/#headings
*/

export default {
    title: 'ContentElements/Textteaser',
    tags: ['autodocs'],
    argTypes: {
        data: {
            bodytext: "bodytext default",
            teaser: "teaser default"
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
    template: 'ContentElements/Textteaser',
    partial: '',
    section: '',
    args
});


export const Primary = Template.bind({});
Primary.args = {
    data: {
//        header: "Header",
//        subheader: "subheader",
        bodytext: "[Primary bodytext, layout 0]" +
            "<br>" +
            "<p>Unsere Projektteams sind interdisziplinär aufgebaut. Zudem vereinen wir in der ]init[ TYPO3-Unit umfassende, lückenlose Kompetenzen in allen Bereichen der Full-Stack-Entwicklung. So können wir den Anforderungen unserer Kund:innen entlang der gesamten CMS-Wertschöpfungskette gerecht werden.</p>" +
            "<p>Von der auf TYPO3-Projekte spezialisierten Projektleitung über Konzeption und Design, Back- und Frontend-Entwicklung, Content- und Support-Leistungen sowie dem Hosting im eigenen BSI-zertifizierten Sicherheitsrechenzentrum arbeiten alle Spezialist:innen Hand in Hand an unseren Website-Projekten.</p>" +
            "<p>Das sichert eine flexible und schnelle Projektumsetzung sowie hohe Ergebnisqualität unserer TYPO3-Lösungen. Auch über die Unit und Projektteams hinaus sind rund 100 Spezialist:innen aus allen Bereichen versiert im Umgang mit TYPO3 und bringen ihre Expertise zielgerichtet ein.</p>",
        teaser: "<small>[Primary Teaser]</small><h1>Hohe Ergebnissicherheit aus einer Hand</h1>" +
            "<p>Unsere Projektteams sind interdisziplinär aufgebaut. Zudem vereinen wir in der ]init[ TYPO3-Unit umfassende, lückenlose Kompetenzen in allen Bereichen der Full-Stack-Entwicklung. So können wir den Anforderungen unserer Kund:innen entlang der gesamten CMS-Wertschöpfungskette gerecht werden.</p>" +
            ""
    },
    layout: 0,
    primary: true,
};

export const DefaultFrameB = {
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
                columns: 4
            }
        }
    }
};
