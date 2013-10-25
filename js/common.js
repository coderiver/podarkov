$(document).ready(function() {

// init variables
    var tab = $(".js-tab");
    var nav = $(".js-nav");
    var select = $(".js-select");
    var select_val = $(".js-select div");
    var select_list = $(".js-select-list");
    var select_list_item = $(".js-select-list li");
    var body = $("body");
    var main_col = $(".js-main-col");

// show/hide header nav
    $(".js-key-nav").click(function(){
        $(this).parent().toggleClass("is-active");
        nav.toggle();
    });

// resize columns
    function resize_col() {
        var main_col_width = $(".l-layout").outerWidth() - $(".js-sidebar").outerWidth();
        var main_col_width2 = $(".l-col-wrap").outerWidth() - $(".js-sidebar").outerWidth();
        if ($("body").hasClass("index")) {

        }
        else {
            if ($(window).width() > 640) {
                body.addClass("is-full-width");
            }
            else {
                body.removeClass("is-full-width");
            }
            if (($(window).width() <= 1024) && ($(window).width() >= 640)) {
                main_col.width(main_col_width);
            }
            else {
                main_col.removeAttr("style");
            }
        }
        
    }
    resize_col();

// inin functons on resize event
    $(window).resize(function(event) {
        resize_col();
        baron_init();
        if (tab.length > 0) {
            fixed_tab();
        }
        console.log($(window).width());
        //$(".item_search input").val($(window).width());
        //$(".date-title span").text($("body").width());
    });

// Select list
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

// fixed tabs 

    function fixed_tab() {
        var tab_pos = tab.position().top;
        $(window).scroll(function(){
            var scroll_pos = $(window).scrollTop();
            if (tab_pos >= scroll_pos) {
                tab.removeClass("is-fixed-tab");
            }
            else {
                tab.addClass("is-fixed-tab");
            }
            //console.log($(window).scrollTop());
        });
    }
    if (tab.length > 0) {
        fixed_tab();
    }
    

// baron scroller
    function baron_init() {
        if ($(window).width() < 640) {
            
            //console.log($(window).width());
        }
        else {
            if ($(".js-baron1").length > 0) {
                // window.dima = baron({
                //     scroller: '.js-baron1',
                //     bar: '.scroller__bar',
                //     barOnCls: 'baron'
                // });
                var scroll = baron({
                    scroller: '.js-baron1',
                    bar: '.scroller__bar',
                    barOnCls: 'baron'
                });
            }
            if ($(".js-baron2").length > 0) {
                var scroll = baron({
                    scroller: '.js-baron2',
                    bar: '.scroller__bar',
                    barOnCls: 'baron'
                });
            }
            if ($(".js-baron3").length > 0) {
                var scroll = baron({
                    scroller: '.js-baron3',
                    bar: '.scroller__bar',
                    barOnCls: 'baron'
                });
            }
            if ($(".js-baron4").length > 0) {
                var scroll = baron({
                    scroller: '.js-baron4',
                    bar: '.scroller__bar',
                    barOnCls: 'baron'
                });
            }
           
           //console.log($(window).width());
        }
    }
    baron_init();
    
});
