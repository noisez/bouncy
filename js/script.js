$(document).ready(function() {
    $('.portfolio__grid').masonry({
        isFitWidth: true,
        horizontalOrder: true,
        gutter: 5,
        columnWidth: 270,
        itemSelector: '.grid-item'
    });
});

function portfSwitch(arg) {
    switch(arg) {
        case 'All Works':
            $('.portfolio__photo').show();
            $('.portfolio__menu-current').removeClass('portfolio__menu-current');
            $( "a:contains(All Works)" ).addClass('portfolio__menu-current');
            break;
        case 'Print':
            $('.portfolio__photo').hide();
            $('.print').show();
            $('.portfolio__menu-current').removeClass('portfolio__menu-current');
            $( "a:contains(Print)" ).addClass('portfolio__menu-current');
            break;
        case 'Identity':
            $('.portfolio__photo').hide();
            $('.identity').show();
            $('.portfolio__menu-current').removeClass('portfolio__menu-current');
            $( "a:contains(Identity)" ).addClass('portfolio__menu-current');
            break;
        case 'Branding':
            $('.portfolio__photo').hide();
            $('.branding').show();
            $('.portfolio__menu-current').removeClass('portfolio__menu-current');
            $( "a:contains(Branding)" ).addClass('portfolio__menu-current');
            break;
        case 'Web':
            $('.portfolio__photo').hide();
            $('.web').show();
            $('.portfolio__menu-current').removeClass('portfolio__menu-current');
            $( "a:contains(Web)" ).addClass('portfolio__menu-current');
            break;
        case 'HTML':
            $('.portfolio__photo').hide();
            $('.html').show();
            $('.portfolio__menu-current').removeClass('portfolio__menu-current');
            $( "a:contains(HTML)" ).addClass('portfolio__menu-current');
            break;
        case 'Wordpress':
            $('.portfolio__photo').hide();
            $('.wordpress').show();
            $('.portfolio__menu-current').removeClass('portfolio__menu-current');
            $( "a:contains(Wordpress)" ).addClass('portfolio__menu-current');
            break;
    }
    $('.portfolio__grid').masonry('layout');
}

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

$('.pe7-icon').click(function () {
    $('.current-icon').removeClass('current-icon');
    console.log(this);
    $(this).addClass('current-icon');

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