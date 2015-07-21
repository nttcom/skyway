$(document).ready(function() {
    $("#main-share-button").click(function(){
        $(".sub-share-button").addClass('animating');
        $(".sub-share-button").fadeToggle();

        console.log('Hoi!');
    });
});