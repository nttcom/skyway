$(document).ready(function() {
    $("#contact-button").click(function(){
        $("#contact-button").fadeOut(200, function() {
            $("#submit-button").fadeIn(500);
            $("#contact-form-contents").fadeIn(500);
        });
        
        $("#support-options-div").animate({
            height: '+=300px'
        }, 500);
        $(".support-box-contact-form").animate({
            height: '+=300px'
        }, 500);
        $("#support-options-div .flex-box").animate({
            top: '+=300px'
        }, 500);
    });
});