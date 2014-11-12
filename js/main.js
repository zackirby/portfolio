$(document).ready(function (){

	$(".work li a").on("mouseenter", function(){
		$(this).children("div").slideToggle();
	}).on("mouseleave", function() {
		$(this).children("div").slideToggle();
	});
});
(function(){

  var parallax = document.querySelectorAll(".parallax"),
      speed = 0.5;

  window.onscroll = function(){
    [].slice.call(parallax).forEach(function(el,i){

      var windowYOffset = window.pageYOffset,
          elBackgrounPos = "50% " + (windowYOffset * speed) + "px";
      
      el.style.backgroundPosition = elBackgrounPos;

    });
  };

})();