// ---------- Smooth Scrolling Effect ----------
// Code from https://www.taniarascia.com/smooth-scroll-to-id-with-jquery/
$("a[href^='#']").click(function(e) {
	e.preventDefault();
	
	var position = $($(this).attr("href")).offset().top;

	$("body, html").animate({
		scrollTop: position
	}, 1000 /* speed */ );
});


// ---------- Activate Hamburger Menu Icon ----------
// Code from https://codepen.io/mjperales/pen/jqqKex

$('.hamburger').click(function(e){
    e.preventDefault();
    $(this).toggleClass('is-active');
});


// ---------- Toggle Menu Extras ----------
function showDiv() {
    $('#hamburgerMenu').toggleClass('showDiv'); // toggle show div class on button click
    $('body').toggleClass('noScroll');
    /*$('#hamburgerMenuIcon').toggleClass('iconRight');*/
}

$(window).resize(function() {
    if($(window).width() >= 576 // check for window width is greater than 576px
       && $('#hamburgerMenu').hasClass('showDiv')
       && $('body').hasClass('noScroll'))
    {
        $('#hamburgerMenu').removeClass('showDiv');
        $('.hamburger').removeClass('is-active');
        $('body').removeClass('noScroll');
    }
});