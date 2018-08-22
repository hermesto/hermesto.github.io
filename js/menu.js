
	$('.menu_bar').click(function(){
		// alert("");
		$('.menu-menu').toggle();
	});

$(".subMenu").click(function(){
	$(".mas").toggleClass("masAfter");
	 $(this).children(".children").slideToggle();
});

$(window).resize(function(){
	var windowidth = $(window).width();
	if (windowidth>800) {
		$(".menu-menu").show();
	}
});
