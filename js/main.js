$(function() {
  $(".navbar-lg-sm .search-icon").on("click" , function() {
    $(".navbar-form-small").slideToggle();
  });


  // $(".custom-card ").on("click" , function() {

  //   // $("." + this.classList + " " + ".card-svg").addClass("fa-minus");
  //   // $("." + this.classList + " " +".card-svg").toggleClass("fa-plus");


  // });


  // $(".header .overlay").css("height" , $("header video").innerHeight() );
  // $(".header").css("height" , $("header video").innerHeight());


  /*

  $(window).resize(function() {
    
  $(".header .overlay").css("height" , $("header video").innerHeight());
  $(".header").css("height" , $("header video").innerHeight() );



  })
  

*/



// (index.html)

$(".play-paus-slide").on("click" , function() {
  $(".play-paus-slide svg").addClass("fa-pause")
  $(".play-paus-slide svg").toggleClass("fa-play");

  $("#newsbar").toggleClass("slide");

});

$(".play-paus-top").on("click" , function() {
  $(".play-paus-top svg").addClass("fa-pause")
  $(".play-paus-top svg").toggleClass("fa-play");

  $(".header video").pause ;

});

// Header > Video in Index
  var video_clicked = document.getElementById('header-video-click'),
  header_video = document.getElementById('header-video');

  video_clicked.onclick = function () {
      if(header_video.paused) {
        header_video.play()
      }else {
        header_video.pause();
      }
  }

  
});



