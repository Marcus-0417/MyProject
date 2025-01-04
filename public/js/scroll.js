var scroll = 0;
$(window).scroll(function () {
    scroll = $(window).scrollTop();
    $('.test-text').attr("style", "top:" + scroll + "px");
})