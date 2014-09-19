$(document).ready(function (){

	$(".main").height($(window).height());
	$(".amp h2").css("fontSize", $(window).height());

	$(".work li a").on("mouseenter", function(){
		$(this).children("span").slideToggle();
	}).on("mouseleave", function() {
		$(this).children("span").slideToggle();
	});

});