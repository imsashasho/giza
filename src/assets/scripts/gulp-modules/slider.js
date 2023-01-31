// import Sketch from "./sketch";

// function init() {
// 	document.addEventListener("DOMContentLoaded", function () {
// 	  if (navigator.userAgent.indexOf('Safari') != -1 &&
// 		navigator.userAgent.indexOf('Chrome') == -1) {
// 		document.querySelector("body").addClass("safari");
// 	  }
// 	});

const slider = new Swiper('.single-project-slider', {
  loop: true,
  navigation: {
    nextEl: document.querySelector('.single-project-intro-nav--next'),
    prevEl: document.querySelector('.single-project-intro-nav--prev'),
  },
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },
  preloadImages: false,
  lazy: true,
  speed: 1000,
  // autoplay: {
  //   delay: 5000,
  //   disableOnInteraction: false,
  //   waitForTransition: false,
  // },
  watchSlidesVisibility: true,
});

console.log(slider);
const msGlSlider = mainScreenGlSlider();
slider.on('slideNextTransitionStart', obj => {
  msGlSlider.nextExtern();
});
slider.on('slidePrevTransitionStart', () => {
  msGlSlider.prevExtern();
});
// slider[0].on('transitionStart', obj => {
//   obj.navigation.nextEl.style.pointerEvents = 'none';
//   obj.navigation.prevEl.style.pointerEvents = 'none';
// });
// slider[0].on('transitionEnd', obj => {
//   obj.navigation.nextEl.style.pointerEvents = '';
//   obj.navigation.prevEl.style.pointerEvents = '';
// });

//   }

//   document.addEventListener('DOMContentLoaded', init);

function mainScreenGlSlider() {
  const imagesForGl = Array.from(
    document.querySelectorAll(
      '.single-project-slider-wrap .swiper-slide:not(.swiper-slide-duplicate) img',
    ),
  ).map(img => img.src);

  let sketch = new Sketch({
    debug: true,
    slider: document.querySelector('.animation-for-slider'),
    images: imagesForGl,
    prevClicker: document.getElementById('clicker-prev'),
    clicker: document.getElementById('clicker-next'),
    duration: 1,
    uniforms: {
      intensity: { value: 1, type: 'f', min: 0, max: 3 },
    },
    fragment: `
		  uniform float time;
		  uniform float progress;
		  uniform float intensity;
		  uniform float width;
		  uniform float scaleX;
		  uniform float scaleY;
		  uniform float transition;
		  uniform float radius;
		  uniform float swipe;
		  uniform sampler2D texture1;
		  uniform sampler2D texture2;
		  uniform sampler2D displacement;
		  uniform vec4 resolution;
		  varying vec2 vUv;
		  mat2 getRotM(float angle) {
			  float s = sin(angle);
			  float c = cos(angle);
			  return mat2(c, -s, s, c);
		  }
		  const float PI = 3.1415;
		  const float angle1 = PI *0.25;
		  const float angle2 = -PI *0.75;
		  void main()	{
			  vec2 newUV = (vUv - vec2(0.5))*resolution.zw + vec2(0.5);
			  vec4 disp = texture2D(displacement, newUV);
			  vec2 dispVec = vec2(disp.r, disp.g);
			  vec2 distortedPosition1 = newUV + getRotM(angle1) * dispVec * intensity * progress;
			  vec4 t1 = texture2D(texture1, distortedPosition1);
			  vec2 distortedPosition2 = newUV + getRotM(angle2) * dispVec * intensity * (1.0 - progress);
			  vec4 t2 = texture2D(texture2, distortedPosition2);
			  gl_FragColor = mix(t1, t2, progress);
		  }
	  `,
  });

  return sketch;
}
