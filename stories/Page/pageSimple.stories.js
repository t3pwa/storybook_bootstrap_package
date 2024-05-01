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
    title: 'Page/Simple',
    tags: ['autodocs'],
    args : {
        pagelayout: "simple",
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
        uid: 80
    },
    primary: false,
};

export const SecondaryB = Template.bind({});
SecondaryB.argTypes = { ...Template.argTypes, }
SecondaryB.args = { ...Template.args, data: {
        ...Template.args.data,
        uid: 81
    }, primary: false,
};

export const SecondaryC = Template.bind({});
SecondaryC.argTypes = { ...Template.argTypes, }
SecondaryC.args = { ...Template.args,
    data: {
        ...Template.args.data,
        uid: 79
    }
};

export const CardGroup = Template.bind({});
CardGroup.argTypes = { ...Template.argTypes, }
CardGroup.args = { ...Template.args,
    data: {
        ...Template.args.data,
        uid: 68
    }
};


export const MediaMedia = Template.bind({});
MediaMedia.argTypes = { ...Template.argTypes, }
MediaMedia.args = { ...Template.args,
    data: {
        ...Template.args.data,
        uid: 61
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

export const Home = Template.bind({});
Home.argTypes = { ...Template.argTypes, }
Home.args = { ...Template.args,
    data: {
        ...Template.args.data,
        uid: 98
    }
};

export const PowerfulFormHandling = Template.bind({});
PowerfulFormHandling.argTypes = { ...Template.argTypes, }
PowerfulFormHandling.args = { ...Template.args,
    data: {
        ...Template.args.data,
        uid: 52
    }
};

export const NewsList = Template.bind({});
NewsList.argTypes = { ...Template.argTypes, }
NewsList.args = { ...Template.args,
    data: {
        ...Template.args.data,
        uid: 13
    }
};