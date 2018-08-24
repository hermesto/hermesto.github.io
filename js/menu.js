particlesJS("particles-js", {"particles":{"number":{"value":80,"density":{"enable":true,"value_area":800}},"color":{"value":"#000000"},"shape":{"type":"star","stroke":{"width":8,"color":"rgba(0, 173, 181,1)"},"polygon":{"nb_sides":4},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":111,"color":"#161111","opacity":0.6602457764902989,"width":3.3012288824514946},"move":{"enable":true,"speed":5,"direction":"none","random":true,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"window","events":{"onhover":{"enable":false,"mode":"repulse"},"onclick":{"enable":false,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":false});var count_particles, stats, update; stats = new Stats; stats.setMode(0); stats.domElement.style.position = 'absolute'; stats.domElement.style.left = '0px'; stats.domElement.style.top = '0px'; document.body.appendChild(stats.domElement); count_particles = document.querySelector('.js-count-particles'); update = function() { stats.begin(); stats.end(); if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } requestAnimationFrame(update); }; requestAnimationFrame(update);;
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
$(window).scroll(function(){
	// alert("");
	var barra= $(window).scrollTop();
	// alert(barra);
	// var posicion = barra * 0.30;
	var posicion = barra * 0.10;
	var posicion2 = barra * 2;
	$(".parallax-window-exp").css({'background-position': '-'+posicion+'px 0'
  });
	$(".parallax-window-cont").css({'background-position': '0 -'+posicion2+'px'});
});
