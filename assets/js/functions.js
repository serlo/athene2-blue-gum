$( document ).ready(function() {

	$('#navbarMobileMenu').on('show.bs.collapse', function () {
		$('body').addClass('overlay-menu');
	});
	$('#navbarMobileMenu').on('hide.bs.collapse', function () {
		$('body').removeClass('overlay-menu');
	});


	$('a[href*="#"]:not([href="#"])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
	        || location.hostname == this.hostname) {

	        var target = $(this.hash);
	        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	           if (target.length) {
	           	$('body').addClass("no-events");
	           	var distance = Math.abs($(document).scrollTop() - target.offset().top);
				var time = distance / 18 + 250;
				if(time>800) time = 800;
	             $('html,body').animate({
	                 scrollTop: target.offset().top
	            }, time, function(){
	            	$('body').removeClass("no-events");
	            });
	            return false;
	        }
	    }
	});

});
