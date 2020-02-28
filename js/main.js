$(document).ready(function(){
    $('.menu-item').mouseenter(function(){
        $(this).addClass('selected');
    });
    $('.menu-item').mouseleave(function(){
        $(this).removeClass('selected');
    });
    $('.menu-item').click(function(){
        if ($(this).children('div').is(':visible')){
            $(this).children('div').slideToggle(100);
            $('.menu-item').children('a').removeClass('ruota');
        } else {
            $('.menu-item').children('div').slideUp(100);
            $(this).children('div').slideToggle(100);
            $('.menu-item').children('a').removeClass('ruota');
            $(this).children('a').addClass('ruota');
        }
    });
});
