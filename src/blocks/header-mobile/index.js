import './header-mobile.sass';

var root = $('.mobile-menu');

var links = root.find("a");

links.on('click', function(){
    $('.header-mobile__menu').removeClass('open');
    $(".burger").removeClass('is-active');
    $('body').removeClass('stop-scroll');
})


