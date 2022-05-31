import './burger.sass';

export default function burgerMenu(){
    const burger = $(".burger");
    const menu = $('.header-mobile__menu');
    burger.on('click',function(){
        burger.toggleClass("is-active");
        menu.toggleClass('open');
        $('body').toggleClass('stop-scroll');
    } )
};
