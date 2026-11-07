$(function () {

  // --------------------------------табы-----------------------------------------------
    $('.featured-page__inner .tab').on('click', function(event) {
        var id = $(this).attr('data-id');
            $('.featured-page__inner').find('.tab-item').removeClass('active-tab').hide();
            $('.featured-page__inner .tabs').find('.tab').removeClass('active');
            $(this).addClass('active');
            $('#'+id).addClass('active-tab').fadeIn();
            return false;
        });

  //  -----------------------------Слайдер------------------------------------------------
    $('.gallery-page__items').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 3,
            arrows: true,
            prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="img/arrow-prewious.png" alt=""></button>',
            nextArrow: '<button type="button" class="slick-btn slick-next"><img src="img/arrow-next.png" alt=""></button>',
            autoplay: true,
            responsive: [
              {
                  breakpoint: 1050, // например, для планшетов
                  settings: { slidesToShow: 2, slidesToScroll: 1, infinite: true, arrows: false }
                },
                {
                  breakpoint: 700, // например, для планшетов
                  settings: { slidesToShow: 1, slidesToScroll: 1, infinite: true, arrows: false }
                },
                {
                  breakpoint: 500, // для мобильных
                  settings: { slidesToShow: 1, slidesToScroll: 1, infinite: true, arrows: false }
                  }
            ]
        });

    $('.clients-page__slider').slick({
        infinite: true,
        arrows: false,
        dots: true,
        autoplay: true,
        responsive: [
            {
              breakpoint: 1000,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false
              }
            }
        ]
     });

//   // -------------------------------бургер кнопка--------------------------------------------
// const menuBtn = document.querySelector('.menu__big-btn');
// const menuList = document.querySelector('.menu-list');

// if(menuBtn) {
  
//   menuBtn.addEventListener('click', function(event){
//      document.body.classList.toggle('_lock');
//      menuBtn.classList.toggle('active');
//     menuList.classList.toggle('active');
    
//   })
//   }

// /////////////////////////////////////////////////////////

// //Менню бургер///////////////////////////////////////////////////////////////////
//  $('.header__top-btn').on('click', function() {
//     $('.header__top-info').toggleClass('active');
//  });

// // Прокрутка по клику//////////////////////////////////////////////////////////

// $("[data-scroll]").on("click", function(event) {
//   event.preventDefault();

//   let $this = $(this),
//       blockId = $this.data('scroll'),
//       blockOffset = $(blockId).offset().top;
  

//   $("#nav a").removeClass("menu-list__link--activ");
//   $this.addClass("menu-list__link--activ");

// // --------------------------- Активный пункт меню при скролле ---------------------------
// const sections = document.querySelectorAll('section[id]');
// const navLinks = document.querySelectorAll('.menu-list__link');

// function onScroll() {
//     const scrollPos = window.scrollY + 120; // + высота шапки, чтобы срабатывало чуть раньше

//     let currentSection = '';

//     sections.forEach(section => {
//         const sectionTop = section.offsetTop;
//         const sectionHeight = section.offsetHeight;

//         if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
//             currentSection = section.getAttribute('id');
//         }
//     });
// }

// window.addEventListener('scroll', onScroll);
// onScroll(); // вызов при загрузке, чтобы сразу подсветить первую секцию


// --------------------------- Бургер-меню -----------------------------
    const menuBtn = document.querySelector('.menu__big-btn');
    const menu = document.querySelector('.menu');

    if (menuBtn && menu) {
        menuBtn.addEventListener('click', function () {
            document.body.classList.toggle('_lock');
            menuBtn.classList.toggle('active');
            menu.classList.toggle('active');      // ← active на .menu, а не на .menu-list
        });
    }

    // Мобильное меню контактов (кнопка телефона)
    $('.header__top-btn').on('click', function () {
        $('.header__top-info').toggleClass('active');
    });

    // --------------------------- Плавный скролл ---------------------------
    $("[data-scroll]").on("click", function (event) {
        event.preventDefault();

        let $this = $(this),
            blockId = $this.data('scroll'),
            blockOffset = $(blockId).offset().top;

        // Подсветка активной ссылки
        $(".menu-list__link").removeClass("menu-list__link--activ");
        $this.addClass("menu-list__link--activ");

        // Закрытие мобильного меню после клика
        if (menuBtn && menuBtn.classList.contains('active')) {
            document.body.classList.remove('_lock');
            menuBtn.classList.remove('active');
            menu.classList.remove('active');
        }

        // Плавный скролл
        $("html, body").animate({ scrollTop: blockOffset }, 800);
    });

    // ------------------- Активный пункт меню при скролле -------------------
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.menu-list__link');

    function onScroll() {
        const scrollPos = window.scrollY + 120;
        let currentSection = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('menu-list__link--activ');
            if (link.dataset.scroll === '#' + currentSection) {
                link.classList.add('menu-list__link--activ');
            }
        });
    }

    window.addEventListener('scroll', onScroll);
    onScroll();

});







  // закрытие меню после выбора ссылки/////////////////////////////////////////
//   if (menuBtn.classList.contains('active')){
//     document.body.classList.remove('_lock');
//     menuBtn.classList.remove('active');
//     menuList.classList.remove('active');
//    }
//    ////////////////////////////////////////////////////////////////////////////

//   $("html, body").animate({
//       scrollTop:  blockOffset
//   }, 800);

// });


///////////////////////////////////////////////////////////////////////
// ----------------------Бегущий текст-----------------------------------------
// -----------------1. Создаем массив из переменной------------------------
// const t =[
//   'Арома\n',
//   'массаж\n'
  
// ]
// // ------------------------------------------------------------------------------
// // 2. Создаем функцию обертку
// function typeText() {
//   let line  = 0;  /*-------------------начальная линия-------------*/
//   let count  = 0;  /*-------------------счетчик-------------*/
//   let out  = '';  /*-------------------счетчик-------------*/
//   let htmlEmail = document.querySelector('.download-page__title');
// // ----------------3. Создаем еще одну функцию--------------------------------
// function typeLine()  {  /*-------------------рисует строки-------------*/
//   let interval = setTimeout(function(){
//   out += t[line][count];
//   htmlEmail.innerHTML = out + '|';
//   count++;
// //------------------------------------ Проверки----------------------------
// // -------------------1. не закончилась ли строка---------------------------
//    if(count >= t[line].length){
//    count = 0;
//    line++;
//       if(line ==t.length){
//       clearTimeout(interval);   // остановить(очистить) счетчик
//       htmlEmail.innerHTML = out    /*убираем вертикальную черту*/
//       return true             // остановить функцию
//       }
//    }
//   typeLine();
//    }, getRandomInt(getRandomInt(200 * 2.5)));  /*----------это метод позволяющий выполнить функцию через определенный интервал времени-------------*/
//   // -------------------Она должна в out добавить первый символ
// } 
// typeLine();
// }
// function getRandomInt(max){
//     return Math.floor(Math.random() * Math.floor(max));  /*функция возвращающая случайные целые числа от 0 до макс*/
// }
// typeText();

// -------------------------------------------------------------------------------------

let animShow = document.querySelectorAll('.anim-show');
if(animShow.length > 0) {
window.addEventListener('scroll', animOnScroll);

  function animOnScroll () {
    for (let i = 0; i < animShow.length; i++) {
      const animItem = animShow[i];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 4;

      let animItemPoint = window.innerHeight - animItemHeight / animStart;

      if(animItemHeight > window.innerHeight){
      animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }
      
      if((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)){
      animItem.classList.add('active');
      } else {
        animItem.classList.remove('active');
      }
    }
  }
  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageYOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
   return {top: rect.top + scrollTop, left: rect.left + scrollLeft} 
  }
  animOnScroll();
}


// ---------------------------------------------------------------------------------------------------------------------
// });
 
