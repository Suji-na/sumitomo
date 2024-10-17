// $(function ($) {
//   if ($(window).width() < 641) {
//     $(window).on("load", function () {
//       var $img = $(".zoomImg").imgViewer2({
//         onReady: function () {
//           this.setZoom(2);
//           this.setZoom(1);
//         },
//       });
//     });
//   }
// });

// document.addEventListener("DOMContentLoaded", function () {
//   initializeSwipers();
// });

// function initializeSwipers() {
//   const sliders = [
//     { id: '#slider1' },
//     { id: '#slider2' },
//     { id: '#slider3' }
//   ];

//   let thumbScrollArr = [];

//   sliders.forEach(slider => {
//     const swiperContainer = document.querySelector(slider.id + ' .swiper-container');
//     const contentElement = document.querySelector(slider.id + ' .swiper-content');

//     const swiper = new Swiper(swiperContainer, {
//       slidesPerView: 1.92,
//       spaceBetween: 15,
//       loop: true,
//       speed: 0,

//       autoplay: {
//         delay: 10000,
//         disableOnInteraction: false,
//       },

//       navigation: {
//         nextEl: slider.id + ' .swiper-button-next',
//         prevEl: slider.id + ' .swiper-button-prev',
//       },

//       breakpoints: {
//         578: { slidesPerView: 2, spaceBetween: 20 },
//         768: { slidesPerView: 3.2, spaceBetween: 20 },
//         992: { slidesPerView: 2.5, spaceBetween: 30 },
//         1024: { slidesPerView: 2.9, spaceBetween: 30 },
//         1120: { slidesPerView: 3, spaceBetween: 30 },
//         1280: { slidesPerView: 2.58, spaceBetween: 40 },
//         1320: { slidesPerView: 2.8769, spaceBetween: 40 },
//       },

//       on: {
//         init: function () {
//           updateText(this, contentElement);
//           let elScrollBar = document.querySelector(slider.id + " .slider-scrollbar");

//           if (elScrollBar != null) {
//             makeScrollBar(this, elScrollBar);
//           }

//           // swiper.slides[swiper.activeIndex].classList.add('swiper-slide-active-custom');
//         },

//         slideChangeTransitionEnd: function () {
//           updateText(this, contentElement);
//         },

//         slideNextTransitionStart: function () {
//           let elScrollBar = document.querySelector(slider.id + " .slider-scrollbar");

//           if (elScrollBar != null) {
//             updateScrollThumb(this, elScrollBar, true);
//           }
//         },

//         slidePrevTransitionStart: function () {
//           let elScrollBar = document.querySelector(slider.id + " .slider-scrollbar");

//           if (elScrollBar != null) {
//             updateScrollThumb(this, elScrollBar, false);
//           }
//         },
//       },
//     });

//     swiper;

//     function makeScrollBar(slider, scrollEl) {
//       let slidesLength = slider.slides.length;

//       let scrollThumb = scrollEl.querySelector(".slider-thumb");
//       let scrollElLength = scrollEl.getBoundingClientRect().width;
//       let scrollThumbWidth = scrollElLength / slidesLength;
//       let activeIndex = slider.realIndex;

//       calScrollThumbPos(slider, scrollThumbWidth);

//       scrollThumb.style.width = `${scrollThumbWidth}px`;
//       scrollThumb.style.transform = `translate(${thumbScrollArr[activeIndex]}, 0px)`;
//     }

//     function calScrollThumbPos(slider, thumbWidth) {
//       let allSlides = slider.slides;

//       for (let i = 0; i < allSlides.length; i++) {
//         thumbScrollArr.push(thumbWidth * i);
//       }
//     }

//     function updateText(swiper, contentElement) {
//       const swiperWrapper = swiper.slidesEl;
//       const activeSlide = swiperWrapper.querySelector(".swiper-slide.swiper-slide-active");
    
//       if (activeSlide != null) {
//         const textElement = activeSlide.querySelector(".swiper-text");
    
//         if (textElement) {
//           const mainText = textElement.childNodes[0].textContent.trim();
//           const spanText = textElement.querySelector("span") ? textElement.querySelector("span").outerHTML : "";
    
//           contentElement.innerHTML = mainText + " " + spanText;
    
//           contentElement.classList.remove('fadeInUp'); 
//           void contentElement.offsetWidth; 
//           contentElement.classList.add('fadeInUp'); 
//         }
//       }
//     }

//     function updateScrollThumb(swiper, elScrollBar, isNext) {
//       let scrollThumb = elScrollBar.querySelector(".slider-thumb");
//       let realIndex = swiper.realIndex;

//       if (isNext) {
//         if (realIndex == swiper.slides.length) {
//           scrollThumb.style.transform = `translate(${thumbScrollArr[0]}px, 0px)`;
//         } else {
//           scrollThumb.style.transform = `translate(${thumbScrollArr[realIndex]}px, 0px)`;
//         }
//       } else {
//         if (realIndex == swiper.slides.length) {
//           scrollThumb.style.transform = `translate(${thumbScrollArr[(swiper.slides.length - 1)]}px, 0px)`;
//         } else {
//           scrollThumb.style.transform = `translate(${thumbScrollArr[realIndex]}px, 0px)`;
//         }
//       }

//     }
//   });
// }

function popularSlider() {
  const popSlid = new Swiper(".popular-slider", {
    autoplay: {
      delay: 5000,
    },
    slidesPerView: 1.4,
    spaceBetween: 15,
    loop: true,
    pagination: {
      el: '.popular-pagination',
      clickable : true,
    },
    navigation: {
      nextEl: '.popular-btn-right',
      prevEl: '.popular-btn-left',
    },
    breakpoints: {
      768: {
        slidesPerView: 2.3,
        spaceBetween: 25,
      },

      992: {
        spaceBetween: 40,
        slidesPerView: 2.9499,

      }
    }
  })

  popSlid;
}

popularSlider()