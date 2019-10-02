$('.carousel-main').owlCarousel({
	items: 3,
	loop: true,
	autoplay: true,
	autoplayTimeout: 3000,
	margin: 10,
	nav: false,
	dots: true,
	
})
/* to make the number of experince count  */
$('.num').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 3000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});
