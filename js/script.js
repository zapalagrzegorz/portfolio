$(function(){

	/* Hamburger menu */

	var navMenu = $('.navigation_menu');
	var isClick = "unclick";
	var header = $('.header');
	var fas = $('.navigation_fas');

	navMenu.on('click', function(event) {
	    if (isClick === "unclick") {
	    	isClick = "click";
	    	header.addClass('click');
	    	fas.removeClass('fa-bars').addClass('fa-times');
	    } else {
	    	isClick = "unclick";
	    	header.removeClass('click');
	    	fas.removeClass('fa-times').addClass('fa-bars');
	    }

	    return isClick;

	});

	/* Smooth scrolling */

	$('.side_link').click(function() {
	    var hash = $(this).attr('href');
	    $('html, body').animate({
	        scrollTop: $(hash).offset().top
	    }, 1500);
	    return false;
	});


	$( window ).resize(function() {
	  location.reload(true);
	});

	if($(window).width() >= 992) {

		click(function(event) {
		});


		smooth.mouseleave(function(event) {

		var target = $(this);

		target.animate({width: '0'}, "fast");
		target.siblings().not(smooth).animate({width: '33.33%'}, "fast");
		target.prev().css({
			"display": "flex",
			"width": "0%"
		});

		setTimeout(function(){ 
			var targetWidth = target.width();

			if (targetWidth === 0) {
		    	smoothCell.css("width", "25%");
		    	smooth.css("display", "none");
	    	}

		smoothSubtitle.fadeIn();

		}, 300);

		});

	} else {

		var mobIsClick = 'unclick';
	};


});