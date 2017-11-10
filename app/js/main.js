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

	// мобильная переключалка в каталоге
	$('.js-navList .root a').click(function(e) {
		e.preventDefault();

		var navListId = $(this).attr('href');
		$(this).parent().parent().find('li.active').removeClass('active');
		$(this).parent().addClass('active');
		$('.category-mob.active').removeClass('active').find('li ul').slideUp();
		$(navListId).addClass('active').find('li').removeClass('active').parent().find('li:first-child').addClass('active');
	});
	$('.js-navList .category-mob a').click(function(e) {
		e.preventDefault();

		$(this).parent().parent().find('li.active').removeClass('active').find('ul').slideUp();
		$(this).parent().addClass('active');
		$(this).siblings('ul').slideDown();
	});

	// окошко сортировки отзывов
	$('.js-sort').click(function(e) {
		e.preventDefault();

		$('.js-sortPopup').toggleClass('active');
	});
	$('.js-sortPopup li a').click(function(e) {
		e.preventDefault();

		$('.js-sortPopup').find('li.active').removeClass('active');
		$(this).parent().addClass('active');
	});

	// ЛогИн попап
	$('.js-logIn').click(function(e) {
		e.preventDefault();

		$('.js-popupLogIn').toggleClass('active');
	});

	// попап регистрации
	$('.js-popupReg').click(function(e) {
		$('.js-popupRegistr').bPopup({
			opacity: 0.5
		});
	});

	// автосайзинг высоты полей textarea
	autosize( $('textarea') );

	// аккордеон настранице профиля в личном кабинете
	$('.js-cabinetAccord').click(function(e) {
		e.preventDefault();

		var accordList = $(this).attr('href');
		$(this).toggleClass('active');
		$(accordList).slideToggle();
	});

	// режим редактирования на странице "Избранное" в личном кабинете
	$('.js-redact').click(function(e) {
		e.preventDefault();

		$('.js-favouriteRed').addClass('active');
	});
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

// Закрытие всплывающих окон при клике в любую точку сайта кроме самого блока
$(document).mouseup(function (e) {
	var cityBlock = $("div.city"),
		sortList = $(".sort-popup").parent(),
		logInWrap = $('.logIn').parent();
	if (cityBlock.has(e.target).length === 0){
		$('.js-cityDropdown').removeClass('active');
		$('.js-cityList').removeClass('active');
	}
	if (sortList.has(e.target).length === 0){
		$('.sort-popup').removeClass('active');
	}
	if (logInWrap.has(e.target).length === 0){
		$('.js-popupLogIn').removeClass('active');
	}
});