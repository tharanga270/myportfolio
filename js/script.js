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
});