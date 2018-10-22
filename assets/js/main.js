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