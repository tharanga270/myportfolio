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
});