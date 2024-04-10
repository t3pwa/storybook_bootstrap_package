//import './page.scss';
import { createHeader } from './Header';

// import { createPanel } from './Fluid/ContentElements/Panel';

import {Debug, PrimaryPanel, Tertiary} from "./Fluid/ContentElements/panel.stories";

import {VariablesDefault} from "./Fluid/Variables.stories";

export const style = require('sass-extract-loader!./_variables.scss');

export const createVariablesPage = () => {
  const article = document.createElement('article');
  let user = null;
  let header = null;
  let panel = null;

  const rerenderHeader = () => {
    const wrapper = document.getElementsByTagName('article')[0];
    wrapper.replaceChild(createHeaderElement(), wrapper.firstChild);
  };

  const onLogin = () => {
    user = { name: 'Jane Doe' };
    rerenderHeader();
  };

  const onLogout = () => {
    user = null;
    rerenderHeader();
  };

  const onCreateAccount = () => {
    user = { name: 'Jane Doe' };
    rerenderHeader();
  };

  const createHeaderElement = () => {
    return createHeader({ onLogin, onLogout, onCreateAccount, user });
  };

  const createPanelElement = () => {

    return PrimaryPanel();
  };

  header = createHeaderElement();
  article.appendChild(header);

  panel = createPanelElement();

  // article.appendChild(panel);

  const sectionMain = `
    <section class="main">
      <h2>Variables</h2>
      <p>
        We recommend ...
        .... ending with pages.
      </p>
      
      
      <p>
        Render pages with mock data. This m
      </p>
      <div class="tip-wrapper">
        <span class="tip">Tip</span>
        Adjust the width of the canvas with the

        Viewports ...
      </div>
    </section>
  `;

  const VariablesDefaultJsonSettingsString = JSON.stringify(VariablesDefault.args.settings);
  const VariablesDefaultJsonSettings = JSON.parse(VariablesDefaultJsonSettingsString);


  const style = require('sass-extract-loader!./_variables.scss');



//  const brandInfo = style.global['$theme-colors'].value.primary.value.hex; // '#00695F';
//  const brandInfo = style.global['$theme-colors'].value.primary.value.hex;

  console.log(style.global);

  console.log(JSON.stringify(style.global));
//  console.log(typeof ( style.global) ) ;

  let SassExtractedVariablesJson = {};
  let assExtractedVariablesString = '';
  let SassExtractedVariablesHtmlOutput = `<div class="row">`;

  for (const key in style.global ) {
    console.log(`${key}: ${style.global[key]}`);

    // console.log( `${style.global[key].type}` );

    // @ToDo: Demand Filter: If value in array [ white, gray-100, gray-200, gray-300, gray-400, gray-500, gray-600, gray-700, gray-800, gray-900, black
    // primary, secondary, tertiary, quaternary, default, success, info, warning, danger


    if ( style.global[key].type == 'SassNumber' ) {
      console.log( ' ', key, style.global[key].value + style.global[key].unit );
    } else if ( style.global[key].type == 'SassColor' ) {
      console.log( ' ', key, style.global[key].value.hex );
      SassExtractedVariablesHtmlOutput += `<div className="p-3 mb-3 text-white" style="background: `+ style.global[key].value.hex +`  ;">`+key+`</div>`
    }

  };
  SassExtractedVariablesHtmlOutput += `</div>`;



  const sectionDebug = `
    <section class="debug">
    
    
        
    
      <h4>Variables Debug</h4>
      <a href="https://getbootstrap.com/docs/5.0/customize/color/">https://getbootstrap.com/docs/5.0/customize/color/</a>
      <h3>Style Global Colors</h3>
      <pre>`
//  + `${VariablesDefaultJsonSettingsString}`
      + `${JSON.stringify(style.global, null, "\t")}`
    + `</pre>
      <hr>`
    + ``
  + `</section>`;

  article.insertAdjacentHTML('beforeend', sectionDebug);


  var VariablesDefaultHtmlOutput = `<div className="row">`;
  Object.keys(VariablesDefaultJsonSettings.scss).forEach(function(k) {
      // console.log(k + ' - ' + VariablesDefaultJsonSettings.scss[k]);



    // @ToDo: if VariablesDefaultJsonSettings.scss[k] is (html) color, starts with # 6
    VariablesDefaultHtmlOutput += `<div className="p-3 mb-3 bg-`+k+` text-white" style="background: `+ VariablesDefaultJsonSettings.scss[k]+`  ;">$`+k+`</div>`

  });

    // article.insertAdjacentHTML('beforeend',"</div>


  // article.insertAdjacentHTML('beforeend', VariablesDefaultHtmlOutput + `</div>`);
  article.insertAdjacentHTML('beforeend', SassExtractedVariablesHtmlOutput );

//  article.insertAdjacentHTML('beforeend', sectionMain);



  article.decorators = [
//    (story) => `${Debug(Tertiary.args)}`,
    //    (story) => html`<pre>${story()}</pre>`,
  ];

  return article;
};
