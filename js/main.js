// ---------- Toggle Menu Extras ----------
function showDiv() {
    $(".hamburger").toggleClass('is-active');
    $('#hamMenu').toggleClass('showDiv'); // toggle show div class on button click
    $('body').toggleClass('noScroll');
    /*$('#hamburgerMenuIcon').toggleClass('iconRight');*/
}

// ---------- When Menu is open, hide it when window resizes ----------
$(window).resize(function () {
    if ($(window).width() >= 576 // check for window width is greater than 576px
       && $('#hamMenu').hasClass('showDiv')
       && $('body').hasClass('noScroll'))
    {
        $('#hamMenu').removeClass('showDiv');
        $('.hamburger').removeClass('is-active');
        $('body').removeClass('noScroll');
    }
});

// ---------- Toggle Menu On Link Click ----------
$(document).ready(function() {
    $('.hamLink').click(function() {
        $('#hamMenu').removeClass('showDiv');
        $('.hamburger').removeClass('is-active');
        $('body').removeClass('noScroll');
    });
});

// ---------- Always set width and height of work overlay to that of the container ----------
$(document).ready(function() {
    var workColWidth = $('.col-lg-3').width();
    $('.workImgContainer').css({'height':workColWidth+'px'});

    $('.workOverlay').css({'width':workColWidth+'px'});
    $('.workOverlay').css({'height':workColWidth+'px'});
    $('.workOverlay').css({'marginTop':'-'+workColWidth+'px'});  
});

$(window).resize(function () {
    var workColWidth = $('.col-lg-3').width();
    $('.workImgContainer').css({'height':workColWidth+'px'});
    
    $('.workOverlay').css({'width':workColWidth+'px'});
    $('.workOverlay').css({'height':workColWidth+'px'});
    $('.workOverlay').css({'marginTop':'-'+workColWidth+'px'});
});