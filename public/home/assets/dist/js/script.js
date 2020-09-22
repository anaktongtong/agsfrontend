$('.page-scroll').on('click', function(e){
	var dest = $(this).attr('href');
	var elementDest = $(dest);
	
	$("html, body").scrollTop(elementDest.offset().top - 55);

	e.preventDefault();
});