$(document).ready(function() {

// show/hide header nav
    $(".js-key-nav").click(function(){
        $(this).parent().toggleClass("is-active");
        $(".js-nav").fadeToggle("fast");
    });



// tabs
	var tab = $(".js-tab li");
	tab.first().addClass("is-active");
	$(".js-tab1").show();
	tab.click(function(){
		var index = $(this).attr("data-tab");
		if ($(this).hasClass("is-active")) {
			return false;
		}
		else {
			tab.removeClass("is-active");
			$(this).addClass("is-active");
			$(".tab-cont").hide();
			$(index).show();
		}
	});

    window.dima = baron({
        scroller: '.scroller',
        bar: '.scroller__bar',
        barOnCls: 'baron'
    });

    function resize_col() {
        var main_col = $(".js-main-col");
        var main_col_width = $(".l-layout").outerWidth() - $(".sidebar").outerWidth();
        if ($(window).width() < 1024) {
            main_col.width(main_col_width);
        }
        else {
            main_col.width(767);
        }
    }
    resize_col();
    $(window).resize(function(event) {
        resize_col();
    });
});
