/* SCSS ****************** */
import './frame.scss'

/* Decorator ****************** */
export const createFrame = ({
    primary = false,

    // mandatory, base case: default
    frameSpaceBefore = 'default',
    frameSpaceAfter = 'default',
    frameLayout = 'default',

    frameSize = 'default',
    type = 'default',
    height = 'medium',

    backgroundColor,
    label,
    innerHTML,
    onClick,

    // optional, maybe empty
    frameOptions,

  }) => {
    const frame = document.createElement('div');
    const frameContainer = document.createElement('div');
    const frameInner = document.createElement('div');
    const frameHeader = document.createElement('div');
    frame.appendChild(frameContainer);
    frameContainer.appendChild(frameHeader);
    frameContainer.appendChild(frameInner);
    frameInner.innerHTML = innerHTML;

  //  btn.addEventListener('click', onClick);

    // const mode = primary ? 'frame--primary' : 'frame--secondary';
    var frameOptionsClasses =  'frame-option-' + frameOptions.join(' frame-option-');

    frame.className = [
      'frame',
       'frame-default', // frame-${frameClass} ['default', 'none']
      `frame-type-${type}`,
      `frame-layout-${frameLayout}`,
      `frame-size-${frameSize}`,
      `frame-height-${height}`,
      `frame-background-none`,
      `frame-space-before-${frameSpaceBefore}`,
      `frame-space-after-${frameSpaceAfter}`,
//        mode
        frameOptionsClasses

    ].join(' ');
  frameInner.className = 'frame-inner';
  frameHeader.className = 'frame-header';
  frameContainer.className = [
    'frame-container',
    'frame-container-default'
//    mode
  ].join(' ');
//  frame.style.backgroundColor = backgroundColor;
  return frame;
};

/* *************************************************** */
var frameOptions = {
    'Ruler before': 'ruler-before',
    'Ruler after': 'ruler-after',
    'Indent left': 'indent-left',
    'Indent right': 'indent-right'
}
/* *************************************************** */
// use the same for frameSpaceBeforeOptions and frameSpaceAfterOptions, same key-value pairs
var frameSpaceOptions = {
    default: 'default',
    'extra-small': 'extra-small',
    small: 'small',
    medium: 'medium',
    large: 'large',
    'extra-large': 'extra-large',
    giant: 'Giant'
};
/* *************************************************** */
// Custom LayoutOptions
var frameLayoutOptions = {
    'default': 'default',
    // bs included layout class
    'embedded': 'embedded',

    // custom layout classes
    'custom-boxxed': 'custom-boxxed',
    'ratio3': 'ratio3',
    'ratio5': 'ratio3',
    'glass': 'glass',
    'light': 'light',
    'dark': 'dark',

    'header-underline': 'header-underline'
};
/* *************************************************** */

export const Frame = {

    // It's not a story?!
    // title: 'Example/Button',
    // tags: ['autodocs'],


    render: ({ label, ...args }) => {
        // You can either use a function to create DOM elements or use a plain html string!
        // return `<div>${label}</div>`;
        return createFrame({ label, ...args, frameOptions });
    },
    argTypes: {
        frameOptions: {
            control: {type: 'check'},
            options: Object.keys(frameOptions),
            mapping: frameOptions,
            sort: 'requiredFirst',
            /*
            table: {
                type: {summary: 'check'},
                defaultValue: {summary: 'default'},
            }
            */
        },

        frameLayout: {
            control: {type: 'select'},
            options: Object.keys(frameLayoutOptions),
            mapping: frameSpaceOptions,
            sort: 'requiredFirst',
            table: {
                type: {summary: 'select'},
                defaultValue: {summary: 'default'},
            }
        },
        frameSize: {
            control: {type: 'select'},
            options: ['default', 'small', 'medium', 'large']
        },
        frameSpaceBefore: {
            control: {type: 'select'},
            options: Object.keys(frameSpaceOptions),
            mapping: frameSpaceOptions,
            sort: 'requiredFirst',
            table: {
                type: {summary: 'select'},
                defaultValue: {summary: 'default'},
            }
        },
        frameSpaceAfter: {
            control: {type: 'select'},
            options: Object.keys(frameSpaceOptions),
            mapping: frameSpaceOptions,
            sort: 'requiredFirst',
            table: {
                type: {summary: 'select'},
                defaultValue: {summary: 'default'},
            },
        }
    },
    // This is done in the Variant, which uses Frame
    args: {
        // innerHTML: Template(Primary.args)
        // wee need empty default frameOptions
        frameOptions : ['']
    }

};
