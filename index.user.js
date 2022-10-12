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

const CN_INPUTWRAP = 'input-sizer';
const CN_BUTTON = 'init-button';

const markup = (`
  <style type="text/css">
    .${CN_BUTTON} {
      position: absolute;
      top: 10%;
      left: 10%;
      z-index: 1000;
      background-color: #232323;
    }
  </style>
  <button class="${CN_BUTTON}">
    INITIALIZE GUI
  </button>`
);

const defineElement = (className) => {
  const elem = document.querySelector(`.${className}`);
  console.log(elem)
  return elem;
};

const renderPanel = () => {
  const inputWrap = defineElement(CN_INPUTWRAP);

  if (inputWrap) {
    const input = inputWrap.firstElementChild;
  
    if (input) {
      const submitEvent = new SubmitEvent();
      elem.value = ':teleport';
      elem.dispatchEvent(submitEvent);
      console.log('done!');
    } else {
      console.log('input not found');
    }
  } else {
    console.log('inputWrap not found');
  }
};

(function () {
  document
    .querySelector('body')
    .insertAdjacentHTML('afterbegin', markup);

  defineElement(CN_BUTTON)
    .addEventListener('click', () => {renderPanel()});
})();
