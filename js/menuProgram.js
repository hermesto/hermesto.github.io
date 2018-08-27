
	$('.menu_bar').click(function(event){
		// event.preventDefault();
		$('.menu-menu').toggle();
	});


$(window).resize(function(){
	var windowidth = $(window).width();
	if (windowidth>800) {
		$(".menu-menu").show();
	}
});
$(window).scroll(function(){
	var barra= $(window).scrollTop();
	var posicion = barra * 0.10;
	var posicion2 = barra * 2;
	var auxPositions = new Array();
	$("section").each(function(){
		var auxOff = $(this).offset();
		if (auxOff.top<=barra && (auxOff.top+$(this).height())>=barra) {
			$(".menuParte").removeClass("menuParteSel");
			$('a[href$="'+$(this).attr("id")+'"]').addClass("menuParteSel");
		}
	});
});
$(".menuParte").on("click",function(){
	$(".menuParte").removeClass("menuParteSel");
	$(this).addClass("menuParteSel");
});
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        }
    }
});
