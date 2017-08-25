//Скрол страницы по якорям

$(document).ready(function(){
    $('#menu .menu a').click(function(){
        var scroll_el = $(this).attr('href');
        $('#menu .menu li').attr ("class","");
        $(this).parent().attr("class","current active");
        
        if ($(scroll_el).length != 0) {
            $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 1000);
        }
        return false;
    });
});

