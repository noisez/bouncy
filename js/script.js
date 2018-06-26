$( document ).ready(function() {
    $('.portfolio__grid').masonry({
        isFitWidth: true,
        gutter: 5,
        columnWidth: 270,
        itemSelector: '.grid-item'
    });
});

function initMap() {
    var uluru = {lat: 50.47555, lng: 30.4965609};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: uluru
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}

function portfSwitch(arg) {
    let a = arg;
    switch(a) {
        case 'all':
            $('.portfolio__photo').show();
            break;
        case 'print':
            $('.portfolio__photo').hide();
            $('.print').show();
            break;
        case 'identity':
            $('.portfolio__photo').hide();
            $('.identity').show();
            break;
        case 'branding':
            $('.portfolio__photo').hide();
            $('.branding').show();
            break;
        case 'web':
            $('.portfolio__photo').hide();
            $('.web').show();
            break;
        case 'html':
            $('.portfolio__photo').hide();
            $('.html').show();
            break;
        case 'wordpress':
            $('.portfolio__photo').hide();
            $('.wordpress').show();
            break;
    }
    $('.grid').masonry('layout');
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