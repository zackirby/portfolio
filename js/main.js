$(document).ready(function (){

	$(".work li a").on("mouseenter", function(){
		$(this).children("div").slideToggle();
	}).on("mouseleave", function() {
		$(this).children("div").slideToggle();
	});

});