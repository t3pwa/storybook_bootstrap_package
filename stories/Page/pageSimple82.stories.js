import { FluidTemplate } from "storybook-typo3fluid/";

export const Template = (args) => FluidTemplate({
    "extension": "bootstrappackage",
    "template": "Page/Simple",
    "partial": "",
    "section": "Main",
    args
});

import { html } from 'lit';
import pageSimple_http from './pageSimple.http'
// import {createFrame, Frame} from "../../../packages/storybook_bootstrap_package/stories/Frame";

export default {
    title: 'Page/Simple82',
    tags: ['autodocs'],
    args : {
        pagelayout: "simple",
        data: {
            "uid": 82
        }
    },
    argTypes: {
        primary: { control: 'boolean' },
    },
};

Template.args = {
    data: {
        uid: 82
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
/*
export const Secondary = Template.bind({});
Secondary.argTypes = {
    ...Template.argTypes,
}
Secondary.args = {
    ...Template.args,
    data: {
        ...Template.args.data,
        uid: 82
    },
    primary: false,
};
*/

export const Pid82 = Template.bind({});
Pid82.argTypes = { ...Template.argTypes, }
Pid82.args = { ...Template.args,
    data: {
        ...Template.args.data,
        uid: 77
    }
};


export const andMoreFrames = Template.bind({});
andMoreFrames.argTypes = { ...Template.argTypes, }
andMoreFrames.args = { ...Template.args,
    data: {
        ...Template.args.data,
        uid: 25
    }
};
