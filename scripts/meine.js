//Скрипт для галереи
;
(function ($) {

    $(document).ready(function () {

        var $gridImg = $('.grid').isotope({
            itemSelector: ".item",
            layoutMode: 'masonry',
            masonry: {
                columnWidth: 270,
                gutter: 5
            }
        });

        $("#filters button").click(function () {
            var $this = $(this);
            if (!$this.hasClass("is-checked")) {
                $this.parents("#navigation").find(".is-checked").removeClass("is-checked");
                $this.addClass("is-checked");
            }
            var selector = $this.attr("data-filter");
            $gridImg.isotope({
                filter: selector
            });
        });

        //       Скрипт для слайдера

        $('.theteam__slider').slick({
            dots: true,
            arrows: false,

        });

        //        Скрипт для слайдера с таймером

        $('.test__slider').slick({
            dots: true,
            autoplay: true,
            autoplaySpeed: 3000
        });


        ;
        (function ($) {
            $(document).on('click', 'a[href^=#]', function () {
                $('html, body').animate({
                    scrollTop: $('a[name="' + this.hash.slice(1) + '"]').offset().top
                }, 5000);
                return false;
            });
            
//            Скрипт анимации
            
            new WOW().init();

        })(jQuery);



       jQuery(document).ready(function($) {
  var
 
    $window = $(window), // Основное окно
 
    $target = $(".header__row"), // Блок, который нужно фиксировать при прокрутке
 
    $h = $target.offset().top; // Определяем координаты верха нужного блока (например, с навигацией или виджетом, который надо фиксировать)
 
  $window.on('scroll', function() {
 
    // Как далеко вниз прокрутили страницу
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
 
    // Если прокрутили скролл ниже макушки нужного блока, включаем ему фиксацию
    if (scrollTop > $h) {
 
      $target.addClass("sheensay_fixed");
 
    // Иначе возвращаем всё назад
    } else {     
 
      $target.removeClass("sheensay_fixed");
    }
  });
 
});





        //        Скрипты для Гугл карты



        var latitude = 46.478916,
            longitude = 30.723341,
            map_zoom = 18;

        //Адрес до иконки с маркером
        var marker_url = 'img/academybeetroot.png';


        var main_color = '#007148', //основной цвет
            saturation_value = -1, //насыщенность
            brightness_value = 1; //яркость



        //Стили для элементов на карте
        var style = [
            {
                //Насыщенность обозначений на карте
                elementType: "labels",
                stylers: [
                    {
                        saturation: saturation_value
                    }
			]
		},
            { //Скрываем обозначения станций метро, вокзалов, аэропортов и прочих транспортных узов на карте
                featureType: "poi",
                elementType: "labels",
                stylers: [
                    {
                        visibility: "off"
                    }
			]
		},
            {
                //Скрываем обозначение дорог на карте
                featureType: 'road.highway',
                elementType: 'labels',
                stylers: [
                    {
                        visibility: "off"
                    }
	        ]
	    },
            {
                //Скрываем обозначение локальных дорог
                featureType: "road.local",
                elementType: "labels.icon",
                stylers: [
                    {
                        visibility: "off"
                    }
			]
		},
            {
                //Скрываем обозначение магистрали на карте
                featureType: "road.arterial",
                elementType: "labels.icon",
                stylers: [
                    {
                        visibility: "off"
                    }
			]
		},
            {
                //Скрываем дорожные обозначения на карте
                featureType: "road",
                elementType: "geometry.stroke",
                stylers: [
                    {
                        visibility: "off"
                    }
			]
		},
		//Стили для разных элементов на карте
            {
                featureType: "transit",
                elementType: "geometry.fill",
                stylers: [
                    {
                        hue: main_color
                    },
                    {
                        visibility: "on"
                    },
                    {
                        lightness: brightness_value
                    },
                    {
                        saturation: saturation_value
                    }
			]
		},
            {
                featureType: "poi",
                elementType: "geometry.fill",
                stylers: [
                    {
                        hue: main_color
                    },
                    {
                        visibility: "on"
                    },
                    {
                        lightness: brightness_value
                    },
                    {
                        saturation: saturation_value
                    }
			]
		},
            {
                featureType: "poi.government",
                elementType: "geometry.fill",
                stylers: [
                    {
                        hue: main_color
                    },
                    {
                        visibility: "on"
                    },
                    {
                        lightness: brightness_value
                    },
                    {
                        saturation: saturation_value
                    }
			]
		},
            {
                featureType: "poi.sport_complex",
                elementType: "geometry.fill",
                stylers: [
                    {
                        hue: main_color
                    },
                    {
                        visibility: "on"
                    },
                    {
                        lightness: brightness_value
                    },
                    {
                        saturation: saturation_value
                    }
			]
		},
            {
                featureType: "poi.attraction",
                elementType: "geometry.fill",
                stylers: [
                    {
                        hue: main_color
                    },
                    {
                        visibility: "on"
                    },
                    {
                        lightness: brightness_value
                    },
                    {
                        saturation: saturation_value
                    }
			]
		},
            {
                featureType: "poi.business",
                elementType: "geometry.fill",
                stylers: [
                    {
                        hue: main_color
                    },
                    {
                        visibility: "on"
                    },
                    {
                        lightness: brightness_value
                    },
                    {
                        saturation: saturation_value
                    }
			]
		},
            {
                featureType: "transit",
                elementType: "geometry.fill",
                stylers: [
                    {
                        hue: main_color
                    },
                    {
                        visibility: "on"
                    },
                    {
                        lightness: brightness_value
                    },
                    {
                        saturation: saturation_value
                    }
			]
		},
            {
                featureType: "transit.station",
                elementType: "geometry.fill",
                stylers: [
                    {
                        hue: main_color
                    },
                    {
                        visibility: "on"
                    },
                    {
                        lightness: brightness_value
                    },
                    {
                        saturation: saturation_value
                    }
			]
		},
            {
                featureType: "landscape",
                stylers: [
                    {
                        hue: main_color
                    },
                    {
                        visibility: "on"
                    },
                    {
                        lightness: brightness_value
                    },
                    {
                        saturation: saturation_value
                    }
			]

		},
            {
                featureType: "road",
                elementType: "geometry.fill",
                stylers: [
                    {
                        hue: main_color
                    },
                    {
                        visibility: "on"
                    },
                    {
                        lightness: brightness_value
                    },
                    {
                        saturation: saturation_value
                    }
			]
		},
            {
                featureType: "road.highway",
                elementType: "geometry.fill",
                stylers: [
                    {
                        hue: main_color
                    },
                    {
                        visibility: "on"
                    },
                    {
                        lightness: brightness_value
                    },
                    {
                        saturation: saturation_value
                    }
			]
		},
            {
                featureType: "water",
                elementType: "geometry",
                stylers: [
                    {
                        hue: main_color
                    },
                    {
                        visibility: "on"
                    },
                    {
                        lightness: brightness_value
                    },
                    {
                        saturation: saturation_value
                    }
			]
		}
	];

        //Создание точки на карте
        var map_options = {
            center: new google.maps.LatLng(latitude, longitude),
            zoom: map_zoom,
            panControl: false,
            zoomControl: false,
            mapTypeControl: false,
            streetViewControl: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            scrollwheel: false,
            styles: style
        }
        //Инициализация карты
        var map = new google.maps.Map(document.getElementById('google-container'), map_options);
        //Добавляем свой маркер местонахождения на карту (свою иконку)			
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(latitude, longitude),
            map: map,
            visible: true,
            icon: marker_url,
        });

        //Добавляем свои иконки для кнопок увеличить/уменьшить на карту
        function CustomZoomControl(controlDiv, map) {
            var controlUIzoomIn = document.getElementById('zoom-in'),
                controlUIzoomOut = document.getElementById('zoom-out');
            controlDiv.appendChild(controlUIzoomIn);
            controlDiv.appendChild(controlUIzoomOut);

            //Делаем привязку для кнопок увеличить/уменьшить при клике
            google.maps.event.addDomListener(controlUIzoomIn, 'click', function () {
                map.setZoom(map.getZoom() + 1)
            });
            google.maps.event.addDomListener(controlUIzoomOut, 'click', function () {
                map.setZoom(map.getZoom() - 1)
            });
        }

        var zoomControlDiv = document.createElement('div');
        var zoomControl = new CustomZoomControl(zoomControlDiv, map);

        //Помещаем кнопки увеличить/уменьшить на карту в левый верхний угол
        map.controls[google.maps.ControlPosition.LEFT_TOP].push(zoomControlDiv);
    });
})(jQuery);
