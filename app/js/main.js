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
  $o.velocity({translateX:["0px", "-200px"], opacity:'1'},1000, [150,20]);
  setTimeout(function(){
    $k.css({opacity:1});
    $other.css({opacity:1});
  },400);
  // setTimeout(function(){
    setTimeout(function(){$background.velocity({translateX: ["0%","-100%"]},1350, [250,30], function(){
       $animation.css({background:"rgba(0,0,0,0)"});
       $background.velocity({bottom:"-100%"}, 800, 'easeInOutCubic');
    });},940);
  // },400);
  // setTimeout(function(){
  //
  //   //
  // },1150);
  setTimeout(function(){

    $other.velocity({"opacity":"1" , fill:"#fff"}, 700);
  },1200);
  setTimeout(function(){
    $svg.velocity({
      scale:"0.11",
      // left: "44.3%",
      top:"7.7vh",
      opacity:0.2,

    },1000, 'easeInOutCubic', function(){
        // $svg.velocity({translateY: "-297%"},1000, 'easeInOutCubic', function(){});
    });
      $svg.velocity({opacity:0}, 1200, 'easeInOutCubic');
  },1500)


}

  setTimeout(start, 1000);
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
  }
  // setTimeout(start,300);
  setTimeout(function(){
    // $(".slick-arrow").velocity({opacity:"0.5"},300);
  },1000)
});
