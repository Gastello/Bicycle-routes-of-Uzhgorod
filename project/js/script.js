let sliderEl = document.querySelector('.slider');
if (sliderEl.classList.contains('slider__index')) {
   console.log(1);
   $(document).ready(function () {
      $('.slider').slick(
         {
            //!Для пошаговой загрузки изображений (когда пользователь меняет картинку, то она загружается, а не все сразу)
            //!в теге пишем <img data-lazy=""> вместо src=""

            //Стрелки
            arrows: false,
            //Точки
            dots: true,
            //Авто-высота
            adaptiveHeight: false,
            //К-во слайдов
            slidesToShow: 3,
            //К-во слайдов, что прокручивется за раз
            slidesToScroll: 1,
            //Время прокрутки
            speed: 1000,
            //Тип анимации
            easing: 'easy-out',
            //Бесконечность слайдера
            infinite: false,
            //Стартовый слайд
            initialSlide: 0,
            //Авто-проигравание
            autoplay: false,
            //Скорость авто-проигравание
            autoplaySpeed: 3000,
            //Остановка авто-проигравание
            pauseOnFocus: true,
            pauseOnHover: true,
            pauseOnDotsHover: true,
            //Управление свайпом на ПК
            draggable: true,
            //Управление свайпом на телефонах
            swipe: true,
            //Длина свайпа, для прокрутки (Чем меньше число, тем длинее свайп)
            touchThreshold: 10,
            //Делает активный слайд центральным
            centerMode: false,
            //Слайд не листаеться, а плавно заменяется (только при slidesToShow: 1,)
            fade: false,
            //Брейк-поинты
            responsive: [
               {
                  breakpoint: 950,
                  settings: {
                     //К-во слайдов
                     slidesToShow: 1,
                  }
               }
            ],
            //max-width меняется на min-width
            mobileFirst: false,
         }
      );
   });
}
else if (sliderEl.classList.contains('slider__club')) {
   console.log(2);
   $(document).ready(function () {
      $('.slider').slick(
         {
            //!Для пошаговой загрузки изображений (когда пользователь меняет картинку, то она загружается, а не все сразу)
            //!в теге пишем <img data-lazy=""> вместо src=""

            //Стрелки
            arrows: false,
            //Точки
            dots: true,
            //Авто-высота
            adaptiveHeight: false,
            //К-во слайдов
            slidesToShow: 1,
            //К-во слайдов, что прокручивется за раз
            slidesToScroll: 1,
            //Время прокрутки
            speed: 1000,
            //Тип анимации
            easing: 'easy-out',
            //Бесконечность слайдера
            infinite: true,
            //Стартовый слайд
            initialSlide: 0,
            //Авто-проигравание
            autoplay: false,
            //Скорость авто-проигравание
            autoplaySpeed: 2000,
            //Остановка авто-проигравание
            pauseOnFocus: true,
            pauseOnHover: true,
            pauseOnDotsHover: true,
            //Управление свайпом на ПК
            draggable: true,
            //Управление свайпом на телефонах
            swipe: true,
            //Длина свайпа, для прокрутки (Чем меньше число, тем длинее свайп)
            touchThreshold: 10,
            //Делает активный слайд центральным
            centerMode: false,
            //Слайд не листаеться, а плавно заменяется (только при slidesToShow: 1,)
            fade: false,
            //Брейк-поинты
            //max-width меняется на min-width
            mobileFirst: false,
         }
      );
   });

}


let gifEl = document.querySelector('.subs__swipe');
if (sliderEl != null && gifEl != null) {
   sliderEl.onmousedown = sliderEl.ontouchstart = function () {
      gifEl.classList.add('disable');
   }
}
