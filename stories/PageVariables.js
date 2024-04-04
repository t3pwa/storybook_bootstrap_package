import './page.css';
import { createHeader } from './Header';
import {Debug, Primary, Tertiary} from "./Fluid/ContentElements/panel.stories";
import {VariablesDefault} from "./Fluid/Variables.stories";

export const createVariablesPage = () => {
  const article = document.createElement('article');
  let user = null;
  let header = null;

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

  header = createHeaderElement();
  article.appendChild(header);

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



  const sectionDebug = `
    <section class="debug">
      <h4>Variables Debug</h4>
      <pre>https://getbootstrap.com/docs/5.0/customize/color/</pre>
      
      <h3>Theme colors</h3>
      <pre>
  `
  + `${VariablesDefaultJsonSettingsString}`
  + `</pre><hr></section>`;

  article.insertAdjacentHTML('beforeend', sectionDebug);


  var VariablesDefaultHtmlOutput = `<div className="row">`;
  Object.keys(VariablesDefaultJsonSettings.scss).forEach(function(k) {
      // console.log(k + ' - ' + VariablesDefaultJsonSettings.scss[k]);

    // @ToDo: Demand Filter: If value in array [ white, gray-100, gray-200, gray-300, gray-400, gray-500, gray-600, gray-700, gray-800, gray-900, black
    // primary, secondary, tertiary, quaternary, default, success, info, warning, danger


    // @ToDo: if VariablesDefaultJsonSettings.scss[k] is (html) color, starts with # 6
    VariablesDefaultHtmlOutput += `<div className="p-3 mb-3 bg-`+k+` text-white" style="background: `+ VariablesDefaultJsonSettings.scss[k]+`  ;">$`+k+`</div>`

  });

    // article.insertAdjacentHTML('beforeend',"</div>


  article.insertAdjacentHTML('beforeend', VariablesDefaultHtmlOutput + `</div>`);

//  article.insertAdjacentHTML('beforeend', sectionMain);



  article.decorators = [
//    (story) => `${Debug(Tertiary.args)}`,
    //    (story) => html`<pre>${story()}</pre>`,
  ];

  return article;
};
