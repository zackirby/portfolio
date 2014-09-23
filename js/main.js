$(document).ready(function (){

	$(".work li a").on("mouseenter", function(){
		$(this).children("span").slideToggle();
	}).on("mouseleave", function() {
		$(this).children("span").slideToggle();
	});

});