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
const CN_GUI_BUTTON = `${CN_GUI}__button`;

const defineButtonCN = (cmnd) => {
  return `${CN_GUI_BUTTON}-${cmnd}`;
};

const defineElement = (className) => {
  return document.querySelector(`.${className}`);
};

const defineButtonElement = (cmnd) => {
  defineElement(defineButtonCN(cmnd));
};

const onButtonClick = (cmnd, toggle, foruser) => {
  const inputWrap = defineElement(CN_INPUT_WRAP);

  if (inputWrap) {
    const input = inputWrap.firstElementChild;
  
    if (input) {
      const submitEvent = new SubmitEvent();
      elem.value = `:${cmnd} `;
      if (!foruser) {
        elem.dispatchEvent(submitEvent);
      }
      if (toggle) {
        defineButtonElement(cmnd)
          .classList
          .toggle(defineButtonCN('toggled'));
      }
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
      width: 16px;
      height: 16px;
      text-align: center;
      background-color: #d4b5f7;
      z-index: 1002;
    }
    .${CN_GUI_BUTTON}-toggled {
      border: 1px solid #131313;
    }
  </style>
  <div class="${CN_GUI}">
    ${MARKUP_GUI_BUTTONS
      .map(({ label, cmnd }) => (`
        <div class="${CN_GUI_BUTTON} ${defineButtonCN(cmnd)}">
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
      defineButtonElement(cmnd).addEventListener('click', () => {onButtonClick(cmnd, toggle, foruser)})
    })
})();
