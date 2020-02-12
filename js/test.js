// ---------- Smooth Scrolling Effect ----------
// Code from https://www.taniarascia.com/smooth-scroll-to-id-with-jquery/
$("a[href^='#']").click(function(e) {
	e.preventDefault();
	
	var position = $($(this).attr("href")).offset().top;

	$("body, html").animate({
		scrollTop: position
	}, 1000 /* speed */ );
});


// ---------- Rotate Square on Cara Hover ----------
$(document).ready(function(){

    $("#nicoleCara").hover(function(){
        $("#yellowSquare").toggleClass("active");  //Toggle the active class to the area is hovered
    });

});