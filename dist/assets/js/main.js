$(document).ready(function() {

	// Всплывающий список городов в хедере по клику
	$('.js-cityDropdown').click(function(e){
		e.preventDefault();

		$(this).toggleClass('active');
		$('.js-cityList').toggleClass('active');
	});

	// Показать и спрятать пароль в профиле
	$('.js-passShowHide').click(function(e) {
		e.preventDefault();

		var inpPass = $('.js-pass');
		inpPass.replaceWith(inpPass.clone().attr('type',(inpPass.attr('type') == 'password') ? 'text' : 'password'));
	});

	
});


// Закрытие всплывающего списка городов в хедере при клике в любую точку сайта кроме самого блока
$(document).mouseup(function (e) {
	var cityBlock = $("div.city");
	if (cityBlock.has(e.target).length === 0){
		$('.js-cityDropdown').removeClass('active');
		$('.js-cityList').removeClass('active');
	}
});