/*placeholder*/
$(document).ready(function(){
        $.Placeholder.init({ color : "#797979" });
 });

  
	
jQuery(document).ready(function() {
    // Initialise the first and second carousel by class selector.
	// Note that they use both the same configuration options (none in this case).
	jQuery('.d-carousel .carousel').jcarousel({
        scroll: 1
    });
});

$(document).ready(function(){
	//Reset form
	// Вешаем событие клика по кнопке сброса
	$('.reset-form').click(function() {
		// Устанавливаем пустое значение в атрибут value для всех инпутов
		$('.customForm').find('input').val('');
		
		// Убираем атрибут checked и класс активности у чекбоксов
		$('.customForm').find('input:checked').removeAttr('checked');
		$('.customForm').find('.check').removeClass('active');
		
		// Убираем класс активности у радио переключателей
		$('.customForm').find('.radio').removeClass('active');
		
		// Устанавливаем пустое значение в атрибут value для всех textarea
		$('.customForm').find('textarea').val('');
		
		// И для открывалки селекта возвращаем начальное значение
		$('.customForm').find('.slct').html('Выберите Ваше лучшее качество:');
	});
	
	// = Load
	// отслеживаем изменение инпута file
	$('#file').change(function(){
		// Если файл прикрепили то заносим значение value в переменную
		var fileResult = $(this).val();
		// И дальше передаем значение в инпут который под загрузчиком
		$(this).parent().find('.fileLoad').find('input').val(fileResult);
	});

	/* Добавляем новый класс кнопке если инпут файл получил фокус */
	$('#file').hover(function(){
		$(this).parent().find('button').addClass('button-hover');
	}, function(){
		$(this).parent().find('button').removeClass('button-hover');
	});
	
	// Checkbox
	// Отслеживаем событие клика по диву с классом check
	$('.checkboxes').find('.check').click(function(){
		// Пишем условие: если вложенный в див чекбокс отмечен
		if( $(this).find('input').is(':checked') ) {
			// то снимаем активность с дива
			$(this).removeClass('active');
			// и удаляем атрибут checked (делаем чекбокс не отмеченным)
			$(this).find('input').removeAttr('checked');
		
		// если же чекбокс не отмечен, то
		} else {
			// добавляем класс активности диву
			$(this).addClass('active');
			// добавляем атрибут checked чекбоксу
			$(this).find('input').attr('checked', true);
		}
	});
		
	// Select
	$('.slct').click(function(){
		/* Заносим выпадающий список в переменную */
		var dropBlock = $(this).parent().find('.drop');
		
		/* Делаем проверку: Если выпадающий блок скрыт то делаем его видимым*/
		if( dropBlock.is(':hidden') ) {
			dropBlock.slideDown();
			
			/* Выделяем ссылку открывающую select */
			$(this).addClass('active');
			
			/* Работаем с событием клика по элементам выпадающего списка */
			$('.drop').find('li').click(function(){
				
				/* Заносим в переменную HTML код элемента 
				списка по которому кликнули */
				var selectResult = $(this).html();
				
				/* Находим наш скрытый инпут и передаем в него 
				значение из переменной selectResult */
				$(this).parent().parent().find('input').val(selectResult);
				
				/* Передаем значение переменной selectResult в ссылку которая 
				открывает наш выпадающий список и удаляем активность */
				$('.slct').removeClass('active').html(selectResult);
				
				/* Скрываем выпадающий блок */
				dropBlock.slideUp();
			});
			
		/* Продолжаем проверку: Если выпадающий блок не скрыт то скрываем его */
		} else {
			$(this).removeClass('active');
			dropBlock.slideUp();
		}
		
		/* Предотвращаем обычное поведение ссылки при клике */
		return false;
	});	
		
	// RadioButton
	$('.radioblock').find('.radio').click(function(){
		var valueRadio = $(this).html();
		$(this).parent().find('.radio').removeClass('active');
		$(this).addClass('active');
		$(this).parent().find('input').val(valueRadio);
	});
		
});

 $(document).ready(function(){
   $('a[href*=#]').bind("click", function(e){
      var anchor = $(this);
      $('html, body').stop().animate({
         scrollTop: $(anchor.attr('href')).offset().top
      }, 1400);
      e.preventDefault();
   });
   return false;
});


(function($) {
$(function() {

	$('ul.tabs').on('click', 'li:not(.current)', function() {
		$(this).addClass('current').siblings().removeClass('current')
			.parents('div.section').find('div.box').eq($(this).index()).fadeIn(150).siblings('div.box').hide();
	})

})
})(jQuery)


var map;
			var egglabs = new google.maps.LatLng(45.1623008, 1.5176676);
			var mapCoordinates = new google.maps.LatLng(45.1623008, 1.5176676);
			
			
			var markers = [];
			var image = new google.maps.MarkerImage(
			'9lessons.png',
			new google.maps.Size(84,56),
			new google.maps.Point(0,0),
			new google.maps.Point(42,56)
			);
			
			function addMarker() 
			{
				markers.push(new google.maps.Marker({
					position: egglabs,
					raiseOnDrag: true,
					icon: image,
					map: map,
					draggable: true
				}));
				
			}
			
			function initialize() {
				var mapOptions = {
					backgroundColor: "#ffffff",
					zoom: 15,
					disableDefaultUI: false,
					center: mapCoordinates,
					mapTypeId: google.maps.MapTypeId.ROADMAP,
					styles: [{
						"featureType": "landscape",
						"stylers": [
						{ "hue": "#00e5ff" },
						{ "saturation": 85 },
						{ "gamma": 0.11 },
						{ "lightness": -73 }
						]
						}, {
						"featureType": "road",
						"elementType": "geometry.stroke",
						"stylers": [
						{ "gamma": 1.31 },
						{ "visibility": "off" }
						]
						}, {
						"featureType": "road",
						"stylers": [
						{ "invert_lightness": true },
						{ "hue": "#00eeff" },
						{ "gamma": 0.52 },
						{ "saturation": 63 },
						{ "lightness": 19 }
						]
						}, {
						"featureType": "road",
						"elementType": "labels.text.stroke",
						"stylers": [
						{ "visibility": "off" }
						]
						}, {
						"featureType": "road",
						"elementType": "labels",
						"stylers": [
						{ "hue": "#00fff7" },
						{ "gamma": 2.07 },
						{ "saturation": -52 },
						{ "lightness": -8 }
						]
						}, {
						"featureType": "administrative",
						"elementType": "labels.text.stroke",
						"stylers": [
						{ "visibility": "off" }
						]
						}, {
						"featureType": "administrative",
						"stylers": [
						{ "hue": "#00e5ff" },
						{ "lightness": 59 },
						{ "saturation": -88 }
						]
						}, {
						"featureType": "poi",
						"stylers": [
						{ "gamma": 0.27 },
						{ "saturation": -33 },
						{ "hue": "#00e5ff" },
						{ "lightness": -36 }
						]
						}, {
						"featureType": "poi",
						"elementType": "labels.text.stroke",
						"stylers": [
						{ "visibility": "off" }
						]
						}, {
						"featureType": "poi",
						"elementType": "labels",
						"stylers": [
						{ "color": "#68a2a7" }
						]
						}, {
						"featureType": "road.highway",
						"stylers": [
						{ "saturation": -43 },
						{ "hue": "#00ddff" },
						{ "lightness": -7 }
						]
						}, {
						"featureType": "transit",
						"elementType": "labels.text.stroke",
						"stylers": [
						{ "visibility": "off" }
						]
						}, {
						"featureType": "transit",
						"elementType": "labels.text",
						"stylers": [
						{ "color": "#b7daed" }
						]
						}, {
						"featureType": "water",
						"stylers": [
						{ "hue": "#00ffff" },
						{ "gamma": 0.23 },
						{ "lightness": -84 },
						{ "saturation": -86 }
						]
						}, {
						"featureType": "water",
						"elementType": "labels.text.stroke",
						"stylers": [
						{ "visibility": "off" }
						]
						}, {
						"featureType": "road.local",
						"stylers": [
						{ "saturation": -24 },
						{ "gamma": 0.98 },
						{ "lightness": 1 },
						{ "hue": "#00eeff" }
						]
						}, {
						"featureType": "transit.station",
						"stylers": [
						{ "gamma": 0.19 },
						{ "lightness": -41 },
						{ "saturation": 32 },
						{ "hue": "#00e5ff" }
						]
						}, {
						"featureType": "water",
						"elementType": "labels.text.fill",
						"stylers": [
						{ "color": "#436168" }
						]
						}, {
						"featureType": "administrative",
						"stylers": [
						{ "weight": 0.8 }
						]
						}, {
						"featureType": "transit.station",
						"elementType": "labels",
						"stylers": [
						{ "invert_lightness": true },
						{ "hue": "#00eeff" },
						{ "lightness": -6 },
						{ "gamma": 0.77 },
						{ "saturation": 3 }
						]
						}, {
						"featureType": "transit",
						"elementType": "labels"
					}]
					
				};
				map = new google.maps.Map(document.getElementById('map-canvas'),mapOptions);
				addMarker();
				
			}
			google.maps.event.addDomListener(window, 'load', initialize);

