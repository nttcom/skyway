var $ = require('jquery');

$(document).ready(function() {
//    $("#main-share-button").click(function(){
//        $(".sub-share-button").addClass('animating');
//        $(".sub-share-button").fadeToggle();
//
//        console.log('Hoi!');
//    });
    
    $("#btn-share-git").mouseenter(function(){
        $("#label-share-git").stop().animate({
            right: '76px',
            opacity: '0.8'
        }, 150);
            
    });
    
    $("#btn-share-git").mouseleave(function(){
        $("#label-share-git").stop().animate({
            right: '20px',
            opacity: '0.0'
        }, 250);
    });
    
    $("#btn-share-fb").mouseenter(function(){
        $("#label-share-fb").stop().animate({
            right: '76px',
            opacity: '0.8'
        }, 150);
            
    });
    
    $("#btn-share-fb").mouseleave(function(){
        $("#label-share-fb").stop().animate({
            right: '20px',
            opacity: '0.0'
        }, 250);
    });
    
    $("#btn-share-tw").mouseenter(function(){
        $("#label-share-tw").stop().animate({
            right: '76px',
            opacity: '0.8'
        }, 150);
            
    });
    
    $("#btn-share-tw").mouseleave(function(){
        $("#label-share-tw").stop().animate({
            right: '20px',
            opacity: '0.0'
        }, 250);
    });
    
});