import gsap from 'gsap';
import axios from 'axios';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './common/header';
import './common/footer';
import { preloader } from './common/loader';

global.gsap = gsap;
global.axios = axios;

// window.addEventListener('load', () => {
//   setTimeout(() => {
//     preloader.remove();
//   }, 100);
// });

/*
 * form handlers end
 */
// function disableScroll() {
//   const containersScroll = document.querySelectorAll('[data-disable-page-scroll]');
//   containersScroll.forEach(block => {
//     block.addEventListener('mouseenter', () => {
//       locoScroll.stop();
//     });
//     block.addEventListener('mouseleave', () => {
//       locoScroll.start();
//     });
//   });
// }

// document.addEventListener('DOMContentLoaded', () => {
//   // disableScroll();
//   window.locoScroll.update();
// });

/** ******************************* */
