
$(window).scroll(function(){
    if ($(window).scrollTop() > 100) {
        $(".header").addClass("header-scroll");
    } else {
        $(".header").removeClass("header-scroll");
    }
})