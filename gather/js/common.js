$(document).ready(function() {

	$('.hamburger').click(function (){

		$(this).toggleClass('is-active')

		if($(this).hasClass('is-active')) $('.menu').addClass('menu_visible')
		else $('.menu').removeClass('menu_visible')

	});


	$('.btn_scroll').click(function (){

		$("html, body").animate({ scrollTop: 0 }, "slow");

	});


	$('.slider').slick({
		dots: false,
		infinite: true,
		speed: 500,
		fade: true,
		cssEase: 'linear',
		arrows: false,
		autoplay: true,
  		autoplaySpeed: 5000,
		pauseOnHover: false,
		pauseOnFocus: false,
		touchMove: false,
		swipe: false
	});


	$('.products').slick({
		slidesToShow: 3,
		dots: false,
		infinite: true,
		speed: 500,
		pauseOnHover: false,
		pauseOnFocus: false,
		arrows: false,
		arrows: true,
		prevArrow: $('.products-nav__prev'),
		nextArrow: $('.products-nav__next'),
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
				}
			},
		]
	});

});

var mixer = mixitup('.gallery__content');


$(window).resize(function (){

	if($('.hamburger').hasClass('is-active')) $('.hamburger').click()

});

$(window).scroll(function (){

	if($(this).scrollTop() >= 50) $('.menu').addClass('menu_scroll')
	else $('.menu').removeClass('menu_scroll')

	if($(this).scrollTop() >= $(window).height()) $('.btn_scroll').addClass('btn_scroll_visible')
	else $('.btn_scroll').removeClass('btn_scroll_visible')

});
