$( document ).ready(function() {

	$('.owl-carousel').owlCarousel({
		items : 1,
		loop : true,
		dots: false,
		nav: true,
		responsiveClass:true,
		navText : ["<i class='fas fa-long-arrow-alt-left'>","<i class='fas fa-long-arrow-alt-right'></i>"],
		responsive:{
			968:{
				items: 3,

			},
			768:{
				items: 2
			}
		}
	});

	var wow = new WOW(
		{
		  boxClass:     'wow',
		  animateClass: 'animated',
		  offset:       0,
		  mobile:       true,
		  live:         true,
		  callback:     function(box) {},
		  scrollContainer: null
		}
	  );
	  wow.init();


	$('.hamburger').click(function (){

		$('.hamburger').toggleClass('hamburger-active')
		$('.navigation').toggleClass('navigation-visible')

	});


	$('.navigation__link').click(function() {
		if($('.hamburger').hasClass('hamburger-active')) $('.hamburger').click()
	});

	$("a[href='#top']").click(function() {
		$("html, body").animate({ scrollTop: 0 }, "slow");
	});

	$("a[href='#services']").click(function() {
		$("html, body").animate({ scrollTop: $(".services").offset().top - 200 }, "slow");
	});

	$("a[href='#about']").click(function() {
		$("html, body").animate({ scrollTop: $(".achivements").offset().top - 200 }, "slow");
	});

	$("a[href='#contacts']").click(function() {
		$("html, body").animate({ scrollTop: $(".contact").offset().top - 200 }, "slow");
	});

	$("a[href='#subscribe']").click(function() {
		$("html, body").animate({ scrollTop: $(".subscribe").offset().top - 200 }, "slow");
	});


});


$(window).resize(function (){

	if($('.hamburger').hasClass('hamburger-active')) $('.hamburger').click()

});


var a = 0;
$(window).scroll(function(){

	var oTop = $('.achivements__item').offset().top - window.innerHeight;
	if (a == 0 && $(window).scrollTop() > oTop) {
		$('.achivements__counter').each(function() {
		var $this = $(this),
			countTo = $this.attr('data-count');
		$({
			countNum: $this.text()
		}).animate({
			countNum: countTo
			},

			{

			duration: 1500,
			easing: 'swing',
			step: function() {
				$this.text(Math.floor(this.countNum));
			},
			complete: function() {
				$this.text(this.countNum);
			}

			});
		});
		a = 1;
	}

	if($(this).scrollTop() > 100) $('.menu-wrapper').addClass('shadow')
	else $('.menu-wrapper').removeClass('shadow')

	if($(this).scrollTop() > 500) $('.btn_up').addClass('btn_up_visible')
	else $('.btn_up').removeClass('btn_up_visible')

});
