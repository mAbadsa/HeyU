$(document).ready(function(){
   var scrollTop = 0;
    var body = $("body");
    $(document).scroll(function (){
        scrollTop = $(window).scrollTop();
        if(scrollTop > 100){
            $('.mainnavbar').addClass('scrollNav');
            body.animate({
                scrollTop:0
            }, '500');
        } else if(scrollTop <= 0) {
            $('.mainnavbar').removeClass('scrollNav');
        }
    });
     /******************************
        BOTTOM SCROLL TOP BUTTON
      ******************************/
     $(window).scroll(function() {
        // declare variable
        var topPos = $(this).scrollTop();

        // if user scrolls down - show scroll to top button
        if (topPos > 500) {
          $("#btnUp").css("opacity", "1");
            $("#btnUp").css("display", "block");

        } else {
          $("#btnUp").css("opacity", "0");
        }

    });
    $("#btnUp").click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 800);
        return false;
    })
});

var video = document.querySelector('.video');
var videoContainer = document.querySelector('.c-video');
var progressPercent = document.querySelector('.progress');
var btn = document.getElementById('play-pause');
var  overlay = document.getElementById('blackLayer');
overlay.className = 'overlay';

function togglePlayPause() {
    if (video.paused) {
        btn.className = "pause";
//        btn.style.opacity = "0";
        overlay.style.opacity = "0";
        video.play();
    } else {
        btn.className = "play";
        overlay.style.opacity = "1";
        video.pause();
    }
}
$(document).ready(function() {
    var stopVideo =
            $("#play-pause").css("opacity", "1").css("transitionDuration", "0.6s");
    if(video.play) {
        $(".c-video").mouseover(function(){
            $("#play-pause").css("opacity", "1").css("transitionDuration", "0.6s");
        });
        $(".c-video").mouseout(function(){
            $("#play-pause").css("opacity", "0").css("transitionDuration", "0.6s");
        });
    } else if (video.pause){
        $(".c-video").mouseout(function(){
            $("#play-pause").css("opacity", "1").css("transitionDuration", "0.6s");
        });
        $(".c-video").mouseover(function(){
            $("#play-pause").css("opacity", "1").css("transitionDuration", "0.6s");
        });
    }
    
});
btn.onclick = function() {
    togglePlayPause();
};

video.addEventListener('timeupdate', function(){
    var progressPos = video.currentTime / video.duration;
    progressPercent.style.width = progressPos * 100 + "%";
});
//videoContainer.addEventListener('onmouseover', function(){
//    if (video.paused) {
//        btn.style.opacity = "1";
//    } else {
//        btn.style.opacity = "1";
//    }
//});
//videoContainer.addEventListener('onmouseout', function(){
//    if (video.play) {
//        btn.style.opacity = "0";
//    } else {
//        btn.style.opacity = "1";
//    }
//});

