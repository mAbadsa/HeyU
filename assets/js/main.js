$(document).ready(function(){
   var scrollTop = 0;
    $(document).scroll(function (){
        scrollTop = $(window).scrollTop();
        if(scrollTop > 0){
            $('.navbar').addClass('scrollNav');
        } else if(scrollTop <= 0) {
            $('.navbar').removeClass('scrollNav');
        }
    });
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
        overlay.style.opacity = "0.4";
        video.pause();
    }
}
$(document).ready(function(){
    if(video.play){
        $(".c-video").mouseover(function(){
            $("#play-pause").css("opacity", "1").css("transitionDuration", "0.4s");
        });
        $(".c-video").mouseout(function(){
            $("#play-pause").css("opacity", "0").css("transitionDuration", "0.4s");
        });
    }else{
        $(".c-video").mouseover(function(){
            $("#play-pause").css("opacity", "1").css("transitionDuration", "0.4s");
        });
        $(".c-video").mouseout(function(){
            $("#play-pause").css("opacity", "1").css("transitionDuration", "0.4s");
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