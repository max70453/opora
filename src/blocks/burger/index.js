import './burger.sass';

export default function burgerMenu(){
    const burger = $(".burger");
    const menu = $('.header-mobile__menu');
    $(window).on('load resize',function(){
        if($(window).width() > 840 ){
            $('body').removeClass('stop-scroll');
        }
        else if(menu.hasClass('open')){
            $('body').addClass('stop-scroll');
        }
    });
    burger.on('click',function(){
        burger.toggleClass("is-active");
        menu.toggleClass('open');
        $('body').toggleClass('stop-scroll');
    } )
};
