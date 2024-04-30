import { FluidTemplate } from "storybook-typo3fluid/";

export const Template = (args) => FluidTemplate({
    "extension": "bootstrappackage",
    "template": "Page/SpecialStart",
    "partial": "",
    "section": "Main",
    args
});

import { html } from 'lit';
import pageSimple_http from './pageSimple.http'
// import {createFrame, Frame} from "../../../packages/storybook_bootstrap_package/stories/Frame";

export default {
    title: 'Page/Startpage',
    tags: ['autodocs'],
    args : {
        pagelayout: "special_start",
        data: {
            "uid": 16
        }
    },
    argTypes: {
        primary: { control: 'boolean' },
    },
};

Template.args = {
    data: {
        uid: 16
    },
    primary: false,
};

Template.argTypes = {

}

export const Primary = Template.bind({});
Primary.argTypes = {
    ...Template.argTypes,
}
Primary.args = {
    ...Template.args,
    data: {
        ...Template.args.data,
    },
    primary: true,
};

export const Secondary = Template.bind({});
Secondary.argTypes = {
    ...Template.argTypes,
}
Secondary.args = {
    ...Template.args,
    data: {
        ...Template.args.data,
        uid: 16
    },
    primary: false,
};

export const Startpage = Template.bind({});
Startpage.argTypes = {
    ...Template.argTypes,
}
Startpage.args = {
    ...Template.args,
//    pagelayout: "startpage",
    pagelayout: "special_start",
    backendLayout: "special_start",
    data: {
        ...Template.args.data,
        uid: 16
    },
    primary: false,
};

