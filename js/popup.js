$(function () {
             var overlay = $('<div id="overlay"></div>')
             $(window).on('load', function () {
                 setTimeout(function () {
                     $('.popupp').show();
                 }, 3000);
             });

             $('.close').click(function () {
                 $('.popupp').hide();
                 overlay.appendTo(document.body).remove();
                 return false;
             });
             $('.x').click(function () {
                 $('.popupp').hide();
                 overlay.appendTo(document.body).remove();
                 return false;
             });
         });
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("w3l-header-nav").setAttribute("style", "position:fixed !important;border-bottom: 2px solid #ffbf00;");
    }
    else {
        document.getElementById("w3l-header-nav").setAttribute("style", "position:unset;border-bottom: 2px solid #ffbf00;");
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}