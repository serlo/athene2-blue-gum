$( document ).ready(function() {

	$('#navbarMobileMenu').on('show.bs.collapse', function () {
		$('body').addClass('overlay-menu');
	});
	$('#navbarMobileMenu').on('hide.bs.collapse', function () {
		$('body').removeClass('overlay-menu');
	});

});
