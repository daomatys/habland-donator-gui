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

const inputClassName = 'input-sizer';
const buttonClassName = 'init-button';
const markup = (`
  <button class="${buttonClassName}">
    hello
  </button>`
);

const defineElement = (className) => {
  const elem = document.querySelector(`.${className}`);
  console.log(elem)
  return elem;
}

const renderPanel = () => {
  console.log('click');
  const elem = defineElement(buttonClassName).firstElementChild;

  const submitEvent = new SubmitEvent();
  elem.value = ':teleport';
  elem.dispatchEvent(submitEvent);
};

(function () {
  const body = document.querySelector('body');

  body.insertAdjacentHTML('afterbegin', markup);

  const buttonElement = elem(buttonClassName);

  console.log('initialized', buttonElement);

  buttonElement.addEventListener('click', () => {renderPanel()});
})();
