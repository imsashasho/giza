import FormMonster from '../../../pug/components/form/form';
import SexyInput from '../../../pug/components/input/input';
import * as yup from 'yup';
import i18next from 'i18next';
import {gsap, ScrollTrigger} from 'gsap/all';


gsap.registerPlugin(ScrollTrigger)

const formsWithTel = ['#call-form'];

formsWithTel.forEach(form => {
  const $form = document.querySelector(form);
  if ($form) {
    /* eslint-disable */
    new FormMonster({
      /* eslint-enable */
      elements: {
        $form,
        showSuccessMessage: false,
        successAction: () => {
          const callBlock = document.querySelector('.thank-you-popup');
          const callThanksBlock = document.querySelector('.thank-you-popup');
          callBlock.classList.add('modal-open');
          callThanksBlock.classList.add('modal-open');
          callThanksBlock.classList.remove('modal-open');
        },
        $btnSubmit: $form.querySelector('[data-btn-submit-footer]'),
        fields: {
          phone: {
            inputWrapper: new SexyInput({
              animation: 'none',
              $field: $form.querySelector('[data-field-phone]'),
              typeInput: 'phone',
            }),
            rule: yup
              .string()
              .required(i18next.t('required'))
              .min(15, i18next.t('field_too_short', { cnt: 19 - 8 })),

            defaultMessage: i18next.t('phone'),
            valid: false,
            error: [],
          },
        },
      },
    });
    // $form.querySelector('.js-mask-absolute').addEventListener('click', () => {
    //   $form.querySelector('[name="phone"]').focus();
    // }, false);
  }
});

const footer = document.querySelector('footer');

const initFooter = () => {
  const footerUpRef = document.querySelector('.footer-up');

  function scrollToTop(e) {
    // Scroll to top logic
    e.preventDefault();
    window.scrollTo({
      behavior: 'smooth',
      top: 0,
    });
  }

  // External footer link scroll animation

  gsap.from('.footer-up', {
    scrollTrigger: {
      trigger: '.footer',
      scrub: 2,
      start: '50% 100%', // position of trigger meets the scroller position
      end: '0% 0%',
    },
    y: 150,
    ease: 'sine',
  });

  footerUpRef.addEventListener('click', scrollToTop);
};

if (footer) {
  initFooter();
}
