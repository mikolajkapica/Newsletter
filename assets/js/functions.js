$(document).ready(function(){
  $(".hamburger").click(function(){
    $(".secondScreen").toggleClass("open");
  });
});
$(document).ready(function(){
  $(".hamburger").click(function(){
    $(".hamburger").toggleClass("opened");
  });
});
$(document).ready(function(){
  $(".hamburger").click(function(){
    $(".menu-links").toggleClass("opentext");
  });
});
$(document).ready(function(){
  $(".hamburger").click(function(){
    $(".index").toggleClass("fix");
  });
});
$(document).ready(function(){
  $(".hamburger").click(function(){
    $(".right-side").toggleClass("opennews");
  });
});
$(document).ready(function(){
  $(".hamburger").click(function(){
    $(window).scrollTop(position);
  });
});

var position= $(window).scrollTop();

//some things here


// $(document).ready(function(){
//   $(".hamburger").click(function(){
//     $(".hamburger-menu").toggleClass("open");
//   });
// });
// $(document).ready(function(){
//   $(".hamburger").click(function(){
//     $(".body-content").toggleClass("open3");
//   });
// });
  // $(document).ready(function() {
  //     $("p").css("animation", "load .5s forwards");
  // });
  $(document).ready(function() {
      $('body').hide().fadeIn(1000);
  });

//
// var $about = $('.about');
//
// $about.waypoint(function (direction) {
//   if (direction == 'down') {
//     $about.addClass('plus');
//   }
//   else {
//     $about.removeClass('plus');
//   }
// }, { offset: '50%' });
//
// var $news = $('.newsletter');
//
// $news.waypoint(function (direction) {
//   if (direction == 'down') {
//     $news.addClass('plus');
//   }
//   else {
//     $news.removeClass('plus');
//   }
// }, { offset: '80%' });
//
// var $footer = $('.footer');
//
// $footer.waypoint(function (direction) {
//   if (direction == 'down') {
//     $footer.addClass('plus');
//   }
//   else {
//     $footer.removeClass('plus');
//   }
// }, { offset: '80%' });
