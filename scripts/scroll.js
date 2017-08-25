//$(document).ready(function()

$(function(){

    $('.auch').each(function(){
        if ($(this).find('ins').text() == '') {
            $(this).remove();
            $('.clients_to').show();
        } else {
            $('.clients_to').remove();
            $(this).show();
        }
    });

$('.block img').each(function(){
    if ($(this).attr('src') == '') {
        $(this).remove();
    }
});

//    Кнопка вверх (.btn_up)

$('body').append('<button class="btn_up" />');

$('.btn_up').click(function(){
    $('body').animate({
        'scrollTop': 0
    }, 1000);
    $('html').animate({
        'scrollTop': 0
    }, 1000);
});

$(window).scroll(function(){
    if ($(window).scrollTop() > 200) {
        $('.btn_up').addClass('active');
    } else {
        $('.btn_up').removeClass('active');
    }
});

});
