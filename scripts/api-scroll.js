/*
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

//(function(document) {
//  'use strict';
//
//  // Grab a reference to our auto-binding template
//  // and give it some initial binding values
//  // Learn more about auto-binding templates at http://goo.gl/Dx1u2g
//  var app = document.querySelector('#app');
//
//  app.displayInstalledToast = function() {
//    document.querySelector('#caching-complete').show();
//  };
//
//  // Listen for template bound event to know when bindings
//  // have resolved and content has been stamped to the page
//  app.addEventListener('dom-change', function() {
//    console.log('Our app is ready to rock!');
//  });
//
//  // See https://github.com/Polymer/polymer/issues/1381
//  window.addEventListener('WebComponentsReady', function() {
//    // imports are loaded and elements have been registered
//  });
//
//  // Close drawer after menu item is selected if drawerPanel is narrow
//  app.onMenuSelect = function() {
//    var drawerPanel = document.querySelector('#paperDrawerPanel');
//    if (drawerPanel.narrow) {
//      drawerPanel.closeDrawer();
//    }
//  };
//
//})(document);
//
//
//
//$(function() {
//  var $spy = $('.nav.nav-pills');
//  $spy.scrollspy({offset: 20});
//  $spy.bind("activate", function(e) {
//    //e.target is the current <li> element
//    var header = $(e.target).find("a").attr("href");
//    //remove yellow class from all h4's
//    $('h4').removeClass('yellow');
//    // add yellow class to the current h4
//    $(header).addClass('yellow');
//  });
//});

//$('#test-div').scrollspy();
//$('body').scrollspy({ target: '#my-nav' });

//$(function() {
//    $('#details-panel').scrollspy({ target: '#my-nav' });
//});

$(document).ready(function () {
    // Cache selectors outside callback for performance. 
//    var $window = $(window);
//    var $stickyEl = $('#my-nav');
//    var elTop = $stickyEl.offset().top;
//    
//    $window.scroll(function() {
//        $stickyEl.toggleClass('sticky', $window.scrollTop() > elTop);
//    });
    
    console.log( "Ready!" );
    
    $('div#main-section').scroll(function() {
        didScroll = true;
    });
    
//    function moveScroller() {
//        var move = function() {
//            var st = $(window).scrollTop();
//            var ot = $("#sticky-anchor").offset().top;
//            var s = $("#my-nav");
//            if(st > ot) {
//                s.css({
//                    position: "fixed",
//                    top: "0px"
//                });
//            } else {
//                if(st <= ot) {
//                    s.css({
//                        position: "relative",
//                        top: ""
//                    });
//                }
//            }
//        };
//        $('div#main-section').scroll(move);
//        move();
//    }
    
    
    var navTop = $('#my-nav').offset().top;
    
    var stickyNav = function () {
        var scrollTop = $(window).scrollTop();
        if (scrollTop > navTop) {
            $('#my-nav').addClass('sticky');
            // $('.content-nav').addClass('sticky');
        } else {
            $('#my-nav').removeClass('sticky');
            // $('.content-nav').removeClass('sticky')
        }
        console.log( "Stuff is happening!" );
    };
    
    stickyNav();
    $('div#main-section').scroll(function () {
        stickyNav();
    });
    
    
//    function sticky_relocate() {
//        var window_top = $(window).scrollTop();
//        
//        var stickyDiv = $('#my-nav');
//        if (stickyDiv.length) {
//            var div_top = stickyDiv.offset().top;
////            var div_top = $('my-div').offset().top;
//            
//            if (window_top > div_top) {
//                stickyDiv.addClass('sticky');
//            } else {
//                stickyDiv.removeClass('sticky');
//            }
//        }   
//        
//    }
//    
//    $(function() {
//        $(window).scroll(sticky_relocate());
//        sticky_relocate();
//    });

});

$(function() {
    $('#details-panel-content').scrollspy({ target: '#my-nav' });
});





