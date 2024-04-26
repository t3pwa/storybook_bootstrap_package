// import './button.scss';

export const createFrame = ({
    primary = false,

    frameSpaceBefore = 'default',
    frameSpaceAfter = 'default',
    frameLayout = 'default',

    size = 'medium',
    type = 'default',
    height = 'medium',

    backgroundColor,
    label,
    innerHTML,
    onClick,
  }) => {
    const frame = document.createElement('div');
    const frameContainer = document.createElement('div');
    frame.appendChild(frameContainer);

    // frame.type = 'button';
    // frame.innerText = label;
    frameContainer.innerHTML = innerHTML;
  //  btn.addEventListener('click', onClick);

    const mode = primary ? 'frame--primary' : 'frame--secondary';
    frame.className = [
      'frame',
      'frame-default',
      `frame-type-${type}`,
      `frame-layout-${frameLayout}`,
      `frame-size-${size}`,
      `frame-height-${height}`,
      `frame-background-none`,
      `frame-space-before-${frameSpaceBefore}`,
      `frame-space-after-${frameSpaceAfter}`,
      mode
    ].join(' ');

  frameContainer.className = [
    'frame-container',
    'frame-container-default'
//    mode
  ].join(' ');



  frame.style.backgroundColor = backgroundColor;

    return frame;
};


