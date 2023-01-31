import { gsap, ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

// export function paralax(selector, scroller, amplitude = 35) {
//   const paralaxImages = document.querySelectorAll(selector);
//   paralaxImages.forEach(image => {
//     gsap
//       .timeline({
//         ease: 'none',
//         scrollTrigger: {
//           trigger: image,
//           scrub: 0.5,
//           scroller: scroller || null,
//           // markers: true,
//         },
//       })
//       .fromTo(
//         image,
//         {
//           y: amplitude,
//         },
//         {
//           y: amplitude * -1,
//           // ease: 'linear',
//         },
//       );
//   });
// }
