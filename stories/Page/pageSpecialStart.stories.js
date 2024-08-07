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

export const Pid82 = Template.bind({});
Pid82.argTypes = { ...Template.argTypes, }
Pid82.args = { ...Template.args,
    data: {
        ...Template.args.data,
        pagelayout: "special_start",
        uid: 82
    }
};
export const Pid103 = Template.bind({});
Pid103.argTypes = { ...Template.argTypes, }
Pid103.args = { ...Template.args,
    data: {
        ...Template.args.data,
        uid: 103
    }
};
