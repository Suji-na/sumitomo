jQuery(document).ready(function ($) {

	// SP用 MVスライド
	$('.top-mv__slide').slick({
		infinite: true,
		dots: true,
		arrows: false,
		speed: 1000,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 4000,
		pauseOnHover: false,
		pauseOnFocus: false,
		pauseOnDotsHover: false,
		// fade: true,
		// cssEase: 'linear'
	});

	// バナースライド
	$('.banner-slide').slick({
		infinite: true,
		dots: false,
		arrows: true,
		speed: 1000,
		slidesToShow: 2,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 640,
				settings: {
					slidesToShow: 1,
					dots: true
				}
			}
		]
	});

	//path = $('.banner-slide .slick-slide img').attr('src');
	//$('.banner-slide .slick-slide img').height();
	//$('.banner-slide .slick-slide img').width();

	$(".banner-slide .slick-slide img").each(function () {
		if ($(window).width() >= 640) {
			currentImg = $(this).attr("src");
			width = $(this).width();
			height = $(this).height();
			ratiow = width / height;
			ratioh = height / width;
			w = $('div.slick-slide').width();
			h = $('div.slick-slide').height();
			if (h > 380) { h = 380; }
			stratiow = w / h;
			stratioh = h / w;
			mt = (h - height) / 2;
			if (mt < 0) { mt = 0; }
			if ((ratiow > stratiow) && (width > w)) {
				$(this).width(w);
				height = $(this).height();
				$(this).height(height);
				$(this).css("margin", mt + "px auto");
			} else if (height > h) {
				$(this).height(h);
				width = $(this).width();
				$(this).width(width);
				$(this).css("margin", mt + "px auto");
			} else if (ratiow > stratiow) {
				console.log("03:" + width + " x " + height);
				$(this).css("margin", mt + "px auto");
			} else if (ratiow < stratiow) {
				$(this).height(h);
				width = $(this).width();
				$(this).width(width);
				$(this).css("margin", " auto");
			} else {
				console.log("05:" + width + " x " + height);
				$(this).css("margin", mt + "px auto");
			}

		} else {
			height = $(this).height();
			h = $('div.slick-slide').height();
			mt = (h - height) / 2;
			$(this).css("margin", mt + "px auto");
		}
	});

})


document.addEventListener("DOMContentLoaded", function () {
	const box = document.querySelector('.top-mv__scd');
	const fst = document.querySelector('.top-mv__fst');

	function handleFirstScroll(e) {
		box.classList.add('active');
		fst.classList.add('active');

		setTimeout(() => {
			window.removeEventListener('wheel', handleFirstScroll, { passive: false });
			window.removeEventListener('touchmove', handleFirstScroll, { passive: false });
		}, 0);

		window.scrollTo(0, 0);

		e.preventDefault();
		e.stopPropagation();
	}

	window.addEventListener('wheel', handleFirstScroll, { passive: false });
	window.addEventListener('touchmove', handleFirstScroll, { passive: false });
});




