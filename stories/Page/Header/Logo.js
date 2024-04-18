// import './logo.css';
import React from 'react';
// import {Primary} from "../../Page/Header/logo.stories";


export function createLogo ({
  primary = false,
  size = 'medium',
//  backgroundColor,
  label = 'label',
//  onClick,
}) {
  const logo = document.createElement('div');
  const logo2 = {Primary};
  logo2.args = {  };

//  btn.type = 'button';
//  btn.innerText = label;
  logo.innerText = label;
  logo.className = size;
  // logo2.args.siteTitle = label;
//  logo.addEventListener('click', onClick);

//  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
//  btn.className = ['storybook-button', `storybook-button--${size}`, mode].join(' ');

//  btn.style.backgroundColor = backgroundColor;

  const logoImg = document.createElement('img');

  logoImg.className = size;
  logoImg.alt = label;
  logo.appendChild(logoImg)

  // return (<Primary />);
  return logo;
};


/*
export default {
// export const createLogo2 = ({
  component: Primary,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
}

export const Basic = {};
*/