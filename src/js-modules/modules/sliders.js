const sliders = function(){

    const swiper = new Swiper('.slider__swipper', {        
        slidesPerView: 1,
        pagination: {
          el: '.slider__swipper .swiper-pagination',
          clickable: true,
        },
        breakpoints: {
          1200: {
            direction: 'vertical',
          }
        }
      });

    if (document.documentElement.clientWidth >= 1200){
      const brends = new Swiper('.partners__slider', {        
        slidesPerView: 5,
        spaceBetween: 20,
        navigation: {
          nextEl: '.partners .swiper-button-next',
          prevEl: '.partners .swiper-button-prev',
        },
        
      });
    };

    if (document.documentElement.clientWidth >= 1200){
      const popular = new Swiper('.js__popuplar__slider', {        
        slidesPerView: 5,
        spaceBetween: 41,
        pagination: {
          el: '.popular .swiper-pagination',
          clickable: true,
        },
        breakpoints: {
          // when window width is >= 320px
          1200: {
            slidesPerView: 3,
            spaceBetween: 21,
            
          },
          1400: {
            slidesPerView: 4,
            spaceBetween: 31
          },
          1600: {
            slidesPerView: 5,
            spaceBetween: 41
          },
        }
        
        
      });
    };


    let swiperspecial = new Swiper(".special-slider-mini", {
		  direction: 'horizontal',
		  spaceBetween: 19,
		  slidesPerView: 3,
		  freeMode: true,
		  watchSlidesProgress: true,
		  pagination: {
			el: '.special-slider-mini .swiper-pagination',
		  },
		  navigation: {
			nextEl: '.special-slider-mini-buttons-container .swiper-button-next',
			prevEl: '.special-slider-mini-buttons-container .swiper-button-prev',
		  },
		  breakpoints: {
        320:{
          spaceBetween: 19,
		      slidesPerView: 2,
        },
        600:{
          spaceBetween: 19,
          slidesPerView: 3,
        },
			  1200:{
          slidesPerView: 3,
				  spaceBetween: 19,
			  }
			}
		});
		let swiperspecialmini = new Swiper(".special-slider-main", {
		  direction: "horizontal",
		  spaceBetween: 4,
		  slidesPerView: 1,
		  thumbs: {
			swiper: swiperspecial,
		  },
		  breakpoints: {
			1200:{
			  
			}
		 }
		});

};
export default sliders;