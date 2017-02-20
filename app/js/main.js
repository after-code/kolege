$(function(){
  $(".b-hp-slider").slick({
       speed: 1500,
       fade: true,
       autoplay: true,
       pauseOnHover: false,
       pauseOnFocus: false,
       autoplaySpeed:5000,
       prevArrow:"<div class='arr-left arr slick-prev'><img class='a-left control-c prev ' src='assets/img/arrow.svg'></div>",
       nextArrow:"<div class='arr-right arr slick-next'><img class='a-right control-c next ' src='assets/img/arrow.svg'></div>",
       responsive: [
         {
           breakpoint: 1024,
           settings: {
             fade: false,
             speed: 600,
             arrows: false
           }
         }
       ]
  });

  $svg = $(".header__logo--anim");

  $o = $(".o");
  $o_back = $(".o-back");
  $o_front = $(".o-front");

  $k = $(".k");

  $other = $(".other");
  $background = $(".header__logo__background");
  $all = $(".all");

  $slider = $(".b-hp-slider");
  $animation = $(".header__animation");
function start(){
  $svg.velocity({opacity:["1", "0"], scale:["1","0.11"]}, 1000, [200, 22], function(){
    $svg.velocity({ translateY:"-470%", scale:["0.379","1"]}, 1200, "easeInOutCubic", function(){
      $animation.velocity({opacity:["0", "1"]}, 1300, "easeOut");
    });
  });
}
  if($(window).width()<1024){
    if(!$("body").hasClass('about-page')){
      $(".about").click(function(e){
        e.preventDefault();
        $(".page--mobile-about").addClass("active");
        $(".page").addClass("active");
        // $(".header__nav").toggleClass("active");
      });
    }
    if(!$("body").hasClass('contact-page')){
      $(".contact").click(function(e){
        e.preventDefault();
        $(".page--mobile-contact").addClass("active-contact");
        $(".page").addClass("active-contact");
        // $(".header__nav").toggleClass("active");
      });
    }
    $(".nav-ico").click(function(){
      $(".header__nav").toggleClass("active");
      $(".nav-ico").toggleClass("active");
    });
    $(".close-ico").click(function(){
      $(".page--mobile-about").removeClass("active");
      $(".page").removeClass("active");
    });
    $(".close-contact").click(function(){
      $(".page--mobile-contact").removeClass("active-contact");
      $(".page").removeClass("active-contact");
    });
  } else if ($("body").hasClass("page-homepage")){
      setTimeout(start, 1000);
  }
  // setTimeout(start,300);
  setTimeout(function(){
    // $(".slick-arrow").velocity({opacity:"0.5"},300);
  },1000)
});
