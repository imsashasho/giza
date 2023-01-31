import { popupFactory } from './popupFactory';

export const successPopup = popupFactory(document.querySelector('.thank-you-popup'));

const closeBtnRef = document.querySelector('.thank-you-popup__btn');

closeBtnRef.addEventListener('click', () => {
  successPopup.close();
});
