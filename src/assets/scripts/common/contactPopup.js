import { popupFactory } from './popupFactory';

export const contactPopup = popupFactory(document.querySelector('.contact-popup'));
const closeBtnRef = document.querySelector('.close-form');

closeBtnRef.addEventListener('click', () => {
  contactPopup.close();
});
