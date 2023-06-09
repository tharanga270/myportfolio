$(function() {
    $('.owl-tech-carousel').owlCarousel({
	    loop:true,
	    margin:10,
	    autoplay:true,
	    autoplayTimeout:1500,
	    autoplayHoverPause:true,
	    nav:true,
	    responsive:{
	        0:{
	            items:2
	        },
	        500:{
	            items:3
	        },
	        800:{
	            items:5
	        },
	        1300: {
	        	items: 6
	        },
	    }
	});

	// owl-finefood-carousel
	$('.owl-cmn-inner-pages-carousel').owlCarousel({
	    loop:true,
	    margin:10,
	    autoplay:true,
	    autoplayTimeout:1500,
	    autoplayHoverPause:true,
	    nav:true,
	    responsive:{
	        0:{
	            items:1
	        },
	        500:{
	            items:1
	        },
	        800:{
	            items:2
	        },
	        1300: {
	        	items: 3
	        },
	    }
	});

	//============================
	$(window).scroll(function() {
	    if ($(this).scrollTop() > 1500) {
	        $('.scrollToTop').fadeIn();
	    } else {
	        $('.scrollToTop').fadeOut();
	    }
	});

	$(".scrollToTop").click(function() {
	    $("html, body").animate({scrollTop: 0}, 1000);
	 });

	// Typed Initiate
    if ($('.typed-text-output').length == 1) {
        var typed_strings = $('.typed-text').text();
        var typed = new Typed('.typed-text-output', {
            strings: typed_strings.split(', '),
            typeSpeed: 100,
            backSpeed: 20,
            smartBackspace: false,
            loop: true
        });
    }

    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });

     /* Animations on Scroll */
    $('.js--wp-1').waypoint(function (direction) {
        $('.js--wp-1').addClass('animate__animated animate__backInLeft');
    }, {
        offset: '50%'
    });
    $('.js--wp-2').waypoint(function (direction) {
        $('.js--wp-2').addClass('animate__animated animate__backInRight');
    }, {
        offset: '50%'
    });
    $('.js--wp-3').waypoint(function (direction) {
        $('.js--wp-3').addClass('animate__animated animate__fadeIn');
    }, {
        offset: '50%'
    });
    $('.js--wp-4').waypoint(function (direction) {
        $('.js--wp-4').addClass('animate__animated animate__fadeInDown');
    }, {
        offset: '50%'
    });
    $('.js--wp-5').waypoint(function (direction) {
        $('.js--wp-5').addClass('animate__animated animate__pulse');
    }, {
        offset: '50%'
    });

});