$('.b-services__item').click(function () {
	if($(this).find('.b-service').hasClass('b-service__flip')) {
		$(this).find('.b-service').removeClass('b-service__flip')
	} else {
		$(this).find('.b-service').addClass('b-service__flip')
	}
});
