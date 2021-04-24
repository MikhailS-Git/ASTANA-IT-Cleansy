let menu_is_open = false;

$(".burger-button").click(function(){
    if (!menu_is_open) {
        $(".header").addClass("header-active");
        $(".header__menu").addClass("menu-active");
        $(".burger-line-1, .burger-line-4").addClass("burger-line-hide");
        $(".burger-line-2").addClass("burger-line-2-turn");
        $(".burger-line-3").addClass("burger-line-3-turn");
        $("body").css("overflow", "hidden");
    } else {
        $(".header").removeClass("header-active");
        $(".header__menu").removeClass("menu-active");
        $(".burger-line-1, .burger-line-4").removeClass("burger-line-hide");
        $(".burger-line-2").removeClass("burger-line-2-turn");
        $(".burger-line-3").removeClass("burger-line-3-turn");
        $("body").css("overflow", "auto");
    }
    
    menu_is_open = !menu_is_open;
})