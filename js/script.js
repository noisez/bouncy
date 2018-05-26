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

$('.slider').slick({
    dots: true,
    // autoplay: true,
    // autoplaySpeed: 5000,
    arrows: false,
    infinite: true,
    speed: 1000,
});

