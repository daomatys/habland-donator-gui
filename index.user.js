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

const CN_INPUT_WRAP = 'input-sizer';
const CN_BUTTON = 'init-button';
const CN_GUI = 'don-gui';
const CN_GUI_BUTTON = 'don-gui__button';

const MARKUP_GUI_BUTTONS = [
  { label: 'T', suffix: 'teleport', acton: false, toggle: true  },
  { label: 'X', suffix: 'shoot',    acton: false, toggle: false },
];

const MARKUP_BUTTON = (`
  <style type="text/css">
    .${CN_BUTTON} {
      position: absolute;
      top: 10%;
      left: 10%;
      z-index: 1000;
      background-color: #42b700;
    }
  </style>
  <button class="${CN_BUTTON}">
    INIT GUI
  </button>`
);

const MARKUP_GUI = (`
  <style type="text/css">
    .${CN_GUI} {
      position: absolute;
      display: grid;
      bottom: 5%;
      left: 50%;
      z-index: 1001;
      background-color: #42b700;
    }
    .${CN_GUI_BUTTON} {
      z-index: 1002;
    }
  </style>
  <div class="${CN_GUI}">
    ${MARKUP_GUI_BUTTONS
      .map(({ label, suffix, toggle }) => (`
        <div class="${CN_GUI_BUTTON}-${suffix} ${toggle && `${CN_GUI_BUTTON}-off`}">
          ${label}
        </div>`
      ))
      .join('')
    }
  </div>`
);

const defineElement = (className) => {
  const elem = document.querySelector(`.${className}`);
  console.log(elem);
  return elem;
};

const renderGUI = () => {
  const inputWrap = defineElement(CN_INPUT_WRAP);

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
    .insertAdjacentHTML('afterbegin', MARKUP_BUTTON);

  document
    .querySelector('body')
    .insertAdjacentHTML('afterbegin', MARKUP_GUI);

  defineElement(CN_BUTTON)
    .addEventListener('click', () => {renderGUI();});
})();
