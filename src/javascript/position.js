// Used for positioning the "Up" button on the Q&A page

var $ = require('jquery');

//function placeOnRightHandEdgeOfElement(toolbar, pageElement) {
//    $(toolbar).css("right", $(window).scrollLeft() + $(window).width()
//    - $(pageElement).offset().left
//    - parseInt($(pageElement).css("borderLeftWidth"),10)
//    - $(pageElement).width() + "px");
//}
function placeOnRightHandEdgeOfElement(target, pageElement) {
    if ($(window).width() >= 992) {
        $(target).css("left", $(pageElement).offset().left - $(target).width() - 30 + "px");
    } else {
        $(target).css("left", $(window).width() - $(target).width() - 30 + "px");
    }
}

function checkUpButtonVisibility() {
    if ($(window).scrollTop() > $(".index").offset().top + $(".index").height() + 30) {
        $(".up-button").fadeIn(200);
    } else {
        $(".up-button").fadeOut(50);
    };
}

$(document).ready(function() {
    $(window).resize(function() {
        placeOnRightHandEdgeOfElement(".up-button", ".content");
        checkUpButtonVisibility();
        console.log($(window).width())
    });
    $(window).scroll(function () { 
        placeOnRightHandEdgeOfElement(".up-button", ".content");
        checkUpButtonVisibility();
    });
    
    $(".up-button").click(function() {
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });
//    $("#toolbar").resize();
});