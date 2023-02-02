// import { gsap, ScrollTrigger, ScrollToPlugin } from 'gsap/all';
// gsap.registerPlugin(ScrollTrigger);

// const paralaxImages = document.querySelectorAll('[img-paralax]');
// paralaxImages.forEach((image) => {
//   const wrap = document.createElement('div');
//   wrap.style.overflow = 'hidden';
//   wrap.style.height = '100%';
//   image.parentElement.prepend(wrap);
//   gsap.set(image, { willChange: 'transform', scale: 1.1 });
//   wrap.prepend(image);

//   gsap
//     .timeline({
//       ease: 'none',
//       scrollTrigger: {
//         trigger: wrap,
//         scrub: 0.5,
//         markers: false,
//         onLeave: () => {
//           console.log('leave');
//         },
//         // markers: true,
//       },
//     })
//     .fromTo(
//       image,
//       {
//         y: -35,
//       },
//       {
//         y: 35,
//         ease: 'linear',
//       },
//     );
// });

// const stage = document.querySelector('.page__content');
// const slides = document.querySelectorAll(".slide");
// const titles = document.querySelectorAll('.col__content-title');


// function initIntro() {
    
//     // animate the intro elements into place
    
//     let tl = gsap.timeline({delay: 0.6});
    
//     tl.from('.main-screen-intro-logo', {
//         // x: 100,
//         y: 400,
//         ease: 'power4',
//         duration: 2
//     })
//     .from('.main-screen-intro-descr', {
//         x: -100,
//         opacity: 0,
//         ease: 'power4',
//         duration: 2
//     }, 0.7);
    
//     // set up scrollTrigger animation for the when the intro scrolls out
    
//     let stl = gsap.timeline({
//         scrollTrigger: {
//             trigger: '.main-screen',
//             scrub: 1,
//             start: "top bottom", // position of trigger meets the scroller position
//             end: "bottom top"
//         }
//     });
    
//     stl.to('.main-screen-intro-logo', {
//         x: 400,
//         ease: 'power4.in',
//         duration: 1,
        
//     })
//     .to('.main-screen-intro-descr', {
//         y: -400,
//         ease: 'power4.in',
//         duration: 1,
//     }, 0);
// }

// function initSlides() {
    
//     // Animation of each slide scrolling into view
    
//     slides.forEach((slide) => {   
        
//         let tl = gsap.timeline({
//             scrollTrigger: {
//                 trigger: slide,
//                 start: "40% 50%", // position of trigger meets the scroller position
//             }
//         });
 
//         tl.from(slide.querySelectorAll('.col__content-title'), {
//             ease: "power4",
//             y: 100,
//             duration: 2.5,
//         })
//         .from(slide.querySelectorAll('.col__content-txt'), {
//             x: 100,
//             y: 0,
//             opacity: 0,
//             duration: 2,
//             ease: "power4"
//         }, 0.4)
// 	});
    
//     // External footer link scroll animation
    
//     gsap.from('.footer-up', {
//         scrollTrigger: {
//             trigger: '.footer',
//             scrub: 2,
//             start: "50% 100%", // position of trigger meets the scroller position
//             end: "0% 0%",
//         },
//         y: 150,
//         ease: 'sine'
//     })
// }

// function initParallax() {
    
//     slides.forEach((slide) => {
//         let imageWrappers = slide.querySelectorAll('.col__image-wrap');
        
//         gsap.fromTo(imageWrappers, {
//             y: "-30vh"
//         },{
//             y: "30vh",
//             scrollTrigger: {
//                 trigger: slide,
//                 scrub: true,
//                 start: "top bottom", // position of trigger meets the scroller position
//                 snap: {
//                     snapTo: 0.5, // 0.5 'cause the scroll animation range is 200vh for parallax effect
//                     duration: 1,
//                     ease: 'power4.inOut'
//                 }
//             },
//             ease: 'sine'
//         })
//     });
// }

// // function scrollTop() {
// //     gsap.to(window, {
// //         duration: 2, 
// //         scrollTo: {
// //             y: "#slide-0"
// //         },
// //         ease: "power2.inOut"
// //     });
// //     gsap.to('.footer__link-top-line', {
// //         scaleY: 1,
// //         transformOrigin: "bottom center",
// //         duration: 0.6, 
// //         ease: "power4"
// //     });
// // }


// function init() {
//     gsap.set(stage, { autoAlpha: 1 });
//         initIntro();
// 	  initSlides();
// 	  initParallax();
// }

// window.onload = () => {
// 	init();
// };