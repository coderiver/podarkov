$(document).ready(function() {

// init variables
    
// show/hide header nav
    $(".js-key-nav").click(function(){
        $(this).parent().toggleClass("is-active");
        $(".js-nav").fadeToggle("fast");
    });

    function resize_col() {
        var body = $("body");
        var main_col = $(".js-main-col");
        var main_col_width = $(".l-layout").outerWidth() - $(".js-sidebar").outerWidth();
        var main_col_width2 = $(".l-col-wrap").outerWidth() - $(".js-sidebar").outerWidth();
        if ($(window).width() > 768) {
            body.addClass("is-fixed");
        }
        else {
            body.removeClass("is-fixed");
        }
        if (($(window).width() <= 1024) && ($(window).width() >= 768)) {
            main_col.width(main_col_width);
        }
        else {
            main_col.removeAttr("style");
        }
    }
    resize_col();
    $(window).resize(function(event) {
        resize_col();
        baron_init();
    });

// Select list
    var select = $(".js-select");
    var select_val = $(".js-select div");
    var select_list = $(".js-select-list");
    var select_list_item = $(".js-select-list li");
    select.click(function(){
        if ($(this).hasClass("is-active")) {
            $(this).removeClass("is-active");
            $(this).parent().find(select_list).hide();
        }
        else {
            select.removeClass("is-active");
            select_list.hide();
            $(this).addClass("is-active");
            $(this).parent().find(select_list).show();
        }
    });
    select_list_item.click(function(){
        var text = $(this).html();
        select_val.html(text);
        $(this).parent().hide();
        $(this).parent().parent().find(".js-select").removeClass("is-active");
    });
// tabs
	// var tab = $(".js-tab li");
	// tab.first().addClass("is-active");
	// $(".js-tab1").show();
	// tab.click(function(){
	// 	var index = $(this).attr("data-tab");
	// 	if ($(this).hasClass("is-active")) {
	// 		return false;
	// 	}
	// 	else {
	// 		tab.removeClass("is-active");
	// 		$(this).addClass("is-active");
	// 		$(".tab-cont").hide();
	// 		$(index).show();
	// 	}
	// });

// baron scroller
    function baron_init() {
        if ($(window).width() > 768) {
            if ($(".js-baron1").length > 0) {
                window.dima = baron({
                    scroller: '.js-baron1',
                    bar: '.scroller__bar',
                    barOnCls: 'baron'
                });
            }
            if ($(".js-baron2").length > 0) {
                window.dima = baron({
                    scroller: '.js-baron2',
                    bar: '.scroller__bar',
                    barOnCls: 'baron'
                });
            }
            if ($(".js-baron3").length > 0) {
                window.dima = baron({
                    scroller: '.js-baron3',
                    bar: '.scroller__bar',
                    barOnCls: 'baron'
                });
            }
        }
        else {

        }
    }
    baron_init();
    

// temp script
    // $(".friend-list li a").click(function(){
    //     $(".friend-list li a").removeClass("is-active");
    //     $(this).addClass("is-active");
    //     $(".sidebar_detail").show();
        
    // });
    
});
