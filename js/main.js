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