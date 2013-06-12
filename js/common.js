$(document).ready(function() {

// show/hide header nav
    $(".js-key-nav").click(function(){
        $(this).parent().toggleClass("is-active");
        $(".js-nav").fadeToggle("fast");
    });

});