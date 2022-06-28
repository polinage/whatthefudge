////$(document).ready(function () {
////    $(window).scroll(function () {
////        if ($(this).scrollTop() > 20) {
////            $('#scrollup').fadeIn();
////        }
////        else {
////            $('#scrollup').fadeout();
////        }
////    });
////    $("#scrollup").click(function () {
////        $('html, body').animate({ scrollTop: 0 }, 800);
////    });
////});

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        $('#scrollup').fadeIn();
    } else {
        $('#scrollup').fadeOut();
    }
}

function topFunction() {
    $('html, body').animate({ scrollTop: 0 }, 500);
    return false;
}