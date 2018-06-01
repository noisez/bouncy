// let timerId = setInterval(function() {
//     alert( "тик" );
// }, 2000);


$(function(){
    $('a[href^="#"]').on('click', function(event) {
        // отменяем стандартное действие
        event.preventDefault();

        let sc = $(this).attr("href"),
            dn;
        if (sc != "#" ) {
            dn = $(sc).offset().top;
        }
        else {
            dn = 0;
        }
        /*
        * sc - в переменную заносим информацию о том, к какому блоку надо перейти
        * dn - определяем положение блока на странице
        */

        $('html, body').animate({scrollTop: dn}, 1000);

        /*
        * 1000 скорость перехода в миллисекундах
        */
    });
});

$('#menu__icon').click(function () {
    let nav = $('#myTopnav')
    if (nav.hasClass('responsive')) {
        nav.removeClass('responsive');
    }
    else {
        nav.addClass('responsive');
    }
});

let count = 1;
let pos = 0;
$(".btn-1").click(function () {
    pos = 0;
    $('.blog__item').css('top', pos+'px');
    $('.btn-1').addClass('active');
    $('.btn-2').removeClass('active');
    $('.btn-3').removeClass('active');
});
$(".btn-2").click(function () {
    pos = -692;
    $('.blog__item').css('top', pos+'px');
    $('.btn-1').removeClass('active');
    $('.btn-2').addClass('active');
    $('.btn-3').removeClass('active');
});
$(".btn-3").click(function () {
    pos = -1384;
    $('.blog__item').css('top', pos+'px');
    $('.btn-1').removeClass('active');
    $('.btn-2').removeClass('active');
    $('.btn-3').addClass('active');
});

$('.menu__item').click(function () {
    $('.menu__current').removeClass('menu__current');
    $(this).addClass('menu__current');
});