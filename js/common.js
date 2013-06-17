$(document).ready(function() {

// show/hide header nav
    $(".js-key-nav").click(function(){
        $(this).parent().toggleClass("is-active");
        $(".js-nav").fadeToggle("fast");
    });

// Scrollpane
    $('.js-scrolpane').jScrollPane();

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


});