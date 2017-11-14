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

		if($(window).width() > 1100) {
			$('.js-popupLogIn').toggleClass('active');
		} else {
			$('.js-loginPopup').bPopup({
				opacity: 0.5
			});
		}
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

	// слайдер на главной
	CustomSlider('.features');

	// jquery маска для телефонных номеров
	// на главной
	$(".main-contacts form input[type=phone]").mask("+7(999)9999999");
	// на странице профиля
	$('.cabinet-profile .main-info input[type=phone]').mask("9 (999) 9999999");
	// попап регистрации
	$('.popup-registration form input[type=phone]').mask("9 (999) 9999999");

	/* яндекс карта на странице контактов */
	// проверка, есть ли карта на странице или нет
    if($('*').is('#map')) {
    	ymaps.ready(initMap);
    }
    // переменные для карты
    var myMap,
    	myPlacemark;
    // функция создания карты
    function initMap(){
    	// инициализация карты с центров по координатам
		myMap = new ymaps.Map("map", {
            center: [52.717126, 48.757708],
            zoom: 7
        });

        // метки
        // Пенза
        var placemarkPenza = new ymaps.Placemark([53.167530, 45.017543], {}, {
        	iconLayout: 'default#image',
        	iconImageHref: 'assets/img/placeholder-penza.png',
        	iconImageSize: [198, 50],
        	iconImageOffset: [14, -50]
        });
        // Самара
        var placemarkSamara = new ymaps.Placemark([53.212916, 50.275068], {}, {
        	iconLayout: 'default#image',
        	iconImageHref: 'assets/img/placeholder-samara.png',
        	iconImageSize: [223, 50],
        	iconImageOffset: [14, -50]
        });
        // Саратов
        var placemarkSaratov = new ymaps.Placemark([51.506869, 45.946132], {}, {
        	iconLayout: 'default#image',
        	iconImageHref: 'assets/img/placeholder-saratov.png',
        	iconImageSize: [223, 50],
        	iconImageOffset: [14, -50]
        });
        // Добавление меток на карту
        myMap.geoObjects.add(placemarkPenza).add(placemarkSamara).add(placemarkSaratov);

        // Блокирование возможности зумить карту скроллингом
        myMap.behaviors.disable('scrollZoom');
    }

    // Royal Slider
    $('#slider').royalSlider({
    	fullscreen: {
    		enabled: false,
    		nativeFS: true
    	},
    	controlNavigation: 'thumbnails',
    	thumbs: {
    		orientation: 'vertical',
    		spacing: 20,
    		appendSpan: true
    	},
    	transitionType:'fade',
    	// autoScaleSlider: true, 
    	autoScaleSliderWidth: 830,     
    	autoScaleSliderHeight: 400,
    	loop: true,
    	arrowsNav: false,
    	keyboardNavEnabled: true,

    });
});

// resize
var masonryDestr1 = 0,
	masonryDestr2 = 0;
$(window).resize(function() {
	// Масонри каталог при ресайзинге окна
	if($(window).width() < 1400) {
		if(masonryDestr1 == 0) {
			$('.js-masonryList').masonry({
				itemSelector: '.grid-item',
				percentPosition: true
			});
			masonryDestr1 = 1;
		}
	} else {
		if(masonryDestr1 == 1) {
			$('.js-masonryList').masonry('destroy');
			masonryDestr1 = 0;
		}
	}

	// Масонри футер при ресайзинге окна
	if($(window).width() < 992) {
		if(masonryDestr2 == 0) {
			$('.js-masonryFooter').masonry({
				itemSelector: '.grid-item',
				percentPosition: true
			});
			masonryDestr2 = 1;
		}
	} else {
		if(masonryDestr2 == 1) {
			$('.js-masonryFooter').masonry('destroy');
			masonryDestr2 = 0;
		}
	}
});

// Закрытие всплывающих окон при клике в любую точку сайта кроме самого блока
$(document).mouseup(function (e) {
	var cityBlock = $("div.city"),
		sortList = $(".sort-popup").parent(),
		logInWrap = $('.header .logIn').parent();
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


/***** Функции *****/
// функция для слайдера на главной странице
function CustomSlider(module) {
	var moduleBlock = $(module),
		nav = $(module + '-nav > ul'),
		itemList = $(module + '-items'),
		item = $(module + '-items > li'),
		itemLength = $(module + '-items > li').length,
		itemMaxHeight = 0,
		itemCurrHeight = 0;

	
	for (i=0;i<itemLength;i++) {
		// расчет самой высокой высоты элемента слайдера
		itemCurrHeight = item.eq(i).outerHeight();
		if(itemCurrHeight > itemMaxHeight) {
			itemMaxHeight = itemCurrHeight;
		}

		// создание кнопок навигации
		nav.append('<li><span></span></li>');
	}
	// задаем высоту контейнера по самому высокому элементу слайдера
	itemList.css('height', itemMaxHeight);
	// добавляем класс active для кнопки соотвествующей активному элементу (по умолчанию первого)
	nav.find('li').eq(0).addClass('active');

	// переключение слайдов
	nav.find('li span').click(function() {
		// узнаем порядковый номер кнопки на которую кликнули
		var itemIndex = $(this).parent().index();

		// удаляем старые классы активных элементов
		nav.find('li.active').removeClass('active');
		itemList.find('li.active').removeClass('active');

		// добавляем классы для текущих элементов
		$(this).parent().addClass('active');
		item.eq(itemIndex).addClass('active');
	});

	// слайдер при ресайзинге
	$(window).resize(function() {
		itemMaxHeight = 0;
		for (i=0;i<itemLength;i++) {
			// расчет самой высокой высоты элемента слайдера
			itemCurrHeight = item.eq(i).height();
			if(itemCurrHeight > itemMaxHeight) {
				itemMaxHeight = itemCurrHeight;
			}
		}
		// задаем высоту контейнера по самому высокому элементу слайдера
		itemList.css('height', itemMaxHeight);
	});
}