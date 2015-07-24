$(document).ready(function() {
//    $("#main-share-button").click(function(){
//        $(".sub-share-button").addClass('animating');
//        $(".sub-share-button").fadeToggle();
//
//        console.log('Hoi!');
//    });
    
    $("#share-button-tw").mouseenter(function(){
        $("#twitter-share-label").stop().animate({
            right: '76px',
            opacity: '0.8'
        }, 150);
            
    });
    
    $("#share-button-tw").mouseleave(function(){
        $("#twitter-share-label").stop().animate({
            right: '20px',
            opacity: '0.0'
        }, 250);
    });
    
    $("#share-button-fb").mouseenter(function(){
        $("#facebook-share-label").stop().animate({
            right: '76px',
            opacity: '0.8'
        }, 150);
            
    });
    
    $("#share-button-fb").mouseleave(function(){
        $("#facebook-share-label").stop().animate({
            right: '20px',
            opacity: '0.0'
        }, 250);
    });
    
    $("#share-button-git").mouseenter(function(){
        $("#github-share-label").stop().animate({
            right: '76px',
            opacity: '0.8'
        }, 150);
            
    });
    
    $("#share-button-git").mouseleave(function(){
        $("#github-share-label").stop().animate({
            right: '20px',
            opacity: '0.0'
        }, 250);
    });
    
});