$('.menu__list-link').click(function () {
	let id = '' + $(this).attr('href');
	$('html, body').animate({scrollTop: $(id).offset()?.top}, 500, 'linear');
	return false;
})