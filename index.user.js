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

const CN_GUI = 'don-gui';
const CN_GUI_BUTTON = `${CN_GUI}__button`;

const defineElement = (className) => {
  return document.querySelector(`.${className}`);
};

const defineButtonCN = (cmnd) => {
  return `${CN_GUI_BUTTON}-${cmnd}`;
};

const defineButtonElement = (cmnd) => {
  return defineElement(defineButtonCN(cmnd));
};

const onButtonClick = (cmnd, foruser) => {
  const input = defineElement('chat-input');

  if (input) {
    input.value = `:${cmnd} `;

    if (foruser) {
      defineButtonElement(cmnd)
        .classList
        .toggle(defineButtonCN('toggled'));
    } else {
      const submitEvent = new SubmitEvent();
      input.dispatchEvent(submitEvent);
    }
    console.log('done!');
  } else {
    console.log('input: ', input);
  }
};

const PROPS_GUI_BUTTONS = [
  { label: 'T', cmnd: 'teleport', foruser: false },
  { label: 'S', cmnd: 'shoot',    foruser: true  }
];

const MARKUP_GUI = (`
  <style type="text/css">
    .${CN_GUI} {
      position: absolute;
      display: grid;
      grid-auto-flow: column;
      grid-template-rows: repeat(2, auto);
      grid-gap: 2px;
      bottom: 10px;
      left: 50%;
      z-index: 1001;
    }
    .${CN_GUI_BUTTON} {
      width: 16px;
      height: 16px;
      text-align: center;
      background-color: #d4b5f7;
      z-index: 1002;
      user-select: none;
      cursor: pointer;
    }
    .${CN_GUI_BUTTON}-toggled {
      background-color: red !important;
      border: 1px solid #131313;
    }
  </style>
  <div class="${CN_GUI}">
    ${PROPS_GUI_BUTTONS
      .map(({ label, cmnd }) => (`
        <div class="${CN_GUI_BUTTON} ${defineButtonCN(cmnd)}">
          ${label}
        </div>`
      ))
      .join('')
    }
  </div>`
);

const renderGUI = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      defineElement('page_block').insertAdjacentHTML('afterbegin', MARKUP_GUI);
  
      PROPS_GUI_BUTTONS.forEach(
        ({ cmnd, toggle, foruser }) => {
          defineButtonElement(cmnd).addEventListener('click', () => {onButtonClick(cmnd, toggle, foruser)})
        }
      );
      resolve();
    }, 6000);
  });
  
};

(function () {
  window.addEventListener('load', () => {
    renderGUI().then(() => {
      console.log('GUI successfully loaded.');
    });
  });
})();
