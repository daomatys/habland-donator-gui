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
const inputSelector = '.input-sizer';
const buttonSelector = 'init-button'
const markup = (`
  <button class="${buttonSelector}">
    hello
  </button>`
);

const defineElement = (selector) => (
  document.querySelector(selector)
);

(function () {
  const body = defineElement('body');

  body.insertAdjacentHTML('afterbegin', markup);

  const buttonElement = defineElement(`.${buttonSelector}`);

  console.log('initialized', buttonElement);

  const renderPanel = () => {
    const elem = defineElement(inputSelector).firstElementChild;
    console.log(elem)
    if (elem) {
      const submitEvent = new SubmitEvent();
      elem.value = ':teleport';
      elem.dispatchEvent(submitEvent);
    }
  };

  buttonElement.addEventListener('click', renderPanel);
})();
