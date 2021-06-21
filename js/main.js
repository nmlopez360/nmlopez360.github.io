window.onscroll = function (e) {
    if(window.pageYOffset > 0) {
        document.getElementById('headerContent').style.opacity = 0;
        document.getElementById('scrollDownAni').style.opacity = 0;
        document.getElementById('headerBKG').style.height = 100 + 'px';
        document.getElementById('headerBKG').style.top = -100 + 'px';
        document.getElementById('headerBKG').style.zIndex = 98;
        $('.navLink').addClass('whiteLinkHover');
    }
    else {
        $('.navLink').removeClass('whiteLinkHover');
        document.getElementById('headerBKG').style.height = 300 + 'px';
        document.getElementById('headerBKG').style.top = 0 + 'px';
        document.getElementById('headerBKG').style.zIndex = 0;
        setTimeout(function () {
            document.getElementById('headerContent').style.opacity = 1;
            document.getElementById('scrollDownAni').style.opacity = 1;
        }, 150);
    }
}


$(document).ready(function()
{
    $("#gsoImg").hover(
        function()
        {
            $(this).attr("src", "../img/preview/gsoPreviewAni.gif");
        },
        function()
        {
            $(this).attr("src", "../img/preview/gsoPreview.jpg");
        }
    );

    $("#pochiImg").hover(
        function()
        {
            $(this).attr("src", "../img/preview/pochiBirdPreviewAni.gif");
        },
        function()
        {
            $(this).attr("src", "../img/preview/pochiBirdPreview.jpg");
        }                         
    );
    
    $("#untamedZine").hover(
        function()
        {
            $(this).attr("src", "../img/preview/untamedZinePreviewAni.gif");
        },
        function()
        {
            $(this).attr("src", "../img/preview/untamedZinePreview.jpg");
        }                         
    );

    $("#corgi").hover(
        function()
        {
            $(this).attr("src", "../img/preview/corgiPreviewAni.gif");
        },
        function()
        {
            $(this).attr("src", "../img/preview/corgiPreview.jpg");
        }                         
    );

    $("#overview").hover(
        function()
        {
            $(this).attr("src", "../img/preview/overviewPreviewAni.gif");
        },
        function()
        {
            $(this).attr("src", "../img/preview/overviewPreview.jpg");
        }                         
    );

    $("#acnh").hover(
        function()
        {
            $(this).attr("src", "../img/preview/acnhPreviewAni.gif");
        },
        function()
        {
            $(this).attr("src", "../img/preview/acnhPreview.jpg");
        }                         
    );
});