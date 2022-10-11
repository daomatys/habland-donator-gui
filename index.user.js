// ==UserScript==
// @name          habland-donator-gui
// @namespace     https://github.com/daomatys/habland-donator-gui
// @description   Simple overlay for habland donator's privileges
// @icon          https://sun4-17.userapi.com/oBEu9jqFA2acYIE4CRhcZT_XAiYqOlIzj9j8Yg/E2hRXabLipU.png?6
// @version       0.1
// @author        daomatys
// @match         https://vk.com/app4315377_142573694
// @grant         none
// ==/UserScript==

(function () {
  const inputSelector = '.chat-input';
  const buttonSelector = 'init-button'

  console.log(inputSelector);
  
  const markup = (`
    <div class="${buttonSelector}">
      <div class="${buttonSelector}__background">
        hello
      </div>
    </div>`
  );

  document.querySelector('body').insertAdjacentHTML('afterbegin', markup);
  console.log(markup);

  document.querySelector(inputSelector).addEventListener('load', () => {
    console.log('OKOKOKOK');
  })
  
})();
