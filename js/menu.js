particlesJS("particles-js", {"particles":{"number":{"value":80,"density":{"enable":true,"value_area":800}},"color":{"value":"#000000"},"shape":{"type":"star","stroke":{"width":8,"color":"rgba(0, 173, 181,1)"},"polygon":{"nb_sides":4},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":111,"color":"#161111","opacity":0.6602457764902989,"width":3.3012288824514946},"move":{"enable":true,"speed":5,"direction":"none","random":true,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"window","events":{"onhover":{"enable":false,"mode":"repulse"},"onclick":{"enable":false,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":false});var count_particles, stats, update; stats = new Stats; stats.setMode(0); stats.domElement.style.position = 'absolute'; stats.domElement.style.left = '0px'; stats.domElement.style.top = '0px'; document.body.appendChild(stats.domElement); count_particles = document.querySelector('.js-count-particles'); update = function() { stats.begin(); stats.end(); if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } requestAnimationFrame(update); }; requestAnimationFrame(update);;
var noHideChildren=true;
	$('.menu_bar').click(function(event){
		// event.preventDefault();
		$('.menu-menu').toggle();
	});

$(".subMenu").click(function(){
	$(".mas").toggleClass("masAfter");
	 $(this).children(".children").slideToggle();
});

$(".menuParte").on("click",function(){
	 if ($(this).attr("href")!= "#programacion" && $(this).attr("href") != "#herbolaria" && $(this).attr("href")!= "#blog") {
  $(".children").hide();
	 }
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
			if (noHideChildren) {
				$(".mas").removeClass("masAfter");

				$(".children").hide();
			}
			$('a[href$="'+$(this).attr("id")+'"]').addClass("menuParteSel");
		}
	});
});
$(".menuParte").on("click",function(e){
	// e.preventDefault();
	if ($(this).attr("href")=="#blog") {
		noHideChildren=false;

	}else{
		noHideChildren=true;
	}
	$(".menuParte").removeClass("menuParteSel");
	$(this).addClass("menuParteSel");
});
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
		autoplay:true,
    autoplayTimeout:3000,
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
$('.tlt').textillate({loop: true,
  in: { effect: 'tada' },
  out: { effect: 'tada' }});
$('.tltNom').textillate({loop: true,
  in: { effect: 'pulse' },
  out: { effect: 'pulse' }});
$('.tltExp').textillate({loop: true,
  in: { effect: 'pulse', sync:true},
  out: { effect: 'bounce', sequence:true}});
$('.tltForm').textillate({loop: true,
  in: { effect: 'rotateInDownLeft', sync:true},
  out: { effect: 'rotateOutUpRight', reverse:true}});
$('.tltAnd').textillate({loop: true,
  in: { effect: 'pulse', sync:true},
  out: { effect: 'pulse', sync:true}});
$('.tltSkill').textillate({loop: true,
  in: { effect: 'wobble', shuffle:true},
  out: { effect: 'wobble', shuffle:true}});
$('.tltBlog').textillate({loop: true,
  in: { effect: 'flash', sequence:true},
  out: { effect: 'flash', reverse:true}});
