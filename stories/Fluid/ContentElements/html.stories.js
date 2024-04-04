import { FluidTemplate } from "storybook-typo3fluid/";
import {size} from "../../../../storybook-static/205.4adc836c.iframe.bundle";
// import '../../public/typo3conf/ext/bootstrap_package/Resources/Public/Scss/plugins/_cookieconsent.scss';
// import '../../../public/typo3conf/ext/bootstrap_package/Resources/Public/Css/bootstrap5-theme.css';

export default {
    title: 'ContentElements/Html',
    tags: ['autodocs'],
    args : {
        data: {
            bodytext: "<p>raw HTML </p>"
        },
    },
    argTypes: {
        data: {
            bodytext: { control: 'text' }
        }
    },
};

export const Template = (args) => FluidTemplate({
    extension: 'bootstrappackage',
    template: 'ContentElements/Html',
    partial: '',
    section: '',
    args
});


export const Primary = Template.bind({});
Primary.args = {
    data: {
        bodytext: "<p>raw HTML primary</p>"
    },
    primary: true,
};