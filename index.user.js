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
const CN_GUI = 'don-gui';
const CN_GUI_BUTTON = 'don-gui__button';

const defineButtonCN = (cmnd, toggle) => {
  const baseCN = `${CN_GUI_BUTTON}-${cmnd}`;
  const sideCN = toggle ? `${CN_GUI_BUTTON}-off` : '';

  return (`${baseCN} ${sideCN}`).trim();
};

const defineElement = (className) => {
  return document.querySelector(`.${className}`);
};

const onButtonClick = (cmnd, toggle, foruser) => {
  const inputWrap = defineElement(CN_INPUT_WRAP);

  if (inputWrap) {
    const input = inputWrap.firstElementChild;
  
    if (input) {
      const submitEvent = new SubmitEvent();
      elem.value = `:${cmnd}`;
      elem.dispatchEvent(submitEvent);
      console.log('done!');
    } else {
      console.log('input not found');
    }
  } else {
    console.log('inputWrap not found');
  }
};

const MARKUP_GUI_BUTTONS = [
  { label: 'T', cmnd: 'teleport', toggle: true,  foruser: false  },
  { label: 'S', cmnd: 'shoot',    toggle: false, foruser: true }
];

const MARKUP_GUI = (`
  <style type="text/css">
    .${CN_GUI} {
      position: absolute;
      display: grid;
      grid-auto-flow: column;
      grid-template-rows: repeat(2, auto);
      grid-gap: 2px;
      bottom: 5%;
      left: 50%;
      z-index: 1001;
    }
    .${CN_GUI_BUTTON} {
      z-index: 1002;
    }
  </style>
  <div class="${CN_GUI}">
    ${MARKUP_GUI_BUTTONS
      .map(({ label, cmnd, toggle }) => (`
        <div class="${defineButtonCN(cmnd, toggle)} }">
          ${label}
        </div>`
      ))
      .join('')
    }
  </div>`
);

(function () {
  document
    .querySelector('body')
    .insertAdjacentHTML('afterbegin', MARKUP_GUI);
  
  MARKUP_GUI_BUTTONS.forEach(
    ({ cmnd, toggle, foruser }) => {
      defineElement(defineButtonCN(cmnd)).addEventListener('click', () => {onButtonClick(cmnd, toggle, foruser)})
    })
})();
