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

	// меню бургер
	$('.js-burgerNav').click(function(e) {
		e.preventDefault();

		$(this).toggleClass('active');
		$('.js-headerNav').toggleClass('active');
	});

	// Масонри каталог
	if($(window).width() < 1400) {
		$('.js-masonryList').masonry({
			itemSelector: '.grid-item',
			percentPosition: true
		});
	}

	// Масонри футер
	if($(window).width() < 992) {
		$('.js-masonryFooter').masonry({
			itemSelector: '.grid-item',
			percentPosition: true
		});
	}

});

$(window).resize(function() {

	// Масонри каталог при ресайзинге окна
	if($(window).width() < 1400) {
		$('.js-masonryList').masonry({
			itemSelector: '.grid-item',
			percentPosition: true
		});
	} else {
		$('.js-masonryList').masonry('destroy');
	}

	// Масонри футер при ресайзинге окна
	if($(window).width() < 992) {
		$('.js-masonryFooter').masonry({
			itemSelector: '.grid-item',
			percentPosition: true
		});
	} else {
		$('.js-masonryFooter').masonry('destroy');
	}
});

// Закрытие всплывающего списка городов в хедере при клике в любую точку сайта кроме самого блока
$(document).mouseup(function (e) {
	var cityBlock = $("div.city");
	if (cityBlock.has(e.target).length === 0){
		$('.js-cityDropdown').removeClass('active');
		$('.js-cityList').removeClass('active');
	}
});