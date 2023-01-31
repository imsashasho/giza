import { gsap, ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);
gsap
  .timeline({
    scrollTrigger: {
      trigger: '.about-page-intro',
      scrub: 1,
      start: '0% top',
      end: '100% top',
      // markers: true,
    },
  })
  .to('.about-page-intro-img', {
    // y: 150,
    scale: 1.1,
  })
  .to('.about-page-intro-wrap', { autoAlpha: 0, duration: 0.35 }, '<');

const paralaxImages = document.querySelectorAll('[img-paralax]');
paralaxImages.forEach((image) => {
  const wrap = document.createElement('div');
  wrap.style.overflow = 'hidden';
  wrap.style.height = '100%';
  image.parentElement.prepend(wrap);
  gsap.set(image, { willChange: 'transform', scale: 1.1 });
  wrap.prepend(image);

  gsap
    .timeline({
      ease: 'none',
      scrollTrigger: {
        trigger: wrap,
        scrub: 1,
        markers: false,
        onLeave: () => {
          console.log('leave');
        },
        // markers: true,
      },
    })
    .fromTo(
      image,
      {
        y: -40,
      },
      {
        y: 40,
        ease: 'power4.out',
      },
    );
});
