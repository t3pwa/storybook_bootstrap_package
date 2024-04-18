//import './page.scss';
import {createHeader} from './Header';

import './_pageVariables.scss';

// import { createPanel } from './Fluid/ContentElements/Panel';

// Should i import a story to a page module?
import {Debug, Primary, Tertiary} from "./ContentElements/panel.stories";

import {VariablesDefault} from "./Variables.stories";

export const style = require('sass-extract-loader!./src/scss/_variables.scss');

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
    return Primary();
  };

  header = createHeaderElement();
  article.appendChild(header);

  panel = createPanelElement();
  // article.appendChild(panel);

  const sectionMain = `
    <section class="main">
      
      <h2>Section Main: Variables</h2>
      <p>We recommend ...
        .... ending with pages.</p>
      <p>Render pages with mock data...</p>
      <div class="tip-wrapper">
        <span class="tip">Tip</span>
        Adjust the width of the canvas with the
        Viewports ...
      </div>
    </section>
  `;

  const VariablesDefaultJsonSettingsString = JSON.stringify(VariablesDefault.args.settings);
  const VariablesDefaultJsonSettings = JSON.parse(VariablesDefaultJsonSettingsString);

//  const brandInfo = style.global['$theme-colors'].value.primary.value.hex; // '#00695F';
//  const brandInfo = style.global['$theme-colors'].value.primary.value.hex;

//  console.log(style.global);
//  console.log(JSON.stringify(style.global));


  let SassExtractedVariablesJson = {};
  let assExtractedVariablesString = '';
  let SassExtractedVariablesHtmlOutput = `<div class="row row-cols-4">`;

  for (const key in style.global ) {
//    console.log(`${key}: ${style.global[key]}`);
    // console.log( `${style.global[key].type}` );
    // @ToDo: Demand Filter: If value in array [ white, gray-100, gray-200, gray-300, gray-400, gray-500, gray-600, gray-700, gray-800, gray-900, black
    // primary, secondary, tertiary, quaternary, default, success, info, warning, danger
    if ( style.global[key].type == 'SassNumber' ) {
//      console.log( ' ', key, style.global[key].value + style.global[key].unit );
    } else if ( style.global[key].type == 'SassColor' ) {
//      console.log( ' ', key, style.global[key].value.hex );
      SassExtractedVariablesHtmlOutput += `<div class="mb-3 p-3 mb-5 text-white" style="background: `+ style.global[key].value.hex +`  ;">`+key+`</div>`
    }
  };
  SassExtractedVariablesHtmlOutput += `</div>`;

  // JSONView needs window.jQuery
  window.jQuery = window.$ = require('jquery')
  require(['jquery'], function( jQuery ) {
    require(['jquery-jsonview'], function( $ ) {
    });
  });

  jQuery(document).ready(function () {
    jQuery("#jsonView").JSONView(jQuery('#jsonView').text(), {
      collapsed: true,
      nl2br: true,
      recursive_collapser: true
    });

    jQuery(".jsonview .string").attr('data-value', function() {
      return $(this).text().replace(/['"]+/g, '');
    });
    // add background color, when data-value is a color
    jQuery(".jsonview .string[data-value^='#']").attr('style', function() {
          return "background: " + $(this).data('value') + ";";
        }
    );

    jQuery(".jsonview .prop").attr('data-value', function() {
      return $(this).text().replace(/['"]+/g, '');
    });


  });

  const sectionDebug = `
    <section class="debug">
      <!-- <a href="https://getbootstrap.com/docs/5.0/customize/color/">https://getbootstrap.com/docs/5.0/customize/color/</a> -->
      <h4>Debug <small>stlye.global</small></h4>
      <div id="jsonView">`
//      + `${VariablesDefaultJsonSettingsString}`
      + `${JSON.stringify(style.global, null, "\t")}`
      + `
      </div>
   </section>`;
  article.insertAdjacentHTML('beforeend', sectionDebug);




  var VariablesDefaultHtmlOutput = `<div className="row">`;
  Object.keys(VariablesDefaultJsonSettings.scss).forEach(function(k) {
      // console.log(k + ' - ' + VariablesDefaultJsonSettings.scss[k]);

    // @ToDo: if VariablesDefaultJsonSettings.scss[k] is (html) color, starts with #6
    VariablesDefaultHtmlOutput += `<div className="p-3 mb-3 bg-`+k+` text-white" style="background: `+ VariablesDefaultJsonSettings.scss[k]+`  ;">$`+k+`</div>`

  });


  article.insertAdjacentHTML('beforeend', SassExtractedVariablesHtmlOutput );

//  article.insertAdjacentHTML('beforeend', sectionMain);



  article.decorators = [
//    (story) => `${Debug(Tertiary.args)}`,
    //    (story) => html`<pre>${story()}</pre>`,
  ];

  return article;
};
